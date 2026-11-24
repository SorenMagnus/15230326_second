import React, { useState } from 'react';
import { FTA_TREE } from '../safety/data';
import { EvidenceBadge } from './EvidenceBadge';

export const FtaTreeViewer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('FTA-TOP-01');

  const selectedNode = FTA_TREE.find(n => n.id === selectedNodeId) || FTA_TREE[0];
  const topNode = FTA_TREE.find(n => n.isTop)!;

  return (
    <div className="fta-container">
      <div className="fta-header">
        <div>
          <h4 className="fta-title">故障树分析 (FTA) 顶事件因果逻辑树</h4>
          <span className="fta-subtitle">自顶向下的布尔因果分解（AND / OR 逻辑门，无伪造虚构发生概率）</span>
        </div>
        <EvidenceBadge type="A" text="教学逻辑树" sourceId="M1" />
      </div>

      <div className="fta-layout">
        {/* 左侧逻辑树节点展开结构 */}
        <div className="fta-tree-pane">
          <div className="tree-node top-node" onClick={() => setSelectedNodeId(topNode.id)}>
            <div className="node-gate-tag or-gate">OR 门</div>
            <div className="node-title">{topNode.name}</div>
          </div>

          <div className="tree-branch">
            <div className="branch-line"></div>
            <div className="branch-children">
              {/* 中间事件 1 */}
              <div className="branch-group">
                <div
                  className={`tree-node mid-node ${selectedNodeId === 'FTA-G01' ? 'active-node' : ''}`}
                  onClick={() => setSelectedNodeId('FTA-G01')}
                >
                  <div className="node-gate-tag and-gate">AND 门</div>
                  <div className="node-title">G01: 气动与推力不对称力矩超出飞控极限配平能力</div>
                </div>
                <div className="leaves-group">
                  <div
                    className={`leaf-node ${selectedNodeId === 'FTA-E01' ? 'active-node' : ''}`}
                    onClick={() => setSelectedNodeId('FTA-E01')}
                  >
                    <span className="leaf-dot">●</span> 底事件 E01: 关键推进单元严重推力中断 (&gt;40%)
                  </div>
                  <div
                    className={`leaf-node ${selectedNodeId === 'FTA-E02' ? 'active-node' : ''}`}
                    onClick={() => setSelectedNodeId('FTA-E02')}
                  >
                    <span className="leaf-dot">●</span> 底事件 E02: 动态空速低于舵面最小有效操纵速度
                  </div>
                </div>
              </div>

              {/* 中间事件 2 */}
              <div className="branch-group">
                <div
                  className={`tree-node mid-node ${selectedNodeId === 'FTA-G02' ? 'active-node' : ''}`}
                  onClick={() => setSelectedNodeId('FTA-G02')}
                >
                  <div className="node-gate-tag or-gate">OR 门</div>
                  <div className="node-title">G02: 飞行控制系统无法发出有效控制指令</div>
                </div>
                <div className="leaves-group">
                  <div
                    className={`leaf-node ${selectedNodeId === 'FTA-E03' ? 'active-node' : ''}`}
                    onClick={() => setSelectedNodeId('FTA-E03')}
                  >
                    <span className="leaf-dot">●</span> 底事件 E03: 四通道飞控发生共因软件死锁 [U]
                  </div>
                  <div
                    className={`leaf-node ${selectedNodeId === 'FTA-E04' ? 'active-node' : ''}`}
                    onClick={() => setSelectedNodeId('FTA-E04')}
                  >
                    <span className="leaf-dot">●</span> 底事件 E04: 三余度动静压传感器遭受共因结冰堵塞
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧选中节点详细工程解释卡片 */}
        <div className="fta-detail-pane">
          <div className="detail-header">
            <span className="detail-id">{selectedNode.id}</span>
            <EvidenceBadge type={selectedNode.tag} sourceId={selectedNode.sourceId} />
          </div>
          <h5 className="detail-name">{selectedNode.name}</h5>
          
          <div className="explanation-box">
            <span className="box-label">学术因果逻辑解析：</span>
            <p className="box-text">{selectedNode.explanation}</p>
          </div>

          <div className="gate-note">
            <strong>逻辑门说明：</strong>
            {selectedNode.gateType === 'AND' && '【与门 AND】：下级所有底事件必须同时发生，本事件方能被触发。'}
            {selectedNode.gateType === 'OR' && '【或门 OR】：下级任何单一底事件触发，即可直接向上传导。'}
            {!selectedNode.gateType && '【基本事件】：处于因果分解末端的独立物理或软件失效根因。'}
          </div>

          <div className="disclaimer-callout">
            ⚠️ <strong>定量概率约束提醒：</strong>由于公开工程资料中缺乏真实的独立性证明与实际环境失效率数据，本项目严格遵守规范，不编造虚构的顶事件发生概率数字。
          </div>
        </div>
      </div>

      <style>{`
        .fta-container {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fta-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 14px;
        }
        .fta-title {
          font-size: 16px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .fta-subtitle {
          font-size: 12px;
          color: var(--color-aluminum);
          display: block;
          margin-top: 2px;
        }
        .fta-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 20px;
        }
        @media (max-width: 900px) {
          .fta-layout {
            grid-template-columns: 1fr;
          }
        }
        .fta-tree-pane {
          background: var(--color-graphite-elevated);
          padding: 16px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .tree-node {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 10px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: all var(--transition-nav);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .tree-node:hover {
          border-color: var(--color-aluminum);
        }
        .tree-node.active-node, .leaf-node.active-node {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
        }
        .node-gate-tag {
          font-size: 10px;
          font-family: var(--font-family-mono);
          padding: 2px 6px;
          border-radius: 3px;
          width: fit-content;
          font-weight: 700;
        }
        .or-gate {
          background: rgba(185, 76, 68, 0.25);
          color: #f1928b;
        }
        .and-gate {
          background: rgba(78, 122, 148, 0.25);
          color: #8ec2e6;
        }
        .node-title {
          font-size: 13px;
          color: var(--color-warm-white);
          font-weight: 600;
          line-height: 1.4;
        }
        .branch-children {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-left: 16px;
          padding-left: 14px;
          border-left: 2px dashed rgba(184, 193, 200, 0.2);
        }
        .branch-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .leaves-group {
          margin-left: 16px;
          padding-left: 12px;
          border-left: 1px solid rgba(184, 193, 200, 0.15);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .leaf-node {
          font-size: 12.5px;
          color: var(--color-aluminum);
          padding: 6px 10px;
          border-radius: 4px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all var(--transition-nav);
        }
        .leaf-node:hover {
          color: var(--color-warm-white);
          background: rgba(184, 193, 200, 0.08);
        }
        .leaf-dot {
          color: var(--color-amber);
          margin-right: 4px;
        }
        .fta-detail-pane {
          background: var(--color-graphite-elevated);
          padding: 18px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .detail-id {
          font-family: var(--font-family-mono);
          font-size: 13px;
          color: var(--color-amber);
          font-weight: 700;
        }
        .detail-name {
          font-size: 15px;
          color: var(--color-warm-white);
          font-weight: 700;
          line-height: 1.4;
        }
        .explanation-box {
          background: var(--color-graphite-surface);
          padding: 12px;
          border-radius: 5px;
          border: 1px solid var(--color-graphite-border);
        }
        .box-label {
          font-size: 11.5px;
          color: var(--color-aluminum-dim);
          display: block;
          margin-bottom: 4px;
        }
        .box-text {
          font-size: 13px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
        .gate-note {
          font-size: 12.5px;
          color: var(--color-aluminum);
          line-height: 1.5;
        }
        .disclaimer-callout {
          margin-top: auto;
          background: rgba(217, 154, 69, 0.08);
          border: 1px solid rgba(217, 154, 69, 0.25);
          padding: 10px;
          border-radius: 4px;
          font-size: 12px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};
