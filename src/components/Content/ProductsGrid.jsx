const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex flex-col items-center p-6 bg-gray-100 bg-opacity-5 backdrop-blur-xl rounded-lg shadow-lg text-white transition-transform transform hover:scale-95"
          >
            <div className="w-full h-48 mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full rounded-lg shadow-md"
              />
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-lg font-bold text-gray-100 line-clamp-1">
                {product.title}
              </h2>

              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Category:</span>{" "}
                <span className="font-bold text-teal-400">
                  {product.category}
                </span>
              </p>

              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Brand:</span>{" "}
                <span className="font-bold text-[#D91656]">
                  {product.brand}
                </span>
              </p>

              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Color:</span>{" "}
                <span className="font-bold text-blue-400">{product.color}</span>
              </p>

              <div className="mt-4">
                {product.onSale ? (
                  <p className="text-lg font-semibold text-green-400">
                    Sale: ${product.price}{" "}
                    <span className="line-through text-gray-500">
                      $
                      {(product.price / (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </span>
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-gray-300">
                    ${product.price}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                Edit
              </button>
              <button className="px-6 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
