import React, { useRef } from "react";
import Plot from "react-plotly.js";

export default props => {
  const ds = props.dataSet;
  const plotRef = useRef(null);
  console.log(plotRef);
  return (
    <Plot
      ref={plotRef}
      data={[
        {
          x: ds.x,
          y: ds.y,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" }
        }
      ]}
      useResizeHandler
      style={{ height: "100%", width: "100%" }}
      layout={{ autosize: true, title: ds.title }}
    />
  );
};
