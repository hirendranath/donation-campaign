import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { getDonationPrice } from "../../utils/localStorage";
import { useEffect, useState } from "react";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontWeight: "700", fontSize: "25px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const data = [
    { name: "Total Donation", value: 5500 },
    { name: "Your Donation", value: totalPrice },
  ];
  useEffect(() => {
    const price = getDonationPrice();
    let p = 0;
    for (let i of price) {
      p += i;
    }
    setTotalPrice(p);
  }, [totalPrice]);

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
