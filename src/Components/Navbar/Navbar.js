import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent opacity-95 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-between px-8 sm:px-16 md:px-24 lg:px-28">
      <div className="text-gray-400 text-2xl sm:text-3xl md:text-4xl font-bold font-sanv">FinEdge</div>
      <div className="flex items-center space-x-6 lg:hidden">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <ul className="hidden lg:flex space-x-6">
        <li className="text-gray-400 hover:text-gray-600 text-1xl sm:text-l md:text-xl font-sand">Home</li>
        <li className="text-gray-400 hover:text-gray-600 text-1xl sm:text-l md:text-xl font-sand">About</li>
        <li className="text-gray-400 hover:text-gray-600 text-1xl sm:text-l md:text-xl font-sand">Services</li>
        <li className="text-gray-400 hover:text-gray-600 text-1xl sm:text-l md:text-xl font-sand">Contact</li>
      </ul>
      <div className="hidden lg:flex space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg font-sand">
          Login
        </button>
        <button className="bg-emerald-800 text-white px-4 py-2 rounded-lg font-semibold shadow-lg font-sand">
          Sign Up
        </button>
      </div>
      {showMenu && (
        <div className="fixed top-0 right-0 h-screen w-1/2 bg-gray-800 text-white flex flex-col p-8">
          <button className="text-white text-2xl mb-4 focus:outline-none  border-b border-white pb-4" onClick={toggleMenu}>
            ✕
          </button>
          <ul className="flex flex-col space-y-4 ">
            <li className="text-white border-b border-white pb-4 font-sand">Home</li>
            <li className="text-white border-b border-white pb-4 font-sand">About</li>
            <li className="text-white border-b border-white pb-4 font-sand">Services</li>
            <li className="text-white border-b border-white pb-4">Contact</li>
          </ul>
          <div className="mt-10 flex flex-col space-y-4">
            <button className="bg-white w-auto text-black px-4 py-2 rounded-lg font-semibold shadow-lg md:flex md:flex-row md:space-x-4 font-sand">
              Login
            </button>
            <button className="bg-emerald-800 w-auto text-white px-4 py-2 rounded-lg font-semibold shadow-lg md:flex md:flex-row md:space-x-4 font-sand">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar