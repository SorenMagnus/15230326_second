import React from 'react';
import { useSafetyState } from '../app/state';
import { ChapterId } from '../app/types';

const CHAPTERS: { id: ChapterId; label: string; en: string; short: string }[] = [
  { id: 0, label: '0 觉醒', en: 'AWAKENING', short: '0' },
  { id: 1, label: 'I 升空', en: 'ASCENT', short: 'I' },
  { id: 2, label: 'II 机器内部', en: 'MACHINE', short: 'II' },
  { id: 3, label: 'III 失效边界', en: 'FAILURE', short: 'III' },
  { id: 4, label: 'IV 工程信任', en: 'TRUST', short: 'IV' },
  { id: 5, label: 'V 结论与证据', en: 'BEYOND', short: 'V' },
];

export const HeaderNav: React.FC = () => {
  const { state, goToChapter, dispatch } = useSafetyState();

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        {/* 品牌标识与主命题 */}
        <div
          className="header-brand"
          onClick={() => goToChapter(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') goToChapter(0);
          }}
          aria-label="返回片头主视觉"
        >
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
                aria-label={`第 ${ch.label} 幕`}
                title={`按快捷键 ${ch.id} 快速切换`}
              >
                <span className="ch-short-badge">{ch.short}</span>
                <span className="ch-full-text">{ch.label.split(' ')[1]}</span>
              </button>
            );
          })}
        </nav>

        {/* 系统控制器：动效/功耗/声音/文献抽屉 (严格落实 Section B3 规范) */}
        <div className="header-controls">
          {/* 声音控制 (B3 规范：默认静音，始终保留关闭声音开关) */}
          <button
            className={`control-pill ${state.isAudioMuted ? '' : 'active-pill'}`}
            onClick={() => dispatch({ type: 'TOGGLE_AUDIO' })}
            title={state.isAudioMuted ? '当前系统处于完全静音状态 (符合 B3 规范)' : '开启本地音效'}
            aria-label="声音开关"
          >
            <span className="pill-icon">{state.isAudioMuted ? '🔇' : '🔊'}</span>
            <span className="pill-text">{state.isAudioMuted ? '静音' : '开启'}</span>
          </button>

          {/* 低动效模式开关 */}
          <button
            className={`control-pill ${state.motionMode === 'reduced' ? 'active-pill' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_MOTION_MODE' })}
            title="切换低动效模式（适合低性能或眩晕敏感用户）"
            aria-label="动效模式切换"
          >
            <span className="pill-icon">{state.motionMode === 'reduced' ? '⚡' : '🌊'}</span>
            <span className="pill-text">{state.motionMode === 'reduced' ? '静态' : '动效'}</span>
          </button>

          {/* 低性能/节能模式开关 */}
          <button
            className={`control-pill ${state.qualityMode === 'eco' ? 'active-pill' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_QUALITY_MODE' })}
            title="切换低功耗节能渲染模式"
            aria-label="功耗模式切换"
          >
            <span className="pill-icon">{state.qualityMode === 'eco' ? '🔋' : '✨'}</span>
            <span className="pill-text">{state.qualityMode === 'eco' ? '节能' : '质感'}</span>
          </button>

          {/* 官方文献抽屉 */}
          <button
            className="control-pill outline-pill"
            onClick={() => dispatch({ type: 'SET_PANEL', payload: 'sources' })}
            title="查看官方证据链与适航参考文献"
            aria-label="打开证据文献与免责声明抽屉"
          >
            <span className="pill-icon">📖</span>
            <span className="pill-text">证据</span>
          </button>
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 14, 19, 0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-graphite-border);
          padding: 0 12px;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          max-width: var(--max-content-width);
          margin: 0 auto;
          gap: 8px;
        }
        .header-brand {
          display: flex;
          align-items: baseline;
          gap: 6px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }
        .brand-title {
          font-family: var(--font-family-cinematic);
          font-size: 15px;
          letter-spacing: 1.2px;
          color: var(--color-warm-white);
          font-weight: 900;
        }
        .brand-sub {
          font-size: 11.5px;
          color: var(--color-aluminum);
          display: none;
        }
        @media (min-width: 1100px) {
          .brand-sub {
            display: inline;
          }
        }
        .chapter-nav {
          display: flex;
          align-items: center;
          gap: 3px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 2px 0;
        }
        .chapter-nav::-webkit-scrollbar {
          display: none;
        }
        .chapter-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          border-radius: 4px;
          color: var(--color-aluminum);
          font-size: 12.5px;
          white-space: nowrap;
          min-height: 34px;
          transition: background var(--transition-nav), color var(--transition-nav);
        }
        .chapter-btn:hover {
          color: var(--color-warm-white);
          background: rgba(184, 193, 200, 0.08);
        }
        .chapter-btn.active {
          color: var(--color-amber);
          background: rgba(217, 154, 69, 0.14);
          font-weight: 700;
        }
        .ch-short-badge {
          font-family: var(--font-family-mono);
          font-size: 11px;
          font-weight: 700;
        }
        .header-controls {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }
        .control-pill {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 5px 8px;
          border-radius: 4px;
          font-size: 11.5px;
          color: var(--color-aluminum);
          background: rgba(184, 193, 200, 0.08);
          border: 1px solid transparent;
          min-height: 32px;
          transition: all var(--transition-nav);
          white-space: nowrap;
        }
        .control-pill:hover {
          color: var(--color-warm-white);
          border-color: var(--color-graphite-border);
        }
        .control-pill.active-pill {
          background: rgba(217, 154, 69, 0.16);
          color: var(--color-amber);
          border-color: rgba(217, 154, 69, 0.35);
        }
        .control-pill.outline-pill {
          border-color: var(--color-graphite-border);
        }
        .pill-icon {
          font-size: 12px;
        }
        /* 响应式断点优化 (针对 360px ~ 480px 窄屏) */
        @media (max-width: 768px) {
          .ch-full-text {
            display: none;
          }
          .chapter-btn {
            padding: 5px 8px;
          }
        }
        @media (max-width: 480px) {
          .brand-title {
            font-size: 13px;
            letter-spacing: 0.5px;
          }
          .pill-text {
            display: none;
          }
          .control-pill {
            padding: 5px 6px;
          }
        }
      `}</style>
    </header>
  );
};
