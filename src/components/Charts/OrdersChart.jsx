
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const OrdersChart = () => {
  const monthlyOrdersData = {
    labels: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    datasets: [
      {
        label: "Orders",
        data: [120, 150, 180, 200, 170, 220, 240, 260, 300, 320, 280, 310],
        backgroundColor: "#7F27FF",
        borderColor: "#7F27FF",       
        borderWidth: 2,
        hoverBackgroundColor: "#9F70FD"
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Orders: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          color: "#BFECFF",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          color: "#BFECFF",
        },
        title: {
          display: true,
          text: "Number of Orders",
          color: "#B6A28E",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="p-8 rounded-lg shadow-md bg-gray-100 bg-opacity-5 backdrop-blur-xl w-full h-80">
      <h2 className="text-lg text-blue-500 font-semibold mb-4">Monthly Orders</h2>
      <Bar data={monthlyOrdersData} options={options} />
    </div>
  );
};

export default OrdersChart;
