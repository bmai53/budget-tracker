import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid } from "recharts";

export default ({
  data,
  style,
  xDataKey,
  yDataKey,
  xHide = true,
  yHide = true,
  xColor = "#4caf50",
  yColor = "#f44336",
  width = 500,
  height = 300,
  grid = false,
}) => {
  return (
    <LineChart width={width} height={height} data={data} style={style}>
      <XAxis
        dataKey={xDataKey}
        hide={xHide}
        style={{
          fontSize: "1rem",
          fontFamily: "Roboto, sans-serif",
        }}
      />
      <YAxis
        dataKey={yDataKey}
        hide={yHide}
        style={{
          fontSize: "1rem",
          fontFamily: "Roboto, sans-serif",
        }}
      />
      {grid && <CartesianGrid stroke='grey' strokeDasharray='5 5' />}
      <Line type='monotone' dataKey={xDataKey} stroke={xColor} />
      <Line type='monotone' dataKey={yDataKey} stroke={yColor} />
    </LineChart>
  );
};
