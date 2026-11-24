import React, { useState } from 'react';
import { useSafetyState } from '../app/state';
import { EvidenceBadge } from '../components/EvidenceBadge';

interface EvidenceItem {
  id: string;
  category: 'F' | 'A' | 'U';
  title: string;
  detail: string;
  source: string;
}

const EVIDENCE_LIST: EvidenceItem[] = [
  // 已证实公开事实 [F]
  {
    id: 'EV-F-01',
    category: 'F',
    title: '6 倾转旋翼总体气动架构',
    detail: '机翼翼尖、翼身外侧与 V 尾布置共 6 组独立倾转旋翼单元，由永磁同步电机直驱。',
    source: 'J1 (Joby SEC 10-K)'
  },
  {
    id: 'EV-F-02',
    category: 'F',
    title: 'Powered-lift 适航专用型号审定准则',
    detail: 'FAA AC 21.17-4 专门为倾转动力升力飞行器确立审定标准，打破传统固定翼与直升机规章壁垒。',
    source: 'S5 (FAA AC 21.17-4)'
  },
  {
    id: 'EV-F-03',
    category: 'F',
    title: 'EASA SC-VTOL 10^-9/h 灾难性失效量级',
    detail: '欧洲航空安全局 SC-VTOL 规章要求载客商业运营必须满足大型客机级别的 10^-9/h 失效率。',
    source: 'S7 (EASA SC-VTOL)'
  },
  {
    id: 'EV-F-04',
    category: 'F',
    title: '四通道异构电传飞控架构声明',
    detail: '厂商公开披露机载核心飞行控制系统采用四重冗余物理架构，支持通道故障实时表决。',
    source: 'J1 (Joby SEC 10-K)'
  },

  // 有边界工程假设 [A]
  {
    id: 'EV-A-01',
    category: 'A',
    title: 'EX-01 推进链非对称推力丢失情境',
    detail: '设定单旋翼在倾转过渡走廊突发 40% 推力中断，用于评估姿态配平重构算法的控制裕度极限。',
    source: 'EX-01 (课程教学推演)'
  },
  {
    id: 'EV-A-02',
    category: 'A',
    title: 'EX-02 动力电池单体热失控隔离屏障',
    detail: '基于 DO-311A 航空储能标准建立电芯相变吸热板与气凝胶耐火 15 分钟隔离计算模型。',
    source: 'EX-02 (航空储能教学标准)'
  },
  {
    id: 'EV-A-03',
    category: 'A',
    title: 'EX-03 动静压管微气象积冰偏置情境',
    detail: '模拟未探测空速正偏置引发的 UCA-01 未提供后倾动作，测试多源异构合成空速一致性检查机制。',
    source: 'EX-03 (STPA 控制回路)'
  },
  {
    id: 'EV-A-04',
    category: 'A',
    title: 'FMEA / FTA 定性风险矩阵评估',
    detail: '采用严谨的定性严重度×可能性矩阵进行危害分级，杜绝虚构未经验证的部件定量失效率。',
    source: 'M1 (SAE ARP4761)'
  },

  // 待研究与未核实项 [U]
  {
    id: 'EV-U-01',
    category: 'U',
    title: '具体部件实际平均无故障时间 (MTBF)',
    detail: '受商业技术机密限制，厂商未公开具体机电作动筒与功率电子部件的实验室统计失效率。',
    source: '公开资料未载 [U]'
  },
  {
    id: 'EV-U-02',
    category: 'U',
    title: '电池包内部电芯微通道液冷/相变细节',
    detail: '动力电池舱模组内部具体流道拓扑、防爆单向泄压阀开启压力设定等工程细节尚未完全公开。',
    source: '公开资料未载 [U]'
  },
  {
    id: 'EV-U-03',
    category: 'U',
    title: '最终全状态标准型号合格证 (TC) 获批',
    detail: '当前处于审定符合性验证 (MOC) 试飞科目攻关阶段，尚未取得 FAA 最终标准 TC 正式签发。',
    source: '审定进行中 [U]'
  },
  {
    id: 'EV-U-04',
    category: 'U',
    title: '城市低空强风切变与结冰多重并发概率',
    detail: '微气象多重极端环境耦合作用下的长期商业化运营统计失效率仍待长时间真实飞行数据支撑。',
    source: '待长期验证 [U]'
  }
];

export const Act5BeyondGravity: React.FC = () => {
  const { goToChapter, dispatch } = useSafetyState();
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | 'F' | 'A' | 'U'>('ALL');

  const handleCopyCitation = () => {
    const citationText = `Beyond Gravity: The Cost of Flight (eVTOL Safety Systems Engineering Research & Demonstration). Coursework Project-2 (Independent Edition), Nov 2026. Referenced to FAA AC 21.17-4, EASA SC-VTOL Issue 2 and Joby S4 Architecture. Online: https://sorenmagnus.github.io/15230326_second/`;
    
    // 兼容所有安全上下文的剪贴板复制逻辑
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(citationText)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => fallbackCopy(citationText));
    } else {
      fallbackCopy(citationText);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert('已选中引用内容，请手动复制：\n' + text);
    }
  };

  const filteredItems = EVIDENCE_LIST.filter(item => {
    const matchCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
    const matchSearch = searchTerm === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.source.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="chapter-view" aria-labelledby="act5-title">
      <div className="chapter-header">
        <div className="chapter-tag-line">
          <span className="chapter-code">ACT V · BEYOND GRAVITY</span>
          <EvidenceBadge type="F" text="系统学术总结" sourceId="S7" />
        </div>
        <h2 id="act5-title" className="chapter-heading">超越重力：研究结论、边界与证据台账</h2>
        <p className="chapter-desc">
          真正的工程信任建立在对自身认知边界的清晰界定之上。在这里，我们严格拆解已知事实、教学模型假设与尚未核实的工程未知。支持全文关键字即时检索。
        </p>
      </div>

      {/* 检索与筛选栏 */}
      <div className="search-filter-bar">
        <input
          type="text"
          className="search-evidence-input"
          placeholder="搜索事实、假设、证据源或未核实项..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="搜索学术证据条目"
        />
        <div className="category-filter-group">
          {(['ALL', 'F', 'A', 'U'] as const).map(cat => (
            <button
              key={cat}
              className={`cat-pill ${categoryFilter === cat ? 'active' : ''}`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat === 'ALL' ? '全部条目' : cat === 'F' ? '已证实 [F]' : cat === 'A' ? '工程假设 [A]' : '未核实 [U]'}
            </button>
          ))}
        </div>
      </div>

      {/* 三栏并列证据卡片流 */}
      <div className="evidence-grid">
        {filteredItems.map(item => (
          <div key={item.id} className={`evidence-card border-${item.category.toLowerCase()}`}>
            <div className="evidence-card-header">
              <span className="ev-id">{item.id}</span>
              <EvidenceBadge type={item.category} />
            </div>
            <h4 className="ev-title">{item.title}</h4>
            <p className="ev-detail">{item.detail}</p>
            <div className="ev-source-row">
              <span className="ev-source-label">来源出处：</span>
              <span className="ev-source-val">{item.source}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 底部功能栏与引用导出 */}
      <div className="conclusion-action-card">
        <div className="citation-text-box">
          <span className="citation-label">课程学术引用标识 (Academic Citation)：</span>
          <code className="citation-code">
            Beyond Gravity: The Cost of Flight (eVTOL Safety Systems Engineering). Coursework-2, 2026.
          </code>
        </div>

        <div className="action-buttons-group">
          <button className="copy-citation-btn" onClick={handleCopyCitation}>
            {copied ? '✓ 已复制到剪贴板！' : '📋 复制学术引用文本'}
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
        .search-filter-bar {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 12px 16px;
        }
        .search-evidence-input {
          flex: 1;
          min-width: 240px;
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          color: var(--color-warm-white);
          padding: 8px 14px;
          border-radius: 5px;
          font-size: 13.5px;
        }
        .search-evidence-input:focus {
          border-color: var(--color-amber);
          outline: none;
        }
        .category-filter-group {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cat-pill {
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
          transition: all var(--transition-nav);
          min-height: 32px;
        }
        .cat-pill.active {
          background: rgba(217, 154, 69, 0.18);
          border-color: var(--color-amber);
          color: var(--color-amber);
          font-weight: 600;
        }
        .evidence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .evidence-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform var(--transition-nav);
        }
        .evidence-card:hover {
          transform: translateY(-2px);
        }
        .border-f {
          border-top: 3px solid #8ec2e6;
        }
        .border-a {
          border-top: 3px solid var(--color-amber);
        }
        .border-u {
          border-top: 3px solid #f1928b;
        }
        .evidence-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ev-id {
          font-family: var(--font-family-mono);
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-weight: 700;
        }
        .ev-title {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 700;
          line-height: 1.4;
        }
        .ev-detail {
          font-size: 13px;
          color: var(--color-aluminum);
          line-height: 1.6;
        }
        .ev-source-row {
          margin-top: auto;
          padding-top: 8px;
          border-top: 1px solid rgba(184, 193, 200, 0.08);
          font-size: 11.5px;
          display: flex;
          gap: 4px;
        }
        .ev-source-label {
          color: var(--color-aluminum-dim);
        }
        .ev-source-val {
          color: var(--color-amber);
          font-weight: 600;
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
          padding: 10px 14px;
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
          min-height: 40px;
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
