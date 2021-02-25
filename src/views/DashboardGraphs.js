import React, { useState, useEffect } from "react";
import { Donut } from "./Components/Graphs";
import { Card, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default ({ activitiesList }) => {
  const [expenseData, setExpenseData] = useState({});
  const [incomeData, setIncomeData] = useState({});

  useEffect(() => {
    // data={{
    //             labels: processActivityCategories("expense").data.map(
    //               (a) => a.category_name
    //             ),
    //             datasets: [
    //               {
    //                 data: processActivityCategories("expense").data.map(
    //                   (a) => a.amount
    //                 ),
    //                 backgroundColor: processActivityCategories("expense").color,
    //                 borderWidth: 1,
    //               },
    //             ],
    //           }}

    const parsedExpenseData = processActivityCategories("expense");
    const parsedIncomeData = processActivityCategories("income");

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Card
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
      <Grid container style={{ marginTop: "50px" }}>
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
    </Card>
  );
};
