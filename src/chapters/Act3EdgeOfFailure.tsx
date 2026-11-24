import React from 'react';
import { useSafetyState } from '../app/state';
import { ScenarioId } from '../app/types';
import { EvidenceBadge } from '../components/EvidenceBadge';

interface ScenarioInfo {
  id: ScenarioId;
  title: string;
  context: string;
  hazard: string;
  mechanism: string;
  propagation: string[];
  consequence: string;
  severity: string;
  mitigation: string;
  verification: string;
  residualRisk: string;
  tag: 'A';
  source: string;
}

const SCENARIOS: ScenarioInfo[] = [
  {
    id: 'EX-01',
    title: '推进链异常推力不一致',
    context: '悬停或倾转过渡阶段（低空垂直姿态向水平姿态转换）',
    hazard: '单侧某推进单元电机扭矩突降或推力丢失（如 2 号前翼电机）',
    mechanism: '逆变器相电流检测偏移或电机绕组过热保护触发非对称限幅',
    propagation: [
      '第 2 号外置旋翼推力骤减 40%',
      '左翼升力力矩骤失，产生剧烈左滚与向左偏航力矩',
      '飞控系统必须瞬间提升其余 5 旋翼转速与倾角进行配平',
      '姿态控制裕度 (Control Margin) 严重收窄至极限'
    ],
    consequence: '机组操纵负荷激增；若处于低高度悬停，可能发生接地偏摆或进近硬着陆。',
    severity: '危急 (Critical / Catastrophic 取决于故障阶段)',
    mitigation: '推力非对称自适应重构算法、双绕组冗余电机、倾转走廊高度限制。',
    verification: '6 自由度铁鸟台架故障注入、全飞行包线极限蒙特卡洛仿真。',
    residualRisk: '极限强风剪切叠加单旋翼失效时的多重偶发边界工况。',
    tag: 'A',
    source: 'EX-01'
  },
  {
    id: 'EX-02',
    title: '高压动力电池局部热失控',
    context: '高倍率大电流爬升工况或地面大功率超级快充',
    hazard: '某电池模块内单个电芯内部微短路或机械应力微穿孔',
    mechanism: '单体电芯剧烈自加速副反应，温度突破热失控自放热临界阈值 (>150°C)',
    propagation: [
      '单体电芯释气并产生高温局部射流',
      '热量传导至相邻电芯与采样线束',
      'BMS 检测到异常温升与单体电压骤降，触发紧急断电报警',
      '该动力分段高压接触器切断，全机可用电量与峰值放电功率缩水'
    ],
    consequence: '垂直着陆阶段可用放电倍率受限，飞行时间与备降距离窗口急剧缩短。',
    severity: '灾难性 (Catastrophic，若热失控向临近模组失控蔓延)',
    mitigation: '气凝胶隔热屏障、相变吸热层、定向排气防爆阀、双向电气隔离接触器。',
    verification: '单体过充/针刺破坏性试验、模组级火烧不蔓延试验 (DO-311A)。',
    residualRisk: '微小制造缺陷在全寿命周期老化震动后诱发的随机内短路。',
    tag: 'A',
    source: 'EX-02'
  },
  {
    id: 'EX-03',
    title: '动静压传感器结冰与数据偏置',
    context: '进近减速穿云阶段（高湿低温微气象环境）',
    hazard: '机头空速管加热失效引发局部结冰，空速数据读数虚高或冻结',
    mechanism: '飞控计算机接收到被误导的指示空速 (IAS)，控制律错误判断当前升力充裕',
    propagation: [
      '传感器通道 1 空速偏高 30 节，通道 2/3 数据出现渐进分歧',
      '表决算法触发延迟或误将真实低速判定为故障',
      '自动倾转指令未能及时后倾旋翼补充垂直推力',
      '真实空速跌破失速临界线，产生未预警沉降'
    ],
    consequence: '飞行器轨迹大幅下坠偏离进近下滑道，触发近地告警并增加飞行员接管负荷。',
    severity: '危险 (Hazardous)',
    mitigation: '多源异构空速估算（结合 GPS 地速、合成迎角、电机反扭矩融合估算）。',
    verification: '人在环路飞行模拟机结冰故障注入、传感器故障注入飞行试验。',
    residualRisk: '极端恶劣气象下多源传感器共因失效模式。',
    tag: 'A',
    source: 'EX-03'
  }
];

export const Act3EdgeOfFailure: React.FC = () => {
  const { state, dispatch, goToChapter } = useSafetyState();
  const currentScenario = SCENARIOS.find(s => s.id === state.selectedScenario) || SCENARIOS[0];

  return (
    <section className="chapter-view" aria-labelledby="act3-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT III · THE EDGE OF FAILURE</span>
          <EvidenceBadge type="A" text="教学故障因果推演" sourceId="M1" />
        </div>
        <h2 id="act3-title" className="chapter-heading">失效边界：因果传播链与动态风险推演</h2>
        <p className="chapter-desc">
          安全并非来自“永不损坏”的幻想，而是源于对每一次失效如何发生、如何扩散、如何被遏制的精密推演。以下选取三个关键教学假设场景进行因果链展示。
        </p>
      </div>

      {/* 场景切换按钮组 */}
      <div className="scenario-switcher">
        {SCENARIOS.map((sc) => {
          const isSelected = state.selectedScenario === sc.id;
          return (
            <button
              key={sc.id}
              className={`scenario-btn ${isSelected ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_SCENARIO', payload: sc.id })}
            >
              <span className="sc-id">{sc.id}</span>
              <span className="sc-title">{sc.title}</span>
            </button>
          );
        })}
      </div>

      {/* 因果链传播流水线图 */}
      <div className="causal-pipeline-card">
        <div className="pipeline-header">
          <div className="header-info">
            <h3 className="scenario-name">情境分析：{currentScenario.title}</h3>
            <span className="scenario-ctx"><strong>工况环境：</strong>{currentScenario.context}</span>
          </div>
          <EvidenceBadge type={currentScenario.tag} sourceId={currentScenario.source} />
        </div>

        {/* 阶段式因果链 */}
        <div className="propagation-chain">
          <div className="chain-step step-hazard">
            <div className="step-tag">01 · 始发危险源</div>
            <div className="step-content">{currentScenario.hazard}</div>
          </div>

          <div className="chain-step step-mech">
            <div className="step-tag">02 · 微观致因机制</div>
            <div className="step-content">{currentScenario.mechanism}</div>
          </div>

          <div className="chain-step step-prop">
            <div className="step-tag">03 · 系统级连锁传播</div>
            <ul className="prop-list">
              {currentScenario.propagation.map((node, idx) => (
                <li key={idx} className="prop-node">
                  <span className="prop-arrow">→</span>
                  <span>{node}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="chain-step step-conseq">
            <div className="step-tag">04 · 最终系统后果</div>
            <div className="step-content text-risk">{currentScenario.consequence}</div>
            <div className="severity-badge">严重度：{currentScenario.severity}</div>
          </div>
        </div>

        {/* 防护与验证连接条 */}
        <div className="mitigation-row">
          <div className="mitigation-box">
            <span className="mitigation-label">🛡️ 拟议工程控制措施：</span>
            <span className="mitigation-text">{currentScenario.mitigation}</span>
          </div>
          <div className="mitigation-box">
            <span className="mitigation-label">🧪 适航符合性验证方法：</span>
            <span className="mitigation-text">{currentScenario.verification}</span>
          </div>
        </div>

        <div className="pipeline-footer">
          <span className="residual-hint">⚠️ 残余风险与不确定性：{currentScenario.residualRisk}</span>
          <button className="primary-link-btn" onClick={() => goToChapter(4)}>
            查阅防御矩阵与验证证据 (进入 ACT IV) →
          </button>
        </div>
      </div>

      <style>{`
        .scenario-switcher {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }
        .scenario-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 18px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .scenario-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .scenario-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          box-shadow: 0 0 14px var(--color-amber-glow);
        }
        .sc-id {
          font-family: var(--font-family-mono);
          font-size: 11px;
          color: var(--color-amber);
          font-weight: 700;
        }
        .sc-title {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 600;
        }
        .causal-pipeline-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pipeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .scenario-name {
          font-size: 19px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .scenario-ctx {
          font-size: 13px;
          color: var(--color-aluminum);
          margin-top: 4px;
          display: block;
        }
        .propagation-chain {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
        }
        .chain-step {
          background: var(--color-graphite-elevated);
          padding: 16px;
          border-radius: 6px;
          border-top: 3px solid var(--color-aluminum-dim);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .step-hazard {
          border-top-color: var(--color-amber);
        }
        .step-mech {
          border-top-color: var(--color-tech-blue);
        }
        .step-prop {
          border-top-color: #d88e36;
        }
        .step-conseq {
          border-top-color: var(--color-risk-red);
        }
        .step-tag {
          font-size: 11px;
          font-family: var(--font-family-mono);
          color: var(--color-aluminum);
          text-transform: uppercase;
        }
        .step-content {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .step-content.text-risk {
          color: #f1928b;
          font-weight: 600;
        }
        .severity-badge {
          margin-top: auto;
          font-size: 11.5px;
          background: rgba(185, 76, 68, 0.2);
          border: 1px solid rgba(185, 76, 68, 0.4);
          color: #f1928b;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        .prop-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .prop-node {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 12.5px;
          color: var(--color-warm-white);
          line-height: 1.4;
        }
        .prop-arrow {
          color: var(--color-amber);
          font-weight: bold;
        }
        .mitigation-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 800px) {
          .mitigation-row {
            grid-template-columns: 1fr;
          }
        }
        .mitigation-box {
          background: rgba(217, 154, 69, 0.08);
          border: 1px solid rgba(217, 154, 69, 0.2);
          padding: 12px 14px;
          border-radius: 6px;
          font-size: 13px;
        }
        .mitigation-label {
          color: var(--color-amber);
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
        }
        .mitigation-text {
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .pipeline-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .residual-hint {
          font-size: 12.5px;
          color: var(--color-aluminum);
        }
        .primary-link-btn {
          color: var(--color-amber);
          font-weight: 700;
          font-size: 13.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>
    </section>
  );
};
