import { useEffect, useMemo, useState } from "react";
import Loading from "../Dashboard/Loading";
import ProductsGrid from "./ProductsGrid";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const categories = [
    "tv",
    "audio",
    "laptop",
    "mobile",
    "gaming",
    "appliances",
  ];
  const [selectedCategory, setSelectedCategory] = useState("tv");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.in/api/products?limit=150");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  const filteredProducts = useMemo(() => {
    return (
      selectedCategory &&
      products.filter(
        (product) =>
          product.category === selectedCategory &&
          product.title.toLowerCase().includes(debounceTerm.toLowerCase())
      )
    );
  }, [selectedCategory, products, debounceTerm]);

  return (
    <div className="overflow-x-auto px-4 py-2">
      <div className="flex items-center justify-between px-4 py-1 border-b border-[#333] focus-within:border-blue-500 max-w-full mx-auto font-[sans-serif] mb-6">
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
            placeholder="Search name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm outline-none text-white bg-[#191c24] py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="ml-4 relative">
          <select
            className="bg-[#191c24] text-white text-sm px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto hidden md:block">
        {loading ? (
          <Loading />
        ) : (
          <table className="min-w-full table-auto bg-black bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
            <thead className="bg-[#191c24] bg-opacity-50 backdrop-blur-lg text-sm uppercase text-gray-400">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Brand</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-200">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-600 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate">
                    {product.title}
                  </td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">
                    <div className="space-x-2 flex justify-start items-center">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none transition duration-200">
                        Edit
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none transition duration-200">
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
      <div className="overflow-x-auto block md:hidden ">
        {loading ? <Loading /> : <ProductsGrid products={filteredProducts} />}
      </div>
    </div>
  );
};

export default ProductsTable;
