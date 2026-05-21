# 三角洲改枪码库 MVP

这是一个静态网页 MVP，可以直接上传到腾讯云 CloudBase 静态网站托管、Vercel、Netlify 或普通服务器。

## 已实现功能

- 枪械分类筛选
- 模式筛选
- 关键词搜索
- 枪械卡片选择
- 改枪码卡片展示
- 一键复制改枪码
- 用户上传改枪码
- 导出当前数据 JSON
- 移动端适配

## 后台说明

公开上线版默认隐藏管理后台入口。这个 MVP 是纯静态版本，审核数据保存在浏览器 localStorage，不适合作为真正的线上后台权限系统。

## 文件说明

```text
index.html   页面结构
styles.css   页面样式
app.js       交互逻辑和演示数据
sample_data.csv  后续导入数据库的数据模板
```

## 每日密码自动同步

- 当前通过 GitHub Actions 每天北京时间 00:05 自动运行。
- 脚本从公开页面低频读取今日密码。
- 前台不会实时请求第三方网站。
- 前台只读取 data/daily-passwords.json。
- 如果同步失败，会继续使用上一份 JSON。
- 如果需要手动更新，可以直接修改 data/daily-passwords.json。

本地手动同步命令：

```bash
npm install
npx playwright install chromium
npm run sync:daily-passwords
```

如果本地运行成功，`data/daily-passwords.json` 会被更新为包含 `lastUpdated` 和 `items` 的结构；如果目标站抓取失败或解析不到密码，命令会退出失败并保留上一份有效 JSON，方便在终端查看错误日志。

## 如何部署到腾讯云 CloudBase 静态网站托管

1. 打开腾讯云 CloudBase 控制台
2. 进入你的环境
3. 打开「静态网站托管」
4. 上传整个文件夹里的文件：
   - index.html
   - styles.css
   - app.js
   - sample_data.csv
5. 访问静态网站域名即可

## 下一阶段要做什么

静态 MVP 跑通后，下一阶段应该改成真实后端：

1. 接数据库
2. 用户上传进入 submissions 表
3. 管理后台审核后写入 gun_codes 表
4. 增加 Excel / CSV 导入
5. 定时同步腾讯文档 / 飞书表格
6. 增加访问统计、复制统计、热门排行

## 推荐正式数据库字段

### weapons

- id
- name
- category
- image
- sort_order

### gun_codes

- id
- weapon_id
- title
- code
- mode
- tags
- description
- source
- author
- status
- copy_count
- like_count
- created_at
- updated_at

### submissions

- id
- weapon_name
- category
- title
- code
- mode
- tags
- nickname
- description
- status
- created_at

### sync_logs

- id
- source_name
- sync_status
- success_count
- fail_count
- synced_at
```
