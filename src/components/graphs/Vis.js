import React from "react";
import {XYPlot, LineSeries} from "react-vis";

export default (props) => {
  const ds = props.dataSet;
  console.log(ds)

  return (
    <XYPlot height={300} width={300}>
      <LineSeries data={ds.data} />
    </XYPlot>
  );
};
