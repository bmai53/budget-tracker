import React from "react";
import ActivityTable from "../Data/ActivityTable";
import { activitiesList, categoriesList } from "./data";
export default () => {
  return (
    <ActivityTable
      activitiesList={activitiesList}
      categoriesList={categoriesList}
      buttonsDisabled={true}
    />
  );
};
