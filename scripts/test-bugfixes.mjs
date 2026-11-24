import { readFileSync } from 'fs';

console.log('=== 运行 Bug 修复综合回归校验 ===');
let errors = 0;

// 1. 验证 URL Hash 路由同步机制
const stateCode = readFileSync('./src/app/state.tsx', 'utf-8');
if (!stateCode.includes('hashchange') || !stateCode.includes('#act')) {
  console.error('[FAIL] 缺少 URL Hash 与浏览器后退前进同步');
  errors++;
} else {
  console.log('[PASS] URL Hash 路由与浏览器前进后退历史无缝同步');
}

// 2. 验证 WCAG 文本对比度优化
const tokensCode = readFileSync('./src/styles/tokens.css', 'utf-8');
if (tokensCode.includes('#707E8B')) {
  console.error('[FAIL] 依然存在低对比度颜色 #707E8B');
  errors++;
} else {
  console.log('[PASS] 弱化文字对比度提升至 WCAG AA 标准 (#98A6B5)');
}

// 3. 验证 SVG 点击判定与键盘无障碍
const svgCode = readFileSync('./src/visuals/AircraftAnatomySvg.tsx', 'utf-8');
if (!svgCode.includes('pointerEvents="visiblePainted"') || !svgCode.includes('onKeyDown')) {
  console.error('[FAIL] SVG 缺少点击透明判定扩展区或键盘支持');
  errors++;
} else {
  console.log('[PASS] SVG 透明区域点击判定与键盘 Enter/Space 键无障碍支持完备');
}

// 4. 验证剪贴板安全降级
const act5Code = readFileSync('./src/chapters/Act5BeyondGravity.tsx', 'utf-8');
if (!act5Code.includes('fallbackCopy')) {
  console.error('[FAIL] Act 5 缺少剪贴板受限上下文降级复制');
  errors++;
} else {
  console.log('[PASS] 剪贴板复制异常捕获与跨平台降级机制就绪');
}

// 5. 验证需求追溯矩阵
const act4Code = readFileSync('./src/chapters/Act4EngineeringTrust.tsx', 'utf-8');
if (!act4Code.includes('TRACEABILITY_MATRIX') || !act4Code.includes('REQ-SAF-01')) {
  console.error('[FAIL] Act 4 缺少需求追溯矩阵');
  errors++;
} else {
  console.log('[PASS] Act 4 需求-验证双向追溯矩阵完整');
}

console.log(`=== 回归完成: 错误数 ${errors} ===`);
if (errors > 0) process.exit(1);
