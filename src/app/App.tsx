import React from 'react';
import { useSafetyState } from './state';
import { HeaderNav } from '../components/HeaderNav';
import { Act0Awakening } from '../chapters/Act0Awakening';
import { Act1Ascent } from '../chapters/Act1Ascent';
import { Act2InsideMachine } from '../chapters/Act2InsideMachine';
import { Act3EdgeOfFailure } from '../chapters/Act3EdgeOfFailure';
import { Act4EngineeringTrust } from '../chapters/Act4EngineeringTrust';
import { Act5BeyondGravity } from '../chapters/Act5BeyondGravity';
import { PanelModal } from '../components/PanelModal';

export const App: React.FC = () => {
  const { state } = useSafetyState();

  const renderCurrentChapter = () => {
    switch (state.chapter) {
      case 0:
        return <Act0Awakening />;
      case 1:
        return <Act1Ascent />;
      case 2:
        return <Act2InsideMachine />;
      case 3:
        return <Act3EdgeOfFailure />;
      case 4:
        return <Act4EngineeringTrust />;
      case 5:
        return <Act5BeyondGravity />;
      default:
        return <Act0Awakening />;
    }
  };

  return (
    <div className="app-container">
      <HeaderNav />
      <main className="main-viewport" id="main-content" tabIndex={-1}>
        {renderCurrentChapter()}
      </main>
      <PanelModal />
      <footer className="site-footer">
        <div className="footer-content">
          <span>BEYOND GRAVITY © 2026 课程作业-2 · 纯静态独立运行版</span>
          <span className="footer-sub">Joby S4 eVTOL 参照研究 ｜ 纯客户端零依赖</span>
        </div>
      </footer>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--color-graphite-border);
          padding: 16px 20px;
          background: rgba(10, 14, 19, 0.95);
          font-size: 12px;
          color: var(--color-aluminum-dim);
        }
        .footer-content {
          max-width: var(--max-content-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </div>
  );
};
