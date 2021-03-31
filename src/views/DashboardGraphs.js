import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Card,
  Divider,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from "@material-ui/core";
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
  const [lineChartTotal, setLineChartTotal] = useState(true);

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

    setLineChartData(processsLineChartData(activitiesList, lineChartTotal));
  }, [activitiesList, lineChartTotal]);

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
      },
    },
  };

  const selectProps = {
    style: {
      margin: "25px 0",
      width: "200px",
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          {incomeData.length > 0 ? (
            <Donut data={incomeData} />
          ) : (
            <Typography variant='h5'>No Data</Typography>
          )}
        </Grid>
        <Grid item {...halfGridItemProps}>
          <Typography variant='h4' gutterBottom>
            Income
          </Typography>
          {expenseData.length > 0 ? (
            <Donut data={expenseData} />
          ) : (
            <Typography variant='h5'>No Data</Typography>
          )}
        </Grid>
        <Grid item {...fullGridItemProps.side} />
        <Grid item {...fullGridItemProps.center}>
          <Divider variant='middle' style={{ margin: "50px 0" }} />
        </Grid>
        <Grid item {...fullGridItemProps.side} />

        <Grid item {...fullGridItemProps.side} />
        <Grid item {...fullGridItemProps.center}>
          <Typography variant='h4'>Income and Expenses over Time</Typography>
        </Grid>
        <Grid item {...fullGridItemProps.side} />

        <Grid item {...fullGridItemProps.side} />
        <Grid item {...fullGridItemProps.center}>
          {lineChartData.expenseData && lineChartData.incomeData && (
            <>
              <TextField
                value={lineChartTotal}
                select
                variant='outlined'
                onChange={(event) => setLineChartTotal(event.target.value)}
                {...selectProps}
              >
                <MenuItem value={true} key='true'>
                  Total Over Time
                </MenuItem>
                <MenuItem value={false} key='false'>
                  Daily
                </MenuItem>
              </TextField>
              <LineChart
                data={{
                  labels: lineChartData.expenseData.map((e) =>
                    moment(e.date).format("MM/DD/YY")
                  ),
                  datasets: [
                    {
                      label: "Income",
                      data: lineChartData.incomeData.map((i) => i.amount),

                      fill: false,
                      backgroundColor: "rgb(99, 255, 132)",
                      borderColor: "rgba(99, 255, 132, 0.5)",
                    },
                    {
                      label: "Expense",
                      data: lineChartData.expenseData.map((e) => e.amount),
                      fill: false,
                      backgroundColor: "rgb(255, 99, 132)",

                      borderColor: "rgba(255, 99, 132, 0.5)",
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
            </>
          )}
        </Grid>
        <Grid item {...fullGridItemProps.side} />
      </Grid>
    </Card>
  );
};
