import React, { useState } from 'react';
import { useSafetyState } from '../app/state';
import { EvidenceBadge } from '../components/EvidenceBadge';

interface DefenseLayer {
  id: string;
  name: string;
  en: string;
  principle: string;
  examples: string[];
  verificationMethod: string;
  source: string;
  tag: 'F' | 'A';
}

interface RequirementMatrixRow {
  reqId: string;
  hazardRef: string;
  layer: string;
  safetyRequirement: string;
  moc: string;
  status: 'Verified' | 'Mitigated' | 'Residual';
  residualNote: string;
}

const DEFENSE_LAYERS: DefenseLayer[] = [
  {
    id: 'layer-1',
    name: '物理与热空间隔离',
    en: 'PHYSICAL ISOLATION',
    principle: '通过空间距离、耐火隔舱、防破裂包络线切断单一故障连锁传递路径。',
    examples: ['电池模组间耐火气凝胶屏障', '高压线缆与飞控信号总线物理分道布置', '旋翼爆裂未包容碎片轨迹避开载人座舱'],
    verificationMethod: '1100°C 持续 15 分钟标准耐火烧穿试验、未包容转子碎片碰撞冲击仿真。',
    source: 'S8',
    tag: 'F'
  },
  {
    id: 'layer-2',
    name: '多通道硬件余度设计',
    en: 'HARDWARE REDUNDANCY',
    principle: '在单一物理通道损坏时，备份通道无缝接管或进行加权表决。',
    examples: ['四通道异构电传飞控计算机 (FCC)', '每个倾转旋翼配备独立双绕组驱动电机', '三组非相似迎角与动静压传感器'],
    verificationMethod: '硬件故障注入试验 (Fault Injection)、多总线通道丢包/抖动极限压力测试。',
    source: 'J1',
    tag: 'F'
  },
  {
    id: 'layer-3',
    name: '自主健康监控与重构',
    en: 'MONITORING & RECONFIGURATION',
    principle: '控制律实时感知推进效率恶化，自适应重配其余舵面与电机推力。',
    examples: ['单发停转推力重平衡控制律', 'BMS 绝缘阻抗毫秒级高频检测', '作动机构卡阻死区自适应补偿'],
    verificationMethod: '全任务飞行仿真平台蒙特卡洛极端状态收敛性验证 (Monte Carlo)。',
    source: 'M2',
    tag: 'A'
  },
  {
    id: 'layer-4',
    name: '安全降级模式与飞行员处置',
    en: 'DEGRADED MODES & SOP',
    principle: '在多重系统受损时，提供明确受限但受控的降级运行策略。',
    examples: ['进近低能量滑翔备降程序', '应急垂直硬着陆姿态维持策略', '声光振动多模态告警与飞行员简洁决策界面 (HMI)'],
    verificationMethod: '人在回路 (HIL) 飞行员高负荷接管应急演练评估 (FAA AC 21.17-4 准则)。',
    source: 'S9',
    tag: 'F'
  },
  {
    id: 'layer-5',
    name: '全生命周期适航审定追溯',
    en: 'CERTIFICATION & TRACEABILITY',
    principle: '满足 EASA SC-VTOL 10^-9/h 灾难性失效概率要求，每项安全需求具备双向追溯证据。',
    examples: ['DO-178C DAL A 级飞行机载软件认证', 'DO-254 复杂硬件可追溯测试用例', '适航审定符合性审查检查单 (Compliance Checklist)'],
    verificationMethod: '适航主管机构现场目击审查、审定试飞科目闭环与设计缺陷整改单核销。',
    source: 'S7',
    tag: 'F'
  }
];

const TRACEABILITY_MATRIX: RequirementMatrixRow[] = [
  {
    reqId: 'REQ-SAF-01',
    hazardRef: 'EX-01 (非对称推力丢失)',
    layer: 'Layer 02 / Layer 03',
    safetyRequirement: '单外置旋翼失效时，飞控系统须在 80ms 内完成剩余旋翼推力重新配平，保持俯仰滚转稳定。',
    moc: 'MOC 5 (铁鸟台架故障注入仿真) & MOC 6 (试飞数据)',
    status: 'Verified',
    residualNote: '极限低空阵风剪切叠加瞬时倾转临界态尚未给出统计收敛边界。'
  },
  {
    reqId: 'REQ-SAF-02',
    hazardRef: 'EX-02 (动力电池热失控)',
    layer: 'Layer 01',
    safetyRequirement: '单体电芯热失控释气火焰不得在 15 分钟内蔓延至相邻模组，保证垂直迫降窗口。',
    moc: 'MOC 3 (DO-311A 针刺破坏性实测)',
    status: 'Verified',
    residualNote: '全寿命周期严重机械碰撞挤压下多舱同时破损的热扩散。'
  },
  {
    reqId: 'REQ-SAF-03',
    hazardRef: 'EX-03 (传感器积冰偏置)',
    layer: 'Layer 02 / Layer 04',
    safetyRequirement: '动静压传感器遭受未知正偏置时，合成空速融合算法须在 2 秒内识别残差并触发交叉告警。',
    moc: 'MOC 4 (结冰风洞与飞行员在环模拟演练)',
    status: 'Mitigated',
    residualNote: '罕见过冷大水滴 (SLD) 极端恶劣环境下的三通道共因污染。'
  },
  {
    reqId: 'REQ-SAF-04',
    hazardRef: 'FHA-02 (倾转机构卡阻)',
    layer: 'Layer 02 / Layer 05',
    safetyRequirement: '单个倾转作动筒机械卡死时，舵面控制与其余倾转机构须限制飞行器进入可控下降通道。',
    moc: 'MOC 2 (极限载荷疲劳与非对称气动风洞试验)',
    status: 'Residual',
    residualNote: '公开资料未公布机械自锁解脱机构实际失效率。'
  }
];

export const Act4EngineeringTrust: React.FC = () => {
  const { goToChapter } = useSafetyState();
  const [activeLayer, setActiveLayer] = useState<string>(DEFENSE_LAYERS[0].id);
  const [showMatrix, setShowMatrix] = useState<boolean>(true);
  const [matrixFilter, setMatrixFilter] = useState<'All' | 'Verified' | 'Mitigated' | 'Residual'>('All');

  const currentLayer = DEFENSE_LAYERS.find(l => l.id === activeLayer) || DEFENSE_LAYERS[0];

  const filteredMatrix = matrixFilter === 'All'
    ? TRACEABILITY_MATRIX
    : TRACEABILITY_MATRIX.filter(row => row.status === matrixFilter);

  return (
    <section className="chapter-view" aria-labelledby="act4-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT IV · ENGINEERING TRUST</span>
          <EvidenceBadge type="F" text="深度防御体系" sourceId="M2" />
        </div>
        <h2 id="act4-title" className="chapter-heading">工程建立信任：纵深防御与适航验证矩阵</h2>
        <p className="chapter-desc">
          航空安全从不依赖单个零件的“零缺陷”，而是建立在多重独立的纵深防御层上。任何单一屏障的失效，都必须被下一层机制牢牢截击。
        </p>
      </div>

      {/* 五层纵深防御卡片堆栈 */}
      <div className="defense-stack">
        {DEFENSE_LAYERS.map((layer, index) => {
          const isSelected = activeLayer === layer.id;
          return (
            <button
              key={layer.id}
              className={`layer-btn ${isSelected ? 'active' : ''}`}
              onClick={() => setActiveLayer(layer.id)}
              aria-label={`查看第 ${index + 1} 层防御：${layer.name}`}
            >
              <div className="layer-num">LAYER 0{index + 1}</div>
              <div className="layer-name">{layer.name}</div>
              <div className="layer-en">{layer.en}</div>
            </button>
          );
        })}
      </div>

      {/* 选中防御层的详细验证矩阵 */}
      <div className="layer-detail-card">
        <div className="layer-detail-header">
          <div>
            <h3 className="layer-detail-title">{currentLayer.name} ({currentLayer.en})</h3>
            <p className="layer-principle"><strong>核心防御原理：</strong>{currentLayer.principle}</p>
          </div>
          <EvidenceBadge type={currentLayer.tag} sourceId={currentLayer.source} />
        </div>

        <div className="grid-two-col">
          <div className="detail-box">
            <h4 className="detail-box-title">典型工程防御实现范例</h4>
            <ul className="example-list">
              {currentLayer.examples.map((item, i) => (
                <li key={i} className="example-item">
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-box">
            <h4 className="detail-box-title">适航符合性验证手段 (MOC)</h4>
            <p className="verification-text">{currentLayer.verificationMethod}</p>
            <div className="standards-badge">
              <span>参照标准：</span>
              <code>ARP4754A / EASA SC-VTOL Issue 2</code>
            </div>
          </div>
        </div>

        <div className="matrix-toggle-row">
          <button
            className="toggle-matrix-btn"
            onClick={() => setShowMatrix(!showMatrix)}
          >
            {showMatrix ? '收起安全需求与验证双向追溯矩阵 ▲' : '展开安全需求与验证双向追溯矩阵 ▼'}
          </button>
          <span className="matrix-count-note">共收录 {TRACEABILITY_MATRIX.length} 条高层适航安全需求项</span>
        </div>
      </div>

      {/* 嵌入式需求-验证追溯矩阵 (Requirements-to-Verification Traceability Matrix) */}
      {showMatrix && (
        <div className="traceability-card">
          <div className="matrix-header">
            <div>
              <h4 className="matrix-title">安全需求与适航符合性双向追溯矩阵 (Requirements Traceability Matrix)</h4>
              <span className="matrix-sub">建立“故障情境 ➔ 安全需求 ➔ 防御层 ➔ 验证方法 (MOC) ➔ 残余不确定性”完整链条</span>
            </div>
            <div className="matrix-filters">
              {(['All', 'Verified', 'Mitigated', 'Residual'] as const).map(f => (
                <button
                  key={f}
                  className={`matrix-filter-pill ${matrixFilter === f ? 'active' : ''}`}
                  onClick={() => setMatrixFilter(f)}
                >
                  {f === 'All' ? '全部需求' : f === 'Verified' ? '已验证闭环' : f === 'Mitigated' ? '已采取措施' : '残余不确定性'}
                </button>
              ))}
            </div>
          </div>

          <div className="table-responsive">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th style={{ width: '120px' }}>需求编号</th>
                  <th style={{ width: '150px' }}>针对危险源</th>
                  <th style={{ width: '130px' }}>防御层</th>
                  <th>适航安全需求条目</th>
                  <th>符合性验证手段 (MOC)</th>
                  <th style={{ width: '100px' }}>状态</th>
                  <th>残余不确定性说明</th>
                </tr>
              </thead>
              <tbody>
                {filteredMatrix.map(row => (
                  <tr key={row.reqId}>
                    <td className="req-id-cell">{row.reqId}</td>
                    <td><span className="hazard-ref-tag">{row.hazardRef}</span></td>
                    <td><span className="layer-pill">{row.layer}</span></td>
                    <td>{row.safetyRequirement}</td>
                    <td className="moc-text">{row.moc}</td>
                    <td>
                      <span className={`status-badge ${row.status.toLowerCase()}`}>
                        {row.status === 'Verified' ? '已验证' : row.status === 'Mitigated' ? '已缓解' : '残余未知'}
                      </span>
                    </td>
                    <td className="residual-text">{row.residualNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 底部跳转导引 */}
      <div className="chapter-bottom-bar">
        <span className="footer-tip">⚠️ 提示：行业通用安全构型不能直接等同于 Joby S4 最终获批审定参数，均受最新官方审查限制。</span>
        <button className="primary-cta-btn" onClick={() => goToChapter(5)}>
          汇总全篇结论、事实与未验证清单 (进入 ACT V) →
        </button>
      </div>

      <style>{`
        .defense-stack {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }
        .layer-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 16px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
          min-height: 44px;
        }
        .layer-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .layer-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          box-shadow: 0 0 12px var(--color-amber-glow);
        }
        .layer-num {
          font-size: 11px;
          font-family: var(--font-family-mono);
          color: var(--color-amber);
          font-weight: 700;
        }
        .layer-name {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 600;
          margin: 4px 0 2px;
        }
        .layer-en {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .layer-detail-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .layer-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .layer-detail-title {
          font-size: 20px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .layer-principle {
          font-size: 13.5px;
          color: var(--color-aluminum);
          margin-top: 6px;
          line-height: 1.5;
        }
        .grid-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 800px) {
          .grid-two-col {
            grid-template-columns: 1fr;
          }
        }
        .detail-box {
          background: var(--color-graphite-elevated);
          padding: 18px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
        }
        .detail-box-title {
          font-size: 14px;
          color: var(--color-amber);
          margin-bottom: 12px;
          font-weight: 600;
        }
        .example-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .example-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.45;
        }
        .check-icon {
          color: #8ec2e6;
          font-weight: bold;
        }
        .verification-text {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
        .standards-badge {
          margin-top: 14px;
          font-size: 12px;
          color: var(--color-aluminum-dim);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .standards-badge code {
          background: rgba(184, 193, 200, 0.12);
          padding: 2px 6px;
          border-radius: 3px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .matrix-toggle-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .toggle-matrix-btn {
          background: rgba(217, 154, 69, 0.12);
          border: 1px solid var(--color-amber);
          color: var(--color-amber);
          padding: 8px 16px;
          border-radius: 5px;
          font-weight: 600;
          font-size: 13px;
          transition: all var(--transition-nav);
        }
        .toggle-matrix-btn:hover {
          background: var(--color-amber);
          color: var(--color-graphite);
        }
        .matrix-count-note {
          font-size: 12.5px;
          color: var(--color-aluminum-dim);
        }
        .traceability-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .matrix-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
        }
        .matrix-title {
          font-size: 16px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .matrix-sub {
          font-size: 12px;
          color: var(--color-aluminum);
          display: block;
          margin-top: 2px;
        }
        .matrix-filters {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .matrix-filter-pill {
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
          transition: all var(--transition-nav);
        }
        .matrix-filter-pill.active {
          background: rgba(217, 154, 69, 0.18);
          border-color: var(--color-amber);
          color: var(--color-amber);
          font-weight: 600;
        }
        .table-responsive {
          overflow-x: auto;
        }
        .matrix-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          text-align: left;
        }
        .matrix-table th {
          background: var(--color-graphite-elevated);
          color: var(--color-aluminum);
          padding: 10px 12px;
          border-bottom: 2px solid var(--color-graphite-border);
          font-weight: 600;
          white-space: nowrap;
        }
        .matrix-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .req-id-cell {
          font-family: var(--font-family-mono);
          font-weight: 700;
          color: var(--color-amber);
        }
        .hazard-ref-tag {
          font-size: 11px;
          font-family: var(--font-family-mono);
          background: rgba(184, 193, 200, 0.12);
          padding: 3px 6px;
          border-radius: 3px;
        }
        .layer-pill {
          font-size: 11px;
          color: #8ec2e6;
          font-family: var(--font-family-mono);
        }
        .moc-text {
          font-size: 12.5px;
          color: var(--color-aluminum);
        }
        .status-badge {
          padding: 3px 8px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 700;
          font-family: var(--font-family-mono);
          display: inline-block;
        }
        .status-badge.verified {
          background: rgba(78, 122, 148, 0.25);
          color: #8ec2e6;
          border: 1px solid rgba(78, 122, 148, 0.45);
        }
        .status-badge.mitigated {
          background: rgba(217, 154, 69, 0.2);
          color: #f3c47e;
          border: 1px solid rgba(217, 154, 69, 0.45);
        }
        .status-badge.residual {
          background: rgba(185, 76, 68, 0.25);
          color: #f1928b;
          border: 1px solid rgba(185, 76, 68, 0.45);
        }
        .residual-text {
          font-size: 12.5px;
          color: #f1928b;
        }
        .chapter-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .footer-tip {
          font-size: 12px;
          color: var(--color-aluminum-dim);
          max-width: 600px;
        }
        .primary-cta-btn {
          color: var(--color-amber);
          font-weight: 700;
          font-size: 13.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>
    </section>
  );
};
