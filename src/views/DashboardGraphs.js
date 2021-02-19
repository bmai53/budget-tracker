import React from "react";
import { Donut } from "./Components/Graphs";
import { Grid, Typography } from "@material-ui/core";

export default ({ activitiesList }) => {
  // activityType = 'income' || 'expense
  const processActivityCategories = (activityType) => {
    const arr = activitiesList.filter((a) => a.type === activityType);
    const map = new Map();
    const data = [];
    const color = [];

    arr.forEach((a) => {
      if (map.has(a.category_name)) {
        map.set(
          a.category_name,
          (Number(map.get(a.category_name)) + Number(a.amount)).toFixed(2)
        );
      } else {
        map.set(a.category_name, a.amount);
      }
    });

    map.forEach((value, key) => {
      data.push({ category_name: key, amount: value });
    });

    data.forEach((d, i) => {
      color.push(
        `rgb(${
          activityType === "income" ? 100 : 255 - i * (150 / data.length)
        }, ${
          activityType === "income" ? 255 - i * (150 / data.length) : 100
        }, 100)`
      );
    });

    return {
      data: data,
      length: data.length,
      color: color,
    };
  };

  const gridItemProps = {
    sm: 6,
    xs: 12,
    style: {
      textAlign: "center",
    },
  };
  return (
    <Grid container style={{ marginTop: "50px" }}>
      <Grid item {...gridItemProps}>
        <Typography variant='h4' gutterBottom>
          Expenses
        </Typography>
        <Donut
          data={{
            labels: processActivityCategories("expense").data.map(
              (a) => a.category_name
            ),
            datasets: [
              {
                data: processActivityCategories("expense").data.map(
                  (a) => a.amount
                ),
                backgroundColor: processActivityCategories("expense").color,
                borderWidth: 1,
              },
            ],
          }}
        />
      </Grid>
      <Grid item {...gridItemProps}>
        <Typography variant='h4' gutterBottom>
          Income
        </Typography>

        <Donut
          data={{
            labels: processActivityCategories("income").data.map(
              (a) => a.category_name
            ),
            datasets: [
              {
                data: processActivityCategories("income").data.map(
                  (a) => a.amount
                ),
                backgroundColor: processActivityCategories("income").color,
                borderWidth: 1,
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};
