import React from 'react';
import { useSafetyState } from '../app/state';
import { EvidenceBadge } from '../components/EvidenceBadge';

export const Act0Awakening: React.FC = () => {
  const { goToChapter } = useSafetyState();

  return (
    <section className="act-screen act-0" aria-labelledby="act0-heading">
      <div className="act0-content">
        <div className="status-meta">
          <EvidenceBadge type="F" text="高校安全工程作业" sourceId="S5" />
          <span className="meta-text">JOBY S4 eVTOL 参照研究 · 纯静态独立运行版</span>
        </div>

        <div className="silhouette-preview" aria-hidden="true">
          <svg viewBox="0 0 600 240" className="aircraft-svg">
            {/* 极简技术侧逆光剪影线框 */}
            <defs>
              <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D99A45" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D99A45" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* 机身轮廓与机翼基线 */}
            <path
              d="M 50 150 Q 180 145 280 135 L 520 130 Q 550 132 570 140 Q 530 155 420 158 L 220 162 Z"
              fill="rgba(184, 193, 200, 0.08)"
              stroke="#B8C1C8"
              strokeWidth="1.5"
            />
            {/* 主机翼与旋翼支架 */}
            <path d="M 160 145 L 360 85 L 390 88 L 210 155 Z" fill="rgba(217, 154, 69, 0.12)" stroke="#D99A45" strokeWidth="1.2" />
            <line x1="360" y1="85" x2="360" y2="60" stroke="#D99A45" strokeWidth="2" />
            <circle cx="360" cy="55" r="30" fill="none" stroke="url(#amberGlow)" strokeDasharray="3 3" />
            {/* V 尾翼轮廓 */}
            <path d="M 500 130 L 550 70 L 565 72 L 525 133 Z" fill="rgba(184, 193, 200, 0.08)" stroke="#B8C1C8" strokeWidth="1.2" />
            <circle cx="550" cy="70" r="18" fill="none" stroke="#D99A45" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        </div>

        <h1 id="act0-heading" className="main-title">
          WHAT MAKES FLIGHT SAFE?
        </h1>
        <p className="main-subtitle">
          究竟是什么赋予飞行以安全？人类飞向天空的每一米，都必须由精确的工程证据偿付。
        </p>

        <div className="act0-actions">
          <button className="primary-btn" onClick={() => goToChapter(1)} autoFocus>
            进入安全分析 (Enter) →
          </button>
          <button className="secondary-btn" onClick={() => goToChapter(1)}>
            跳过片头 (Skip)
          </button>
        </div>

        <div className="disclaimer-note">
          <small>
            <strong>免责声明：</strong>本项目为课程教学与系统安全工程研究，非 Joby Aviation 或 FAA/EASA 官方安全审定结果。
          </small>
        </div>
      </div>

      <style>{`
        .act-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - var(--header-height) - 80px);
          text-align: center;
        }
        .act0-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .status-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .meta-text {
          font-size: 13px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .silhouette-preview {
          width: 100%;
          max-width: 540px;
          margin: 10px 0;
        }
        .aircraft-svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 15px var(--color-amber-glow));
        }
        .main-title {
          font-family: var(--font-family-cinematic);
          font-size: clamp(28px, 5vw, 48px);
          letter-spacing: 2px;
          color: var(--color-warm-white);
          font-weight: 900;
          line-height: 1.15;
        }
        .main-subtitle {
          font-size: clamp(14px, 2vw, 17px);
          color: var(--color-aluminum);
          max-width: 600px;
          line-height: 1.7;
        }
        .act0-actions {
          display: flex;
          gap: 14px;
          margin-top: 10px;
        }
        .primary-btn {
          background: var(--color-amber);
          color: var(--color-graphite);
          font-weight: 700;
          padding: 11px 26px;
          border-radius: 4px;
          font-size: 14px;
          letter-spacing: 0.5px;
          transition: transform var(--transition-nav), background var(--transition-nav);
        }
        .primary-btn:hover {
          background: #e6a855;
          transform: translateY(-1px);
        }
        .secondary-btn {
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
          padding: 11px 22px;
          border-radius: 4px;
          font-size: 14px;
          transition: all var(--transition-nav);
        }
        .secondary-btn:hover {
          color: var(--color-warm-white);
          border-color: var(--color-aluminum);
        }
        .disclaimer-note {
          margin-top: 24px;
          color: var(--color-aluminum-dim);
          font-size: 12px;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
