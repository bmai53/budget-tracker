// activityType = 'income' || 'expense
export const processActivityCategories = (activitiesList, activityType) => {
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

export const processsLineChartData = (
  activitiesList = [],
  accumulate = false
) => {
  // make data points for each income/expense combo
  const extraData = activitiesList.map((a) =>
    a.type === "income"
      ? { type: "expense", amount: null, date: a.date }
      : { type: "income", amount: null, date: a.date }
  );

  const extendedList = [...activitiesList, ...extraData].sort((a, b) =>
    a.date > b.date ? 1 : -1
  );

  //   console.log("extendedList", extendedList);

  const expenseData = [];
  const incomeData = [];

  // split the data
  extendedList.forEach((e) =>
    e.type === "income" ? incomeData.push(e) : expenseData.push(e)
  );

  // cumulative
  if (accumulate) {
    accumulateAmounts(expenseData);
    accumulateAmounts(incomeData);
  } else {
    // daily
    // give data points to amount = null elements
    fillGraphDiff(expenseData);
    fillGraphDiff(incomeData);
  }

  // console.log("expenseData", expenseData);
  // console.log("incomeData", incomeData);

  return {
    expenseData,
    incomeData,
  };
};

const accumulateAmounts = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    let cur = Number(data[i].amount).toFixed(2);
    total += +cur;
    data[i] = { ...data[i], amount: total };
  }
};

const fillGraphDiff = (data) => {
  let lastAmount = 0;
  const nullIndicies = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].amount) {
      if (nullIndicies.length > 0) {
        // Calc difference between last seen amount and current amount. Draw linear line between.

        let diff = Math.abs(data[i].amount - lastAmount) / nullIndicies.length;

        nullIndicies.forEach((n, j) => {
          data[n].amount = Math.max(0, lastAmount - (j + 1) * diff);
        });
      }
      lastAmount = data[i].amount;
      nullIndicies.length = 0;
    } else {
      nullIndicies.push(i);
      if (i === data.length - 1) {
        data[i].amount = lastAmount;
      }
    }
  }
};
