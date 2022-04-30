import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <React.Fragment>
      <AvailableMeals />
      <MealsSummary />
    </React.Fragment>
  );
};

export default Meals;
