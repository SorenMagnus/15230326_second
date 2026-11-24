# BEYOND GRAVITY 架构决策记录 (DECISIONS.md)

## 01. 基础架构选型
- **选型方案**：Vite 6 + React 18/19 + TypeScript。
- **渲染模式**：100% 客户端纯静态单页渲染（SPA/Static Site），编译输出至 `dist/`，完全兼容 GitHub Pages。
- **排除项**：
  - 严禁引入任何服务端渲染（SSR）、Node.js 运行时服务、Server Actions、云函数。
  - 严禁引入任何运行时 LLM / Gemini API 调用，代码库与打包产物中不含任何 API Key 或模型凭证。
  - 严禁使用外部 CDN（如 Google Fonts、cdnjs、unpkg、外部三方地图 API），全部样式、字体与资产离线打包。

## 02. 表现层与 3D/动画策略 (C+D 混合方案)
- **视觉核心**：DOM + 语义化 HTML + 原生 CSS Variables (Design Tokens) + 矢量 SVG。
- **动画架构**：
  - 优先使用 CSS 硬件加速过渡与关键帧动画（`transform`, `opacity`）。
  - 动画只作为状态机（State Machine）的订阅者，严禁动画持有或反向修改业务状态。
  - 严格支持 `prefers-reduced-motion` 媒体查询，提供全局“低动效模式”与“低性能模式”开关。
- **3D 策略**：
  - ACT 0、ACT I、ACT III、ACT IV、ACT V 均采用高表现力 SVG 和 CSS/Canvas 渲染，不引入 3D 运行时。
  - 仅在 ACT II 探索区考虑按需懒加载单一轻量 3D Viewer，并在低性能设备或 WebGL 缺失时无缝回退至 2D 高精度矢量剖面图。

## 03. 路径与部署适配契约
- **基准路径**：统一使用相对路径 `./` 与 Vite `base: './'` 适配 GitHub Pages 仓库二级目录部署。
- **入口契约**：源仓库根目录保留 `index.html`，打包构建产物 `dist/index.html` 独立完备。

## 04. 安全与学术工程契约
- **研究对象**：以公开文献中的 Joby Aviation S4 eVTOL 构型为工程参照原型。
- **证据分级**：实行严谨的 `[F]`（已证实公开事实）、`[A]`（有边界工程假设）、`[D]`（教学示意）、`[U]`（未核实）四级标签。
- **免责声明**：本项目为高校系统安全工程课程作业学术推演，非 Joby Aviation 或 FAA/EASA 官方安全审定报告。
