import React from "react";
import Plot from "react-plotly.js";

export default props => {
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
      useResizeHandler={true}
      style={{ height: "100%", width: "100%" }}
      layout={{ autosize: true, title: ds.title }}
    />
  );
};
