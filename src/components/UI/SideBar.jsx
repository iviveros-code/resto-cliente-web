import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-center font-bold">
          Restaurant App
        </p>
        <p className="mt-3 text-gray-600">
          Administra tu Restaurant en las siguientes opciones:
        </p>
        <nav className="mt-10">
          <NavLink
            to="/"
            exact="true"
            activeClassName="text-yellow-500"
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
          >
            Ordenes
          </NavLink>
          <NavLink
            to="/menu"
            exact="true"
            activeClassName="text-yellow-500"
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
