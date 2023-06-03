import React from "react";
import { NavLink } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";
const Navbar = (Props) => {
  return (
    <>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-center items-center">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <NavLink to="/">
            <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
              Horizon 🔍
            </p>
          </NavLink>
          <button
            type="button"
            onClick={() => Props.setDarkTheme(!Props.darkTheme)}
            className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
          >
            {Props.darkTheme ? "Light 🔅" : "Dark 🌙"}
          </button>
        </div>
        <Search/>
      </div>
    </>
  );
};

export default Navbar;
