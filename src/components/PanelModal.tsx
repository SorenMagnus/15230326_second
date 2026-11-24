import React from 'react';
import { useSafetyState } from '../app/state';

const SOURCES_DATA = [
  { id: 'S4', title: 'GitHub Pages 静态构建与发布源配置规范', link: 'https://docs.github.com/en/pages', date: '2026-11-20' },
  { id: 'S5', title: 'FAA AC 21.17-4: Type Certification—Powered-lift', link: 'https://www.faa.gov/regulations_policies/advisory_circulars', date: '2026-11-20' },
  { id: 'S6', title: 'FAA Advanced Air Mobility (AAM) Integration Need-to-Know', link: 'https://www.faa.gov/aam', date: '2026-11-20' },
  { id: 'S7', title: 'EASA Special Condition for VTOL and Means of Compliance', link: 'https://www.easa.europa.eu', date: '2026-11-20' },
  { id: 'S8', title: 'EASA MOC SC-VTOL Issue 2 (推力矢量与多升力源冗余)', link: 'https://www.easa.europa.eu', date: '2026-11-20' },
  { id: 'S9', title: 'FAA Pilot Training & Certification for Powered-Lift', link: 'https://www.faa.gov', date: '2026-11-20' },
  { id: 'M1', title: 'SAE ARP4761: Civil Airborne Systems Safety Assessment Guidelines', link: 'SAE International', date: '2026-11-20' },
  { id: 'M2', title: 'SAE ARP4754A: Development of Civil Aircraft and Systems', link: 'SAE International', date: '2026-11-20' },
  { id: 'J1', title: 'Joby Aviation SEC 10-K / 10-Q 年度与季度公开披露文件', link: 'SEC EDGAR', date: '2026-11-20' },
];

export const PanelModal: React.FC = () => {
  const { state, dispatch } = useSafetyState();

  if (state.openPanel === 'none') return null;

  return (
    <div className="modal-backdrop" onClick={() => dispatch({ type: 'SET_PANEL', payload: 'none' })}>
      <div
        className="modal-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="header-titles">
            <h3 id="modal-title" className="drawer-title">
              {state.openPanel === 'sources' ? '官方证据链与文献索引' : '系统安全工程说明'}
            </h3>
            <span className="drawer-sub">SOURCES & REGULATORY FRAMEWORK</span>
          </div>
          <button
            className="close-btn"
            onClick={() => dispatch({ type: 'SET_PANEL', payload: 'none' })}
            aria-label="关闭抽屉"
          >
            ✕
          </button>
        </div>

        <div className="drawer-body">
          <div className="disclaimer-banner">
            <div className="banner-title">⚠️ 学术研究与免责声明</div>
            <p className="banner-text">
              本项目为高校系统安全工程课程作业学术研究（独立整理版），非 Joby Aviation、FAA 或 EASA 的官方安全评估报告。公开资料仅能证明原文确有表述，不可据此推断全部商业设计的真实物理表现。
            </p>
          </div>

          <h4 className="section-title">官方监管规章、工业标准与公开文献</h4>
          <ul className="source-list">
            {SOURCES_DATA.map((s) => (
              <li key={s.id} className="source-item">
                <span className="source-tag">[{s.id}]</span>
                <div className="source-info">
                  <div className="source-name">{s.title}</div>
                  <div className="source-meta">
                    <span>访问/检索日期: {s.date}</span>
                    <span className="source-origin">出处: {s.link}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 14, 19, 0.75);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 200ms ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-drawer {
          width: 100%;
          max-width: 540px;
          height: 100%;
          background: var(--color-graphite-surface);
          border-left: 1px solid var(--color-graphite-border);
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          animation: slideIn 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid var(--color-graphite-border);
        }
        .drawer-title {
          font-size: 17px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .drawer-sub {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .close-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          color: var(--color-aluminum);
          font-size: 16px;
          background: rgba(184, 193, 200, 0.08);
          transition: all var(--transition-nav);
        }
        .close-btn:hover {
          color: var(--color-warm-white);
          background: rgba(184, 193, 200, 0.16);
        }
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .disclaimer-banner {
          background: rgba(217, 154, 69, 0.1);
          border: 1px solid rgba(217, 154, 69, 0.3);
          border-radius: 6px;
          padding: 14px;
        }
        .banner-title {
          font-size: 13px;
          color: var(--color-amber);
          font-weight: 700;
          margin-bottom: 6px;
        }
        .banner-text {
          font-size: 12.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .section-title {
          font-size: 14px;
          color: var(--color-aluminum);
          font-weight: 600;
        }
        .source-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .source-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: var(--color-graphite-elevated);
          padding: 12px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
        }
        .source-tag {
          font-family: var(--font-family-mono);
          font-size: 12px;
          color: var(--color-amber);
          font-weight: bold;
          flex-shrink: 0;
        }
        .source-name {
          font-size: 13px;
          color: var(--color-warm-white);
          line-height: 1.4;
          font-weight: 500;
        }
        .source-meta {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          margin-top: 4px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
