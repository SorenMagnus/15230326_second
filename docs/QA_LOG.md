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
| **Phase 9** | GitHub Pages Actions 配置 | 纯静态 GitHub Actions 自动化部署流水线 | `.github/workflows/deploy.yml` 已配置就绪 | PASS | DevOps Lead |
