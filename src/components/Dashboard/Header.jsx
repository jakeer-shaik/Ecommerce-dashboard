
import { IoMenu } from "react-icons/io5";
import { BiBell, BiUser } from "react-icons/bi";

const Header = ({ toggleSidebar }) => {
  return (
    <div
      className={`flex items-center justify-between h-16 bg-[#191c24] border-b border-gray-700`}
    >
      <div className="flex items-center space-x-2 px-4">
        <button
          className="text-gray-500 md:hidden focus:outline-none focus:text-gray-700"
          onClick={toggleSidebar}
        >
          <IoMenu className="h-6 w-6" />
        </button>
        <div className="flex items-center justify-center bg-[#191c24] md:hidden">
          <span className="text-white font-bold uppercase">Dashboard</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
          <BiBell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 bg-red-600 rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
          <BiUser className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Header;
