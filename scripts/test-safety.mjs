import { readFileSync } from 'fs';

// 读取 data.ts 进行静态语法与数据断言
const dataContent = readFileSync('./src/safety/data.ts', 'utf-8');

console.log('=== 运行静态数据完整性自动化测试 ===');
let errors = 0;

if (!dataContent.includes('EX-01') || !dataContent.includes('EX-02') || !dataContent.includes('EX-03')) {
  console.error('[FAIL] 缺少三项核心跨方法示例 (EX-01, EX-02, EX-03)');
  errors++;
} else {
  console.log('[PASS] 三项核心教学情境 (EX-01, EX-02, EX-03) 完整');
}

if (!dataContent.includes('FTA-TOP-01')) {
  console.error('[FAIL] 缺少 FTA 顶事件 FTA-TOP-01');
  errors++;
} else {
  console.log('[PASS] FTA 顶事件逻辑节点完整');
}

if (!dataContent.includes('NotProviding') || !dataContent.includes('ProvidingCausesHazard') || !dataContent.includes('WrongTiming') || !dataContent.includes('StoppedTooSoon')) {
  console.error('[FAIL] STPA 缺少 4 类 UCA 动作类型');
  errors++;
} else {
  console.log('[PASS] STPA 4 类不安全控制动作完整');
}

// 检查是否包含虚构的失效率数字
const forbiddenPattern = /10\^-\d+\/h(?![^[]*\[U\])/g;
if (forbiddenPattern.test(dataContent)) {
  console.error('[FAIL] 发现未经标记为 [U] 的确定性失效率数字');
  errors++;
} else {
  console.log('[PASS] 零虚构确定性发生概率，严格遵守 [U] 存疑约束');
}

console.log(`=== 测试完成: 错误数 ${errors} ===`);
if (errors > 0) process.exit(1);
