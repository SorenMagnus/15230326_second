import React from 'react';
import { useSafetyState } from '../app/state';
import { ChapterId } from '../app/types';

const CHAPTERS: { id: ChapterId; label: string; en: string }[] = [
  { id: 0, label: '0 觉醒', en: 'AWAKENING' },
  { id: 1, label: 'I 升空', en: 'ASCENT' },
  { id: 2, label: 'II 机器内部', en: 'MACHINE' },
  { id: 3, label: 'III 失效边界', en: 'FAILURE' },
  { id: 4, label: 'IV 工程信任', en: 'TRUST' },
  { id: 5, label: 'V 结论与证据', en: 'BEYOND' },
];

export const HeaderNav: React.FC = () => {
  const { state, goToChapter, dispatch } = useSafetyState();

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        {/* 品牌标识与主命题 */}
        <div className="header-brand" onClick={() => goToChapter(0)} role="button" tabIndex={0}>
          <span className="brand-title">BEYOND GRAVITY</span>
          <span className="brand-sub">《超越重力：天空的代价》</span>
        </div>

        {/* 六幕快速导航 */}
        <nav className="chapter-nav" aria-label="六幕章节导航">
          {CHAPTERS.map((ch) => {
            const isActive = state.chapter === ch.id;
            return (
              <button
                key={ch.id}
                className={`chapter-btn ${isActive ? 'active' : ''}`}
                onClick={() => goToChapter(ch.id)}
                aria-current={isActive ? 'step' : undefined}
                title={`按快捷键 ${ch.id} 快速切换`}
              >
                <span className="ch-num">{ch.label.split(' ')[0]}</span>
                <span className="ch-text">{ch.label.split(' ')[1]}</span>
              </button>
            );
          })}
        </nav>

        {/* 系统控制器：动效/功耗/文献抽屉 */}
        <div className="header-controls">
          <button
            className={`control-pill ${state.motionMode === 'reduced' ? 'active-pill' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_MOTION_MODE' })}
            title="切换低动效模式（适合低性能或眩晕敏感用户）"
          >
            {state.motionMode === 'reduced' ? '⚡ 静态模式' : '🌊 动效正常'}
          </button>

          <button
            className={`control-pill ${state.qualityMode === 'eco' ? 'active-pill' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_QUALITY_MODE' })}
            title="切换低功耗渲染模式"
          >
            {state.qualityMode === 'eco' ? '🔋 节能模式' : '✨ 电影质感'}
          </button>

          <button
            className="control-pill outline-pill"
            onClick={() => dispatch({ type: 'SET_PANEL', payload: 'sources' })}
            title="查看官方证据链与适航参考文献"
          >
            📖 证据文献
          </button>
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 14, 19, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-graphite-border);
          padding: 0 16px;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          max-width: var(--max-content-width);
          margin: 0 auto;
          gap: 12px;
        }
        .header-brand {
          display: flex;
          align-items: baseline;
          gap: 8px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }
        .brand-title {
          font-family: var(--font-family-cinematic);
          font-size: 16px;
          letter-spacing: 1.5px;
          color: var(--color-warm-white);
          font-weight: 900;
        }
        .brand-sub {
          font-size: 12px;
          color: var(--color-aluminum);
          display: none;
        }
        @media (min-width: 1024px) {
          .brand-sub {
            display: inline;
          }
        }
        .chapter-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .chapter-nav::-webkit-scrollbar {
          display: none;
        }
        .chapter-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 4px;
          color: var(--color-aluminum);
          font-size: 13px;
          white-space: nowrap;
          transition: background var(--transition-nav), color var(--transition-nav);
        }
        .chapter-btn:hover {
          color: var(--color-warm-white);
          background: rgba(184, 193, 200, 0.08);
        }
        .chapter-btn.active {
          color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          font-weight: 600;
        }
        .ch-num {
          font-family: var(--font-family-mono);
          font-size: 11px;
          opacity: 0.8;
        }
        .header-controls {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .control-pill {
          padding: 5px 9px;
          border-radius: 4px;
          font-size: 12px;
          color: var(--color-aluminum);
          background: rgba(184, 193, 200, 0.08);
          border: 1px solid transparent;
          transition: all var(--transition-nav);
          white-space: nowrap;
        }
        .control-pill:hover {
          color: var(--color-warm-white);
          border-color: var(--color-graphite-border);
        }
        .control-pill.active-pill {
          background: rgba(217, 154, 69, 0.15);
          color: var(--color-amber);
          border-color: rgba(217, 154, 69, 0.3);
        }
        .control-pill.outline-pill {
          border-color: var(--color-graphite-border);
        }
        @media (max-width: 640px) {
          .ch-text {
            display: none;
          }
          .brand-title {
            font-size: 13px;
          }
          .control-pill {
            padding: 4px 6px;
            font-size: 11px;
          }
        }
      `}</style>
    </header>
  );
};
