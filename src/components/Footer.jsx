import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRegClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 to-purple-100  text-black py-10 mt-20">
      <div className="max-w-[1536px] w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col space-y-3">
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-2xl font-extrabold"
          >
            <FaRegClock className="w-8 h-8 text-indigo-600" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              TickTock
            </span>
          </a>
          <p className="text-gray-700 text-sm">
            Premium streaming & watch hub. Bringing you quality content & tech
            since 1992.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex lg:justify-end">
          <div>
            <h2 className="font-bold text-lg mb-3 gradient-text">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/add-product"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Add Product
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-indigo-600 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex lg:justify-end">
          <div>
            <h2 className="font-bold text-lg mb-3 gradient-text">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 border-t border-[#80808047] pt-4 text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} TickTock. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
