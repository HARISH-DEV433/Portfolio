"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed relative w-full p-6 bg-none">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        <Link href="/">
          <div className="font-semibold text-2xl cursor-pointer">Harish.</div>
        </Link>
        <div className="text-black sm:flex">
          <ul className="font-regular gap-6 hidden sm:flex">
            <Link href="#home">
              <li className="text-xl hover:font-bold">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="text-xl hover:font-bold">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="text-xl hover:font-bold">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="text-xl hover:font-bold">
                Projects
              </li>
            </Link>
            <Link href="#connect">
              <li className="text-xl hover:font-bold">
                Connect.
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-justify-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div>
        <div
          className={
            menuOpen
              ? "fixed z-20 left-0 top-0 w-[65%] sm:hidden h-screen bg-white/10 shadow-sm backdrop-blur-lg p-10 ease-in duration-500"
              : "fixed  z-5 left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col text-xl py-2 justify-center items-center text-black font-regular">
              <ul className="sm:flex">
                <Link href="#home">
                  <li 
                  onClick={() => setMenuOpen(false)}
                  className="py-4 focus:font-semibold text-2xl focus:font-bold hover:font-bold">
                    Home
                  </li>
                </Link>
                <Link href="#about">
                  <li 
                  onClick={() => setMenuOpen(false)}
                  className="py-4 focus:font-semibold text-2xl hover:font-bold focus:font-bold">
                    About
                  </li>
                </Link>
                <Link href="#skills">
                  <li 
                  onClick={() => setMenuOpen(false)}
                  className="py-4 focus:font-semibold text-2xl hover:font-bold focus:font-bold">
                    Skills
                  </li>
                </Link>
                <Link href="#projects">
                  <li 
                  onClick={() => setMenuOpen(false)}
                  className="py-4 focus:font-semibold text-2xl hover:font-bold focus:font-bold">
                    Projects
                  </li>
                </Link>
                <Link href="#connect">
                  <li 
                  onClick={() => setMenuOpen(false)}
                  className="py-4 focus:font-semibold text-2xl hover:font-bold focus:font-bold">
                    Connect.
                  </li>
                </Link>
              </ul>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
