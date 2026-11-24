import { EvidenceTag, FlightPhaseId, SubsystemId, ScenarioId } from '../app/types';

export interface RiskRecord {
  id: ScenarioId | string;
  phase: FlightPhaseId;
  subsystem: SubsystemId;
  operationalContext: string;
  hazard: string;
  failureMechanism: string;
  propagationNodes: string[];
  consequence: string;
  severity: string;
  likelihoodEvidence: string;
  riskStatus: 'open' | 'mitigated' | 'residual';
  proposedControls: string[];
  verificationMethods: string[];
  residualRisk: string;
  facts: string[];
  assumptions: string[];
  sources: string[];
  evidenceStatus: EvidenceTag;
}

export interface FhaItem {
  id: string;
  functionName: string;
  phase: FlightPhaseId;
  failureCondition: string;
  effectOnAircraft: string;
  effectOnCrew: string;
  severityCategory: 'Catastrophic' | 'Hazardous' | 'Major' | 'Minor';
  rationale: string;
  sourceId: string;
  tag: EvidenceTag;
}

export interface FmeaItem {
  id: string;
  component: string;
  subsystem: SubsystemId;
  failureMode: string;
  localEffect: string;
  systemEffect: string;
  detectionMethod: string;
  compensatingProvision: string;
  severityClass: string;
  sourceId: string;
  tag: EvidenceTag;
}

export interface FtaNode {
  id: string;
  name: string;
  gateType?: 'AND' | 'OR' | 'EVENT';
  childIds?: string[];
  explanation: string;
  tag: EvidenceTag;
  sourceId: string;
  isTop?: boolean;
}

export interface StpaUca {
  id: string;
  controlAction: string;
  type: 'NotProviding' | 'ProvidingCausesHazard' | 'WrongTiming' | 'StoppedTooSoon';
  context: string;
  hazardLink: string;
  rationale: string;
}

export interface StpaControlLoop {
  controller: string;
  controlActions: string[];
  actuators: string;
  controlledProcess: string;
  sensors: string;
  feedbacks: string[];
  ucas: StpaUca[];
}
