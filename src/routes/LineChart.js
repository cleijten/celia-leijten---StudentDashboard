import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine, VictoryLegend } from "victory";
import theme from "../data/theme";

export default function LineChart(props) {
  return (
    <div>
      <h2>Assignments Line Graph</h2>
      <VictoryChart
        domainPadding={15}
        theme={theme}
        padding={{ left: 30, top: 40, right: 50, bottom: 100 }}
      >
        <VictoryLegend
          x={30}
          y={5}
          title="Ratings per assignment"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{
            border: { stroke: "#ccc" },
            title: { fontSize: 6 },
          }}
          data={[
            {
              name: "Fun Rating",
              labels: { fontSize: 5 },
              symbol: { fill: "#ff9933" },
            },
            {
              name: "Difficulty Rating",
              labels: { fontSize: 5 },
              symbol: { fill: "#cc0000" },
            },
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: "#cc0000" },
          }}
          data={props.data}
          x="assignment"
          y="difficultyRating"
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: "#ff9933" },
          }}
          data={props.data}
          x="assignment"
          y="enjoymentRating"
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.tickFormat}
          style={{
            grid: { stroke: "#ddd" },
            ticks: { stroke: "#333", size: 2 },
            tickLabels: {
              fontSize: 5,
              angle: 45,
              textAnchor: "left",
              padding: 5,
            },
            axisLabel: { fontSize: 10, padding: 30 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            grid: { stroke: "#ddd" },
            ticks: { stroke: "#333", size: 2 },
            tickLabels: { fontSize: 6 },
            axisLabel: { fontSize: 10, padding: 30 },
          }}
        />
      </VictoryChart>
      ;
    </div>
  );
}
