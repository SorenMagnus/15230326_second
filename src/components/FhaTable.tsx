import React, { useState } from 'react';
import { FHA_DATASET } from '../safety/data';
import { FlightPhaseId } from '../app/types';
import { EvidenceBadge } from './EvidenceBadge';

export const FhaTable: React.FC = () => {
  const [phaseFilter, setPhaseFilter] = useState<FlightPhaseId | 'all'>('all');

  const filteredData = phaseFilter === 'all'
    ? FHA_DATASET
    : FHA_DATASET.filter(item => item.phase === phaseFilter);

  return (
    <div className="fha-container">
      <div className="fha-header">
        <div>
          <h4 className="fha-title">功能危害分析 (FHA) 数据台账</h4>
          <span className="fha-subtitle">按飞行剖面阶段划分的功能丧失后果与严苛度定级 (SAE ARP4761)</span>
        </div>
        <div className="filter-group">
          <label htmlFor="fha-phase-select">阶段筛选：</label>
          <select
            id="fha-phase-select"
            className="filter-select"
            value={phaseFilter}
            onChange={(e) => setPhaseFilter(e.target.value as FlightPhaseId | 'all')}
          >
            <option value="all">全阶段 (All Phases)</option>
            <option value="takeoff">起飞 (Takeoff)</option>
            <option value="climb">爬升过渡 (Climb)</option>
            <option value="cruise">平飞巡航 (Cruise)</option>
            <option value="approach">进近减速 (Approach)</option>
            <option value="landing">垂直着陆 (Landing)</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="safety-table">
          <thead>
            <tr>
              <th style={{ width: '90px' }}>ID</th>
              <th style={{ width: '130px' }}>系统功能</th>
              <th style={{ width: '90px' }}>飞行阶段</th>
              <th>失效状态 (Failure Condition)</th>
              <th>飞机级后果</th>
              <th>机组影响</th>
              <th style={{ width: '110px' }}>危害定级</th>
              <th style={{ width: '110px' }}>证据核验</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td className="id-cell">{row.id}</td>
                <td><strong>{row.functionName}</strong></td>
                <td><span className="phase-pill">{row.phase}</span></td>
                <td>{row.failureCondition}</td>
                <td>{row.effectOnAircraft}</td>
                <td>{row.effectOnCrew}</td>
                <td>
                  <span className={`severity-tag ${row.severityCategory.toLowerCase()}`}>
                    {row.severityCategory}
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
        .fha-container {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fha-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .fha-title {
          font-size: 16px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .fha-subtitle {
          font-size: 12px;
          color: var(--color-aluminum);
          display: block;
          margin-top: 2px;
        }
        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--color-aluminum);
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
        .phase-pill {
          background: rgba(184, 193, 200, 0.1);
          padding: 3px 6px;
          border-radius: 3px;
          font-size: 11px;
          font-family: var(--font-family-mono);
          text-transform: capitalize;
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
      `}</style>
    </div>
  );
};
