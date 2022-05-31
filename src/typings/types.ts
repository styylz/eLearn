import { Plan } from "state/types";

export interface Score {
  design: number;
  uiUx: number;
  IT: number;
}

export interface SelectedPlanHandle {
  id: string;
  selected: boolean;
}

export interface PlanState extends Plan {}

export interface PlanProps {
  handlePlanClick: (id: string) => void;
  plans: Plan[];
  selectedPlan: Plan;
}
