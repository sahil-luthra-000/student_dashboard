import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-3 border-b">
      <div className="flex justify-between px-6 md:px-20 items-center font-semibold">
        <div>
          <h1 className="text-2xl">
            <span className="text-rose-600">YOUR</span>LOGO
          </h1>
        </div>
        <div className="hidden md:flex xl:gap-10 md:gap-8 gap-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="">Services</a>
          <a href="">Testimonial</a>
        </div>
        <div className="hidden md:block">
          <Link
            to="/login"
            className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
          >
            Login
          </Link>
        </div>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-3 bg-gray-50 border-t">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <a href="" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="" onClick={() => setIsMenuOpen(false)}>
            Testimonial
          </a>
          <Link
            to="/login"
            className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
