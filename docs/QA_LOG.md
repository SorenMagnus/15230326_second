# BEYOND GRAVITY 质量保证与测试记录 (QA_LOG.md)

## 01. 测试标准与质量门禁 (Quality Gates)
- **视觉完整度**：无空白屏、无闪烁、无遮挡图层的悬空元素。
- **控制台无异常**：运行时严格为 0 Error、0 Warning（除已知第三方被动警告）。
- **无外网请求/无秘钥**：打包产物 `dist/` 中不存在任何外网 CDN、无 `@google/genai` 调用、无 API Key、无网络外链资源 404。
- **跨分辨率响应式**：
  - 360px (移动窄屏无水平横向溢出滚动条)
  - 768px (平板纵向布局适配)
  - 1366px (标准笔记本横屏)
  - 1920px (全高清大屏)
- **无障碍与动效支持**：
  - 具备跳过片头功能，焦点控制明确。
  - 支持 `prefers-reduced-motion` 动效降级。
  - 核心危险等级与风险状态除颜色外均有文本与符号双重标示。

---

## 02. 分阶段测试记录台账

| 阶段 | 测试项 | 预期目标 | 实际结果 | 状态 | 验证人员 |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **Phase 0** | 权限及 Git 仓库初始化 | `git init` 成功，具有读写权限 | 权限已配置，仓库已初始化 | PASS | QA Lead |
| **Phase 0** | 规范文档完备性 | 5 个规范文档齐全且对应标准协议 | `DECISIONS`, `SOURCES`, `FACT_CHECK`, `QA_LOG`, `PROMPT_PROTOCOL` 均已就绪 | PASS | QA Lead |
| **Phase 1** | 项目工程骨架搭建 | Vite + React + TS 纯静态结构正常安装与编译 | 待执行构建验证 | IN_PROGRESS | Frontend Lead |
| **Phase 1** | 路由与六幕键盘导航 | 数字键 0-5 及点击可平滑无闪烁切幕 | 待执行交互测试 | PENDING | QA Lead |
| **Phase 1** | 响应式 360px 与 1920px | 无水平滚动溢出，排版自适应 | 待执行布局检查 | PENDING | QA Lead |
| **Phase 1** | 静态构建产物安全审计 | `dist/` 无外链与 API Key，纯静态 | 待执行代码扫描 | PENDING | Security Lead |
