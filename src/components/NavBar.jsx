import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-200 border-b border-gray-700">
        <ul className="flex justify-end space-x-5 text-base font-bold ">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-md hover:bg-gray-500 hover:ring hover:ring-gray-200 hover:text-white"
            >
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/Owner"
              className="px-4 py-2 rounded-md hover:bg-gray-500 hover:ring hover:ring-gray-200 hover:text-white"
            >
              {" "}
              Owner{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
