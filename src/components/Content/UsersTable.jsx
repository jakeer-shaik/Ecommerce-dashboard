import { useEffect, useState } from "react";
import Loading from "../Dashboard/Loading";
import UsersGrid from "./UsersGrid";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.in/api/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredData = users.filter(
    (user) =>
      user.username.toLowerCase().includes(debounceTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(debounceTerm.toLowerCase()) ||
      user.address.zipcode.toLowerCase().includes(debounceTerm.toLowerCase())
  );
  return (
    <div className="overflow-x-auto px-4 ">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#333] focus-within:border-blue-500 max-w-full mx-auto font-[sans-serif] mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="18px"
            className="fill-gray-600 mr-3"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search name,zipcode..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm outline-none text-white bg-[#191c24] py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="hidden md:block">
        {loading ? (
          <Loading />
        ) : (
          <table className="min-w-full table-auto bg-black bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
            <thead className="bg-[#191c24] bg-opacity-50 backdrop-blur-lg text-sm uppercase text-gray-400">
              <tr>
                <th className="px-6 py-3 text-left">Username</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Zipcode</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {filteredData.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-600 transition-colors duration-200"
                >
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4 truncate">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.address.zipcode}</td>
                  <td className="px-6 py-4">
                    <div className="space-x-2 flex">
                      <button className="bg-[#9694FF] text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
                        View
                      </button>
                      <button className="bg-[#3D3BF3] text-white px-3 py-2 rounded-md hover:bg-red-700 transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="block md:hidden">
        {loading ? <Loading /> : <UsersGrid users={filteredData} />}
      </div>
    </div>
  );
};

export default UsersTable;
