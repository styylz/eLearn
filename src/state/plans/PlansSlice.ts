import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plan } from "state/types";

interface PlansState {
  plans: Plan[];
}

const initialState: PlansState = {
  plans: [],
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setPlans: (state, actions: PayloadAction<Plan[]>) => {
      state.plans = actions.payload;
    },
  },
});

export const { setPlans } = plansSlice.actions;
export default plansSlice.reducer;
