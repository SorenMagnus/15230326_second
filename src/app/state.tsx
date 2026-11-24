import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { GlobalSafetyState, Action, ChapterId } from './types';

function parseHashToChapter(): ChapterId {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash.toLowerCase();
  const match = hash.match(/#act([0-5])/);
  if (match) {
    const parsed = parseInt(match[1], 10);
    if (parsed >= 0 && parsed <= 5) return parsed as ChapterId;
  }
  return 0;
}

const initialState: GlobalSafetyState = {
  chapter: parseHashToChapter(),
  flightPhase: 'climb',
  selectedSubsystem: 'propulsion',
  selectedScenario: 'EX-01',
  activeFaultNode: null,
  selectedMitigation: null,
  openPanel: 'none',
  motionMode: 'normal',
  qualityMode: 'high',
  isAudioMuted: true, // B3 规范：默认完全静音
};

function stateReducer(state: GlobalSafetyState, action: Action): GlobalSafetyState {
  switch (action.type) {
    case 'SET_CHAPTER': {
      if (state.chapter === action.payload) return state; // 幂等性防护
      return {
        ...state,
        chapter: action.payload,
        openPanel: 'none',       // 章节切换时立即关闭弹窗/抽屉，消除残留遮罩
        activeFaultNode: null,   // 重置临时选中的故障节点
      };
    }
    case 'SET_FLIGHT_PHASE':
      if (state.flightPhase === action.payload) return state;
      return { ...state, flightPhase: action.payload };
    case 'SET_SUBSYSTEM':
      if (state.selectedSubsystem === action.payload) return state;
      return { ...state, selectedSubsystem: action.payload };
    case 'SET_SCENARIO':
      if (state.selectedScenario === action.payload) return state;
      return {
        ...state,
        selectedScenario: action.payload,
        activeFaultNode: null,
        selectedMitigation: null,
      };
    case 'SET_FAULT_NODE':
      return { ...state, activeFaultNode: action.payload };
    case 'SET_MITIGATION':
      return { ...state, selectedMitigation: action.payload };
    case 'SET_PANEL':
      return {
        ...state,
        openPanel: state.openPanel === action.payload ? 'none' : action.payload,
      };
    case 'TOGGLE_MOTION_MODE': {
      const nextMode = state.motionMode === 'normal' ? 'reduced' : 'normal';
      return { ...state, motionMode: nextMode };
    }
    case 'TOGGLE_QUALITY_MODE': {
      const nextQuality = state.qualityMode === 'high' ? 'eco' : 'high';
      return { ...state, qualityMode: nextQuality };
    }
    case 'TOGGLE_AUDIO':
      return { ...state, isAudioMuted: !state.isAudioMuted };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
}

interface StateContextType {
  state: GlobalSafetyState;
  dispatch: React.Dispatch<Action>;
  goToChapter: (id: ChapterId) => void;
}

const StateContext = createContext<StateContextType | null>(null);

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  // 1. 同步 URL Hash 与浏览器前进/后退历史 (支持刷新保持与外部直达)
  useEffect(() => {
    const handleHashChange = () => {
      const targetCh = parseHashToChapter();
      if (targetCh !== state.chapter) {
        dispatch({ type: 'SET_CHAPTER', payload: targetCh });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [state.chapter]);

  // 2. 切幕时同步更新 URL Hash 并平滑复位视口
  useEffect(() => {
    const expectedHash = `#act${state.chapter}`;
    if (window.location.hash !== expectedHash) {
      window.history.pushState(null, '', expectedHash);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.focus();
    }
  }, [state.chapter]);

  // 3. 监听浏览器系统级的动效偏好 (prefers-reduced-motion)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && state.motionMode !== 'reduced') {
      dispatch({ type: 'TOGGLE_MOTION_MODE' });
    }
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches && state.motionMode !== 'reduced') {
        dispatch({ type: 'TOGGLE_MOTION_MODE' });
      }
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // 4. 同步 CSS 模式类到 body 根元素
  useEffect(() => {
    if (state.motionMode === 'reduced') {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }, [state.motionMode]);

  useEffect(() => {
    if (state.qualityMode === 'eco') {
      document.body.classList.add('eco-mode');
    } else {
      document.body.classList.remove('eco-mode');
    }
  }, [state.qualityMode]);

  // 5. 全局键盘快捷键导航 (0-5 键切幕，Esc 键跳过或关闭面板)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key >= '0' && e.key <= '5') {
        const targetChapter = parseInt(e.key, 10) as ChapterId;
        dispatch({ type: 'SET_CHAPTER', payload: targetChapter });
      } else if (e.key === 'Escape') {
        if (state.openPanel !== 'none') {
          dispatch({ type: 'SET_PANEL', payload: 'none' });
        } else if (state.chapter === 0) {
          dispatch({ type: 'SET_CHAPTER', payload: 1 });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.chapter, state.openPanel]);

  const goToChapter = (id: ChapterId) => {
    dispatch({ type: 'SET_CHAPTER', payload: id });
  };

  return (
    <StateContext.Provider value={{ state, dispatch, goToChapter }}>
      {children}
    </StateContext.Provider>
  );
};

export const useSafetyState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useSafetyState 必须在 StateProvider 内部使用');
  }
  return context;
};
