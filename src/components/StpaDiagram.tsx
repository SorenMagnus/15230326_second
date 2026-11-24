import React, { useState } from 'react';
import { STPA_MODEL } from '../safety/data';
import { StpaUca } from '../safety/types';
import { EvidenceBadge } from './EvidenceBadge';

export const StpaDiagram: React.FC = () => {
  const [selectedUcaId, setSelectedUcaId] = useState<string>(STPA_MODEL.ucas[0].id);

  const selectedUca = STPA_MODEL.ucas.find(u => u.id === selectedUcaId) || STPA_MODEL.ucas[0];

  const getTypeName = (type: StpaUca['type']) => {
    switch (type) {
      case 'NotProviding':
        return '类型 1 · 未提供必要控制动作 (Not Providing)';
      case 'ProvidingCausesHazard':
        return '类型 2 · 错误提供导致危害 (Providing Causes Hazard)';
      case 'WrongTiming':
        return '类型 3 · 动作时序或次序错误 (Wrong Timing/Order)';
      case 'StoppedTooSoon':
        return '类型 4 · 动作持续过久或过早停止 (Stopped Too Soon)';
    }
  };

  return (
    <div className="stpa-container">
      <div className="stpa-header">
        <div>
          <h4 className="stpa-title">系统理论过程分析 (STPA) 控制回路与不安全控制动作</h4>
          <span className="stpa-subtitle">基于系统控制回路动态反馈缺失与 UCA 因果分析 (Nancy Leveson 模型)</span>
        </div>
        <EvidenceBadge type="A" text="STPA 控制回路" sourceId="M3" />
      </div>

      {/* 控制回路拓扑架构图 */}
      <div className="control-loop-schematic">
        <div className="loop-box controller-box">
          <span className="box-badge">控制者 (CONTROLLER)</span>
          <div className="box-content">{STPA_MODEL.controller}</div>
        </div>

        <div className="loop-flow-arrow down-arrow">
          <span className="arrow-label">下发控制动作 (Control Actions)</span>
          <div className="action-tags">
            {STPA_MODEL.controlActions.map((act, i) => (
              <span key={i} className="action-tag">{act}</span>
            ))}
          </div>
        </div>

        <div className="loop-middle-grid">
          <div className="loop-box actuator-box">
            <span className="box-badge">执行机构 (ACTUATORS)</span>
            <div className="box-content">{STPA_MODEL.actuators}</div>
          </div>

          <div className="loop-box process-box">
            <span className="box-badge">受控过程 (CONTROLLED PROCESS)</span>
            <div className="box-content">{STPA_MODEL.controlledProcess}</div>
          </div>

          <div className="loop-box sensor-box">
            <span className="box-badge">传感器系统 (SENSORS)</span>
            <div className="box-content">{STPA_MODEL.sensors}</div>
          </div>
        </div>

        <div className="loop-flow-arrow up-arrow">
          <span className="arrow-label">状态反馈回路 (Feedback Loops)</span>
          <div className="feedback-tags">
            {STPA_MODEL.feedbacks.map((fb, i) => (
              <span key={i} className="fb-tag">{fb}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 不安全控制行为 (UCA) 深度解析选择器 */}
      <div className="uca-section">
        <h5 className="uca-section-title">四类典型不安全控制行为 (Unsafe Control Actions - UCA)</h5>
        
        <div className="uca-buttons-grid">
          {STPA_MODEL.ucas.map((uca) => {
            const isSelected = selectedUcaId === uca.id;
            return (
              <button
                key={uca.id}
                className={`uca-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedUcaId(uca.id)}
              >
                <span className="uca-tab-id">{uca.id}</span>
                <span className="uca-tab-name">{getTypeName(uca.type)}</span>
              </button>
            );
          })}
        </div>

        <div className="uca-detail-card">
          <div className="uca-detail-top">
            <div className="uca-meta-item">
              <span className="meta-label">受审控制动作：</span>
              <span className="meta-val">{selectedUca.controlAction}</span>
            </div>
            <div className="uca-meta-item">
              <span className="meta-label">运行情境上下文：</span>
              <span className="meta-val">{selectedUca.context}</span>
            </div>
          </div>

          <div className="uca-hazard-link">
            <span className="hazard-label">关联系统级危害：</span>
            <span className="hazard-val">{selectedUca.hazardLink}</span>
          </div>

          <div className="uca-rationale">
            <span className="rationale-label">致因机理与反馈缺失阐释：</span>
            <p className="rationale-text">{selectedUca.rationale}</p>
          </div>
        </div>
      </div>

      <style>{`
        .stpa-container {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .stpa-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 14px;
        }
        .stpa-title {
          font-size: 16px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .stpa-subtitle {
          font-size: 12px;
          color: var(--color-aluminum);
          display: block;
          margin-top: 2px;
        }
        .control-loop-schematic {
          background: var(--color-graphite-elevated);
          padding: 20px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: center;
        }
        .loop-box {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 6px;
          padding: 12px 18px;
          text-align: center;
          width: 100%;
        }
        .controller-box {
          max-width: 500px;
          border-color: var(--color-amber);
        }
        .box-badge {
          font-size: 10px;
          color: var(--color-amber);
          font-family: var(--font-family-mono);
          font-weight: 700;
          display: block;
          margin-bottom: 4px;
        }
        .box-content {
          font-size: 13.5px;
          color: var(--color-warm-white);
          font-weight: 600;
        }
        .loop-flow-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
        }
        .arrow-label {
          font-size: 11px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .action-tags, .feedback-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .action-tag {
          background: rgba(217, 154, 69, 0.15);
          color: #f3c47e;
          border: 1px solid rgba(217, 154, 69, 0.3);
          font-size: 11.5px;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .fb-tag {
          background: rgba(78, 122, 148, 0.2);
          color: #8ec2e6;
          border: 1px solid rgba(78, 122, 148, 0.35);
          font-size: 11.5px;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .loop-middle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
          width: 100%;
        }
        .uca-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .uca-section-title {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 600;
        }
        .uca-buttons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 8px;
        }
        .uca-tab-btn {
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          padding: 10px 14px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .uca-tab-btn:hover {
          border-color: var(--color-aluminum);
        }
        .uca-tab-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
        }
        .uca-tab-id {
          font-size: 11px;
          font-family: var(--font-family-mono);
          color: var(--color-amber);
          font-weight: 700;
        }
        .uca-tab-name {
          font-size: 12px;
          color: var(--color-warm-white);
          line-height: 1.35;
        }
        .uca-detail-card {
          background: var(--color-graphite-elevated);
          padding: 18px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .uca-detail-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .uca-detail-top {
            grid-template-columns: 1fr;
          }
        }
        .uca-meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .meta-label {
          font-size: 11px;
          color: var(--color-aluminum-dim);
        }
        .meta-val {
          font-size: 13.5px;
          color: var(--color-warm-white);
          font-weight: 500;
        }
        .uca-hazard-link {
          background: rgba(185, 76, 68, 0.12);
          border: 1px solid rgba(185, 76, 68, 0.3);
          padding: 10px 12px;
          border-radius: 4px;
          font-size: 13px;
        }
        .hazard-label {
          color: #f1928b;
          font-weight: bold;
          margin-right: 6px;
        }
        .hazard-val {
          color: var(--color-warm-white);
        }
        .uca-rationale {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .rationale-label {
          font-size: 12px;
          color: var(--color-amber);
          font-weight: 600;
        }
        .rationale-text {
          font-size: 13px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
