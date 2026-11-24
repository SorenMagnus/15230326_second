import React, { useState } from 'react';
import { useSafetyState } from '../app/state';
import { EvidenceBadge } from '../components/EvidenceBadge';

export const Act5BeyondGravity: React.FC = () => {
  const { goToChapter, dispatch } = useSafetyState();
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = () => {
    const citationText = `Beyond Gravity: The Cost of Flight (eVTOL Safety Systems Engineering Research & Demonstration). Coursework Project-2 (Independent Edition), Nov 2026. Referenced to FAA AC 21.17-4, EASA SC-VTOL Issue 2 and Joby S4 Architecture.`;
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="chapter-view" aria-labelledby="act5-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT V · BEYOND GRAVITY</span>
          <EvidenceBadge type="F" text="系统学术总结" sourceId="S7" />
        </div>
        <h2 id="act5-title" className="chapter-heading">超越重力：研究结论、边界与证据台账</h2>
        <p className="chapter-desc">
          真正的工程信任建立在对自身认知边界的清晰界定之上。在这里，我们严格拆解已知事实、教学模型假设与尚未核实的工程未知。
        </p>
      </div>

      {/* 三栏并列：事实 [F]、假设 [A]、未核实 [U] */}
      <div className="three-columns-grid">
        {/* 栏 1：已证实公开事实 [F] */}
        <div className="column-card border-fact">
          <div className="column-header">
            <h3 className="column-title">1. 已证实公开事实 [F]</h3>
            <EvidenceBadge type="F" text="官方有据" />
          </div>
          <ul className="column-list">
            <li>
              <strong>6 倾转旋翼气动架构：</strong>全机拥有 6 组外置倾转旋翼单元，由独立永磁同步电机驱动 [J1]。
            </li>
            <li>
              <strong>Powered-lift 适航专用准则：</strong>FAA AC 21.17-4 作为型号审定基础，打破传统固定翼与旋翼机二元规章 [S5]。
            </li>
            <li>
              <strong>EASA SC-VTOL 安全目标：</strong>适航规章要求商用载客运营满足 $10^{-9}$/h 灾难性失效量级 [S7]。
            </li>
            <li>
              <strong>多余度电传飞控声明：</strong>厂商公开确认采用四通道异构飞行控制计算机架构 [J1]。
            </li>
          </ul>
        </div>

        {/* 栏 2：有边界的工程假设 [A] */}
        <div className="column-card border-assumption">
          <div className="column-header">
            <h3 className="column-title">2. 有边界工程假设 [A]</h3>
            <EvidenceBadge type="A" text="教学推演" />
          </div>
          <ul className="column-list">
            <li>
              <strong>EX-01 推进非对称推力：</strong>模拟单旋翼推力骤降 40% 时飞控自适应升力平衡的教学情境 [A]。
            </li>
            <li>
              <strong>EX-02 动力电池单体热失控：</strong>基于 DO-311A 航空储能标准设定的电芯级热蔓延隔热屏障分析 [A]。
            </li>
            <li>
              <strong>EX-03 动静压管积冰偏置：</strong>基于 STPA 控制回路模拟未安全控制行为 (UCA) 与人机交接 [A]。
            </li>
            <li>
              <strong>FMEA/FTA 定性矩阵：</strong>采用定性严重度×可能性矩阵，不伪造具体随机失效率数字 [M1]。
            </li>
          </ul>
        </div>

        {/* 栏 3：尚未核实项与待研究边界 [U] */}
        <div className="column-card border-unverified">
          <div className="column-header">
            <h3 className="column-title">3. 待研究与未核实项 [U]</h3>
            <EvidenceBadge type="U" text="保持存疑" />
          </div>
          <ul className="column-list">
            <li>
              <strong>具体部件实际随机失效率：</strong>商业机密限制，公开资料无各机械/电子部件确切 MTBF 数据 [U]。
            </li>
            <li>
              <strong>内部电芯排列与冷却流道细节：</strong>具体模组级液冷/相变流道内部细节尚未完全公开 [U]。
            </li>
            <li>
              <strong>最终标准适航证获批状态：</strong>目前处于审定符合性验证阶段，尚未取得 FAA 最终 TC 正式认证 [U]。
            </li>
            <li>
              <strong>多点共因极端气象失效：</strong>强风剪切、结冰与雷击多重耦合条件下的统计安全性尚需长期验证 [U]。
            </li>
          </ul>
        </div>
      </div>

      {/* 底部功能栏与引用导出 */}
      <div className="conclusion-action-card">
        <div className="citation-text-box">
          <span className="citation-label">学术引用标识 (Academic Citation)：</span>
          <code className="citation-code">
            Beyond Gravity: The Cost of Flight (eVTOL Safety Systems Engineering). Coursework-2, 2026.
          </code>
        </div>

        <div className="action-buttons-group">
          <button className="copy-citation-btn" onClick={handleCopyCitation}>
            {copied ? '✓ 已复制到剪贴板' : '📋 复制学术引用文本'}
          </button>
          <button className="view-sources-btn" onClick={() => dispatch({ type: 'SET_PANEL', payload: 'sources' })}>
            📖 查阅完整文献索引表 (SOURCES)
          </button>
          <button className="back-act0-btn" onClick={() => goToChapter(0)}>
            ↺ 返回片头主视点 (ACT 0)
          </button>
        </div>
      </div>

      <style>{`
        .three-columns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .column-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .border-fact {
          border-top: 3px solid #8ec2e6;
        }
        .border-assumption {
          border-top: 3px solid var(--color-amber);
        }
        .border-unverified {
          border-top: 3px solid #f1928b;
        }
        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 12px;
        }
        .column-title {
          font-size: 15px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .column-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .column-list li {
          font-size: 13px;
          color: var(--color-aluminum);
          line-height: 1.6;
        }
        .column-list li strong {
          color: var(--color-warm-white);
          display: block;
          margin-bottom: 2px;
        }
        .conclusion-action-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .citation-text-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .citation-label {
          font-size: 12px;
          color: var(--color-amber);
          font-weight: 600;
        }
        .citation-code {
          background: var(--color-graphite-elevated);
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12.5px;
          color: var(--color-warm-white);
          border: 1px solid var(--color-graphite-border);
          font-family: var(--font-family-mono);
          word-break: break-all;
        }
        .action-buttons-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .copy-citation-btn, .view-sources-btn, .back-act0-btn {
          padding: 10px 16px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 600;
          transition: all var(--transition-nav);
        }
        .copy-citation-btn {
          background: var(--color-amber);
          color: var(--color-graphite);
        }
        .copy-citation-btn:hover {
          background: #e6a855;
        }
        .view-sources-btn {
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          color: var(--color-warm-white);
        }
        .view-sources-btn:hover {
          border-color: var(--color-aluminum);
        }
        .back-act0-btn {
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
        }
        .back-act0-btn:hover {
          color: var(--color-warm-white);
        }
      `}</style>
    </section>
  );
};
