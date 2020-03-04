import React from "react";
import Plot from "react-plotly.js";

export default (props) => {
  const ds = props.dataSet;

  return (
    <div>
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
        layout={{ width: 800, height: 600, title: ds.title }}
      />
    </div>
  );
};
