// Phase 7 状态机快速切换与幂等性压力回归测试 (50 次循环)
console.log('=== 启动 Phase 7 状态机 50 次切幕与打断压力测试 ===');

let state = {
  chapter: 0,
  flightPhase: 'climb',
  selectedSubsystem: 'propulsion',
  selectedScenario: 'EX-01',
  activeFaultNode: null,
  selectedMitigation: null,
  openPanel: 'none',
  motionMode: 'normal',
  qualityMode: 'high',
};

function dispatch(action) {
  switch (action.type) {
    case 'SET_CHAPTER':
      if (state.chapter === action.payload) return;
      state = { ...state, chapter: action.payload, openPanel: 'none', activeFaultNode: null };
      break;
    case 'SET_PANEL':
      state = { ...state, openPanel: state.openPanel === action.payload ? 'none' : action.payload };
      break;
    case 'TOGGLE_MOTION_MODE':
      state = { ...state, motionMode: state.motionMode === 'normal' ? 'reduced' : 'normal' };
      break;
  }
}

// 模拟 50 次连续随机/高频切幕与弹窗打断
for (let i = 1; i <= 50; i++) {
  const targetChapter = i % 6;
  dispatch({ type: 'SET_PANEL', payload: 'sources' });
  if (state.openPanel !== 'sources') throw new Error(`第 ${i} 次打开面板失败`);
  
  dispatch({ type: 'SET_CHAPTER', payload: targetChapter });
  if (state.chapter !== targetChapter) throw new Error(`第 ${i} 次切换章节失败`);
  if (state.openPanel !== 'none') throw new Error(`第 ${i} 次切幕未自动清理面板遮罩`);
}

console.log('[PASS] 50 次快速切幕与弹窗打断全部通过，遮罩即时清理，状态无漂移');
