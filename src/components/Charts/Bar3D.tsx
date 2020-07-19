import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Column2D);

type ChartData = {
  data: { label: string; value: string }[];
};

const Bar3D: React.FC<ChartData> = (props: ChartData) => {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        yAxisName: "Forked",
        xAxisName: "Repos",
        yAxisNameFontSize: "16px",
        xAxisNameFontSize: "16px",
      },
      data: props.data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
