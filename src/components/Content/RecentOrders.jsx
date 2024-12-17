import { orders } from "../../../utils/orders";

const RecentOrders = () => {
  return (
    <div className="recent-orders-container">
      <h2 className="text-lg text-[#F5F7F8] font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="recent-orders-table-wrapper overflow-x-auto rounded-lg shadow-md bg-gray-800 hidden md:block">
        <table className="w-full min-w-[600px] bg-black bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
          <thead className="bg-[#191c24] bg-opacity-50 backdrop-blur-lg text-sm uppercase text-gray-400 whitespace-nowrap">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
                Order ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
                Product
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
                Customer
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-200 whitespace-nowrap">
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-600 transition-colors duration-200"
              >
                <td className="px-4 py-2 text-sm text-white">
                  {order.orderId}
                </td>
                <td className="px-4 py-2 text-sm text-white flex items-center">
                  <img
                    src={order.productImage}
                    alt={order.productTitle}
                    className="w-10 h-10 mr-2 rounded"
                  />
                  <span className="truncate w-28 md:w-auto">
                    {order.productTitle.length > 15
                      ? `${order.productTitle.substring(0, 15)}...`
                      : order.productTitle}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-white">
                  {order.customer}
                </td>
                <td className="px-4 py-2 text-sm text-white">
                  {order.orderDate}
                </td>
                <td
                  className={`px-4 py-2 text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "text-green-500"
                      : order.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-400"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 block md:hidden">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="p-4 rounded-lg shadow-lg bg-gray-800 text-white"
          >
            <p>
              <strong>Order ID:</strong> {order.orderId}
            </p>
            <p>
              <strong>Product:</strong> {order.productTitle}
            </p>
            <p>
              <strong>Customer:</strong> {order.customer}
            </p>
            <p>
              <strong>Date:</strong> {order.orderDate}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-400"
                }`}
              >
                {order.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
