import React, { useEffect, useState } from 'react';
import { useSafetyState } from '../app/state';
import { EvidenceBadge } from '../components/EvidenceBadge';

export const Act0Awakening: React.FC = () => {
  const { state, goToChapter } = useSafetyState();
  const [timelineStep, setTimelineStep] = useState<number>(0);

  // 一条可严格清理与取消的轻量级时间线（100% 纯定时器与 CSS 配合，零 WebGL，零外部开销）
  useEffect(() => {
    if (state.motionMode === 'reduced') {
      setTimelineStep(3); // 静态模式直接处于完全揭示状态
      return;
    }

    const t1 = setTimeout(() => setTimelineStep(1), 250);  // 轮廓光侧照
    const t2 = setTimeout(() => setTimelineStep(2), 800);  // 标题与副标淡入
    const t3 = setTimeout(() => setTimelineStep(3), 1400); // 交互控制按钮完全就绪

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [state.motionMode]);

  const handleSkipOrEnter = () => {
    goToChapter(1);
  };

  return (
    <section className="act0-viewport" aria-labelledby="act0-title">
      {/* 快捷常驻跳过按钮（无论动画播到哪一帧，用户随时可一键瞬时跳过，彻底消除强迫等待） */}
      <button
        className="persistent-skip-floating-btn"
        onClick={handleSkipOrEnter}
        aria-label="跳过片头动画"
      >
        跳过片头 (Skip) ➔
      </button>

      {/* 电影式深色背景与侧逆光氛围层 */}
      <div className={`scene-backdrop step-${timelineStep}`}>
        <div className="rim-light-beam" aria-hidden="true" />
      </div>

      <div className="act0-container">
        {/* 元信息标注 */}
        <div className={`meta-row step-${timelineStep}`}>
          <EvidenceBadge type="F" text="高校安全工程作业" sourceId="S5" />
          <span className="prototype-label">JOBY S4 气动原型参照 · 系统安全工程独立版</span>
        </div>

        {/* 核心飞行器机身矢量剪影与动态光晕线框 */}
        <div className={`silhouette-box step-${timelineStep}`}>
          <svg viewBox="0 0 800 320" className="cinema-aircraft-svg" aria-hidden="true">
            <defs>
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#D99A45" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#D99A45" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0A0E13" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="bodyGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#1B2430" />
                <stop offset="70%" stopColor="#253243" />
                <stop offset="100%" stopColor="#0A0E13" />
              </linearGradient>
            </defs>

            {/* 侧逆光照亮机背轮廓 */}
            <path
              d="M 80 200 Q 240 190 380 178 L 700 170 Q 740 172 760 182 Q 720 205 580 210 L 300 215 Z"
              fill="url(#bodyGrad)"
              stroke="#B8C1C8"
              strokeWidth="1.2"
              className="aircraft-fuselage"
            />

            {/* 六组旋翼支架与桨盘扫描线 */}
            {/* 翼尖左旋翼 #1 */}
            <g className="rotor-assembly rotor-1">
              <line x1="220" y1="188" x2="220" y2="80" stroke="#D99A45" strokeWidth="2" />
              <ellipse cx="220" cy="80" rx="42" ry="12" fill="none" stroke="url(#beamGrad)" strokeWidth="1.8" />
              <circle cx="220" cy="80" r="3" fill="#F2EFE7" />
            </g>

            {/* 主机翼与机翼高光 */}
            <path d="M 220 188 L 480 120 L 510 124 L 280 202 Z" fill="rgba(184, 193, 200, 0.12)" stroke="#B8C1C8" strokeWidth="1.2" />

            {/* 内侧旋翼 #2 */}
            <g className="rotor-assembly rotor-2">
              <line x1="330" y1="156" x2="330" y2="95" stroke="#D99A45" strokeWidth="1.8" />
              <ellipse cx="330" cy="95" rx="36" ry="10" fill="none" stroke="#D99A45" strokeWidth="1.4" strokeDasharray="4 2" />
              <circle cx="330" cy="95" r="2.5" fill="#F2EFE7" />
            </g>

            {/* 机翼右前旋翼 #3 */}
            <g className="rotor-assembly rotor-3">
              <line x1="450" y1="126" x2="450" y2="75" stroke="#D99A45" strokeWidth="1.8" />
              <ellipse cx="450" cy="75" rx="38" ry="11" fill="none" stroke="url(#beamGrad)" strokeWidth="1.6" />
              <circle cx="450" cy="75" r="2.5" fill="#F2EFE7" />
            </g>

            {/* V 尾翼与尾旋翼 #4, #5, #6 */}
            <path d="M 670 170 L 730 90 L 748 93 L 702 174 Z" fill="rgba(217, 154, 69, 0.15)" stroke="#D99A45" strokeWidth="1.2" />
            <g className="rotor-assembly rotor-tail">
              <circle cx="730" cy="90" r="24" fill="none" stroke="#D99A45" strokeWidth="1.2" strokeDasharray="3 3" />
              <circle cx="730" cy="90" r="3" fill="#D99A45" />
            </g>
          </svg>
        </div>

        {/* 电影级标题与命题文本 */}
        <div className={`hero-text-block step-${timelineStep}`}>
          <div className="title-en-pre">SYSTEM SAFETY ENGINEERING EXPLORATION</div>
          <h1 id="act0-title" className="hero-main-title">
            WHAT MAKES FLIGHT SAFE?
          </h1>
          <p className="hero-desc">
            究竟是什么赋予飞行以安全？人类飞向天空的每一米，都必须由系统安全工程证据偿付。
          </p>
        </div>

        {/* 交互按钮组 */}
        <div className={`hero-actions step-${timelineStep}`}>
          <button
            className="action-enter-btn"
            onClick={handleSkipOrEnter}
            autoFocus
            aria-label="进入安全分析展览"
          >
            <span>进入安全分析展览</span>
            <span className="btn-arrow">→</span>
          </button>

          <button
            className="action-skip-btn"
            onClick={handleSkipOrEnter}
            aria-label="跳过片头进入正文"
          >
            跳过片头 (Skip)
          </button>
        </div>

        {/* 免责声明 */}
        <div className="bottom-disclaimer">
          <small>
            <strong>严谨性声明：</strong>本项目为课程教学与系统安全工程推演，非 Joby Aviation 或 FAA/EASA 的官方安全审定报告。
          </small>
        </div>
      </div>

      <style>{`
        .act0-viewport {
          position: relative;
          min-height: calc(100vh - var(--header-height) - 75px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 100%;
        }
        .persistent-skip-floating-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 50;
          background: rgba(18, 25, 34, 0.85);
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 12px;
          font-family: var(--font-family-mono);
          cursor: pointer;
          transition: all var(--transition-nav);
        }
        .persistent-skip-floating-btn:hover {
          color: var(--color-amber);
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
        }
        .scene-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .rim-light-beam {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 380px;
          background: radial-gradient(ellipse at center, rgba(217, 154, 69, 0.18) 0%, rgba(10, 14, 19, 0) 70%);
          filter: blur(40px);
          opacity: 0.2;
          transition: opacity 800ms ease;
        }
        .step-1 .rim-light-beam, .step-2 .rim-light-beam, .step-3 .rim-light-beam {
          opacity: 0.9;
        }
        .act0-container {
          position: relative;
          z-index: 1;
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 16px;
          gap: 18px;
        }
        .meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(8px);
          transition: all 400ms ease;
        }
        .step-1 .meta-row, .step-2 .meta-row, .step-3 .meta-row {
          opacity: 1;
          transform: translateY(0);
        }
        .prototype-label {
          font-size: 12.5px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .silhouette-box {
          width: 100%;
          max-width: 680px;
          opacity: 0.1;
          transform: scale(0.96);
          filter: drop-shadow(0 0 20px rgba(217, 154, 69, 0.15));
          transition: all 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .step-1 .silhouette-box, .step-2 .silhouette-box, .step-3 .silhouette-box {
          opacity: 1;
          transform: scale(1);
          filter: drop-shadow(0 0 30px rgba(217, 154, 69, 0.3));
        }
        .cinema-aircraft-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .hero-text-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .step-2 .hero-text-block, .step-3 .hero-text-block {
          opacity: 1;
          transform: translateY(0);
        }
        .title-en-pre {
          font-family: var(--font-family-mono);
          font-size: 11px;
          color: var(--color-amber);
          letter-spacing: 2px;
          font-weight: 700;
        }
        .hero-main-title {
          font-family: var(--font-family-cinematic);
          font-size: clamp(26px, 5.5vw, 50px);
          color: var(--color-warm-white);
          letter-spacing: 2.5px;
          font-weight: 900;
          line-height: 1.15;
          text-shadow: 0 4px 18px rgba(0, 0, 0, 0.8);
        }
        .hero-desc {
          font-size: clamp(14px, 2vw, 17px);
          color: var(--color-aluminum);
          max-width: 620px;
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 8px;
          opacity: 0.2;
          transform: translateY(6px);
          transition: all 500ms ease;
        }
        .step-3 .hero-actions {
          opacity: 1;
          transform: translateY(0);
        }
        .action-enter-btn {
          background: var(--color-amber);
          color: var(--color-graphite);
          font-weight: 700;
          font-size: 14.5px;
          padding: 12px 28px;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all var(--transition-nav);
          box-shadow: 0 4px 16px rgba(217, 154, 69, 0.35);
          min-height: 44px;
        }
        .action-enter-btn:hover {
          background: #e6a855;
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(217, 154, 69, 0.5);
        }
        .btn-arrow {
          font-size: 16px;
          transition: transform var(--transition-nav);
        }
        .action-enter-btn:hover .btn-arrow {
          transform: translateX(4px);
        }
        .action-skip-btn {
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
          padding: 12px 22px;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
          transition: all var(--transition-nav);
          min-height: 44px;
        }
        .action-skip-btn:hover {
          border-color: var(--color-aluminum);
          color: var(--color-warm-white);
        }
        .bottom-disclaimer {
          margin-top: 20px;
          font-size: 11.5px;
          color: var(--color-aluminum-dim);
          max-width: 580px;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
