import { Cell, Label, Pie, PieChart } from "recharts";

function CurrentConditions({ levels }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="chart-wrapper">
      <PieChart width={200} height={170}>
        <Pie
          data={levels.grassData}
          startAngle={210}
          endAngle={-30}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          <Label position="center" id="grass-label">
            Grass
          </Label>
          {levels.grassData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                index === 0
                  ? COLORS[(entry.value - 1) % COLORS.length]
                  : "#E5E5E5"
              }
            />
          ))}
        </Pie>
      </PieChart>
      <PieChart width={200} height={170}>
        <Pie
          data={levels.treeData}
          startAngle={210}
          endAngle={-30}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          <Label position="center" id="tree-label">
            Tree
          </Label>
          {levels.treeData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                index === 0
                  ? COLORS[(entry.value - 1) % COLORS.length]
                  : "#E5E5E5"
              }
            />
          ))}
        </Pie>
      </PieChart>
      <PieChart width={200} height={170}>
        <Pie
          data={levels.weedData}
          startAngle={210}
          endAngle={-30}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          <Label position="center" id="weed-label">
            Weed
          </Label>
          {levels.weedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                index === 0
                  ? COLORS[(entry.value - 1) % COLORS.length]
                  : "#E5E5E5"
              }
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default CurrentConditions;
