import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { GlobalSafetyState, Action, ChapterId } from './types';

const initialState: GlobalSafetyState = {
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

function stateReducer(state: GlobalSafetyState, action: Action): GlobalSafetyState {
  switch (action.type) {
    case 'SET_CHAPTER': {
      if (state.chapter === action.payload) return state; // 幂等检查：重复点击同一章节不产生额外开销
      return {
        ...state,
        chapter: action.payload,
        openPanel: 'none',       // 切幕立即收起侧边抽屉，防止遮挡悬挂
        activeFaultNode: null,   // 清理前序激活节点
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

  // 监听浏览器系统级的动效偏好 (prefers-reduced-motion)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
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

  // 切幕时即时瞬移滚回顶部并重置视口，避免长页面残余滚动位置
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.focus();
    }
  }, [state.chapter]);

  // 同步 CSS 类到 body 根元素
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

  // 全局键盘快捷键导航 (0-5 键切幕，Esc 键跳过或关闭面板)
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
