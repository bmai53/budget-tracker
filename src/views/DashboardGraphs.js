import React, { useState, useEffect } from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Donut,
  LineChart,
  processActivityCategories,
} from "./Components/Graphs";

export default ({ activitiesList }) => {
  const [expenseData, setExpenseData] = useState({});
  const [incomeData, setIncomeData] = useState({});

  useEffect(() => {
    const parsedExpenseData = processActivityCategories(
      activitiesList,
      "expense"
    );
    const parsedIncomeData = processActivityCategories(
      activitiesList,
      "income"
    );

    setExpenseData({
      length: parsedExpenseData.data.length,
      labels: parsedExpenseData.data.map((e) => e.category_name),
      datasets: [
        {
          data: parsedExpenseData.data.map((e) => e.amount),
          backgroundColor: parsedExpenseData.color,
          borderWidth: 1,
        },
      ],
    });

    setIncomeData({
      length: parsedIncomeData.data.length,
      labels: parsedIncomeData.data.map((e) => e.category_name),
      datasets: [
        {
          data: parsedIncomeData.data.map((e) => e.amount),
          backgroundColor: parsedIncomeData.color,
          borderWidth: 1,
        },
      ],
    });
  }, [activitiesList]);

  const gridItemProps = {
    sm: 6,
    xs: 12,
    style: {
      textAlign: "center",
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Card
      raised
      style={
        isMobile
          ? {
              width: "100%",
            }
          : {
              width: "75%",
              padding: "25px",
              margin: "50px auto",
            }
      }
    >
      <Grid container>
        <Grid item {...gridItemProps}>
          <Typography variant='h4' gutterBottom>
            Expenses
          </Typography>
          {expenseData.length > 0 ? (
            <Donut data={expenseData} />
          ) : (
            <Typography variant='h5'>No Data</Typography>
          )}
        </Grid>
        <Grid item {...gridItemProps}>
          <Typography variant='h4' gutterBottom>
            Income
          </Typography>
          {incomeData.length > 0 ? (
            <Donut data={incomeData} />
          ) : (
            <Typography variant='h5'>No Data</Typography>
          )}
        </Grid>
      </Grid>
      {/* 
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              fill: false,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
            {
              label: "# of yeets",
              data: [25, 8, 3, 5, 2, 3],
              fill: false,
              backgroundColor: "rgb(0, 99, 132)",
              borderColor: "rgba(0, 99, 132, 0.2)",
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      /> */}
    </Card>
  );
};
