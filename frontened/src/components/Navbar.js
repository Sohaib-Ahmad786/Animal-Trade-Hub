"use client";
import React, { useState } from "react";
import { GiCow } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between text-white bg-black p-4 fixed w-full top-0 left-0 shadow-lg z-50">
      <div className="flex items-center gap-4 text-3xl font-bold">
        <p className="text-5xl">
          {" "}
          <GiCow />
        </p>
        <p>Animal Trade Hub</p> 
      </div>
      <nav className="hidden lg:flex items-center space-x-10 text-lg">
        <ul className="flex items-center space-x-8">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/About/"}>
            <li>About</li>
          </Link>
          <Link href={"/Browse/"}>
            <li>Browse Animals</li>
          </Link>
          <Link href={"/SellAnimals/"}>
            <li>Sell</li>
          </Link>
          <Link href="/Contact/">
            <li>Contact Us</li>
          </Link>
        </ul>
        <Link href={"/Login/"}>
          <button className="border-b-white border-2 rounded-2xl px-4 py-2 hover:bg-green-700 transition">
            Login/Register
          </button>
        </Link>
      </nav>

      <button
        onClick={toggleMenu}
        className="text-3xl lg:hidden focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-800 shadow-xl transition-transform duration-300 transform p-6 z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:hidden`}
      >
        <ul className="flex flex-col space-y-6 text-xl mt-16">
          <Link href={"/"}>
            <li
              onClick={toggleMenu}
              className="hover:text-green-300 cursor-pointer"
            >
              Home
            </li>
          </Link>
          <Link href={"/About/"}>
            <li
              onClick={toggleMenu}
              className="hover:text-green-300 cursor-pointer"
            >
              About
            </li>
          </Link>
          <Link href={"/Browse/"}>
            <li
              onClick={toggleMenu}
              className="hover:text-green-300 cursor-pointer"
            >
              Browse Animals
            </li>
          </Link>
          <Link href={"/SellAnimals/"}>
            <li
              onClick={toggleMenu}
              className="hover:text-green-300 cursor-pointer"
            >
              Sell
            </li>
          </Link>
          <Link href={"/Contact/"}>
            <li
              onClick={toggleMenu}
              className="hover:text-green-300 cursor-pointer"
            >
              Contact Us
            </li>
          </Link>
          <button
            onClick={toggleMenu}
            className="border-b-white border-2 rounded-2xl px-4 py-2 mt-4 hover:bg-green-700 transition"
          >
            Login/Register
          </button>
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        />
      )}
    </header>
  );
}

export default Navbar;
