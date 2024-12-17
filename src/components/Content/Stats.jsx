import {
  FaDollarSign,
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaUndo,
  FaEye,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$145,230",
    icon: <FaDollarSign className="w-8 h-8 text-green-500" />,
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    title: "Customers",
    value: "12,345",
    icon: <FaUsers className="w-8 h-8 text-blue-500" />,
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Total Orders",
    value: "4,567",
    icon: <FaShoppingCart className="w-8 h-8 text-purple-500" />,
    bgColor: "bg-purple-100",
  },
  {
    id: 4,
    title: "Products",
    value: "786",
    icon: <FaBoxOpen className="w-8 h-8 text-yellow-500" />,
    bgColor: "bg-yellow-100",
  },
  {
    id: 5,
    title: "Returns",
    value: "98",
    icon: <FaUndo className="w-8 h-8 text-red-500" />,
    bgColor: "bg-red-100",
  },
  {
    id: 6,
    title: "Site Visits",
    value: "134,678",
    icon: <FaEye className="w-8 h-8 text-teal-500" />,
    bgColor: "bg-teal-100",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-white">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex items-center justify-between p-4 rounded-lg shadow-md bg-gray-100 bg-opacity-5 backdrop-blur-xl transition duration-300 ease-in-out`}
        >
          <div>
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
          <div className="p-2 rounded-full bg-white shadow-md">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
