import { RiskRecord, FhaItem, FmeaItem, FtaNode, StpaControlLoop } from './types';

// 三个跨方法典型教学假设记录 (EX-01, EX-02, EX-03)
export const CORE_RISK_RECORDS: RiskRecord[] = [
  {
    id: 'EX-01',
    phase: 'climb',
    subsystem: 'propulsion',
    operationalContext: '悬停或倾转过渡阶段（低高度，动力学状态从推力升力向气动升力转换走廊）',
    hazard: '某外置推进单元推力不足或突发非对称推力丢失（推力分配出现 >35% 偏差）',
    failureMechanism: '逆变器相电流采样漂移、IGBT 瞬态击穿保护或电机绕组局部过热触发自动限功率保护。',
    propagationNodes: [
      '单侧外段旋翼转速与拉力下降',
      '机翼横滚与偏航气动不平衡力矩骤增',
      '电传飞控计算机 (FCC) 实时调动其余 5 组旋翼差动转速与倾转角补偿',
      '飞行控制裕度 (Control Margin) 严重收窄，机组工作负荷上升'
    ],
    consequence: '机组操纵负荷激增；若发生于近地过渡段，可导致高度异常损失或非自愿侧偏。',
    severity: '危急 (Critical / Catastrophic，视高度与气动裕度)',
    likelihoodEvidence: '无公开失效率数据，概率未知，不凭空虚构定量等级 [U]',
    riskStatus: 'mitigated',
    proposedControls: [
      '双绕组永磁同步电机冗余驱动',
      '独立分布式电机控制器与电流限幅隔离',
      '飞控系统自适应推力重构与倾转角死区补偿算法',
      '过渡走廊最低安全高度与飞行包线边界强制限制'
    ],
    verificationMethods: [
      '6 自由度铁鸟综合试验台多故障并发注入测试',
      '全包线非对称推力蒙特卡洛极端风切变动态收敛性仿真',
      '原型机带单发断电模拟空中试飞验证'
    ],
    residualRisk: '极端低空突发强风切变叠加倾转机构临界死区时的多重偶发边界工况。',
    facts: ['Joby S4 配备 6 组倾转旋翼与独立电机控制 [J1]', 'FAA AC 21.17-4 强调过渡推力重构能力 [S5]'],
    assumptions: ['单电机推力瞬降 40% 的教学推演情境 [A]', '气动耦合模型参数为教学简化假设 [D]'],
    sources: ['S5', 'J1', 'M1'],
    evidenceStatus: 'A'
  },
  {
    id: 'EX-02',
    phase: 'takeoff',
    subsystem: 'power',
    operationalContext: '全油门垂直起飞大倍率放电工况，或地面超充刚完成后的热态待命工况',
    hazard: '某动力电池舱内部单体电芯发生热失控并向相邻模组级联热蔓延',
    failureMechanism: '电芯内部微观制造毛刺穿孔、机械振动微裂纹或局部热积聚诱发自放热放热副反应 (>150°C)。',
    propagationNodes: [
      '单体电芯剧烈分解产气破裂，释放高温导电烟雾与火焰射流',
      '热量通过电芯极耳与结构件传导至相邻电芯',
      'BMS 传感器捕获单体电压剧降与温度异常飞升，触发全机声光紧急告警',
      '主高压接触器紧急分断受灾电池组，全机高压母线由并联冗余供电'
    ],
    consequence: '动力电池可用峰值功率与总储能量永久损失，飞行器续航大幅缩减，必须立即执行紧急盲降或返场。',
    severity: '灾难性 (Catastrophic，若热失控向客舱或临近完整电池分段不受控蔓延)',
    likelihoodEvidence: '电芯单体随机失效率业内估计约 10^-6~10^-7，但整包系统级级联失效真实概率无公开数据 [U]',
    riskStatus: 'mitigated',
    proposedControls: [
      '航空级电芯间耐火微孔气凝胶与相变吸热板物理隔离',
      '独立承压密封耐火电池舱，配置机身外侧定向排气防爆泄压单向阀',
      '毫秒级光纤温度感测与直流高压热敏快速熔断器 (Pyrofuse)',
      '双独立物理分段高压供电母线架构'
    ],
    verificationMethods: [
      'RTCA DO-311A 模组级热失控包容性穿刺试验',
      '1100°C 持续 15 分钟标准机载防火墙耐火烧穿破坏性试验',
      '全电动力系统单侧母线断电紧急着陆全尺寸地面试验'
    ],
    residualRisk: '极端剧烈机械硬碰撞造成多模组同时结构挤压破损时的热扩散。',
    facts: ['DO-311A 为航空锂电池审定基本门槛 [S7]', '高压母线分段是多旋翼安全标配 [M1]'],
    assumptions: ['设定电池包划分为 4 个独立物理舱段 [A]', '假设热失控单体释放热量峰值为 180kJ [D]'],
    sources: ['S7', 'S8', 'M1'],
    evidenceStatus: 'A'
  },
  {
    id: 'EX-03',
    phase: 'approach',
    subsystem: 'avionics',
    operationalContext: '进近减速与反向倾转阶段（低空多云、低温潮湿多变气象环境）',
    hazard: '动静压传感器（空速管）受未探测的微气象积冰污染导致读数恒定正偏置',
    failureMechanism: '进气孔加热丝局部断路或结冰速率超过电加热解冻能力，动压腔形成冰塞。',
    propagationNodes: [
      '主控通道 1 指示空速 (IAS) 虚高 35 节，与真实流场失真',
      '飞控系统错误判定当前已具备充裕机翼升力，延迟旋翼仰角后倾时序',
      '飞行器真实空速持续下滑至临界失速空速以下',
      '旋翼进气攻角恶化，诱发涡环状态 (VRS) 或下沉率急剧超限'
    ],
    consequence: '飞行器在未预警状态下突发大下沉率偏离正常下滑道，机组可用修正高度严重不足。',
    severity: '危险级 (Hazardous，危及飞行安全与人员负荷)',
    likelihoodEvidence: '特定气象条件诱发的传感器受损概率无准确统计，定性分析 [U]',
    riskStatus: 'mitigated',
    proposedControls: [
      '三套空间分离的非相似全加热动静压探头加总表决',
      '基于 GPS 地速、机载激光雷达与电机反扭矩气动辨识的“合成空速”融合解算',
      '空速与俯仰姿态/升力不一致时的飞控独立一致性交叉监控 (Cross-check)',
      '声光触觉多重失速与异常下沉率前馈预测告警 (TAWS/PULL UP)'
    ],
    verificationMethods: [
      '结冰风洞 (Icing Wind Tunnel) 动态积冰传感特性标定试验',
      '人在回路 (HIL) 故障注入全动模拟机飞行员改出程序评估',
      'DO-178C DAL A 级三余度表决算法形式化验证'
    ],
    residualRisk: '遭遇极罕见过冷大水滴 (SLD) 极端严重结冰环境导致的传感器全通道共因堵塞。',
    facts: ['现代电传飞控普遍采用三余度/四余度传感器表决 [J1]', 'FAA AC 21.17-4 强制要求结冰保护机制 [S5]'],
    assumptions: ['空速表决逻辑在延迟 1.8 秒后触发报警的教学设定 [A]', '合成空速融合算法数学模型为学术推导 [D]'],
    sources: ['S5', 'S9', 'M3'],
    evidenceStatus: 'A'
  }
];

// FHA (功能危害分析) 全阶段数据集合
export const FHA_DATASET: FhaItem[] = [
  {
    id: 'FHA-01',
    functionName: '提供垂直升力与悬停姿态控制',
    phase: 'takeoff',
    failureCondition: '悬停推力完全丧失（总升力 < 1.0G）',
    effectOnAircraft: '无法维持高度，垂直撞地',
    effectOnCrew: '机组无法改出，座舱结构严重变形',
    severityCategory: 'Catastrophic',
    rationale: '悬停阶段无机翼升力兜底，总升力不足直接导致重力坠落。',
    sourceId: 'S5',
    tag: 'F'
  },
  {
    id: 'FHA-02',
    functionName: '执行旋翼倾转推力矢量连续调度',
    phase: 'climb',
    failureCondition: '倾转机构非对称卡阻（单侧 0°，对侧 45°）',
    effectOnAircraft: '巨大非对称气动力矩，飞行器剧烈滚转并失速',
    effectOnCrew: '产生剧烈侧向过载，机组丧失态势感知',
    severityCategory: 'Catastrophic',
    rationale: '倾转角严重不对称超出了气动舵面的极限配平控制能力。',
    sourceId: 'EX-01',
    tag: 'A'
  },
  {
    id: 'FHA-03',
    functionName: '提供全机高压动力电能传输',
    phase: 'cruise',
    failureCondition: '主高压配电母线单通道接地短路',
    effectOnAircraft: '触发母线熔断分断，全机可用推进功率下降 50%',
    effectOnCrew: '告警系统点亮，须执行单母线降级巡航与优先降落程序',
    severityCategory: 'Hazardous',
    rationale: '巡航阶段可借助机翼滑翔降低功率需求，单母线足以维持平飞。',
    sourceId: 'S8',
    tag: 'F'
  },
  {
    id: 'FHA-04',
    functionName: '精准测量飞机相对气流速度与攻角',
    phase: 'approach',
    failureCondition: '全机空速数据冻结在当前值且无故障标识',
    effectOnAircraft: '飞控采用错误速度执行姿态重构，可能在减速时发生深失速',
    effectOnCrew: '仪表指示正常但飞机实际减速异常，极度增加机组负荷',
    severityCategory: 'Hazardous',
    rationale: '未被检测出的误导性数据 (Hazardously Misleading Information) 比断电更危险。',
    sourceId: 'EX-03',
    tag: 'A'
  },
  {
    id: 'FHA-05',
    functionName: '垂直进近末端姿态精确微调',
    phase: 'landing',
    failureCondition: '激光雷达/无线电高度表近地读数突发跳变为零',
    effectOnAircraft: '飞控过早收油门减推力，导致触地垂直加速度过大',
    effectOnCrew: '起落架硬着陆冲击，乘客受轻微挤压伤',
    severityCategory: 'Major',
    rationale: '冲击载荷被吸能起落架缓冲，机体主承载座舱完好。',
    sourceId: 'S6',
    tag: 'F'
  }
];

// FMEA (失效模式与影响分析) 数据集合
export const FMEA_DATASET: FmeaItem[] = [
  {
    id: 'FMEA-01',
    component: '旋翼倾转作动筒 (EMA)',
    subsystem: 'actuators',
    failureMode: '机械丝杠受异物卡死 (Mechanical Jam)',
    localEffect: '受损旋翼无法继续改变倾转仰角',
    systemEffect: '飞机无法进入完整固定翼模式或无法改平悬停',
    detectionMethod: '电机位置传感器指令/反馈跟踪误差超阈值告警',
    compensatingProvision: '其余 5 旋翼倾转自适应配平，调整爬升走廊',
    severityClass: 'Catastrophic',
    sourceId: 'S8',
    tag: 'A'
  },
  {
    id: 'FMEA-02',
    component: '电驱动逆变器 (Inverter)',
    subsystem: 'propulsion',
    failureMode: 'IGBT 功率管击穿短路',
    localEffect: '相间短路触发高压 DC 侧熔丝毫秒级熔断',
    systemEffect: '单台电机瞬时断电失去推力',
    detectionMethod: '相电流传感器过流硬件比较器快速触发中断',
    compensatingProvision: '对侧电机协调限功率降扭矩，飞控打舵抑制偏航',
    severityClass: 'Hazardous',
    sourceId: 'J1',
    tag: 'F'
  },
  {
    id: 'FMEA-03',
    component: '动力电池单体 (Cell)',
    subsystem: 'power',
    failureMode: '电芯内部微隔膜破损引发自放热',
    localEffect: '局部温度急剧爬升至 200°C 以上并开始释气',
    systemEffect: '可能向相邻电芯扩散引发舱段热失控',
    detectionMethod: '模组采样板多点 NTC 热敏电阻检测温升率 (dT/dt)',
    compensatingProvision: '隔热气凝胶阻隔热蔓延，开启排气阀泄压',
    severityClass: 'Catastrophic',
    sourceId: 'EX-02',
    tag: 'A'
  },
  {
    id: 'FMEA-04',
    component: '飞行控制计算机 (FCC 通道 A)',
    subsystem: 'avionics',
    failureMode: '单板内部时钟芯片漂移导致总线脱步',
    localEffect: '通道 A 输出控制报文超时',
    systemEffect: '其余通道表决剔除通道 A，系统降级为 3 余度运行',
    detectionMethod: '四通道跨路数据总线心跳报文周期校验',
    compensatingProvision: '无缝平滑切至三通道加权表决输出，无姿态瞬跳',
    severityClass: 'Minor',
    sourceId: 'J1',
    tag: 'F'
  },
  {
    id: 'FMEA-05',
    component: '主翼前缘碳纤维蒙皮',
    subsystem: 'structures',
    failureMode: '低空遭遇鸟击导致复合材料局部脱层破坏',
    localEffect: '蒙皮破裂局部外形凹陷，气动阻力增加',
    systemEffect: '局部升力轻微衰减，巡航电耗增加约 8%',
    detectionMethod: '机体声发射监测探头或飞行员目视检查',
    compensatingProvision: '碳纤维结构损伤容限设计，多剪切肋分散载荷',
    severityClass: 'Major',
    sourceId: 'S5',
    tag: 'F'
  }
];

// FTA (故障树分析) 顶事件树形逻辑
export const FTA_TREE: FtaNode[] = [
  {
    id: 'FTA-TOP-01',
    name: '顶事件：倾转过渡阶段失去足够姿态控制能力',
    gateType: 'OR',
    childIds: ['FTA-G01', 'FTA-G02'],
    explanation: '在旋翼从 90° 倾转至 0° 的高速过渡走廊内，飞行器出现无法抑制的滚转或俯仰发散。',
    tag: 'A',
    sourceId: 'M1',
    isTop: true
  },
  {
    id: 'FTA-G01',
    name: '中间事件 1：气动与推力不对称力矩超出飞控极限配平能力',
    gateType: 'AND',
    childIds: ['FTA-E01', 'FTA-E02'],
    explanation: '必须同时满足单侧大推力严重丢失且气动舵面在当前低速下控制效能不足。',
    tag: 'A',
    sourceId: 'EX-01'
  },
  {
    id: 'FTA-G02',
    name: '中间事件 2：飞行控制系统无法发出有效控制指令',
    gateType: 'OR',
    childIds: ['FTA-E03', 'FTA-E04'],
    explanation: '飞行控制硬件全面瘫痪或接收到了被全通道误导的虚假空速姿态信号。',
    tag: 'A',
    sourceId: 'M3'
  },
  {
    id: 'FTA-E01',
    name: '底事件 1：外侧关键推进单元发生严重推力中断 (>40%)',
    explanation: '电机损坏、变流器短路或旋翼桨叶气动严重气流剥离。',
    tag: 'A',
    sourceId: 'EX-01'
  },
  {
    id: 'FTA-E02',
    name: '底事件 2：动态空速低于气动舵面最小有效操纵速度',
    explanation: '在推力过渡尚未完成前空速偏低，机翼副翼与升降副翼气动控制力矩接近零。',
    tag: 'A',
    sourceId: 'S8'
  },
  {
    id: 'FTA-E03',
    name: '底事件 3：四通道电传飞控发生共因软件死锁',
    explanation: '极小概率事件：同一极端飞行状态边界触发了未被测试覆盖的计算异常 (DAL A)。',
    tag: 'U',
    sourceId: 'M2'
  },
  {
    id: 'FTA-E04',
    name: '底事件 4：三余度动静压传感器遭受共因结冰堵塞',
    explanation: '极端突发微气象过冷大水滴结冰超过全部加热系统融冰能力。',
    tag: 'A',
    sourceId: 'EX-03'
  }
];

// STPA (系统理论过程分析) 控制回路模型
export const STPA_MODEL: StpaControlLoop = {
  controller: '飞行员 (Pilot) 与电传飞行控制计算机 (FCC)',
  controlActions: [
    '旋翼倾转角指令 (Tilt Angle Command)',
    '六组旋翼电机转速与转矩指令 (RPM & Torque)',
    '升降副翼与方向舵偏转指令 (Aileron & Rudder Deflection)'
  ],
  actuators: '机电作动筒 (EMA) 与电机变流逆变器 (Inverters)',
  controlledProcess: '飞机机体气动姿态、飞行走廊与空间轨迹动力学',
  sensors: '三余度空速管、惯性测量单元 (IMU) 与旋翼位置编码器',
  feedbacks: [
    '三轴姿态角速度与欧拉角反馈 (Pitch/Roll/Yaw Rate)',
    '指示空速与迎角数据 (IAS & AoA)',
    '推进单元实际转速与电流反馈 (Motor Current & Speed)'
  ],
  ucas: [
    {
      id: 'UCA-01',
      controlAction: '旋翼倾转角度后倾指令',
      type: 'NotProviding',
      context: '飞机在进近航道中空速急剧跌落至临界值时',
      hazardLink: 'H-01 (低空失速大下沉率坠地)',
      rationale: '飞控误判当前具有充裕升力，未提供倾转旋翼后倾增加垂直推力的指令。'
    },
    {
      id: 'UCA-02',
      controlAction: '单侧旋翼电机紧急限扭矩指令',
      type: 'ProvidingCausesHazard',
      context: '在低空悬停遇到短时阵风扰动时',
      hazardLink: 'H-02 (近地非对称倾斜接地)',
      rationale: '算法对瞬态电流尖峰过度敏感，错误提供切断临近旋翼推力的保护指令。'
    },
    {
      id: 'UCA-03',
      controlAction: '由垂直推力向水平巡航倾转指令',
      type: 'WrongTiming',
      context: '起飞离地高度尚未越过近地障碍物净空高度时',
      hazardLink: 'H-03 (离地低高度下沉撞障)',
      rationale: '提前发出平飞前倾指令导致垂直升力骤降，飞行器在地面效应衰减后下沉。'
    },
    {
      id: 'UCA-04',
      controlAction: '差动旋翼偏航阻尼转矩指令',
      type: 'StoppedTooSoon',
      context: '遭遇侧风阵风连续扰动进入阻尼衰减过程中',
      hazardLink: 'H-04 (偏航荷兰滚动态发散)',
      rationale: '偏航反扭矩补偿脉冲持续时间过短，导致机体发生非预期侧向摇摆震荡。'
    }
  ]
};
