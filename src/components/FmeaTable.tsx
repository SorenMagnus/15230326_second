import React, { useState } from 'react';
import { FMEA_DATASET } from '../safety/data';
import { SubsystemId } from '../app/types';
import { EvidenceBadge } from './EvidenceBadge';

export const FmeaTable: React.FC = () => {
  const [subsystemFilter, setSubsystemFilter] = useState<SubsystemId | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = FMEA_DATASET.filter((item) => {
    const matchSub = subsystemFilter === 'all' || item.subsystem === subsystemFilter;
    const matchSearch =
      searchTerm === '' ||
      item.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.failureMode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.compensatingProvision.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSub && matchSearch;
  });

  return (
    <div className="fmea-container">
      <div className="fmea-header">
        <div>
          <h4 className="fmea-title">失效模式与影响分析 (FMEA) 部件台账</h4>
          <span className="fmea-subtitle">自底向上的部件失效模式、局部影响与补偿措施映射</span>
        </div>
        <div className="fmea-controls">
          <input
            type="text"
            className="search-input"
            placeholder="搜索部件、失效模式或措施..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="filter-select"
            value={subsystemFilter}
            onChange={(e) => setSubsystemFilter(e.target.value as SubsystemId | 'all')}
          >
            <option value="all">全部子系统</option>
            <option value="propulsion">推进系统</option>
            <option value="power">动力电池与配电</option>
            <option value="avionics">飞控计算机</option>
            <option value="actuators">执行机构</option>
            <option value="structures">机体结构</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="safety-table">
          <thead>
            <tr>
              <th style={{ width: '85px' }}>ID</th>
              <th style={{ width: '130px' }}>核心部件</th>
              <th style={{ width: '100px' }}>所属子系统</th>
              <th>失效模式 (Failure Mode)</th>
              <th>局部与系统级影响</th>
              <th>故障检测手段</th>
              <th>补偿与防护措施</th>
              <th style={{ width: '100px' }}>严苛等级</th>
              <th style={{ width: '105px' }}>证据源</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td className="id-cell">{row.id}</td>
                <td><strong>{row.component}</strong></td>
                <td><span className="sub-tag">{row.subsystem}</span></td>
                <td className="text-danger">{row.failureMode}</td>
                <td>
                  <div><strong>局部：</strong>{row.localEffect}</div>
                  <div style={{ marginTop: '4px', opacity: 0.9 }}><strong>系统：</strong>{row.systemEffect}</div>
                </td>
                <td>{row.detectionMethod}</td>
                <td>{row.compensatingProvision}</td>
                <td>
                  <span className={`severity-tag ${row.severityClass.toLowerCase()}`}>
                    {row.severityClass}
                  </span>
                </td>
                <td>
                  <EvidenceBadge type={row.tag} sourceId={row.sourceId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .fmea-container {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fmea-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .fmea-title {
          font-size: 16px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .fmea-subtitle {
          font-size: 12px;
          color: var(--color-aluminum);
          display: block;
          margin-top: 2px;
        }
        .fmea-controls {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .search-input {
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          padding: 6px 12px;
          border-radius: 4px;
          color: var(--color-warm-white);
          font-size: 13px;
          min-width: 200px;
        }
        .search-input:focus {
          border-color: var(--color-amber);
          outline: none;
        }
        .filter-select {
          background: var(--color-graphite-elevated);
          color: var(--color-warm-white);
          border: 1px solid var(--color-graphite-border);
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 13px;
        }
        .table-responsive {
          overflow-x: auto;
        }
        .safety-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          text-align: left;
        }
        .safety-table th {
          background: var(--color-graphite-elevated);
          color: var(--color-aluminum);
          padding: 10px 12px;
          border-bottom: 2px solid var(--color-graphite-border);
          font-weight: 600;
          white-space: nowrap;
        }
        .safety-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .safety-table tr:hover {
          background: rgba(184, 193, 200, 0.04);
        }
        .id-cell {
          font-family: var(--font-family-mono);
          font-weight: bold;
          color: var(--color-amber);
        }
        .sub-tag {
          background: rgba(184, 193, 200, 0.1);
          padding: 3px 6px;
          border-radius: 3px;
          font-size: 11px;
          font-family: var(--font-family-mono);
        }
        .text-danger {
          color: #f1928b;
        }
        .severity-tag {
          padding: 3px 8px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 700;
          font-family: var(--font-family-mono);
          display: inline-block;
        }
        .severity-tag.catastrophic {
          background: rgba(185, 76, 68, 0.25);
          color: #f1928b;
          border: 1px solid rgba(185, 76, 68, 0.5);
        }
        .severity-tag.hazardous {
          background: rgba(217, 154, 69, 0.2);
          color: #f3c47e;
          border: 1px solid rgba(217, 154, 69, 0.4);
        }
        .severity-tag.major {
          background: rgba(78, 122, 148, 0.25);
          color: #8ec2e6;
          border: 1px solid rgba(78, 122, 148, 0.4);
        }
        .severity-tag.minor {
          background: rgba(184, 193, 200, 0.15);
          color: #b8c1c8;
        }
      `}</style>
    </div>
  );
};
