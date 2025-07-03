import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import type { ChartMetadata } from "../types";

ChartJS.register(
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

export default function ChartRenderer({
  chartData,
}: {
  chartData: ChartMetadata;
}) {
  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: !!chartData.title,
        text: chartData.title || "",
      },
    },
  };

  switch (chartData.type) {
    case "bar":
      return <Bar data={data} options={options} />;
    case "line":
      return <Line data={data} options={options} />;
    case "pie":
      return <Pie data={data} options={options} />;
    default:
      return <p>Unsupported chart type.</p>;
  }
}
