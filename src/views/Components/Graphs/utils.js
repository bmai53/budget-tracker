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

export const processsActivitesList = (activitiesList) => {
  const parsedExpenseData = processActivityCategories(activitiesList, "expense")
    .data;
  const parsedIncomeData = processActivityCategories(activitiesList, "income")
    .data;

  return null;
};
