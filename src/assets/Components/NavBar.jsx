import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { ShopContext } from "./ShopContext";
import { CiSearch, CiUser } from "react-icons/ci";

const NavBar = () => {
  const { quantity } = useContext(ShopContext);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h2 className="text-3xl font-extrabold tracking-wider cursor-pointer">
            Fashion
            <span className="text-gray-400">FuXion</span>
          </h2>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          <li className="cursor-pointer hover:text-gray-300 transition duration-300">
            Collections
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-300">
            New Arrivals
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-300">
            Sales
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-300">
            About
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <button className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:scale-105 transition duration-300">
            <CiSearch size={24} />
          </button>

          {/* Cart */}
          <Link to="/cart">
            <div className="relative w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:scale-105 transition duration-300">

              <FaOpencart size={22} />

              {quantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
                  {quantity}
                </span>
              )}
            </div>
          </Link>

          {/* User */}
          <button className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:scale-105 transition duration-300">
            <CiUser size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;