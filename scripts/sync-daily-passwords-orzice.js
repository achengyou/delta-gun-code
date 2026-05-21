const fs = require("fs/promises");
const path = require("path");

const ORZICE_URL = "https://orzice.com/v/index";
const mapNames = ["零号大坝", "长弓溪谷", "巴克什", "航天基地", "潮汐监狱"];
const rootDir = path.resolve(__dirname, "..");
const dailyPasswordsPath = path.join(rootDir, "data", "daily-passwords.json");

function getTodayDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const get = type => parts.find(part => part.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function getShanghaiTimestamp() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  const get = type => parts.find(part => part.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

async function loadOldDailyPasswords() {
  try {
    const text = await fs.readFile(dailyPasswordsPath, "utf8");
    const data = JSON.parse(text);
    if (Array.isArray(data)) {
      return {
        lastUpdated: "",
        date: "",
        items: data.map(item => ({
          date: String(item.updatedAt || ""),
          mapName: String(item.mapName || item.map || ""),
          password: String(item.password || ""),
          updatedAt: String(item.updatedAt || ""),
          source: String(item.source || "legacy"),
          status: String(item.status || "published")
        }))
      };
    }
    return {
      lastUpdated: String(data.lastUpdated || ""),
      date: String(data.date || ""),
      items: Array.isArray(data.items) ? data.items : []
    };
  } catch {
    return { lastUpdated: "", date: "", items: [] };
  }
}

async function saveDailyPasswords(data) {
  await fs.mkdir(path.dirname(dailyPasswordsPath), { recursive: true });
  await fs.writeFile(dailyPasswordsPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function findPasswordNearMap(text, mapName) {
  const index = text.indexOf(mapName);
  if (index < 0) return "";

  const start = index + mapName.length;
  const end = Math.min(text.length, start + 180);
  const nearby = text.slice(start, end);
  const candidates = nearby.match(/(?<!\d)\d{4}(?!\d)/g) || [];
  return candidates.find(value => /^\d{4}$/.test(value) && !/^20\d{2}$/.test(value) && !/^19\d{2}$/.test(value)) || "";
}

function extractDailyPasswordsFromText(text) {
  const today = getTodayDate();
  const updatedAt = getShanghaiTimestamp();
  const rawText = String(text || "");

  const items = mapNames.map(mapName => ({
    date: today,
    mapName,
    password: findPasswordNearMap(rawText, mapName),
    updatedAt,
    source: ORZICE_URL,
    status: "published"
  }));

  const validItems = items.filter(item => /^\d{4}$/.test(item.password));
  return {
    lastUpdated: updatedAt,
    date: today,
    source: ORZICE_URL,
    items: validItems
  };
}

async function fetchPageText() {
  const { chromium } = require("playwright");
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(ORZICE_URL, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForLoadState("domcontentloaded", { timeout: 30000 });
    return await page.locator("body").innerText({ timeout: 30000 });
  } finally {
    await browser.close();
  }
}

async function main() {
  const oldData = await loadOldDailyPasswords();

  try {
    const text = await fetchPageText();
    const data = extractDailyPasswordsFromText(text);

    if (data.items.length !== mapNames.length) {
      const parsedMaps = new Set(data.items.map(item => item.mapName));
      const missingMaps = mapNames.filter(mapName => !parsedMaps.has(mapName));
      throw new Error(`Only parsed ${data.items.length}/${mapNames.length} daily passwords from ${ORZICE_URL}. Missing: ${missingMaps.join(", ")}. Existing data was not overwritten.`);
    }

    await saveDailyPasswords(data);
    console.log(`Synced ${data.items.length}/${mapNames.length} daily passwords.`);
    console.log(`Updated data/daily-passwords.json at ${data.lastUpdated}.`);
  } catch (error) {
    console.error("Failed to sync daily passwords. Existing data was not overwritten.");
    console.error(error && error.stack ? error.stack : error);
    console.error(`Previous valid item count: ${oldData.items.filter(item => /^\d{4}$/.test(String(item.password || ""))).length}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  extractDailyPasswordsFromText,
  findPasswordNearMap,
  getTodayDate,
  loadOldDailyPasswords,
  saveDailyPasswords
};
