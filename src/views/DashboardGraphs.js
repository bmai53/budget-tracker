import React, { useState, useEffect } from "react";
import moment from "moment";
import { Card, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Donut,
  LineChart,
  processActivityCategories,
  processsLineChartData,
} from "./Components/Graphs";

export default ({ activitiesList }) => {
  const [expenseData, setExpenseData] = useState({});
  const [incomeData, setIncomeData] = useState({});
  const [lineChartData, setLineChartData] = useState({});

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

    setLineChartData(processsLineChartData(activitiesList, true));
  }, [activitiesList]);

  const halfGridItemProps = {
    sm: 6,
    xs: 12,
    style: {
      textAlign: "center",
    },
  };

  const fullGridItemProps = {
    side: { sm: 2, xs: false },
    center: {
      sm: 8,
      xs: 12,
      style: {
        textAlign: "center",
        paddingTop: "50px",
      },
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
        <Grid item {...halfGridItemProps}>
          <Typography variant='h4' gutterBottom>
            Expenses
          </Typography>
          {expenseData.length > 0 ? (
            <Donut data={expenseData} />
          ) : (
            <Typography variant='h5'>No Data</Typography>
          )}
        </Grid>
        <Grid item {...halfGridItemProps}>
          <Typography variant='h4' gutterBottom>
            Income
          </Typography>
          {incomeData.length > 0 ? (
            <Donut data={incomeData} />
          ) : (
            <Typography variant='h5'>No Data</Typography>
          )}
        </Grid>
        <Grid item {...fullGridItemProps.side} />
        <Grid item {...fullGridItemProps.center}>
          {lineChartData.expenseData && lineChartData.incomeData && (
            <LineChart
              data={{
                labels: lineChartData.expenseData.map((e) =>
                  moment(e.date).format("MM/DD/YY")
                ),
                datasets: [
                  {
                    label: "Expense",
                    data: lineChartData.expenseData.map((e) => e.amount),
                    fill: false,
                    backgroundColor: "rgb(255, 20, 20)",
                    borderColor: "rgba(255, 20, 20, 0.5)",
                  },
                  {
                    label: "Income",
                    data: lineChartData.incomeData.map((i) => i.amount),

                    fill: false,
                    backgroundColor: "rgb(20, 255, 20)",
                    borderColor: "rgba(20, 255, 75, 0.5)",
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
            />
          )}
        </Grid>
        <Grid item {...fullGridItemProps.side} />
      </Grid>
    </Card>
  );
};
