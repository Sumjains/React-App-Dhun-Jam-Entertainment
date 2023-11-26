import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from "victory";

function Graph({ custom, category1, category2, category3, category4 }) {
  const integerTickFormat = (tick) => Math.round(tick);
  let tempData = [
    { x: "custom", y: `${custom}` },
    { x: "category1", y: `${category1}` },
    { x: "category2", y: `${category2}` },
    { x: "category3", y: `${category3}` },
    { x: "category4", y: `${category4}` },
  ]
    .slice()
    .sort((a, b) => a.y - b.y);

  const data = tempData
    .map(({ x, y }) => ({ x, y }))
    .filter(({ y }) => y !== undefined && y !== null && y !== "");
  return (
    <VictoryChart domainPadding={30} style={{ width: 1600 }}>
      <VictoryBar style={{ data: { fill: "#F0C3F1" } }} data={data} />
      <VictoryAxis
        style={{
          axis: { stroke: "#FFFFFF" },
          tickLabels: {
            fill: "#FFFFFF",
            fontSize: "16px",
            fontWeigth: "none",
            fontFamily: "Poppins",
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="&#8377;"
        axisLabelComponent={
          <VictoryLabel x={8} angle={0} style={{ fontSize: "30px" }} />
        }
        style={{
          axis: { stroke: "#FFFFFF" },
          tickLabels: {
            fill: "#FFFFFF",
            fontSize: "16px",
            fontWeigth: "none",
            fontFamily: "Poppins",
          },
        }}
        tickFormat={integerTickFormat}
      />
    </VictoryChart>
  );
}

export default Graph;
