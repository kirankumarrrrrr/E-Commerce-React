import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [activeLink, setactiveLink] = useState(null)

  const handleLinkClick = (link) =>{
    setactiveLink(link);
  }
  return (
    <div className="cursor-pointer flex gap-4 items-center justify-between py-5 font-medium">
      <NavLink to="/" className="flex flex-column items-center gap-1">
        <p className="transform transition-transform duration-300 hover:scale-110" onClick={() => handleLinkClick('Home')}>
          @ECommerce
        </p>
        <hr className="block w-2/4 border-none h-[1.5px] bg-gray-700" style={{ display: activeLink === 'Home' ? 'block' : 'none' }}></hr>
      </NavLink>

      <ul className="cursor-pointer flex gap-4 items-center justify-between py-5 font-medium">
        <NavLink to="/" className="flex flex-column items-center gap-1" onClick={() => handleLinkClick('Home')}>
          <span className="transform transition-transform duration-300 hover:scale-110">
            Home
          </span>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden={activeLink !== 'Home'}></hr>
        </NavLink>
        <NavLink
          to="/NewCollection"
          className="flex flex-column items-center gap-1" onClick={() => handleLinkClick('NewCollection')}>
          <span className="transform transition-transform duration-300 hover:scale-110">
            NewCollections
          </span>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" id="underscore" hidden={activeLink !== 'NewCollection'}></hr>
        </NavLink>
        <NavLink to="/About" className="flex flex-column items-center gap-1" onClick={() => handleLinkClick('About')}>
          <span className="transform transition-transform duration-300 hover:scale-110">
            About
          </span>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden={activeLink !== 'About'}></hr>
        </NavLink>
        <NavLink to="/Contact" className="flex flex-column items-center gap-1" onClick={() => handleLinkClick('Contact')}>
          <span className="transform transition-transform duration-300 hover:scale-110">
            Contact
          </span>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden={activeLink !== 'Contact'}></hr>
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
