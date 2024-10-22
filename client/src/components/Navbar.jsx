import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="cursor-pointer flex gap-4 items-center justify-between py-5 font-medium">
      <NavLink to="/" className="flex flex-column items-center gap-1">
        <h2 className="transform transition-transform duration-300 hover:scale-110">
          @ECommerce
        </h2>
      </NavLink>

      <ul className="cursor-pointer flex gap-4 items-center justify-between py-5 font-medium">
        <NavLink to="/" className="flex flex-column items-center gap-1">
          <span className="transform transition-transform duration-300 hover:scale-110">
            Home
          </span>
        </NavLink>
        <NavLink
          to="/NewCollection"
          className="flex flex-column items-center gap-1"
        >
          <span className="transform transition-transform duration-300 hover:scale-110">
            NewCollections
          </span>
        </NavLink>
        <NavLink to="/About" className="flex flex-column items-center gap-1">
          <span className="transform transition-transform duration-300 hover:scale-110">
            About
          </span>
        </NavLink>
        <NavLink to="/Contact" className="flex flex-column items-center gap-1">
          <span className="transform transition-transform duration-300 hover:scale-110">
            Contact
          </span>
        </NavLink>
      </ul>

      <ul className="cursor-pointer flex gap-4 items-center justify-between py-5 font-medium">
        <NavLink to="/Search" className="flex flex-column items-center gap-1">
          <span className="transform transition-transform duration-300 hover:scale-150 text-2xl">
            <CiSearch/>
          </span>
        </NavLink>
        <NavLink to="/Cart" className="flex flex-column items-center gap-1">
          <span className="transform transition-transform duration-300 hover:scale-150 text-2xl">
            <FaCartShopping/>
          </span>
        </NavLink>
        <NavLink to="/Profile" className="flex flex-column items-center gap-1">
          <span className="transform transition-transform duration-300 hover:scale-150 text-2xl">
            <CgProfile/>
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
