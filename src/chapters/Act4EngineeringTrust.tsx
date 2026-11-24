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

export const Act4EngineeringTrust: React.FC = () => {
  const { goToChapter } = useSafetyState();
  const [activeLayer, setActiveLayer] = useState<string>(DEFENSE_LAYERS[0].id);

  const currentLayer = DEFENSE_LAYERS.find(l => l.id === activeLayer) || DEFENSE_LAYERS[0];

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

        <div className="matrix-footer">
          <span className="footer-tip">⚠️ 提示：行业通用安全构型不能直接等同于 Joby S4 最终获批审定参数，均受最新官方审查限制。</span>
          <button className="primary-cta-btn" onClick={() => goToChapter(5)}>
            汇总全篇结论、事实与未验证清单 (进入 ACT V) →
          </button>
        </div>
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
        .matrix-footer {
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
