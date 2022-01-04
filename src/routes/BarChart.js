import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryLegend,
} from "victory";
import theme from "../data/theme";

export default function BarChart(props) {
  return (
    <div>
      <VictoryChart
        horizontal
        domainPadding={10}
        height={700}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
      >
        <VictoryLegend
          x={100}
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
        <VictoryGroup offset={3} colorScale={["#cc0000", "#ff9933"]}>
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                theme={theme}
                style={{ fontSize: 5 }}
                cornerRadius={2}
                pointerLength={6}
                flyoutStyle={{
                  stroke: "#cc0000",
                  strokeWidth: 1,
                  fill: "#eee",
                }}
                orientation={"bottom"}
              />
            }
            barWidth={3}
            data={props.data}
            x="assignment"
            y="difficultyRating"
          />
          <VictoryBar
            barWidth={3}
            labelComponent={
              <VictoryTooltip
                theme={theme}
                style={{ fontSize: 5 }}
                cornerRadius={2}
                pointerLength={6}
                flyoutStyle={{
                  stroke: "#ff9933",
                  strokeWidth: 1,
                  fill: "#eee",
                }}
                orientation={"top"}
              />
            }
            data={props.data}
            x="assignment"
            y="enjoymentRating"
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.tickFormat}
          style={{
            tickLabels: { fontSize: 6, angle: -45, padding: 3 },
            axisLabel: { fontSize: 10 },

            ticks: { stroke: "#333", size: 2 },
          }}
        />

        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 6 },
            axisLabel: { fontSize: 10, padding: 30 },
            grid: { stroke: "#ddd" },
            ticks: { stroke: "#333", size: 2 },
          }}
        />
      </VictoryChart>
    </div>
  );
}
