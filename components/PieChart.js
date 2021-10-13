import React from "react";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ data }) => {
  console.log(data);

  const dataChart = data.map((item) => ({
    id: item.categoryName,
    label: item.categoryName,
    value: -item.total,
    color: () =>
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0"),
  }));

  return (
    <div className="bg-red-50 mt-4" style={{ height: 300 }}>
      <ResponsivePie
        data={dataChart}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsDiagonalLength={24}
        arcLinkLabelsStraightLength={36}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
    </div>
  );
};

export default PieChart;
