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
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#FF0000",
    "#00FFFF",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#800080",
    "#008080",
    "#C0C0C0",
    "#808080",
    "#FFA500",
    "#800000",
    "#008000",
    "#000080",
    "#FF00FF",
    "#008080",
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
      <ResponsiveContainer width="100%" height="100%" className={"z-[1]"}>
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
