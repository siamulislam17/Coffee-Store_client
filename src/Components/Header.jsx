import React, { useState } from 'react';
import Logo from '../assets/more/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons
import { Link } from 'react-router';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-[#4b2e1c] to-[#331A15] py-2 px-4 md:px-12 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
        <Link to="/"><h1 className="text-white text-xl md:text-3xl rancho font-bold">Expresso Emperium</h1></Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        <Link to={"/login"}><button className="bg-white text-[#331A15] font-semibold px-5 py-2 rounded-full shadow hover:bg-[#f2e9e4] transition">
          Login
        </button></Link>
        <Link to={"/register"}>
        <button className="bg-[#f2e9e4] text-[#331A15] font-semibold px-5 py-2 rounded-full shadow hover:bg-white transition">
          Sign Up
        </button></Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden ">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg flex flex-col w-full  p-4 space-y-2 z-50 md:hidden">
          <button className="text-[#331A15] font-medium px-4 py-2 rounded hover:bg-[#f2e9e4] transition">
            Login
          </button>
          <button className="bg-[#331A15] text-white font-medium px-4 py-2 rounded hover:bg-[#4a2b1d] transition">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
