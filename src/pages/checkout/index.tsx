import React, { useState, useEffect } from "react";
import { Banner, Plan, PlanHeader } from "./sections";
import { useAppDispatch } from "state/store";
import { selectPlans } from "state/selectors";
import { fetchPlansAction } from "state/plans/PlansActions";
import { useSelector } from "react-redux";
import { PlanState } from "typings/types";

const Checkout: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanState>({
    id: "1",
    title: "",
    price: null as unknown as number,
    oldPrice: null as unknown as number,
    currPrice: null as unknown as number,
    description: "",
    selected: true,
  });

  const dispatch = useAppDispatch();
  const plans = useSelector(selectPlans);

  const handlePlanClick = (id: string) => {
    const plan = plans.find((plan) => plan.id === id);
    setSelectedPlan({
      ...selectedPlan,
      ...plan,
      selected: !selectedPlan.selected,
    });
  };

  useEffect(() => {
    dispatch(fetchPlansAction());
  }, []);

  console.log({ plans });

  return (
    <>
      <Banner />
      <PlanHeader />
      <Plan
        plans={plans}
        handlePlanClick={handlePlanClick}
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default Checkout;
