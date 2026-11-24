# BEYOND GRAVITY ｜ 《超越重力：天空的代价》
### 课程作业-2 · eVTOL 系统安全工程学术分析与全息技术交互展

[![Static Site](https://img.shields.io/badge/Mode-100%25_Static_Client-blue.svg)](#)
[![Zero AI API](https://img.shields.io/badge/Runtime-Zero_AI_API-success.svg)](#)
[![GitHub Pages Ready](https://img.shields.io/badge/Deploy-GitHub_Pages-orange.svg)](#)

本项目为高校系统安全工程课程作业-2（独立整理版），聚焦于下一代城市空中交通（AAM / eVTOL）核心机型 **Joby Aviation S4** 的系统安全性、适航审定边界与多故障因果链推演。

---

## 01. 核心架构与绝对 P0 约束
- **100% 纯静态运行**：无云端数据库、无 Server Actions、无运行时 Gemini / LLM API 调用、代码库与打包产物中绝对不含任何 API Key。
- **离线资产打包**：禁用外部在线字体 CDN、外部三方地图 API，所有矢量插图与视觉资源本地封装。
- **四级事实标签体系**：
  - `[F]`：已证实公开事实（厂商/监管机构正式公开文件）。
  - `[A]`：有边界的工程假设（教学推演，非真实量产机型事故）。
  - `[D]`：教学示范示意与计算。
  - `[U]`：未核实项（保持科学严谨与存疑）。

---

## 02. 六幕叙事与交互结构
- **ACT 0 · THE AWAKENING / 觉醒**：黑场侧逆光机身剪影与核心命题：“What Makes Flight Safe?”。
- **ACT I · THE ASCENT / 升空**：起飞、爬升、巡航、进近、着陆全飞行周期的工况与 FHA 危险源映射。
- **ACT II · INSIDE THE MACHINE / 机器内部**：六大子系统（推进、电池、飞控、结构、执行机构、环境运营）高精度技术解剖。
- **ACT III · THE EDGE OF FAILURE / 失效边界**：EX-01 推进异常、EX-02 电池热失控、EX-03 传感器偏置三大故障情境的因果链推演与 FMEA/FTA。
- **ACT IV · ENGINEERING TRUST / 工程建立信任**：物理隔离、多余度硬件、自主重构控制、适航验证全防御矩阵。
- **ACT V · BEYOND GRAVITY / 超越重力**：三栏式事实、假设与未核实项总结，学术引用一键导出。

---

## 03. 本地快速运行与构建

```bash
# 1. 克隆或解压仓库
git clone <your-repo-url>
cd <repo-folder>

# 2. 安装依赖（Node >= 18）
npm install

# 3. 启动本地开发预览
npm run dev

# 4. 构建纯静态生产环境产物
npm run build
```

构建产物将直接输出至 `dist/` 目录，根目录与 `dist/` 均包含合规 `index.html`，可直接部署于 GitHub Pages。

---

## 04. 学术免责声明
本项目属于高校课程安全系统工程学术推演与交互设计，非 Joby Aviation 或 FAA/EASA 的官方安全评估报告。公开资料仅能证明原文确有表述，不可据此断定真实商业飞机的全部实际安全性能。
