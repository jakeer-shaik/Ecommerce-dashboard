const UsersGrid = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 bg-opacity-5 backdrop-blur-xl  rounded-lg shadow-lg p-6 md:p-8 text-white space-y-6 md:space-y-0 md:space-x-8 transition-transform transform hover:scale-95"
          >
            <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-md">
              {user.name.firstname[0]}
              {user.name.lastname[0]}
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-100">
                {user.name.firstname} {user.name.lastname}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Username:</span>{" "}
                <span className="text-teal-300">{user.username}</span>
              </p>

              <p className="mt-2 text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Email:</span>{" "}
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {user.email}
                </a>
              </p>

              <p className="mt-2 text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Address:</span>{" "}
                {user.address.number} {user.address.street}, {user.address.city}{" "}
                - {user.address.zipcode}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Phone:</span>{" "}
                <a
                  href={`tel:${user.phone}`}
                  className="text-yellow-400 hover:underline"
                >
                  {user.phone}
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersGrid;
