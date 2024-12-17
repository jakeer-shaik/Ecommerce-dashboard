import { lazy, Suspense } from "react";
import Loading from "./Loading";

const Dashboard = lazy(() => import("../Content/Dashboard"));
const ProductsTable = lazy(() => import("../Content/ProductsTable"));
const RecentOrders = lazy(() => import("../Content/RecentOrders"));
const UsersTable = lazy(() => import("../Content/UsersTable"));

const Main = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <ProductsTable />;
      case "Customers":
        return <UsersTable />;
      case "Orders":
        return <RecentOrders />;
    }
  };

  return (
    <div className="p-4 sm:p-1 md:p-4">
      <Suspense
        fallback={<Loading />}
      >
        {renderContent()}
      </Suspense>
    </div>
  );
};

export default Main;
