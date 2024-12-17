import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ProfitMarginAnalysis = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          12000, 15000, 18000, 20000, 25000, 30000, 35000, 40000, 42000, 45000,
          48000, 50000,
        ],
        backgroundColor: "rgba(100, 57, 255, 0.6)",
        borderColor: "#6439FF",
        borderWidth: 1,
      },
      {
        label: "Cost",
        data: [
          9000, 12000, 15000, 16000, 20000, 24000, 28000, 30000, 32000, 35000,
          36000, 40000,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Profit Margin (%)",
        data: [25, 20, 16.7, 20, 20, 20, 20, 25, 23.8, 22.2, 25, 20],
        type: "line",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
        },
      },
      y2: {
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 bg-opacity-5 backdrop-blur-xl rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-[#6439FF] mb-4">
        Profit Margin Analysis
      </h2>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfitMarginAnalysis;
