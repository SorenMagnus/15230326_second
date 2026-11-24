import React from 'react';
import { RiskRecord } from '../safety/types';

interface RiskPropagationGraphProps {
  scenario: RiskRecord;
  activeNodeIndex: number;
  onSelectNodeIndex: (index: number) => void;
}

export const RiskPropagationGraph: React.FC<RiskPropagationGraphProps> = ({
  scenario,
  activeNodeIndex,
  onSelectNodeIndex,
}) => {
  const nodes = [
    { label: '01·危险源始发', title: scenario.hazard.slice(0, 16) + '...' },
    { label: '02·致因机理', title: scenario.failureMechanism.slice(0, 16) + '...' },
    { label: '03·连锁扩散', title: scenario.propagationNodes[0].slice(0, 16) + '...' },
    { label: '04·系统级后果', title: scenario.consequence.slice(0, 16) + '...' },
  ];

  return (
    <div className="propagation-graph-wrapper">
      <svg
        viewBox="0 0 800 130"
        className="propagation-svg"
        role="img"
        aria-label="动态因果传播流图"
      >
        <defs>
          <marker
            id="amberArrow"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#D99A45" />
          </marker>
        </defs>

        {/* 连接导线 */}
        <line x1="160" y1="65" x2="240" y2="65" stroke="#D99A45" strokeWidth="2" markerEnd="url(#amberArrow)" />
        <line x1="360" y1="65" x2="440" y2="65" stroke="#D99A45" strokeWidth="2" markerEnd="url(#amberArrow)" />
        <line x1="560" y1="65" x2="640" y2="65" stroke="#B94C44" strokeWidth="2" markerEnd="url(#amberArrow)" />

        {/* 4 个因果节点 */}
        {nodes.map((node, i) => {
          const isSelected = activeNodeIndex === i;
          const xPos = 40 + i * 200;
          const isDanger = i === 3;

          return (
            <g
              key={i}
              className={`graph-node-group ${isSelected ? 'is-active' : ''}`}
              onClick={() => onSelectNodeIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`节点 ${node.label}`}
              style={{ cursor: 'pointer' }}
            >
              <rect
                x={xPos}
                y="25"
                width="130"
                height="80"
                rx="6"
                fill={
                  isSelected
                    ? isDanger ? 'rgba(185, 76, 68, 0.3)' : 'rgba(217, 154, 69, 0.25)'
                    : '#141C24'
                }
                stroke={
                  isSelected
                    ? isDanger ? '#B94C44' : '#D99A45'
                    : 'rgba(184, 193, 200, 0.2)'
                }
                strokeWidth={isSelected ? 2 : 1}
              />
              <text
                x={xPos + 65}
                y="48"
                fill={isDanger ? '#F1928B' : '#D99A45'}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="middle"
              >
                {node.label}
              </text>
              <text
                x={xPos + 65}
                y="74"
                fill="#F2EFE7"
                fontSize="11"
                textAnchor="middle"
              >
                {node.title}
              </text>
            </g>
          );
        })}
      </svg>

      <style>{`
        .propagation-graph-wrapper {
          width: 100%;
          background: var(--color-graphite-elevated);
          border: 1px solid rgba(184, 193, 200, 0.1);
          border-radius: 6px;
          padding: 12px;
        }
        .propagation-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .graph-node-group:hover rect {
          stroke: var(--color-amber);
        }
      `}</style>
    </div>
  );
};
