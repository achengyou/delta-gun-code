const seedCodes = [
  {
    id: "c001",
    weapon: "M4A1",
    category: "突击步枪",
    mode: "烽火地带",
    title: "低后坐稳定版",
    code: "M4A1-烽火-稳定-示例码-001",
    tags: ["稳定", "中距离", "新手友好"],
    author: "林天整理",
    description: "适合新手和中距离压枪，优先保证稳定性。",
    source: "腾讯文档",
    updatedAt: "2026-05-20",
    copyCount: 128,
    recommended: true,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c002",
    weapon: "M4A1",
    category: "突击步枪",
    mode: "全面战场",
    title: "全面战场均衡版",
    code: "M4A1-全面-均衡-示例码-002",
    tags: ["均衡", "跑图", "中远距离"],
    author: "刀仔整理",
    description: "兼顾机动和稳定，适合全面战场常规对枪。",
    source: "腾讯文档",
    updatedAt: "2026-05-19",
    copyCount: 91,
    recommended: false,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c003",
    weapon: "K416",
    category: "突击步枪",
    mode: "烽火地带",
    title: "近中距离猛攻版",
    code: "K416-烽火-猛攻-示例码-003",
    tags: ["猛攻", "近战", "高操控"],
    author: "林天整理",
    description: "更适合主动推进，操控手感更轻。",
    source: "腾讯文档",
    updatedAt: "2026-05-18",
    copyCount: 156,
    recommended: true,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c004",
    weapon: "AKM",
    category: "突击步枪",
    mode: "高手高操控版",
    title: "高手高操控版",
    code: "AKM-高手高操控-示例码-004",
    tags: ["高操控", "高手向", "爆发"],
    author: "刀仔整理",
    description: "适合能压枪的玩家，优先提升开镜和操控。",
    source: "腾讯文档",
    updatedAt: "2026-05-17",
    copyCount: 75,
    recommended: false,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c005",
    weapon: "Vector",
    category: "冲锋枪",
    mode: "烽火地带",
    title: "近战贴脸版",
    code: "VECTOR-烽火-近战-示例码-005",
    tags: ["近战", "腰射", "高机动"],
    author: "林天整理",
    description: "适合室内和短距离交火，主打机动和爆发。",
    source: "腾讯文档",
    updatedAt: "2026-05-20",
    copyCount: 203,
    recommended: true,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c006",
    weapon: "MP5",
    category: "冲锋枪",
    mode: "全面战场",
    title: "稳定冲锋版",
    code: "MP5-全面-稳定-示例码-006",
    tags: ["稳定", "冲锋", "新手友好"],
    author: "用户投稿",
    description: "适合喜欢冲点的玩家，手感平顺。",
    source: "用户上传",
    updatedAt: "2026-05-16",
    copyCount: 44,
    recommended: false,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c007",
    weapon: "SVD",
    category: "精准射手步枪",
    mode: "全面战场",
    title: "远点架枪版",
    code: "SVD-全面-远点-示例码-007",
    tags: ["远距离", "架点", "精准"],
    author: "刀仔整理",
    description: "适合远距离架枪和点射，牺牲部分机动。",
    source: "腾讯文档",
    updatedAt: "2026-05-15",
    copyCount: 64,
    recommended: false,
    status: "approved",
    invalidCount: 0
  },
  {
    id: "c008",
    weapon: "G18",
    category: "手枪",
    mode: "烽火地带",
    title: "副武器应急版",
    code: "G18-烽火-应急-示例码-008",
    tags: ["副武器", "近战", "应急"],
    author: "用户投稿",
    description: "副武器应急用，适合主武器换弹时补伤害。",
    source: "用户上传",
    updatedAt: "2026-05-14",
    copyCount: 32,
    recommended: false,
    status: "approved",
    invalidCount: 0
  }
];

const categoryIcons = {
  "全部": "⊕",
  "突击步枪": "▲",
  "冲锋枪": "▣",
  "狙击枪": "✦",
  "精准射手步枪": "◈",
  "轻机枪": "▥",
  "霰弹枪": "◎",
  "手枪": "⌁"
};

const categories = ["全部", "突击步枪", "冲锋枪", "狙击枪", "精准射手步枪", "轻机枪", "霰弹枪", "手枪"];
const modes = ["全部模式", "烽火地带", "全面战场", "高手高操控版"];
const standardCategories = categories.slice(1);
const weaponCategoryMap = {
  "SVD": "精准射手步枪",
  "SR-25": "精准射手步枪",
  "SKS": "精准射手步枪",
  "PSG-1": "精准射手步枪",
  "Mini-14": "精准射手步枪",
  "M14": "精准射手步枪",
  "VSS": "精准射手步枪",
  "Marlin杠杆步枪": "精准射手步枪",
  "复合弓": "精准射手步枪"
};
const demoCodeKeywords = ["示例码", "示例", "demo", "测试码"];
const SHOW_ADMIN = false;
const ADMIN_PASSWORD = "CHANGE_ME_BEFORE_LOCAL_DEBUG";
const DAILY_PASSWORD_REMOTE_URL = "https://raw.githubusercontent.com/achengyou/delta-gun-code/main/data/daily-passwords.json";
const DAILY_PASSWORD_LOCAL_URL = "./data/daily-passwords.json";
const fallbackDailyPasswords = [];

let state = {
  category: "全部",
  mode: "全部模式",
  query: "",
  selectedWeapon: "",
  sort: "recommend",
  dailyPasswords: [],
  dailyPasswordMeta: {},
  dailyPasswordLoadError: false
};

async function loadPublicCodes() {
  try {
    const response = await fetch("./data/gun-codes.json", { cache: "no-store" });
    if (!response.ok) throw new Error("fetch failed");
    const data = await response.json();
    return Array.isArray(data) && data.length ? data : null;
  } catch {
    return null;
  }
}

async function loadDailyPasswords() {
  try {
    const data = await fetchDailyPasswordJson(DAILY_PASSWORD_REMOTE_URL)
      .catch(() => fetchDailyPasswordJson(DAILY_PASSWORD_LOCAL_URL));
    const sourceList = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
    const normalized = sourceList
      .map(item => normalizeDailyPasswordItem(item))
      .filter(item => item.mapName && item.password && item.status !== "hidden");
    return {
      items: normalized.length ? normalized : fallbackDailyPasswords,
      meta: {
        date: cleanText(data?.date || normalized[0]?.date),
        lastUpdated: cleanText(data?.lastUpdated || normalized[0]?.updatedAt),
        source: cleanText(data?.source || normalized[0]?.source)
      },
      error: false
    };
  } catch {
    return {
      items: fallbackDailyPasswords,
      meta: {},
      error: true
    };
  }
}

async function fetchDailyPasswordJson(url) {
  const separator = url.includes("?") ? "&" : "?";
  const response = await fetch(`${url}${separator}t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.json();
}

async function getInitialCodes() {
  const saved = localStorage.getItem("delta_codes");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const normalized = normalizeCodeList(parsed).filter(item => !isDemoCode(item));
      if (Array.isArray(parsed) && parsed.length && normalized.length !== parsed.length) {
        localStorage.setItem("delta_codes", JSON.stringify(normalized));
      }
      if (normalized.length) return normalized;
      localStorage.removeItem("delta_codes");
    } catch {
      localStorage.removeItem("delta_codes");
    }
  }

  const publicCodes = await loadPublicCodes();
  if (publicCodes) {
    const normalized = normalizeCodeList(publicCodes).filter(item => !isDemoCode(item));
    localStorage.setItem("delta_codes", JSON.stringify(normalized));
    return normalized;
  }

  const normalizedSeed = normalizeCodeList(seedCodes);
  return normalizedSeed;
}

function getCodes() {
  if (!Array.isArray(window.codes)) window.codes = normalizeCodeList(seedCodes);
  return window.codes;
}

function setCodes(codes) {
  window.codes = normalizeCodeList(codes).filter(item => !isDemoCode(item));
  localStorage.setItem("delta_codes", JSON.stringify(window.codes));
}

function cleanupPublicCodeData() {
  const saved = localStorage.getItem("delta_codes");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    const cleaned = normalizeCodeList(parsed).filter(item => !isDemoCode(item));
    if (!cleaned.length || !cleaned.some(item => item.code)) {
      localStorage.removeItem("delta_codes");
      window.codes = [];
      return;
    }
    localStorage.setItem("delta_codes", JSON.stringify(cleaned));
    window.codes = cleaned;
  } catch {
    localStorage.removeItem("delta_codes");
  }
}

function cleanupDemoCodes() {
  const saved = localStorage.getItem("delta_codes");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return;
    const cleaned = normalizeCodeList(parsed).filter(item => !isDemoCode(item));
    if (cleaned.length !== parsed.length) {
      localStorage.setItem("delta_codes", JSON.stringify(cleaned));
    }
  } catch {
    localStorage.removeItem("delta_codes");
  }
}

function getPending() {
  return JSON.parse(localStorage.getItem("delta_pending") || "[]");
}

function setPending(list) {
  localStorage.setItem("delta_pending", JSON.stringify(list));
}

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function getTodayCount(codes) {
  const today = new Date().toISOString().slice(0, 10);
  return codes.filter(item => cleanText(item.updatedAt).slice(0, 10) === today).length;
}

function cleanText(value, fallback = "") {
  return String(value ?? fallback).replace(/\uFEFF/g, "").trim();
}

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

function escapeHtml(value) {
  return cleanText(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toBool(value, defaultValue = false) {
  const text = normalize(value);
  if (!text) return defaultValue;
  return ["true", "1", "yes", "y", "是", "推荐", "已实测", "展示"].includes(text);
}

function splitTags(text) {
  const tags = Array.isArray(text)
    ? text.map(item => cleanPublicText(item))
    : cleanText(text).split(/[,，、;；|/]/).map(item => cleanPublicText(item));
  return tags.filter(tag => tag && !hasPublicSourceText(tag));
}

function normalizeDailyPasswordItem(item) {
  const date = cleanText(item?.date || item?.updatedAt);
  const mapName = cleanText(item?.mapName || item?.map);
  return {
    date,
    map: mapName,
    mapName,
    password: cleanText(item?.password),
    updatedAt: cleanText(item?.updatedAt),
    source: cleanText(item?.source),
    status: cleanText(item?.status || "published")
  };
}

function getDailyPasswordStatus(item) {
  const date = cleanText(item.date || item.updatedAt);
  if (!date) return "待更新";
  return date === getTodayDate() ? "今日已更新" : "最近收录";
}

function normalizeWeaponName(weapon) {
  return cleanText(weapon).replace(/\s+/g, "").toLowerCase();
}

function normalizeCategory(category, weapon) {
  const normalizedWeapon = normalizeWeaponName(weapon);
  const weaponMatch = Object.entries(weaponCategoryMap).find(([name]) => normalizeWeaponName(name) === normalizedWeapon);
  if (weaponMatch) return weaponMatch[1];

  const text = cleanText(category);
  const aliasMap = {
    "精确射手步枪": "精准射手步枪",
    "射手步枪": "精准射手步枪",
    "狙击步枪": "狙击枪",
    "狙击": "狙击枪"
  };

  const mapped = aliasMap[text] || text;
  return standardCategories.includes(mapped) ? mapped : (mapped || "未分类");
}

function isDemoCode(item) {
  const text = [
    item?.title,
    item?.code,
    item?.description,
    item?.source,
    item?.sourceUrl
  ].map(value => cleanText(value).toLowerCase()).join(" ");

  return demoCodeKeywords.some(keyword => text.includes(keyword.toLowerCase()));
}

function cleanDescription(text) {
  return cleanPublicText(text);
}

function cleanPublicText(text) {
  if (!text) return "";
  return String(text)
    .replace(/来源文件[:：].*?(；|;|$)/g, "")
    .replace(/原始行[:：]\s*\d+/g, "")
    .replace(/来源作者[:：].*?(；|;|$)/g, "")
    .replace(/作者[:：].*?(；|;|$)/g, "")
    .replace(/sourceAuthor[:：].*?(；|;|$)/gi, "")
    .replace(/sourceUrl[:：].*?(；|;|$)/gi, "")
    .replace(/https?:\/\/[^\s，。；;]+/g, "")
    .replace(/docs\.qq\.com[^\s，。；;]*/gi, "")
    .replace(/[^，。；;\s]*\.csv/gi, "")
    .replace(/上传来源[:：].*?(；|;|$)/g, "")
    .replace(/文件来源[:：].*?(；|;|$)/g, "")
    .replace(/林天/g, "")
    .replace(/刀仔/g, "")
    .trim();
}

function hasPublicSourceText(text) {
  return /作者|来源作者|sourceAuthor|sourceUrl|来源文件|原始行|rawLine|originalRow|\.csv|docs\.qq\.com|腾讯文档|林天|刀仔|上传来源|文件来源/i.test(cleanText(text));
}

function cleanupSourceDescription() {
  const codes = getCodes();
  let changed = false;

  codes.forEach(item => {
    const cleaned = cleanDescription(item.description);
    const cleanedTitle = cleanPublicText(item.title);
    const cleanedTags = splitTags(item.tags);
    if (item.description !== cleaned) {
      item.description = cleaned;
      changed = true;
    }
    if (cleanedTitle && item.title !== cleanedTitle) {
      item.title = cleanedTitle;
      changed = true;
    }
    if (JSON.stringify(item.tags || []) !== JSON.stringify(cleanedTags)) {
      item.tags = cleanedTags;
      changed = true;
    }
  });

  if (changed) setCodes(codes);
}

function normalizeCodeItem(item, index = 0) {
  const sourceAuthor = cleanText(item.sourceAuthor || item.author);
  const sourceUrl = cleanText(item.sourceUrl || item.source);
  const weapon = cleanText(item.weapon);
  const category = normalizeCategory(item.category, weapon);
  const mode = cleanText(item.mode, "未标注模式") || "未标注模式";
  const title = cleanPublicText(item.title) || (weapon ? `${weapon} 改枪方案` : "未命名方案");
  const code = cleanText(item.code);

  return {
    id: cleanText(item.id) || `code-${Date.now()}-${index}`,
    weapon,
    category,
    mode,
    title,
    code,
    tags: splitTags(item.tags),
    sourceAuthor,
    sourceUrl,
    author: sourceAuthor,
    source: sourceUrl,
    updatedAt: cleanText(item.updatedAt) || new Date().toISOString().slice(0, 10),
    recommended: toBool(item.recommended),
    status: cleanText(item.status) || "approved",
    display: item.display === false ? false : !["false", "0", "no", "否", "隐藏"].includes(normalize(item.display)),
    copyCount: Number(item.copyCount) || 0,
    originalIndex: Number.isFinite(Number(item.originalIndex)) ? Number(item.originalIndex) : index,
    invalidCount: Number(item.invalidCount) || 0,
    budget: cleanText(item.budget),
    playstyle: cleanText(item.playstyle),
    verified: toBool(item.verified),
    season: cleanText(item.season),
    description: cleanDescription(item.description)
  };
}

function normalizeCodeList(list) {
  return (Array.isArray(list) ? list : [])
    .map((item, index) => normalizeCodeItem(item || {}, index))
    .filter(item => item.weapon && item.code);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderFilters() {
  const catWrap = document.getElementById("categoryFilters");
  const modeWrap = document.getElementById("modeFilters");
  const approved = getApprovedCodes();
  const dynamicCategories = ["全部", ...new Set([...categories.slice(1), ...approved.map(item => item.category)].filter(Boolean))];
  const dynamicModes = ["全部模式", ...new Set([...modes.slice(1), ...approved.map(item => item.mode)].filter(Boolean))];

  if (!dynamicCategories.includes(state.category)) state.category = "全部";
  if (!dynamicModes.includes(state.mode)) state.mode = "全部模式";

  catWrap.innerHTML = dynamicCategories.map(cat => `<button class="chip ${state.category === cat ? "active" : ""}" data-category="${escapeHtml(cat)}"><span>${categoryIcons[cat] || "•"}</span> ${escapeHtml(cat)}</button>`).join("");
  modeWrap.innerHTML = dynamicModes.map(mode => `<button class="chip ${state.mode === mode ? "active" : ""}" data-mode="${escapeHtml(mode)}">${escapeHtml(mode)}</button>`).join("");

  catWrap.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      state.selectedWeapon = "";
      renderAll();
    });
  });

  modeWrap.querySelectorAll("[data-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.mode = btn.dataset.mode;
      renderAll();
    });
  });
}

function getApprovedCodes() {
  return getCodes().map((item, index) => normalizeCodeItem(item, index)).filter(item => {
    const status = cleanText(item.status);
    const approved = !status || status === "approved";
    return approved && item.display !== false && cleanText(item.weapon) && cleanText(item.code) && !isDemoCode(item);
  });
}

function getWeapons() {
  const map = new Map();
  getApprovedCodes().forEach(item => {
    const weapon = cleanText(item.weapon);
    if (!weapon) return;
    if (!map.has(weapon)) {
      map.set(weapon, { name: weapon, category: cleanText(item.category, "未分类"), count: 0, modes: new Set() });
    }
    map.get(weapon).count += 1;
    map.get(weapon).modes.add(cleanText(item.mode, "未标注模式"));
  });
  return Array.from(map.values()).map(item => ({ ...item, modes: Array.from(item.modes) }));
}

function normalize(text) {
  return cleanText(text).toLowerCase();
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (char === ',' && !quoted) {
      cells.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current.trim());
  return cells.map(cell => cell.replace(/^"|"$/g, ""));
}

function csvToCodeItem(row, index) {
  const [
    weapon,
    category,
    mode,
    title,
    code,
    tags,
    sourceAuthor,
    sourceUrl,
    updatedAt,
    recommended,
    display,
    budget,
    playstyle,
    verified,
    season,
    description
  ] = row;

  return normalizeCodeItem({
    id: `csv-${Date.now()}-${index}`,
    weapon,
    category,
    mode,
    title,
    code,
    tags,
    sourceAuthor,
    sourceUrl,
    updatedAt,
    recommended,
    display,
    copyCount: 0,
    invalidCount: 0,
    budget,
    playstyle,
    verified,
    season,
    description,
    status: "approved"
  }, index);
}

function parseCsvText(text) {
  const lines = String(text || "").replace(/^\uFEFF/, "").split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  if (!lines.length) return [];

  const header = parseCsvLine(lines[0]).map(item => item.trim());
  const fieldMap = {
    "枪械名称": "weapon",
    "枪械分类": "category",
    "适用模式": "mode",
    "方案标题": "title",
    "改枪码": "code",
    "特点标签": "tags",
    "来源作者": "sourceAuthor",
    "来源链接": "sourceUrl",
    "更新时间": "updatedAt",
    "是否推荐": "recommended",
    "是否展示": "display",
    "适用预算": "budget",
    "适用打法": "playstyle",
    "是否已实测": "verified",
    "适用赛季": "season",
    "备注说明": "description"
  };
  const hasHeader = header.some(item => fieldMap[item]);
  const dataLines = hasHeader ? lines.slice(1) : lines;

  return dataLines.map((line, idx) => {
    const cells = parseCsvLine(line);
    if (!cells.length || cells.every(cell => !cell)) return null;

    if (!hasHeader) return csvToCodeItem(cells, idx);

    const item = {
      id: `csv-${Date.now()}-${idx}`,
      status: "approved",
      copyCount: 0,
      invalidCount: 0
    };
    header.forEach((name, cellIndex) => {
      const key = fieldMap[cleanText(name)];
      if (key) item[key] = cells[cellIndex];
    });
    return normalizeCodeItem(item, idx);
  }).filter(item => item && item.weapon && item.code && item.display !== false);
}

function getFilteredCodes() {
  let codes = [...getApprovedCodes()];

  if (state.category !== "全部") {
    codes = codes.filter(item => normalize(item.category) === normalize(state.category));
  }
  if (state.mode !== "全部模式") {
    codes = codes.filter(item => normalize(item.mode) === normalize(state.mode));
  }
  if (state.selectedWeapon) {
    codes = codes.filter(item => normalize(item.weapon) === normalize(state.selectedWeapon));
  }
  if (state.query) {
    const q = normalize(state.query);
    codes = codes.filter(item => {
      const fullText = [
        item.weapon,
        item.category,
        item.mode,
        item.title,
        item.code,
        item.tags?.join(" "),
        item.description
      ].join(" ");
      return normalize(fullText).includes(q);
    });
  }

  if (state.sort === "latest") {
    codes.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)) || getStableOrder(a) - getStableOrder(b));
  } else if (state.sort === "copy") {
    codes.sort((a, b) => (Number(b.copyCount) || 0) - (Number(a.copyCount) || 0) || getStableOrder(a) - getStableOrder(b));
  } else {
    codes.sort((a, b) => Number(b.recommended) - Number(a.recommended) || getStableOrder(a) - getStableOrder(b));
  }

  return codes;
}

function getStableOrder(item) {
  const originalIndex = Number(item.originalIndex);
  return Number.isFinite(originalIndex) ? originalIndex : Number.MAX_SAFE_INTEGER;
}

function getInvalidFeedbackCodes() {
  return [...getApprovedCodes()]
    .filter(item => (Number(item.invalidCount) || 0) > 0)
    .sort((a, b) => (Number(b.invalidCount) || 0) - (Number(a.invalidCount) || 0));
}

function getHotCodes(limit = 5) {
  return [...getApprovedCodes()]
    .filter(item => cleanText(item.code))
    .sort((a, b) => (Number(b.copyCount) || 0) - (Number(a.copyCount) || 0))
    .slice(0, limit);
}

function renderStats() {
  const codes = getApprovedCodes();
  const weaponCount = new Set(codes.map(item => cleanText(item.weapon)).filter(Boolean)).size;
  const todayCount = getTodayCount(codes);
  const pendingCount = getPending().length;
  setText("weaponCount", weaponCount);
  setText("codeCount", codes.length);
  setText("pendingCount", pendingCount);
  setText("hudWeaponCount", weaponCount);
  setText("hudCodeCount", codes.length);
  setText("hudTodayCount", todayCount);
  setText("hudPendingCount", pendingCount);
}

function renderWeapons() {
  const grid = document.getElementById("weaponGrid");
  let weapons = getWeapons();

  if (state.category !== "全部") {
    weapons = weapons.filter(w => normalize(w.category) === normalize(state.category));
  }
  if (state.mode !== "全部模式") {
    weapons = weapons.filter(w => w.modes.some(mode => normalize(mode) === normalize(state.mode)));
  }
  if (state.query) {
    const q = normalize(state.query);
    weapons = weapons.filter(w => normalize([w.name, w.category, w.modes.join(" ")].join(" ")).includes(q));
  }

  grid.innerHTML = weapons.map(w => {
    const hotMode = w.modes[0] || "-";
    return `
      <button class="weapon-card ${normalize(state.selectedWeapon) === normalize(w.name) ? "active" : ""}" data-weapon="${escapeHtml(w.name)}">
        <div class="weapon-name">${escapeHtml(w.name)}</div>
        <div class="weapon-meta">${escapeHtml(w.category)}</div>
        <div class="weapon-meta">${w.count} 个方案</div>
        <div class="weapon-meta">热门：${escapeHtml(hotMode)}</div>
      </button>
    `;
  }).join("");

  grid.querySelectorAll("[data-weapon]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedWeapon = state.selectedWeapon === btn.dataset.weapon ? "" : btn.dataset.weapon;
      renderAll();
      document.querySelector(".codes-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderDailyPasswords() {
  const grid = document.getElementById("dailyPasswordGrid");
  if (!grid) return;

  const list = Array.isArray(state.dailyPasswords) ? state.dailyPasswords : [];
  const meta = state.dailyPasswordMeta || {};
  const dataDate = cleanText(meta.date || list[0]?.date || list[0]?.updatedAt);
  const lastUpdated = cleanText(meta.lastUpdated || list[0]?.updatedAt);

  if (state.dailyPasswordLoadError) {
    grid.innerHTML = `<div class="empty daily-empty" style="display:block;padding:28px 0">地图密码暂时加载失败，请稍后刷新</div>`;
    return;
  }

  if (!list.length) {
    grid.innerHTML = `<div class="empty daily-empty" style="display:block;padding:28px 0">今日地图密码暂未更新，当前显示最近一次收录结果</div>`;
    return;
  }

  const staleNotice = dataDate && dataDate !== getTodayDate()
    ? `<div class="empty daily-empty" style="display:block;padding:12px 0">今日地图密码暂未更新，当前显示最近一次收录结果。数据日期：${escapeHtml(dataDate)}</div>`
    : "";
  const updateNotice = lastUpdated
    ? `<div class="daily-meta" style="margin-bottom:12px"><span>更新时间：${escapeHtml(lastUpdated)}</span></div>`
    : "";

  grid.innerHTML = list.map(item => {
    const status = getDailyPasswordStatus(item);
    const isFresh = status === "今日已更新";
    const isPending = status === "待更新";
    return `
      <article class="daily-password-card">
        <div class="daily-map">${escapeHtml(item.map || "未知地图")}</div>
        <div class="daily-password">${escapeHtml(item.password || "----")}</div>
        <div class="daily-meta">
          <span>更新：${escapeHtml(item.updatedAt || "-")}</span>
          <span class="daily-status ${isFresh ? "fresh" : ""} ${isPending ? "pending" : "stale"}">${status}</span>
        </div>
        <button type="button" class="copy-btn daily-copy-btn" data-password="${escapeHtml(item.password)}" ${item.password ? "" : "disabled"}>复制密码</button>
      </article>
    `;
  }).join("");
  grid.innerHTML = `${staleNotice}${updateNotice}${grid.innerHTML}`;

  grid.querySelectorAll("[data-password]").forEach(btn => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const password = btn.dataset.password;
      if (!password) return;
      copyText(password, "已复制密码");
    });
  });
}

function renderHotCodes() {
  const wrap = document.getElementById("hotCodeList");
  if (!wrap) return;

  const hotCodes = getHotCodes(5);
  if (!hotCodes.length) {
    wrap.innerHTML = `<div class="empty hot-empty" style="display:block;padding:28px 0">暂无热门改枪码，导入数据后自动生成。</div>`;
    return;
  }

  wrap.innerHTML = hotCodes.map((item, index) => `
    <div class="hot-code-item ${index < 3 ? "top-rank" : ""}">
      <div class="hot-rank">#${index + 1}</div>
      <div class="hot-info">
        <strong>${escapeHtml(item.weapon)}</strong>
        <span>${escapeHtml(item.title)} · ${escapeHtml(item.mode)}</span>
      </div>
      <div class="hot-count">已复制 ${Number(item.copyCount) || 0} 次</div>
      <button type="button" class="copy-btn hot-copy-btn" data-copy-id="${escapeHtml(item.id)}">复制改枪码</button>
    </div>
  `).join("");

  wrap.querySelectorAll("[data-copy-id]").forEach(btn => {
    btn.addEventListener("click", (event) => copyCodeById(btn.dataset.copyId, event));
  });
}

function renderCodes() {
  const grid = document.getElementById("codeGrid");
  const empty = document.getElementById("emptyState");
  const resultText = document.getElementById("resultText");
  const codes = getFilteredCodes();

  resultText.textContent = `共找到 ${codes.length} 个方案${state.selectedWeapon ? " · 当前枪械：" + state.selectedWeapon : ""}`;

  if (!codes.length) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  grid.innerHTML = codes.map(item => `
    <article class="code-card ${item.recommended ? "recommend" : ""}" data-code-id="${escapeHtml(item.id)}">
      <div class="code-head">
        <div>
          <div class="code-weapon">${escapeHtml(item.weapon)}</div>
          <div class="code-title">${escapeHtml(item.title)}</div>
        </div>
        <div class="mode-pill">${escapeHtml(item.mode)}</div>
      </div>
      <p class="desc">${escapeHtml(cleanDescription(item.description) || "暂无说明")}</p>
      <div class="tags">
        ${(item.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        ${(Number(item.invalidCount) || 0) >= 3 ? `<span class="tag pending-check-tag">待核验</span>` : ""}
      </div>
      <div class="code-box">${escapeHtml(item.code)}</div>
      <div class="code-actions">
        <button type="button" class="copy-btn" data-copy-id="${escapeHtml(item.id)}">复制改枪码</button>
        <button type="button" class="feedback-btn" data-invalid-id="${escapeHtml(item.id)}">反馈失效</button>
      </div>
      <div class="card-meta">
        <span>更新：${escapeHtml(item.updatedAt || "-")}</span>
        <span class="copy-count" data-copy-count-id="${escapeHtml(item.id)}">已复制 ${Number(item.copyCount) || 0} 次</span>
        <span>失效反馈 ${Number(item.invalidCount) || 0} 次</span>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-copy-id]").forEach(btn => {
    btn.addEventListener("click", (event) => copyCodeById(btn.dataset.copyId, event));
  });

  grid.querySelectorAll("[data-invalid-id]").forEach(btn => {
    btn.addEventListener("click", (event) => reportInvalidCode(btn.dataset.invalidId, event));
  });
}

async function copyCodeById(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const codes = getCodes();
  const item = codes.find(code => String(code.id) === String(id));
  if (!item) return;

  await copyText(item.code, "已复制改枪码");

  item.copyCount = Number(item.copyCount || 0) + 1;
  saveCodes(codes);

  updateCopyCountText(id);
  renderHotCodes();
}

function saveCodes(codes) {
  setCodes(codes);
}

function updateCopyCountText(id) {
  const item = getCodes().find(code => String(code.id) === String(id));
  const countEl = document.querySelector(`[data-copy-count-id="${escapeCssAttribute(id)}"]`);
  if (item && countEl) {
    countEl.textContent = `已复制 ${item.copyCount || 0} 次`;
  }
}

function escapeCssAttribute(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const tmp = document.createElement("textarea");
    tmp.value = text;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    tmp.remove();
  }

  showToast(message);
}

function reportInvalidCode(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const codes = getCodes();
  const item = codes.find(x => x.id === id);
  if (!item) return;

  item.invalidCount = (Number(item.invalidCount) || 0) + 1;
  setCodes(codes);
  showToast("已收到反馈，我们会尽快核对");
  renderAll();
  renderInvalidFeedbackList();
}

function renderPendingList() {
  const list = getPending();
  const wrap = document.getElementById("pendingList");

  if (!list.length) {
    wrap.innerHTML = `<div class="empty" style="display:block;padding:28px 0">暂无待审核内容</div>`;
    return;
  }

  wrap.innerHTML = list.map(item => `
    <div class="pending-item">
      <div class="pending-title">${item.weapon} · ${item.title}</div>
      <div class="weapon-meta">${item.category} / ${item.mode} / 上传人：${item.author || "匿名"}</div>
      <div class="code-box">${item.code}</div>
      <p class="desc">${item.description || "暂无备注"}</p>
      <div class="pending-actions">
        <button class="primary-btn" data-approve="${item.id}">通过</button>
        <button class="small-btn danger" data-reject="${item.id}">拒绝</button>
      </div>
    </div>
  `).join("");

  wrap.querySelectorAll("[data-approve]").forEach(btn => {
    btn.addEventListener("click", () => approveItem(btn.dataset.approve));
  });
  wrap.querySelectorAll("[data-reject]").forEach(btn => {
    btn.addEventListener("click", () => rejectItem(btn.dataset.reject));
  });
}

function renderInvalidFeedbackList() {
  const wrap = document.getElementById("invalidFeedbackList");
  if (!wrap) return;

  const list = getInvalidFeedbackCodes();
  if (!list.length) {
    wrap.innerHTML = `<div class="empty" style="display:block;padding:28px 0">暂无失效反馈</div>`;
    return;
  }

  wrap.innerHTML = list.map(item => `
    <div class="pending-item invalid-feedback-item">
      <div class="pending-title">${escapeHtml(item.weapon)} · ${escapeHtml(item.title)}</div>
      <div class="weapon-meta">失效反馈 ${Number(item.invalidCount) || 0} 次 / 更新：${escapeHtml(item.updatedAt || "-")}</div>
      <div class="code-box">${escapeHtml(item.code)}</div>
      <div class="pending-actions">
        <button class="small-btn" data-clear-invalid="${escapeHtml(item.id)}">清零反馈</button>
        <button class="small-btn danger" data-delete-code="${escapeHtml(item.id)}">删除该改枪码</button>
      </div>
    </div>
  `).join("");

  wrap.querySelectorAll("[data-clear-invalid]").forEach(btn => {
    btn.addEventListener("click", () => clearInvalidFeedback(btn.dataset.clearInvalid));
  });
  wrap.querySelectorAll("[data-delete-code]").forEach(btn => {
    btn.addEventListener("click", () => deleteCodeItem(btn.dataset.deleteCode));
  });
}

function clearInvalidFeedback(id) {
  const codes = getCodes();
  const item = codes.find(x => x.id === id);
  if (!item) return;

  item.invalidCount = 0;
  setCodes(codes);
  showToast("已清零失效反馈");
  renderAll();
  renderInvalidFeedbackList();
}

function deleteCodeItem(id) {
  if (!confirm("确定删除这条改枪码吗？")) return;

  const codes = getCodes();
  setCodes(codes.filter(item => item.id !== id));
  showToast("已删除该改枪码");
  renderAll();
  renderInvalidFeedbackList();
}

function approveItem(id) {
  const pending = getPending();
  const item = pending.find(x => x.id === id);
  if (!item) return;

  const codes = getCodes();
  codes.unshift({
    ...item,
    status: "approved",
    source: "用户上传",
    copyCount: 0,
    invalidCount: 0,
    recommended: false,
    updatedAt: new Date().toISOString().slice(0, 10)
  });
  setCodes(codes);
  setPending(pending.filter(x => x.id !== id));
  showToast("已通过审核");
  renderAll();
  renderPendingList();
}

function rejectItem(id) {
  setPending(getPending().filter(x => x.id !== id));
  showToast("已拒绝该提交");
  renderAll();
  renderPendingList();
}

function renderAll(withFilters = true) {
  if (withFilters) renderFilters();
  renderStats();
  renderDailyPasswords();
  renderWeapons();
  renderHotCodes();
  renderCodes();
  renderInvalidFeedbackList();
}

function openModal(id) {
  if (id === "adminModal" && !SHOW_ADMIN) return;
  document.getElementById(id).classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}

function setupEvents() {
  const adminButton = document.getElementById("openAdminBtn");
  if (adminButton) adminButton.style.display = SHOW_ADMIN ? "" : "none";

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderCodes();
  });

  document.getElementById("clearSearchBtn").addEventListener("click", () => {
    state.query = "";
    state.selectedWeapon = "";
    document.getElementById("searchInput").value = "";
    renderAll();
  });

  document.getElementById("showAllWeaponsBtn").addEventListener("click", () => {
    state.selectedWeapon = "";
    state.category = "全部";
    state.mode = "全部模式";
    renderAll();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderCodes();
  });

  document.getElementById("openSubmitBtn").addEventListener("click", () => openModal("submitModal"));
  document.getElementById("emptySubmitBtn").addEventListener("click", () => openModal("submitModal"));
  document.getElementById("openAdminBtn").addEventListener("click", () => {
    if (!SHOW_ADMIN) return;
    openModal("adminModal");
    renderPendingList();
    renderInvalidFeedbackList();
  });

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  });

  document.getElementById("submitForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const item = {
      id: "p" + Date.now(),
      weapon: String(form.get("weapon")).trim(),
      category: String(form.get("category")).trim(),
      mode: String(form.get("mode")).trim(),
      title: String(form.get("title")).trim(),
      code: String(form.get("code")).trim(),
      tags: String(form.get("tags") || "").split(/[,，]/).map(x => x.trim()).filter(Boolean),
      author: String(form.get("author") || "").trim(),
      description: String(form.get("description") || "").trim(),
      status: "pending"
    };

    const pending = getPending();
    pending.unshift(item);
    setPending(pending);
    e.currentTarget.reset();
    closeModal("submitModal");
    showToast("已进入审核队列");
    renderAll();
  });

  const adminLogin = document.getElementById("adminLogin");
  const adminPanel = document.getElementById("adminPanel");
  const adminPassword = document.getElementById("adminPassword");

  document.getElementById("adminLoginBtn").addEventListener("click", () => {
    if (!SHOW_ADMIN) return;
    const pass = adminPassword.value.trim();
    if (pass !== ADMIN_PASSWORD) {
      showToast("口令错误");
      adminPassword.focus();
      return;
    }
    adminLogin.style.display = "none";
    adminPanel.style.display = "block";
    renderPendingList();
    renderInvalidFeedbackList();
  });

  adminPassword.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("adminLoginBtn").click();
    }
  });

  document.getElementById("exportDataBtn").addEventListener("click", () => {
    const data = {
      codes: getCodes(),
      pending: getPending(),
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "delta-gun-code-data.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resetDataBtn").addEventListener("click", () => {
    if (!confirm("确定重置演示数据吗？本机提交和审核记录会清空。")) return;
    localStorage.removeItem("delta_codes");
    localStorage.removeItem("delta_pending");
    showToast("已重置");
    renderAll();
    renderPendingList();
    renderInvalidFeedbackList();
  });

  document.getElementById("importCsvBtn").addEventListener("click", () => {
    document.getElementById("csvFileInput").click();
  });

  document.getElementById("csvFileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = parseCsvText(event.target.result);
      if (!result.length) {
        showToast("CSV 文件为空或格式不正确");
        return;
      }

      const codes = getCodes();
      const existingIds = new Set(codes.map(c => c.id));
      let imported = 0;
      let skipped = 0;
      let failed = 0;

      result.forEach(item => {
        if (existingIds.has(item.id)) {
          skipped += 1;
        } else {
          codes.unshift(item);
          imported += 1;
        }
      });

      setCodes(codes);
      showToast(`导入完成：成功 ${imported} 条，跳过 ${skipped} 条，失败 ${failed} 条`);
      renderAll();
      renderPendingList();
      renderInvalidFeedbackList();
    };
    reader.onerror = () => {
      showToast("读取 CSV 文件失败");
    };
    reader.readAsText(file);
    e.target.value = "";
  });
}

async function init() {
  cleanupPublicCodeData();
  cleanupDemoCodes();
  window.codes = await getInitialCodes();
  cleanupSourceDescription();
  const dailyPasswordResult = await loadDailyPasswords();
  state.dailyPasswords = dailyPasswordResult.items;
  state.dailyPasswordMeta = dailyPasswordResult.meta;
  state.dailyPasswordLoadError = dailyPasswordResult.error;
  setupEvents();
  renderAll();
}

init();
