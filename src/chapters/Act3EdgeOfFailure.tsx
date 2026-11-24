import React, { useState } from 'react';
import { useSafetyState } from '../app/state';
import { CORE_RISK_RECORDS } from '../safety/data';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { FtaTreeViewer } from '../components/FtaTreeViewer';
import { StpaDiagram } from '../components/StpaDiagram';
import { RiskPropagationGraph } from '../visuals/RiskPropagationGraph';

export const Act3EdgeOfFailure: React.FC = () => {
  const { state, dispatch, goToChapter } = useSafetyState();
  const [analysisView, setAnalysisView] = useState<'causal' | 'fta' | 'stpa'>('causal');
  const [activeNodeIdx, setActiveNodeIdx] = useState<number>(0);

  const currentScenario = CORE_RISK_RECORDS.find(s => s.id === state.selectedScenario) || CORE_RISK_RECORDS[0];

  const handleScenarioChange = (scenarioId: string) => {
    dispatch({ type: 'SET_SCENARIO', payload: scenarioId as any });
    setActiveNodeIdx(0);
  };

  const getNodeDetailText = (index: number) => {
    switch (index) {
      case 0:
        return {
          title: '节点 01：始发危险源 (Hazard Trigger)',
          desc: currentScenario.hazard,
          extra: `运行情境：${currentScenario.operationalContext}`,
        };
      case 1:
        return {
          title: '节点 02：物理/逻辑致因机制 (Failure Mechanism)',
          desc: currentScenario.failureMechanism,
          extra: '涉及系统边界与内部元器件故障模式。',
        };
      case 2:
        return {
          title: '节点 03：跨系统连锁扩散 (System-level Propagation)',
          desc: currentScenario.propagationNodes.join(' ➔ '),
          extra: '物理状态变化向控制回路与整机姿态动力学传导。',
        };
      case 3:
        return {
          title: '节点 04：最终飞机级后果 (Flight Consequence)',
          desc: currentScenario.consequence,
          extra: `危害定级：${currentScenario.severity}`,
        };
      default:
        return { title: '', desc: '', extra: '' };
    }
  };

  const activeNodeInfo = getNodeDetailText(activeNodeIdx);

  return (
    <section className="chapter-view" aria-labelledby="act3-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT III · THE EDGE OF FAILURE</span>
          <EvidenceBadge type="A" text="教学故障因果推演" sourceId="M1" />
        </div>
        <h2 id="act3-title" className="chapter-heading">失效边界：因果传播链、故障树与控制回路</h2>
        <p className="chapter-desc">
          安全并非来自“永不损坏”的幻想，而是源于对每一次失效如何发生、如何扩散、如何被遏制的精密推演。支持在因果链、FTA 树与 STPA 控制回路三维度间无缝对比分析。
        </p>
      </div>

      {/* 分析维度切换栏 (Causal Chain / FTA / STPA) */}
      <div className="view-mode-bar">
        <button
          className={`view-mode-btn ${analysisView === 'causal' ? 'active' : ''}`}
          onClick={() => setAnalysisView('causal')}
        >
          ⛓️ 动态因果传播链 (Causal Chain)
        </button>
        <button
          className={`view-mode-btn ${analysisView === 'fta' ? 'active' : ''}`}
          onClick={() => setAnalysisView('fta')}
        >
          🌲 故障树顶事件布尔分解 (FTA)
        </button>
        <button
          className={`view-mode-btn ${analysisView === 'stpa' ? 'active' : ''}`}
          onClick={() => setAnalysisView('stpa')}
        >
          🔄 STPA 控制回路与不安全控制动作 (UCA)
        </button>
      </div>

      {/* 视图 1：动态因果传播链 */}
      {analysisView === 'causal' && (
        <>
          {/* 场景切换按钮组 */}
          <div className="scenario-switcher">
            {CORE_RISK_RECORDS.map((sc) => {
              const isSelected = state.selectedScenario === sc.id;
              return (
                <button
                  key={sc.id}
                  className={`scenario-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleScenarioChange(sc.id)}
                >
                  <span className="sc-id">{sc.id}</span>
                  <span className="sc-title">{sc.hazard.slice(0, 22)}...</span>
                </button>
              );
            })}
          </div>

          <div className="causal-pipeline-card">
            <div className="pipeline-header">
              <div className="header-info">
                <h3 className="scenario-name">情境分析：{currentScenario.id} · {currentScenario.hazard}</h3>
                <span className="scenario-ctx"><strong>运行工况环境：</strong>{currentScenario.operationalContext}</span>
              </div>
              <EvidenceBadge type={currentScenario.evidenceStatus} sourceId={currentScenario.sources[0]} />
            </div>

            {/* 动态 SVG 因果拓扑流图 */}
            <RiskPropagationGraph
              scenario={currentScenario}
              activeNodeIndex={activeNodeIdx}
              onSelectNodeIndex={(idx) => setActiveNodeIdx(idx)}
            />

            {/* 点击节点激活的实时数据与深度解释面板 */}
            <div className="node-active-panel">
              <div className="node-panel-header">
                <span className="active-tag">当前聚焦推演阶段</span>
                <h4 className="node-panel-title">{activeNodeInfo.title}</h4>
              </div>
              <p className="node-panel-desc">{activeNodeInfo.desc}</p>
              <span className="node-panel-extra">{activeNodeInfo.extra}</span>
            </div>

            {/* 阶段式因果链卡片 */}
            <div className="propagation-chain">
              <div
                className={`chain-step step-hazard ${activeNodeIdx === 0 ? 'selected-step' : ''}`}
                onClick={() => setActiveNodeIdx(0)}
              >
                <div className="step-tag">01 · 始发危险源 (Hazard)</div>
                <div className="step-content">{currentScenario.hazard}</div>
              </div>

              <div
                className={`chain-step step-mech ${activeNodeIdx === 1 ? 'selected-step' : ''}`}
                onClick={() => setActiveNodeIdx(1)}
              >
                <div className="step-tag">02 · 微观致因机理 (Mechanism)</div>
                <div className="step-content">{currentScenario.failureMechanism}</div>
              </div>

              <div
                className={`chain-step step-prop ${activeNodeIdx === 2 ? 'selected-step' : ''}`}
                onClick={() => setActiveNodeIdx(2)}
              >
                <div className="step-tag">03 · 系统级连锁传播 (Propagation)</div>
                <ul className="prop-list">
                  {currentScenario.propagationNodes.map((node, idx) => (
                    <li key={idx} className="prop-node">
                      <span className="prop-arrow">→</span>
                      <span>{node}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`chain-step step-conseq ${activeNodeIdx === 3 ? 'selected-step' : ''}`}
                onClick={() => setActiveNodeIdx(3)}
              >
                <div className="step-tag">04 · 最终系统后果 (Consequence)</div>
                <div className="step-content text-risk">{currentScenario.consequence}</div>
                <div className="severity-badge">{currentScenario.severity}</div>
              </div>
            </div>

            {/* 防护与验证连接条 */}
            <div className="mitigation-row">
              <div className="mitigation-box">
                <span className="mitigation-label">🛡️ 拟议工程控制措施：</span>
                <ul className="sub-item-list">
                  {currentScenario.proposedControls.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div className="mitigation-box">
                <span className="mitigation-label">🧪 适航符合性验证方法：</span>
                <ul className="sub-item-list">
                  {currentScenario.verificationMethods.map((v, i) => (
                    <li key={i}>• {v}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pipeline-footer">
              <span className="residual-hint">⚠️ 残余风险与不确定性：{currentScenario.residualRisk}</span>
              <button className="primary-link-btn" onClick={() => goToChapter(4)}>
                查阅纵深防御矩阵与验证证据 (进入 ACT IV) →
              </button>
            </div>
          </div>
        </>
      )}

      {/* 视图 2：FTA 故障树 */}
      {analysisView === 'fta' && <FtaTreeViewer />}

      {/* 视图 3：STPA 控制回路 */}
      {analysisView === 'stpa' && <StpaDiagram />}

      <style>{`
        .view-mode-bar {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 14px;
        }
        .view-mode-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 10px 16px;
          border-radius: 6px;
          color: var(--color-aluminum);
          font-size: 13.5px;
          font-weight: 600;
          transition: all var(--transition-nav);
        }
        .view-mode-btn:hover {
          color: var(--color-warm-white);
          border-color: var(--color-aluminum);
        }
        .view-mode-btn.active {
          background: rgba(217, 154, 69, 0.15);
          color: var(--color-amber);
          border-color: var(--color-amber);
        }
        .scenario-switcher {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }
        .scenario-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 18px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .scenario-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .scenario-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          box-shadow: 0 0 14px var(--color-amber-glow);
        }
        .sc-id {
          font-family: var(--font-family-mono);
          font-size: 11px;
          color: var(--color-amber);
          font-weight: 700;
        }
        .sc-title {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 600;
        }
        .causal-pipeline-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pipeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .scenario-name {
          font-size: 18px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .scenario-ctx {
          font-size: 13px;
          color: var(--color-aluminum);
          margin-top: 4px;
          display: block;
        }
        .node-active-panel {
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-amber);
          border-radius: 6px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: 0 0 16px rgba(217, 154, 69, 0.12);
        }
        .node-panel-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .active-tag {
          font-size: 10.5px;
          background: rgba(217, 154, 69, 0.2);
          color: var(--color-amber);
          padding: 2px 6px;
          border-radius: 3px;
          font-weight: bold;
          font-family: var(--font-family-mono);
        }
        .node-panel-title {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .node-panel-desc {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
        .node-panel-extra {
          font-size: 12px;
          color: var(--color-aluminum);
        }
        .propagation-chain {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
        }
        .chain-step {
          background: var(--color-graphite-elevated);
          padding: 16px;
          border-radius: 6px;
          border-top: 3px solid var(--color-aluminum-dim);
          display: flex;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;
          transition: all var(--transition-nav);
        }
        .chain-step:hover {
          background: rgba(184, 193, 200, 0.08);
        }
        .chain-step.selected-step {
          border-top-color: var(--color-amber) !important;
          box-shadow: 0 0 12px var(--color-amber-glow);
        }
        .step-hazard {
          border-top-color: var(--color-amber);
        }
        .step-mech {
          border-top-color: var(--color-tech-blue);
        }
        .step-prop {
          border-top-color: #d88e36;
        }
        .step-conseq {
          border-top-color: var(--color-risk-red);
        }
        .step-tag {
          font-size: 11px;
          font-family: var(--font-family-mono);
          color: var(--color-aluminum);
          text-transform: uppercase;
        }
        .step-content {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .step-content.text-risk {
          color: #f1928b;
          font-weight: 600;
        }
        .severity-badge {
          margin-top: auto;
          font-size: 11.5px;
          background: rgba(185, 76, 68, 0.2);
          border: 1px solid rgba(185, 76, 68, 0.4);
          color: #f1928b;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        .prop-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .prop-node {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 12.5px;
          color: var(--color-warm-white);
          line-height: 1.4;
        }
        .prop-arrow {
          color: var(--color-amber);
          font-weight: bold;
        }
        .mitigation-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 800px) {
          .mitigation-row {
            grid-template-columns: 1fr;
          }
        }
        .mitigation-box {
          background: rgba(217, 154, 69, 0.08);
          border: 1px solid rgba(217, 154, 69, 0.2);
          padding: 12px 14px;
          border-radius: 6px;
          font-size: 13px;
        }
        .mitigation-label {
          color: var(--color-amber);
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
        }
        .sub-item-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12.5px;
          color: var(--color-warm-white);
          line-height: 1.45;
        }
        .pipeline-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .residual-hint {
          font-size: 12.5px;
          color: var(--color-aluminum);
        }
        .primary-link-btn {
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
