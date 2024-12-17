import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const RevenueChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [
          5000, 7000, 8000, 10000, 12000, 15000, 14000, 18000, 20000, 21000,
          25000, 30000,
        ],
        fill: false,
        borderColor: "#F5004F",
        backgroundColor: "#F5004F",
        pointBackgroundColor: "#F5004F",
        pointBorderColor: "#F5004F",
        pointHoverBackgroundColor: "#F5004F",
        pointHoverBorderColor: "#F5004F",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "#ddd" },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 bg-opacity-5 backdrop-blur-xl rounded-lg shadow-xl border-opacity-20">
      <h2 className="text-lg font-semibold mb-4 text-[#6439FF] tracking-wide">
        Monthly Revenue
      </h2>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
