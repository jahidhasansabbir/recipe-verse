import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/add-product">Add Product</Link>
      </li>
    </>
  );
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                bg-white/30 backdrop-blur-xs shadow-sm"
    >
      <div className="navbar px-0 max-w-[1536px] w-11/12 mx-auto">
        <div className="navbar-start">

          {/* Mobile menu  */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="pr-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600" 
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-2xl font-extrabold"
          >
            <FaRegClock className="w-8 h-8 text-indigo-600" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              TickTock
            </span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Login button */}
        <div className="navbar-end">
          <a href="#" className="button">
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
