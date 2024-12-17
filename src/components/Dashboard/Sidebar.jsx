import { BiHome } from "react-icons/bi";
import {
  FaBoxOpen,
  FaChartLine,
  FaFileAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, activeTab, setActiveTab, toggleSidebar }) => {
  const tabs = [
    {
      title: "Dashboard",
      icon: <BiHome className="w-6 h-6 mr-2 text-green-400" />,
    },
    {
      title: "Orders",
      icon: <FaShoppingCart className="w-6 h-6 mr-2 text-blue-500" />,
    },
    {
      title: "Products",
      icon: <FaBoxOpen className="w-6 h-6 mr-2 text-red-500" />,
    },
    {
      title: "Customers",
      icon: <FaUser className="w-6 h-6 mr-2 text-yellow-400" />,
    },
  ];

  const handleTab = (tab) => {
    setActiveTab(tab);
    toggleSidebar();
  };
  return (
    <div
      className={`flex z-40 flex-col w-64 bg-[#191c24] fixed inset-0 md:relative transition-transform duration-300 ease-in-out transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-center h-16 bg-[#191c24]">
        <span className="text-white font-bold uppercase">Ecommerce</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto md:border-r md:border-gray-700">
        <h3 className="text-gray-50 px-2 py-2 font-semibold">Navigations</h3>
        <nav className="flex-1 px-2 py-4 bg-[#191c24] space-y-1">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTab(tab.title)}
              className={`flex items-center p-2 text-gray-100 hover:bg-gray-700 rounded-md cursor-pointer ${
                activeTab === tab.title &&
                "bg-gray-700 text-gray-100 border-l-2 border-teal-500"
              }`}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
