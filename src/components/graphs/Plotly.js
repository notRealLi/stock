import React from "react";
import Plot from "react-plotly.js";

export default (props) => {
  const ds = props.dataSet;

  return (
    <Plot
      data={[
        {
          x: ds.x,
          y: ds.y,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" }
        }
      ]}
      style={{position: 'relative', display: 'inline-block'}}
      layout={{ autosize: true, title: ds.title }}
    />
  );
};
