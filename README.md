# BEYOND GRAVITY ｜ 《超越重力：天空的代价》
### 课程作业-2 · eVTOL 系统安全工程学术分析与全息技术交互展

[![Static Site](https://img.shields.io/badge/Mode-100%25_Static_Client-blue.svg)](#)
[![Zero AI API](https://img.shields.io/badge/Runtime-Zero_AI_API-success.svg)](#)
[![GitHub Pages Ready](https://img.shields.io/badge/Deploy-GitHub_Pages-orange.svg)](#)

本项目为高校系统安全工程课程作业-2（独立整理版），聚焦于下一代城市空中交通（AAM / eVTOL）核心机型 **Joby Aviation S4** 的系统安全性、适航审定边界与多故障因果链推演。

---

## 01. 核心架构与绝对 P0 约束
- **100% 纯静态客户端运行**：无云端数据库、无 Server Actions、无运行时 Gemini / LLM API 调用、代码库与打包产物中绝对不含任何 API Key。
- **离线资产打包**：禁用外部在线字体 CDN、外部三方地图 API，所有矢量插图与视觉资源本地封装。
- **四级事实标签体系**：
  - `[F]`：已证实公开事实（厂商/监管机构正式公开文件）。
  - `[A]`：有边界的工程假设（教学推演，非真实量产机型事故）。
  - `[D]`：教学示范示意与计算。
  - `[U]`：未核实项（保持科学严谨与存疑）。

---

## 02. 六幕叙事与交互结构
- **ACT 0 · THE AWAKENING / 觉醒**：黑场侧逆光机身剪影与核心命题：“What Makes Flight Safe?”，支持一键跳过与低动效静态海报。
- **ACT I · THE ASCENT / 升空**：起飞、爬升、巡航、进近、着陆全飞行周期的工况与 FHA 功能危害台账联动。
- **ACT II · INSIDE THE MACHINE / 机器内部**：六大子系统高精度 2D 分层矢量解剖图，支持点击热点高亮母线拓扑与 FMEA 部件台账筛选。
- **ACT III · THE EDGE OF FAILURE / 失效边界**：
  - EX-01 推进异常、EX-02 电池热失控、EX-03 传感器偏置三大故障情境因果链动态推演；
  - 故障树分析 (FTA) 顶事件布尔分解与与门/或门展开；
  - 系统理论过程分析 (STPA) 控制回路与 4 类不安全控制动作 (UCA) 深度解析。
- **ACT IV · ENGINEERING TRUST / 工程建立信任**：物理隔离、多余度硬件、自主重构控制、适航验证全防御矩阵。
- **ACT V · BEYOND GRAVITY / 超越重力**：三栏式事实、假设与未核实项总结，学术引用一键复制导出。

---

## 03. 本地快速运行与构建

```bash
# 1. 安装依赖（Node >= 18）
npm install

# 2. 运行系统安全数据完整性自动化测试
npm test

# 3. 启动本地开发预览
npm run dev

# 4. 构建纯静态生产环境产物
npm run build
```

构建产物将直接输出至 `dist/` 目录，根目录与 `dist/` 均包含合规 `index.html`，静态资源采用相对路径，可直接部署于 GitHub Pages。

---

## 04. GitHub Pages 部署与交付说明

### 部署步骤：
1. 在 GitHub 上创建一个公开仓库（Public Repository，如 `beyond-gravity`）。
2. 将本地代码推送到远程仓库：
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. 在 GitHub 仓库页面进入 **Settings** -> **Pages**：
   - 在 **Build and deployment** 下将 **Source** 切换为 **GitHub Actions**。
4. 本项目已包含自动构建工作流 `.github/workflows/deploy.yml`，推送后将自动执行构建与发布。
5. 部署完成后，可通过 `https://<your-username>.github.io/<repo-name>/` 在公网免登录访问。

### 飞书收集页提交建议说明：
- **作业名称**：课程作业-2 · 《超越重力：天空的代价》系统安全工程交互展
- **GitHub 仓库链接**：`https://github.com/SorenMagnus/15230326_second`
- **在线演示 Pages 链接**：`https://sorenmagnus.github.io/15230326_second/`
- **说明摘要**：全站 100% 纯静态运行，无运行时大模型调用与 API Key，严格实行四级事实标签，包含完整的 FHA / FMEA / FTA / STPA 分析，适配桌面端与移动端响应式，支持无障碍及低动效模式。

---

## 05. 学术免责声明
本项目属于高校课程安全系统工程学术推演与交互设计，非 Joby Aviation 或 FAA/EASA 的官方安全评估报告。公开资料仅能证明原文确有表述，不可据此断定真实商业飞机的全部实际安全性能。
