import React from 'react';
import { SubsystemId } from '../app/types';

interface AircraftAnatomySvgProps {
  activeSubsystem: SubsystemId;
  onSelectSubsystem: (id: SubsystemId) => void;
}

export const AircraftAnatomySvg: React.FC<AircraftAnatomySvgProps> = ({
  activeSubsystem,
  onSelectSubsystem,
}) => {
  return (
    <div className="anatomy-viewport">
      <svg
        viewBox="0 0 840 440"
        className="layered-aircraft-svg"
        role="img"
        aria-label="Joby S4 eVTOL 飞行器分层技术解剖与交互热点图"
      >
        <defs>
          {/* 网格底图 */}
          <pattern id="techGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(184, 193, 200, 0.05)" strokeWidth="0.6" />
            <circle cx="24" cy="24" r="0.8" fill="rgba(217, 154, 69, 0.2)" />
          </pattern>
          {/* 聚光高光滤镜 */}
          <linearGradient id="amberHotspot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D99A45" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D99A45" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="blueHotspot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E7A94" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4E7A94" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 底层坐标与网格 */}
        <rect width="840" height="440" fill="#0C1117" rx="8" stroke="rgba(184, 193, 200, 0.15)" />
        <rect width="840" height="440" fill="url(#techGrid)" />

        {/* 基准中心线与尺度标注 */}
        <line x1="40" y1="220" x2="800" y2="220" stroke="rgba(184, 193, 200, 0.12)" strokeWidth="1" strokeDasharray="6 4" />
        <text x="50" y="40" fill="rgba(184, 193, 200, 0.4)" fontSize="11" fontFamily="monospace">REF: JOBY-S4-AERO-GEOMETRY // 6-TILT-ROTOR</text>
        <text x="730" y="40" fill="rgba(217, 154, 69, 0.5)" fontSize="11" fontFamily="monospace">SCALE: 1:35</text>

        {/* LAYER 1: 主机身结构与主翼 (Structures) */}
        <g
          className={`svg-layer layer-structures ${activeSubsystem === 'structures' ? 'is-active' : ''}`}
          onClick={() => onSelectSubsystem('structures')}
          role="button"
          tabIndex={0}
          aria-label="机体主结构系统"
        >
          {/* 主机翼平面轮廓 (展长示意) */}
          <path
            d="M 160 215 L 420 80 L 450 82 L 420 220 L 450 358 L 420 360 Z"
            fill={activeSubsystem === 'structures' ? 'rgba(217, 154, 69, 0.18)' : 'rgba(184, 193, 200, 0.08)'}
            stroke={activeSubsystem === 'structures' ? '#D99A45' : '#B8C1C8'}
            strokeWidth={activeSubsystem === 'structures' ? 2 : 1.2}
          />
          {/* 机身主舱体流线 */}
          <path
            d="M 110 220 Q 260 175 480 185 L 680 195 Q 740 205 760 220 Q 740 235 680 245 L 480 255 Q 260 265 110 220 Z"
            fill="rgba(18, 25, 34, 0.85)"
            stroke={activeSubsystem === 'structures' ? '#D99A45' : 'rgba(184, 193, 200, 0.3)'}
            strokeWidth="1.5"
          />
          {/* V 尾翼结构 */}
          <path
            d="M 670 196 L 760 120 L 780 125 L 700 205 L 780 315 L 760 320 L 670 244 Z"
            fill={activeSubsystem === 'structures' ? 'rgba(217, 154, 69, 0.15)' : 'rgba(184, 193, 200, 0.06)'}
            stroke={activeSubsystem === 'structures' ? '#D99A45' : '#B8C1C8'}
            strokeWidth="1.2"
          />
        </g>

        {/* LAYER 2: 动力电池与高压配电母线 (Power & Bus) */}
        <g
          className={`svg-layer layer-power ${activeSubsystem === 'power' ? 'is-active' : ''}`}
          onClick={() => onSelectSubsystem('power')}
          role="button"
          tabIndex={0}
          aria-label="动力电池与配电链路"
        >
          {/* 主电池舱段 4 组隔离包 */}
          <rect x="280" y="195" width="55" height="50" rx="4" fill={activeSubsystem === 'power' ? '#D99A45' : 'rgba(217, 154, 69, 0.35)'} opacity="0.8" />
          <rect x="345" y="195" width="55" height="50" rx="4" fill={activeSubsystem === 'power' ? '#D99A45' : 'rgba(217, 154, 69, 0.35)'} opacity="0.8" />
          <rect x="410" y="195" width="55" height="50" rx="4" fill={activeSubsystem === 'power' ? '#D99A45' : 'rgba(217, 154, 69, 0.35)'} opacity="0.8" />
          <rect x="475" y="195" width="55" height="50" rx="4" fill={activeSubsystem === 'power' ? '#D99A45' : 'rgba(217, 154, 69, 0.35)'} opacity="0.8" />
          
          {/* 双冗余高压直流母线 (Bus A & Bus B) */}
          <path d="M 280 205 L 180 100 L 170 100" fill="none" stroke={activeSubsystem === 'power' ? '#D99A45' : '#707E8B'} strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M 280 235 L 180 340 L 170 340" fill="none" stroke={activeSubsystem === 'power' ? '#D99A45' : '#707E8B'} strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M 530 215 L 750 130" fill="none" stroke={activeSubsystem === 'power' ? '#D99A45' : '#707E8B'} strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M 530 225 L 750 310" fill="none" stroke={activeSubsystem === 'power' ? '#D99A45' : '#707E8B'} strokeWidth="1.6" strokeDasharray="3 3" />
        </g>

        {/* LAYER 3: 电传飞控与传感器架构 (Avionics) */}
        <g
          className={`svg-layer layer-avionics ${activeSubsystem === 'avionics' ? 'is-active' : ''}`}
          onClick={() => onSelectSubsystem('avionics')}
          role="button"
          tabIndex={0}
          aria-label="四余度电传飞控系统"
        >
          {/* 四通道异构飞控计算机核心 (FCC 1-4) */}
          <rect
            x="200"
            y="204"
            width="60"
            height="32"
            rx="4"
            fill={activeSubsystem === 'avionics' ? '#4E7A94' : 'rgba(78, 122, 148, 0.4)'}
            stroke="#8EC2E6"
            strokeWidth="1.5"
          />
          <text x="230" y="224" fill="#F2EFE7" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FCC 4x</text>

          {/* 机头动静压传感器探针 (Pitot Probes) */}
          <line x1="110" y1="215" x2="80" y2="215" stroke="#8EC2E6" strokeWidth="2" />
          <line x1="110" y1="225" x2="80" y2="225" stroke="#8EC2E6" strokeWidth="2" />
          <circle cx="78" cy="215" r="3" fill="#8EC2E6" />
          <circle cx="78" cy="225" r="3" fill="#8EC2E6" />
        </g>

        {/* LAYER 4: 分布式 6 倾转旋翼与推进电机 (Propulsion) */}
        <g
          className={`svg-layer layer-propulsion ${activeSubsystem === 'propulsion' ? 'is-active' : ''}`}
          onClick={() => onSelectSubsystem('propulsion')}
          role="button"
          tabIndex={0}
          aria-label="分布式电力推进系统"
        >
          {/* 6 组倾转旋翼短舱位置 */}
          {/* 旋翼 1 & 6 (翼尖外段) */}
          <circle cx="160" cy="90" r="32" fill="none" stroke={activeSubsystem === 'propulsion' ? '#D99A45' : 'rgba(217, 154, 69, 0.4)'} strokeWidth="2" strokeDasharray="5 3" />
          <rect x="150" y="80" width="20" height="20" rx="3" fill="#D99A45" />
          <text x="160" y="50" fill="#F2EFE7" fontSize="10" textAnchor="middle">旋翼 #1 (翼尖左)</text>

          <circle cx="160" cy="350" r="32" fill="none" stroke={activeSubsystem === 'propulsion' ? '#D99A45' : 'rgba(217, 154, 69, 0.4)'} strokeWidth="2" strokeDasharray="5 3" />
          <rect x="150" y="340" width="20" height="20" rx="3" fill="#D99A45" />
          <text x="160" y="395" fill="#F2EFE7" fontSize="10" textAnchor="middle">旋翼 #6 (翼尖右)</text>

          {/* 旋翼 2 & 5 (主翼中段) */}
          <circle cx="330" cy="110" r="28" fill="none" stroke={activeSubsystem === 'propulsion' ? '#D99A45' : 'rgba(217, 154, 69, 0.4)'} strokeWidth="1.8" strokeDasharray="4 2" />
          <rect x="322" y="102" width="16" height="16" rx="3" fill="#D99A45" />
          <text x="330" y="75" fill="#F2EFE7" fontSize="10" textAnchor="middle">旋翼 #2</text>

          <circle cx="330" cy="330" r="28" fill="none" stroke={activeSubsystem === 'propulsion' ? '#D99A45' : 'rgba(217, 154, 69, 0.4)'} strokeWidth="1.8" strokeDasharray="4 2" />
          <rect x="322" y="322" width="16" height="16" rx="3" fill="#D99A45" />
          <text x="330" y="375" fill="#F2EFE7" fontSize="10" textAnchor="middle">旋翼 #5</text>

          {/* 旋翼 3 & 4 (V 尾翼尖) */}
          <circle cx="760" cy="115" r="26" fill="none" stroke={activeSubsystem === 'propulsion' ? '#D99A45' : 'rgba(217, 154, 69, 0.4)'} strokeWidth="1.6" strokeDasharray="3 2" />
          <rect x="752" y="107" width="16" height="16" rx="3" fill="#D99A45" />
          <text x="760" y="80" fill="#F2EFE7" fontSize="10" textAnchor="middle">旋翼 #3 (尾左)</text>

          <circle cx="760" cy="325" r="26" fill="none" stroke={activeSubsystem === 'propulsion' ? '#D99A45' : 'rgba(217, 154, 69, 0.4)'} strokeWidth="1.6" strokeDasharray="3 2" />
          <rect x="752" y="317" width="16" height="16" rx="3" fill="#D99A45" />
          <text x="760" y="365" fill="#F2EFE7" fontSize="10" textAnchor="middle">旋翼 #4 (尾右)</text>
        </g>

        {/* LAYER 5: 机电作动筒与舵面 (Actuators) */}
        <g
          className={`svg-layer layer-actuators ${activeSubsystem === 'actuators' ? 'is-active' : ''}`}
          onClick={() => onSelectSubsystem('actuators')}
          role="button"
          tabIndex={0}
          aria-label="机电舵面执行机构"
        >
          {/* 副翼与升降舵面作动筒标示 */}
          <line x1="390" y1="140" x2="415" y2="140" stroke={activeSubsystem === 'actuators' ? '#D99A45' : '#8EC2E6'} strokeWidth="4" />
          <line x1="390" y1="300" x2="415" y2="300" stroke={activeSubsystem === 'actuators' ? '#D99A45' : '#8EC2E6'} strokeWidth="4" />
          <text x="440" y="144" fill="#8EC2E6" fontSize="10">EMA-左副翼</text>
          <text x="440" y="304" fill="#8EC2E6" fontSize="10">EMA-右副翼</text>
        </g>

        {/* 当前选中层的高亮热点脉冲框 */}
        <circle
          cx={
            activeSubsystem === 'propulsion' ? 160 :
            activeSubsystem === 'power' ? 380 :
            activeSubsystem === 'avionics' ? 230 :
            activeSubsystem === 'structures' ? 440 :
            activeSubsystem === 'actuators' ? 400 : 700
          }
          cy={
            activeSubsystem === 'propulsion' ? 90 :
            activeSubsystem === 'power' ? 220 :
            activeSubsystem === 'avionics' ? 220 :
            activeSubsystem === 'structures' ? 220 :
            activeSubsystem === 'actuators' ? 140 : 220
          }
          r="48"
          fill="none"
          stroke="#D99A45"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="active-pulse-ring"
        />
      </svg>

      <style>{`
        .anatomy-viewport {
          width: 100%;
          position: relative;
        }
        .layered-aircraft-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .svg-layer {
          cursor: pointer;
          transition: all var(--transition-nav);
        }
        .svg-layer:hover {
          filter: drop-shadow(0 0 8px rgba(217, 154, 69, 0.4));
        }
        .active-pulse-ring {
          animation: ringPulse 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes ringPulse {
          0% {
            transform-origin: center;
            opacity: 0.9;
            stroke-width: 2px;
          }
          50% {
            opacity: 0.3;
            stroke-width: 1px;
          }
          100% {
            opacity: 0.9;
            stroke-width: 2px;
          }
        }
      `}</style>
    </div>
  );
};
