import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data }) => {
  const colors = [
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800000", // Maroon
    "#008000", // Green
    "#000080", // Navy
    "#808000", // Olive
    "#800080", // Purple
    "#008080", // Teal
    "#C0C0C0", // Silver
    "#808080", // Gray
    "#FFA500", // Orange
    "#800000", // Dark Red
    "#008000", // Dark Green
    "#000080", // Dark Blue
    "#FF00FF", // Fuchsia
    "#008080", // Aqua
  ];

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div
      style={{
        width: "fit",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "zinc",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 40, bottom: 80 }}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <YAxis />
          <XAxis dataKey={"bookName"} />
          <Bar
            dataKey={"totalPages"}
            barSize={70}
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
