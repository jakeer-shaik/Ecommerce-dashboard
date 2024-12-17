import CustomerGrowthChart from "../Charts/CustomerGrowthChart";
import OrdersChart from "../Charts/OrdersChart";
import ProfitMarginAnalysis from "../Charts/ProfitMargin";
import RevenueChart from "../Charts/RevenueChart";
import TodaysOrdersChart from "../Charts/TodaysOrderChart";
import Stats from "./Stats";
const Dashboard = () => {
  return (
    <div className="bg-[#191c24] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div className="rounded-lg shadow-md p-1">
          <Stats />
        </div>
        <div className="rounded-lg shadow-md p-1">
          <OrdersChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="rounded-lg shadow-md p-1">
          <TodaysOrdersChart />
        </div>
        <div className="rounded-lg shadow-md p-1">
          <RevenueChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div className="rounded-lg shadow-md p-1">
          <CustomerGrowthChart />
        </div>
        <div className="rounded-lg shadow-md p-1">
          <ProfitMarginAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
