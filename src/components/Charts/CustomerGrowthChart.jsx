import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
);

const CustomerGrowthChart = () => {
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
        label: "New Customers",
        data: [120, 150, 180, 200, 250, 300, 350, 400, 450, 480, 500, 600],
        borderColor: "#6439FF",
        backgroundColor: "rgba(100, 57, 255, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#6439FF",
        pointBorderColor: "#fff",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
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
    },
  };

  return (
    <div className="p-6 bg-gray-100 bg-opacity-5 backdrop-blur-xl rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-[#6439FF] mb-4">
        Customer Growth
      </h2>
      <div className="h-64 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerGrowthChart;
