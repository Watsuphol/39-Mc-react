import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="text-center py-5">
        <h1 className="text-4xl font-bold pb-5">Generation Thailand</h1>
        <h1 className="text-4xl font-bold">React - Assessment</h1>
      </div>
      <div className="flex gap-5 justify-around mt-10">
        <Link
          to="/User"
          className="bg-gray-500 text-white px-8 py-2 rounded-md hover:bg-gray-600 hover:ring hover:ring-gray-300"
        >
          User Home Sector
        </Link>
        <Link
          to="/Admin"
          className="bg-gray-500 text-white px-8 py-2 rounded-md hover:bg-gray-600 hover:ring hover:ring-gray-300"
        >
          Admin Home Sector
        </Link>
      </div>
    </div>
  );
}

export default Home;
