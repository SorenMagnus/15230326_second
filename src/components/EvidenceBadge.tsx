import React from 'react';
import { EvidenceTag } from '../app/types';

interface EvidenceBadgeProps {
  type: EvidenceTag;
  text?: string;
  sourceId?: string;
  onClick?: () => void;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ type, text, sourceId, onClick }) => {
  const getLabel = () => {
    switch (type) {
      case 'F':
        return text || 'F · 官方证实';
      case 'A':
        return text || 'A · 工程假设';
      case 'D':
        return text || 'D · 教学示范';
      case 'U':
        return text || 'U · 尚未核实';
    }
  };

  return (
    <span
      className={`badge-tag tag-${type.toLowerCase()}`}
      title={sourceId ? `证据源: [${sourceId}] 点击查看核验文献` : `事实类型: ${getLabel()}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <span>[{type}]</span>
      <span>{getLabel()}</span>
      {sourceId && <span style={{ opacity: 0.7 }}>#{sourceId}</span>}
    </span>
  );
};
