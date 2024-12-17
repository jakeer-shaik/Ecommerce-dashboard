import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TodaysOrdersChart = () => {
  const data = {
    labels: ["Delivered", "In Progress", "Canceled", "Returned"],
    datasets: [
      {
        label: "Order Status",
        data: [50, 30, 10, 5],
        backgroundColor: ["#7CF5FF", "#00CCDD", "#4F75FF", "#6439FF"],
        hoverBackgroundColor: ["#EEDF7A", "#D8A25E", "#A04747", "#343131"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#C4E1F6", 
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-100 bg-opacity-5 backdrop-blur-xl">
      <h2 className="text-lg font-semibold mb-4 text-[#6439FF]">
        Today's Orders
      </h2>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default TodaysOrdersChart;
