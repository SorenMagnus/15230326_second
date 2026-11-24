import React from 'react';
import { useSafetyState } from '../app/state';
import { SubsystemId } from '../app/types';
import { EvidenceBadge } from '../components/EvidenceBadge';

interface SubsystemData {
  id: SubsystemId;
  name: string;
  en: string;
  tag: 'F' | 'A';
  source: string;
  functionDesc: string;
  failureMode: string;
  safeguard: string;
  evidenceNote: string;
}

const SUBSYSTEMS: SubsystemData[] = [
  {
    id: 'propulsion',
    name: '分布式电力推进 (DEP)',
    en: 'PROPULSION & TILTING',
    tag: 'F',
    source: 'J1',
    functionDesc: '6 套外置倾转旋翼与永磁同步电机，提供垂直升力与水平巡航推力转换。',
    failureMode: '旋翼变桨机构卡死、电机绕组相间短路、倾转机构不同步失衡。',
    safeguard: '独立电机控制器隔离、各旋翼独立姿态控制律容错重构、倾转死区监测。',
    evidenceNote: 'Joby 公开宣传 6 旋翼冗余与独立倾转架构，非对称容错推力由教学模型 [A] 模拟。'
  },
  {
    id: 'power',
    name: '高压动力电池与配电链路',
    en: 'ENERGY & BUS DISTRIBUTION',
    tag: 'A',
    source: 'M1',
    functionDesc: '多组独立高压锂离子动力电池包与分段隔离式高压母线网络，负责全机供电。',
    failureMode: '单体电芯内部微短路引发热失控连锁蔓延、主高压接触器黏连或误分断。',
    safeguard: '耐火物理隔离舱、BMS 实时阻抗/温度多点监控、热烟气定向泄放阀。',
    evidenceNote: '电池热蔓延防护标准依据 DO-311A 航空储能审定基线，具体分舱尺寸为工程假设 [A]。'
  },
  {
    id: 'avionics',
    name: '三余度/四余度电传飞控',
    en: 'FLIGHT CONTROL COMPUTERS',
    tag: 'F',
    source: 'J1',
    functionDesc: '多通道异构飞行控制计算机，采集动静压、IMU、姿态数据并运算分配指令。',
    failureMode: '共因软件逻辑死锁、传感器非高斯瞬态偏置、多总线通信时钟严重脱步。',
    safeguard: '非相似硬件通道架构、表决算法 (2oo3/3oo4)、硬件看门狗与安全降级备份律。',
    evidenceNote: '厂商公开宣布采用四重冗余飞控计算单元；控制律切换机制参考 ARP4754A [M2]。'
  },
  {
    id: 'structures',
    name: '全碳纤维复合材料机体',
    en: 'PRIMARY AIRFRAME & WINGS',
    tag: 'F',
    source: 'J1',
    functionDesc: '主翼、双尾撑、V 尾及座舱一体化全复合材料机身，兼顾极致轻量化与刚度。',
    failureMode: '多次垂直悬停冲击疲劳微裂纹、外来物损伤 (FOD) 导致的不可见脱层破坏。',
    safeguard: '损伤容限设计、结构健康监测传感器 (SHM)、超声波无损探伤定期检修程序。',
    evidenceNote: '机身材料为官方公开信息；结构疲劳损伤容限符合 FAR Part 23 / 27 审定准则。'
  },
  {
    id: 'actuators',
    name: '电伺服倾转与舵面执行机构',
    en: 'ELECTROMECHANICAL ACTUATION',
    tag: 'A',
    source: 'S8',
    functionDesc: '电动机械伺服作动筒 (EMA)，驱动 6 组推进倾转短舱和副翼、升降副翼。',
    failureMode: '滚珠丝杠机械锁死、驱动电机过载发热卡阻、传动轴断裂。',
    safeguard: '双绕组备份驱动电机、无动力自锁/解脱机构、舵面位置差动反馈交叉比对。',
    evidenceNote: 'EMA 机电作动系统失效率模型基于行业通用教学标准，具体执行机构构造为假设 [A]。'
  },
  {
    id: 'operations',
    name: '起降场与运营环境感知',
    en: 'ENVIRONMENT & OPS',
    tag: 'F',
    source: 'S6',
    functionDesc: '垂直起降场 (Vertiport) 微气象雷达、地面充电快速插口及城市微气候感知系统。',
    failureMode: '高楼狭管阵风剪切、城市低空鸟击、近地扬尘吸入电机轴承导致散热恶化。',
    safeguard: '起降走廊实时微气象网络联动、进近航线动态避风禁飞区、地面防风导流设计。',
    evidenceNote: 'FAA AAM 运营概念官方发布白皮书 [S6]；起降场微气候要求参考通用直升机场规范。'
  }
];

export const Act2InsideMachine: React.FC = () => {
  const { state, dispatch, goToChapter } = useSafetyState();
  const activeSub = SUBSYSTEMS.find(s => s.id === state.selectedSubsystem) || SUBSYSTEMS[0];

  return (
    <section className="chapter-view" aria-labelledby="act2-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT II · INSIDE THE MACHINE</span>
          <EvidenceBadge type="F" text="子系统架构" sourceId="J1" />
        </div>
        <h2 id="act2-title" className="chapter-heading">机器内部：六大核心子系统技术剖析</h2>
        <p className="chapter-desc">
          打破“未来飞行汽车”的黑盒。探索分布式电力推进（DEP）、高压能量链路与四余度飞控之间的物理拓扑与安全防护屏障。
        </p>
      </div>

      {/* 六大子系统选择栏 */}
      <div className="subsystem-tabs" role="tablist">
        {SUBSYSTEMS.map((sub) => {
          const isSelected = state.selectedSubsystem === sub.id;
          return (
            <button
              key={sub.id}
              role="tab"
              aria-selected={isSelected}
              className={`sub-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_SUBSYSTEM', payload: sub.id })}
            >
              <span className="sub-en">{sub.en}</span>
              <span className="sub-name">{sub.name}</span>
            </button>
          );
        })}
      </div>

      {/* 2D 矢量技术架构剖析图与交互信息区 */}
      <div className="subsystem-body-grid">
        <div className="diagram-container">
          <div className="diagram-header">
            <span className="diagram-label">2D 矢量技术解剖拓扑</span>
            <EvidenceBadge type={activeSub.tag} sourceId={activeSub.source} />
          </div>

          <div className="svg-frame" role="img" aria-label={`子系统拓扑图 - ${activeSub.name}`}>
            <svg viewBox="0 0 600 340" className="tech-schematic-svg">
              <rect width="600" height="340" fill="#0E141B" rx="8" stroke="rgba(184, 193, 200, 0.15)" />
              {/* 网格参考背景 */}
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(184, 193, 200, 0.04)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="600" height="340" fill="url(#smallGrid)" />

              {/* 核心机身框架线 */}
              <ellipse cx="300" cy="170" rx="220" ry="80" fill="none" stroke="rgba(184, 193, 200, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* 高亮所选子系统拓扑位置 */}
              {activeSub.id === 'propulsion' && (
                <g className="highlight-group">
                  <circle cx="120" cy="130" r="28" fill="rgba(217, 154, 69, 0.2)" stroke="#D99A45" strokeWidth="2" />
                  <text x="120" y="135" fill="#F2EFE7" fontSize="11" textAnchor="middle">翼尖旋翼 #1</text>
                  <circle cx="480" cy="130" r="28" fill="rgba(217, 154, 69, 0.2)" stroke="#D99A45" strokeWidth="2" />
                  <text x="480" y="135" fill="#F2EFE7" fontSize="11" textAnchor="middle">翼尖旋翼 #6</text>
                  <circle cx="210" cy="110" r="24" fill="rgba(217, 154, 69, 0.15)" stroke="#D99A45" strokeWidth="1.5" />
                  <circle cx="390" cy="110" r="24" fill="rgba(217, 154, 69, 0.15)" stroke="#D99A45" strokeWidth="1.5" />
                  <circle cx="260" cy="220" r="22" fill="rgba(217, 154, 69, 0.15)" stroke="#D99A45" strokeWidth="1.5" />
                  <circle cx="340" cy="220" r="22" fill="rgba(217, 154, 69, 0.15)" stroke="#D99A45" strokeWidth="1.5" />
                  <line x1="120" y1="130" x2="480" y2="130" stroke="#D99A45" strokeWidth="1" strokeDasharray="3 3" />
                </g>
              )}

              {activeSub.id === 'power' && (
                <g className="highlight-group">
                  <rect x="230" y="140" width="140" height="60" rx="6" fill="rgba(217, 154, 69, 0.25)" stroke="#D99A45" strokeWidth="2" />
                  <text x="300" y="174" fill="#F2EFE7" fontSize="12" textAnchor="middle" fontWeight="bold">高压主电池舱 (800V)</text>
                  <line x1="230" y1="170" x2="140" y2="170" stroke="#D99A45" strokeWidth="1.5" />
                  <line x1="370" y1="170" x2="460" y2="170" stroke="#D99A45" strokeWidth="1.5" />
                  <rect x="110" y="155" width="30" height="30" fill="rgba(184, 193, 200, 0.2)" stroke="#B8C1C8" />
                  <rect x="460" y="155" width="30" height="30" fill="rgba(184, 193, 200, 0.2)" stroke="#B8C1C8" />
                </g>
              )}

              {activeSub.id === 'avionics' && (
                <g className="highlight-group">
                  <rect x="250" y="90" width="100" height="50" rx="4" fill="rgba(78, 122, 148, 0.3)" stroke="#4E7A94" strokeWidth="2" />
                  <text x="300" y="120" fill="#8EC2E6" fontSize="12" textAnchor="middle" fontWeight="bold">四余度 FCC 主控</text>
                  <circle cx="270" cy="115" r="4" fill="#D99A45" />
                  <circle cx="290" cy="115" r="4" fill="#D99A45" />
                  <circle cx="310" cy="115" r="4" fill="#D99A45" />
                  <circle cx="330" cy="115" r="4" fill="#D99A45" />
                  <line x1="300" y1="140" x2="300" y2="230" stroke="#4E7A94" strokeWidth="1" strokeDasharray="2 2" />
                </g>
              )}

              {activeSub.id !== 'propulsion' && activeSub.id !== 'power' && activeSub.id !== 'avionics' && (
                <g className="highlight-group">
                  <circle cx="300" cy="170" r="60" fill="rgba(184, 193, 200, 0.15)" stroke="#B8C1C8" strokeWidth="2" />
                  <text x="300" y="175" fill="#F2EFE7" fontSize="13" textAnchor="middle">{activeSub.name}</text>
                  <line x1="300" y1="110" x2="300" y2="60" stroke="#B8C1C8" strokeWidth="1" />
                  <line x1="300" y1="230" x2="300" y2="280" stroke="#B8C1C8" strokeWidth="1" />
                </g>
              )}
            </svg>
          </div>
          <p className="diagram-caption">图 2.1: {activeSub.name} 物理安装拓扑与隔离边界示意图</p>
        </div>

        {/* 详细参数与失效防护联动 */}
        <div className="subsystem-info-panel">
          <div className="info-block">
            <h4 className="info-title">核心功能与设计定位</h4>
            <p className="info-text">{activeSub.functionDesc}</p>
          </div>

          <div className="info-block danger-block">
            <h4 className="info-title-danger">潜在失效模式 (FMEA 危险源)</h4>
            <p className="info-text">{activeSub.failureMode}</p>
          </div>

          <div className="info-block success-block">
            <h4 className="info-title-success">工程防护与冗余措施</h4>
            <p className="info-text">{activeSub.safeguard}</p>
          </div>

          <div className="info-block note-block">
            <h4 className="info-title-note">公开事实与教学假设说明</h4>
            <p className="info-text-dim">{activeSub.evidenceNote}</p>
          </div>

          <button className="link-fmea-btn" onClick={() => goToChapter(3)}>
            观察该部件在故障场景中的连锁因果链 (进入 ACT III) →
          </button>
        </div>
      </div>

      <style>{`
        .subsystem-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 8px;
        }
        .sub-tab-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 12px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
        }
        .sub-tab-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .sub-tab-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
        }
        .sub-en {
          display: block;
          font-size: 10px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .sub-name {
          display: block;
          font-size: 13.5px;
          color: var(--color-warm-white);
          font-weight: 600;
          margin-top: 2px;
        }
        .subsystem-body-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 900px) {
          .subsystem-body-grid {
            grid-template-columns: 1fr;
          }
        }
        .diagram-container {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .diagram-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .diagram-label {
          font-size: 13px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .svg-frame {
          width: 100%;
        }
        .tech-schematic-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .diagram-caption {
          font-size: 12px;
          color: var(--color-aluminum-dim);
          text-align: center;
        }
        .subsystem-info-panel {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .info-block {
          background: var(--color-graphite-elevated);
          padding: 12px 14px;
          border-radius: 6px;
          border-left: 3px solid var(--color-aluminum-dim);
        }
        .danger-block {
          border-left-color: var(--color-risk-red);
        }
        .success-block {
          border-left-color: var(--color-amber);
        }
        .note-block {
          border-left-color: var(--color-tech-blue);
        }
        .info-title {
          font-size: 13px;
          color: var(--color-warm-white);
          margin-bottom: 4px;
        }
        .info-title-danger {
          font-size: 13px;
          color: #f1928b;
          margin-bottom: 4px;
        }
        .info-title-success {
          font-size: 13px;
          color: #f3c47e;
          margin-bottom: 4px;
        }
        .info-title-note {
          font-size: 13px;
          color: #8ec2e6;
          margin-bottom: 4px;
        }
        .info-text {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .info-text-dim {
          font-size: 12.5px;
          color: var(--color-aluminum);
          line-height: 1.5;
        }
        .link-fmea-btn {
          margin-top: 6px;
          padding: 12px;
          background: rgba(217, 154, 69, 0.12);
          border: 1px solid var(--color-amber);
          color: var(--color-amber);
          font-weight: 600;
          font-size: 13.5px;
          border-radius: 6px;
          text-align: center;
          transition: all var(--transition-nav);
        }
        .link-fmea-btn:hover {
          background: var(--color-amber);
          color: var(--color-graphite);
        }
      `}</style>
    </section>
  );
};
