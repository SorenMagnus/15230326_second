// 安全工程数据完整性与合规性单元校验 (Safety Dataset Verification)
import { CORE_RISK_RECORDS, FHA_DATASET, FMEA_DATASET, FTA_TREE, STPA_MODEL } from '../safety/data';

export function runSafetyDataAudit(): { passed: boolean; logs: string[]; errorCount: number } {
  const logs: string[] = [];
  let errorCount = 0;

  logs.push('=== 启动 BEYOND GRAVITY 系统安全数据完整性自动化审计 ===');

  // 1. 验证 CORE_RISK_RECORDS (EX-01, EX-02, EX-03)
  if (CORE_RISK_RECORDS.length !== 3) {
    logs.push(`[FAIL] 核心跨方法教学情境数量异常，预期 3 条，实际 ${CORE_RISK_RECORDS.length}`);
    errorCount++;
  } else {
    logs.push(`[PASS] 核心跨方法教学情境 (EX-01, EX-02, EX-03) 完整就绪`);
  }

  CORE_RISK_RECORDS.forEach((rec) => {
    // 检查字段完整度
    if (!rec.id || !rec.hazard || !rec.consequence || !rec.residualRisk) {
      logs.push(`[FAIL] 记录 ${rec.id} 存在缺失关键字段`);
      errorCount++;
    }
    // 检查是否有虚构数字
    if (rec.likelihoodEvidence.includes('10^-') && !rec.likelihoodEvidence.includes('[U]')) {
      logs.push(`[FAIL] 记录 ${rec.id} 包含了未经审定背书的确定性概率`);
      errorCount++;
    }
    // 检查因果传播链深度 >= 3
    if (!rec.propagationNodes || rec.propagationNodes.length < 3) {
      logs.push(`[FAIL] 记录 ${rec.id} 因果传播节点少于 3 个`);
      errorCount++;
    }
  });

  // 2. 验证 FTA 树节点连通性与顶事件
  const topEvent = FTA_TREE.find(n => n.isTop);
  if (!topEvent) {
    logs.push(`[FAIL] 未检测到 FTA 顶事件 (Top Event)`);
    errorCount++;
  } else {
    logs.push(`[PASS] FTA 顶事件有效: ${topEvent.id} (${topEvent.name})`);
  }

  const allNodeIds = new Set(FTA_TREE.map(n => n.id));
  FTA_TREE.forEach(node => {
    if (node.childIds) {
      node.childIds.forEach(cid => {
        if (!allNodeIds.has(cid)) {
          logs.push(`[FAIL] FTA 节点 ${node.id} 引用了不存在的子事件 ID: ${cid}`);
          errorCount++;
        }
      });
    }
  });

  // 3. 验证 STPA 4 类 UCA 完备性
  const ucaTypes = new Set(STPA_MODEL.ucas.map(u => u.type));
  const expectedUcas = ['NotProviding', 'ProvidingCausesHazard', 'WrongTiming', 'StoppedTooSoon'];
  expectedUcas.forEach(type => {
    if (!ucaTypes.has(type as any)) {
      logs.push(`[FAIL] STPA 缺少不安全控制动作类型: ${type}`);
      errorCount++;
    }
  });
  if (errorCount === 0) {
    logs.push(`[PASS] STPA 四类 UCA 覆盖完备`);
  }

  // 4. 验证 FHA 与 FMEA 记录标签合法性 (F, A, D, U)
  const validTags = new Set(['F', 'A', 'D', 'U']);
  FHA_DATASET.forEach(item => {
    if (!validTags.has(item.tag)) {
      logs.push(`[FAIL] FHA 项 ${item.id} 标签 ${item.tag} 非法`);
      errorCount++;
    }
  });

  FMEA_DATASET.forEach(item => {
    if (!validTags.has(item.tag)) {
      logs.push(`[FAIL] FMEA 项 ${item.id} 标签 ${item.tag} 非法`);
      errorCount++;
    }
  });

  logs.push(`=== 审计结束: 发现错误 ${errorCount} 处 ===`);
  return { passed: errorCount === 0, logs, errorCount };
}
