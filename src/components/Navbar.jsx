import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-violet-900 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 via-purple-500 to-yellow-300 bg-clip-text text-transparent">
          Music Player
        </h2>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-white font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/Media"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Media
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;