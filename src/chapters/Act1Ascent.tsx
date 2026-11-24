import React from 'react';
import { useSafetyState } from '../app/state';
import { FlightPhaseId } from '../app/types';
import { EvidenceBadge } from '../components/EvidenceBadge';

interface PhaseDetail {
  id: FlightPhaseId;
  name: string;
  en: string;
  flightRegime: string;
  tag: 'F' | 'A';
  source: string;
  hazards: string[];
  systemFocus: string;
  criticality: string;
}

const PHASES: PhaseDetail[] = [
  {
    id: 'takeoff',
    name: '起飞阶段',
    en: 'VTOL TAKEOFF',
    flightRegime: '垂直推力模态（旋翼仰角 90°）',
    tag: 'F',
    source: 'S5',
    hazards: ['地面效应扰动造成非受控偏航', '单旋翼瞬态功率跌落导致离地非对称倾斜'],
    systemFocus: '高倍率瞬态电能输出与多旋翼垂直姿态增稳控制',
    criticality: '高（近地安全裕度窄，无机翼升力储备）'
  },
  {
    id: 'climb',
    name: '爬升与过渡',
    en: 'TRANSITION CLIMB',
    flightRegime: '倾转过渡走廊（旋翼仰角 90° → 0°）',
    tag: 'A',
    source: 'EX-01',
    hazards: ['倾转机构不同步卡阻', '非对称气动分离导致翼尖剧烈失速'],
    systemFocus: '气动舵面与倾转推力矢量复合控制律调度',
    criticality: '极高（混合升力过渡，控制重构复杂度最高区间）'
  },
  {
    id: 'cruise',
    name: '平飞巡航',
    en: 'WING-BORNE CRUISE',
    flightRegime: '固定翼气动升力模态（旋翼仰角 0°，主翼承担全升力）',
    tag: 'F',
    source: 'S8',
    hazards: ['空速管结冰偏置导致迎角超限', '长航时热量积累导致逆变器热保护'],
    systemFocus: '巡航能效优化与机翼结构疲劳寿命监控',
    criticality: '中等（具备固定翼滑翔能力与较大空域高度裕度）'
  },
  {
    id: 'approach',
    name: '进近减速',
    en: 'INBOUND DECELERATION',
    flightRegime: '反向过渡模态（旋翼仰角 0° → 90°）',
    tag: 'A',
    source: 'EX-03',
    hazards: ['涡环状态 (VRS) 气流重摄入导致沉降率骤增', '导航多源传感器延迟引发进近轨迹超差'],
    systemFocus: '升力分配平滑重构与进近低噪声航线跟踪',
    criticality: '高（减速工况下推力快速重整，外界扰动敏感）'
  },
  {
    id: 'landing',
    name: '垂直着陆',
    en: 'VTOL TOUCHDOWN',
    flightRegime: '垂直着陆与悬停接地',
    tag: 'F',
    source: 'S9',
    hazards: ['电池荷电状态 (SOC) 见底导致功率受限', '起落架着地冲击引发二次结构振荡'],
    systemFocus: '末端动力储备判定与地面防倾覆减震',
    criticality: '高（可用剩余电量下限，着陆窗口不可延迟）'
  }
];

export const Act1Ascent: React.FC = () => {
  const { state, dispatch, goToChapter } = useSafetyState();
  const currentPhase = PHASES.find(p => p.id === state.flightPhase) || PHASES[0];

  return (
    <section className="chapter-view" aria-labelledby="act1-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT I · THE ASCENT</span>
          <EvidenceBadge type="F" text="飞行包线基线" sourceId="S5" />
        </div>
        <h2 id="act1-title" className="chapter-heading">升空：全飞行周期的工况与危险源映射</h2>
        <p className="chapter-desc">
          eVTOL 的飞行并非单一工况，而是从垂直起飞、倾转过渡到巡航滑翔的连续动力学转换。每个阶段的物理特性决定了独特的失效边界。
        </p>
      </div>

      {/* 阶段选择器（支持键盘与点击） */}
      <nav className="phase-selector" aria-label="飞行剖面阶段切换">
        {PHASES.map((phase) => {
          const isActive = state.flightPhase === phase.id;
          return (
            <button
              key={phase.id}
              className={`phase-card-btn ${isActive ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_FLIGHT_PHASE', payload: phase.id })}
              aria-current={isActive ? 'true' : undefined}
            >
              <div className="phase-card-step">{phase.en}</div>
              <div className="phase-card-title">{phase.name}</div>
            </button>
          );
        })}
      </nav>

      {/* 当前选中阶段的工程事实与危害深度解析 */}
      <div className="phase-detail-card">
        <div className="card-top-bar">
          <div className="card-title-group">
            <h3 className="phase-title">{currentPhase.name}（{currentPhase.en}）</h3>
            <span className="phase-sub">{currentPhase.flightRegime}</span>
          </div>
          <EvidenceBadge type={currentPhase.tag} sourceId={currentPhase.source} />
        </div>

        <div className="grid-two-col">
          <div className="panel-box">
            <h4 className="box-title">典型运行工况与核心挑战</h4>
            <p className="box-desc">{currentPhase.systemFocus}</p>
            <div className="metric-row">
              <span className="metric-label">安全严苛度：</span>
              <span className="metric-val critical">{currentPhase.criticality}</span>
            </div>
          </div>

          <div className="panel-box">
            <h4 className="box-title">主要危害源与致因机制 [FHA]</h4>
            <ul className="hazard-list">
              {currentPhase.hazards.map((h, i) => (
                <li key={i} className="hazard-item">
                  <span className="bullet">!</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-bottom-actions">
          <span className="link-note">该工况对应的系统物理架构与控制链路解析：</span>
          <button className="text-cta-btn" onClick={() => goToChapter(2)}>
            深入子系统内部剖析 (进入 ACT II) →
          </button>
        </div>
      </div>

      <style>{`
        .chapter-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .chapter-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .chapter-tag-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chapter-code {
          font-family: var(--font-family-mono);
          font-size: 13px;
          color: var(--color-amber);
          font-weight: 700;
          letter-spacing: 1px;
        }
        .chapter-heading {
          font-size: clamp(22px, 3.5vw, 32px);
          font-weight: 800;
          color: var(--color-warm-white);
        }
        .chapter-desc {
          color: var(--color-aluminum);
          max-width: 880px;
          line-height: 1.7;
        }
        .phase-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }
        .phase-card-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 16px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
        }
        .phase-card-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .phase-card-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.1);
          box-shadow: 0 0 12px var(--color-amber-glow);
        }
        .phase-card-step {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .phase-card-title {
          font-size: 15px;
          color: var(--color-warm-white);
          font-weight: 600;
          margin-top: 4px;
        }
        .phase-detail-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .phase-title {
          font-size: 20px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .phase-sub {
          font-size: 13px;
          color: var(--color-aluminum);
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
        .panel-box {
          background: var(--color-graphite-elevated);
          padding: 16px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
        }
        .box-title {
          font-size: 14px;
          color: var(--color-amber);
          margin-bottom: 10px;
          font-weight: 600;
        }
        .box-desc {
          font-size: 14px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
        .metric-row {
          margin-top: 14px;
          font-size: 13px;
          display: flex;
          gap: 6px;
        }
        .metric-label {
          color: var(--color-aluminum);
        }
        .metric-val.critical {
          color: var(--color-risk-red);
          font-weight: 600;
        }
        .hazard-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hazard-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .bullet {
          color: var(--color-amber);
          font-weight: 900;
          font-family: var(--font-family-mono);
        }
        .card-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .link-note {
          font-size: 13px;
          color: var(--color-aluminum);
        }
        .text-cta-btn {
          color: var(--color-amber);
          font-weight: 600;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap var(--transition-nav);
        }
        .text-cta-btn:hover {
          gap: 10px;
          color: #e6a855;
        }
      `}</style>
    </section>
  );
};
