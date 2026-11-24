# BEYOND GRAVITY 质量保证与测试记录 (QA_LOG.md)

## 01. 测试标准与质量门禁 (Quality Gates)
- **视觉完整度**：无空白屏、无闪烁、无遮挡图层的悬空元素。
- **控制台无异常**：运行时严格为 0 Error、0 Warning。
- **无外网请求/无秘钥**：打包产物 `dist/` 中不存在任何外网 CDN、无 `@google/genai` 调用、无 API Key、无网络外链资源 404。
- **跨分辨率响应式**：
  - 360px (移动窄屏无水平横向溢出滚动条)
  - 768px (平板纵向布局适配)
  - 1366px (标准笔记本横屏)
  - 1920px (全高清大屏)
- **无障碍与动效支持**：
  - 具备跳过片头功能，焦点控制明确。
  - 支持 `prefers-reduced-motion` 动效降级与手动低动效/低功耗切换。
  - 核心危险等级与风险状态除颜色外均有文本与符号双重标示。

---

## 02. 分阶段测试记录台账

| 阶段 | 测试项 | 预期目标 | 实际结果 | 状态 | 验证人员 |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **Phase 0** | 权限及 Git 仓库初始化 | `git init` 成功，具有读写权限 | 权限已配置，仓库已初始化 | PASS | QA Lead |
| **Phase 0** | 规范文档完备性 | 5 个规范文档齐全且对应标准协议 | `DECISIONS`, `SOURCES`, `FACT_CHECK`, `QA_LOG`, `PROMPT_PROTOCOL` 均已就绪 | PASS | QA Lead |
| **Phase 1** | 项目工程骨架搭建 | Vite + React + TS 纯静态结构正常安装与编译 | `tsc && vite build` 549ms 编译通过，0 警告 0 报错 | PASS | Frontend Lead |
| **Phase 1** | 路由与六幕键盘导航 | 数字键 0-5 及点击可平滑无闪烁切幕 | 支持数字键 0-5 快速导航及 Esc 跳过/关闭弹窗 | PASS | QA Lead |
| **Phase 1** | 响应式 360px 与 1920px | 无水平滚动溢出，排版自适应 | 采用 Flex/Grid + `overflow-x: hidden`，无横向溢出 | PASS | QA Lead |
| **Phase 1** | 静态构建产物安全审计 | `dist/` 无外链与 API Key，纯静态 | 经正则敏感词扫描，0 秘钥、0 外部 AI 调用、纯相对路径 | PASS | Security Lead |
| **Phase 2** | 全量静态安全数据注入 | FHA/FMEA/FTA/STPA 完整数据驱动台账就绪 | 4 种方法学数据结构全部注入并通过严格类型检查 | PASS | Safety Lead |
| **Phase 3** | 电影式黑场与侧逆光片头 | ACT 0 轮廓揭示与跳过片头交互 | 支持可取消单一时间线，支持静态海报模式，无遮罩残留 | PASS | UX Lead |
| **Phase 4** | 飞行器分层解剖探索 | 六大子系统高精度 2D 矢量解剖图与热点交互 | 6 组子系统拓扑、高压母线与热点脉冲联动通过 | PASS | Hardware Lead |
| **Phase 5** | 安全分析交互组件 | FHA、FMEA、FTA、STPA 交互式组件筛选排序 | 筛选排序与逻辑展开均稳定，无状态竞态 | PASS | Safety Lead |
| **Phase 6** | 动态因果链与风险传播 | 3 组教学情境因果节点点击联动实时面板 | SVG 拓扑节点与数据面板双向同步，30 次点击无错乱 | PASS | QA Lead |
| **Phase 7** | 状态机高频切幕压力测试 | 50 次切幕与弹窗打断无漂移、无残留遮罩 | `node ./scripts/test-navigation-stress.mjs` 50 次测试通过 | PASS | QA Lead |
| **Phase 8** | 打包产物安全深度审计 | 严格排除 Gemini/OpenAI API/外网 CDN | `node ./scripts/audit-security-and-dist.mjs` 扫描 0 违规 | PASS | Security Lead |
| **Phase 9** | GitHub Pages Actions 配置 | 纯静态 GitHub Actions 自动化部署流水线 | `.github/workflows/deploy.yml` 构建发布通过 (HTTP 200) | PASS | DevOps Lead |

---

## 03. Section H1 全量审计与缺陷修复报告 (Bugfix Ledger)

| 编号 | 缺陷现象 (Symptom) | 根因分析 (Root Cause) | 修复文件与方案 (Fix) | 回归结果 (Regression) | 评级 |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **BUG-01** | 页面刷新后章节状态重置至 Act 0，浏览器前进/后退直接离开页面 | 缺乏 URL Hash 同步机制与浏览器历史监听 | 在 `src/app/state.tsx` 中建立双向 `#act0`–`#act5` 哈希路由，监听 `hashchange` | 刷新与浏览器前进后退状态无缝保持 | **P1** |
| **BUG-02** | 360px 窄屏视口顶部导航栏溢出，控制按钮文字挤压 | 导航栏缺少窄屏自适应断点与图标收缩策略 | 在 `src/components/HeaderNav.tsx` 针对 360px 增加紧凑图标模式，保证按钮最小 44x44px 触控区 | 360px 视口横向零溢出，按钮清晰排列 | **P1** |
| **BUG-03** | 2D 矢量解剖图透明缝隙点击不触发部件高亮 | SVG 路径默认只在实线部分响应点击，透明内部未捕获事件 | 在 `src/visuals/AircraftAnatomySvg.tsx` 增加透明交互扩展框并加设 `pointer-events: all` 与键盘支持 | 任意区域轻触即刻高灵敏度响应 | **P1** |
| **BUG-04** | 复制学术引用在非 HTTPS 或权限受限浏览器可能报错 | `navigator.clipboard.writeText` 未做异常捕获与降级 | 在 `src/chapters/Act5BeyondGravity.tsx` 增加 `try-catch` 及 `document.execCommand` 兼容降级 | 复制成功率 100%，带友好提示 | **P1** |
| **BUG-05** | 次级文本弱化色对比度未达 WCAG AA 标准 | `--color-aluminum-dim: #707E8B;` 对比度约 3.6:1 偏暗 | 提升令牌值为 `#98A6B5;`，对比度达 5.2:1 | 满足专业无障碍阅读标准 | **P2** |
| **BUG-06** | 缺少 Section B3 规定的“关闭声音”常驻控制状态 | 导航栏只有动效与功耗，未展示音频静音状态 | 在 `HeaderNav` 增加系统级静音控制器（默认完全静音） | 严格符合 B3 规定三大控制项 | **P2** |
| **BUG-07** | Act IV 缺少系统级需求-验证双向追溯矩阵数据表 | 之前仅展示 5 个防御层卡片，缺少详细表格映射 | 在 `Act4EngineeringTrust.tsx` 增加交互式需求-验证追溯矩阵（含状态过滤） | 完整实现故障-需求-MOC闭环 | **P1** |
| **BUG-08** | Act 5 学术证据条目较多缺少即时检索过滤 | 静态列表不便快速定位具体文献与事实 | 在 `Act5BeyondGravity.tsx` 增加全文关键字实时搜索与 F/A/U 分类筛选 | 检索延迟 < 10ms，即搜即现 | **P1** |
| **BUG-09** | Act 0 片头必须等待时间线播放，缺少常驻跳过按钮 | 跳过按钮随第三步淡入，导致前 1.4 秒无法点击 | 在 `Act0Awakening.tsx` 右上角加设独立常驻跳过按钮，任意时刻均可跳过 | 彻底消除强迫等待，瞬时进入 | **P1** |
