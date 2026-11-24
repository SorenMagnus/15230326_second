// 核心状态模型定义 (State Contract)

export type ChapterId = 0 | 1 | 2 | 3 | 4 | 5;

export type FlightPhaseId = 'takeoff' | 'climb' | 'cruise' | 'approach' | 'landing';

export type SubsystemId = 
  | 'propulsion' 
  | 'power' 
  | 'avionics' 
  | 'structures' 
  | 'actuators' 
  | 'operations';

export type ScenarioId = 'EX-01' | 'EX-02' | 'EX-03';

export type PanelType = 'none' | 'evidence' | 'fmea' | 'fta' | 'stpa' | 'settings' | 'sources';

export type MotionMode = 'normal' | 'reduced';

export type QualityMode = 'high' | 'eco';

export type EvidenceTag = 'F' | 'A' | 'D' | 'U';

export interface GlobalSafetyState {
  chapter: ChapterId;
  flightPhase: FlightPhaseId;
  selectedSubsystem: SubsystemId;
  selectedScenario: ScenarioId;
  activeFaultNode: string | null;
  selectedMitigation: string | null;
  openPanel: PanelType;
  motionMode: MotionMode;
  qualityMode: QualityMode;
}

export type Action =
  | { type: 'SET_CHAPTER'; payload: ChapterId }
  | { type: 'SET_FLIGHT_PHASE'; payload: FlightPhaseId }
  | { type: 'SET_SUBSYSTEM'; payload: SubsystemId }
  | { type: 'SET_SCENARIO'; payload: ScenarioId }
  | { type: 'SET_FAULT_NODE'; payload: string | null }
  | { type: 'SET_MITIGATION'; payload: string | null }
  | { type: 'SET_PANEL'; payload: PanelType }
  | { type: 'TOGGLE_MOTION_MODE' }
  | { type: 'TOGGLE_QUALITY_MODE' }
  | { type: 'RESET_STATE' };
