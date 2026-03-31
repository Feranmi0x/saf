"use client";

import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp, FaRegEnvelope, FaCoins } from "react-icons/fa";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Menu Icon - only on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-2xl text-gray-700"
      >
        <RiMenu2Line className="text-gray-500 w-[20px] h-[30px]" />
      </button>

      {/* Overlay (Mobile only) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Side Drawer (Mobile only) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-full lg:hidden`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <HiOutlineX />
          </button>
          <a
            href="#"
            className="bg-blue-600 text-[15px] text-white px-3 py-2 rounded hover:bg-blue-500 transition tracking-widest h-[34px] flex items-center justify-center gap-2"
          >
            <FaCoins className="text-white text-[14px]" />
            GIVE
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-6 text-lg text-[16px] tracking-widest">
          {/* CREATE IMPACT with Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("impact")}
              className="flex justify-between w-full hover:text-gray-500 transition"
            >
              CREATE IMPACT
              {openDropdown === "impact" ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "impact" ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <ul className="pl-4 space-y-3 text-gray-700">
                <li>
                  <Link href="/donate" className="hover:text-gray-500 block">
                    Donate
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          {/* ABOUT US with Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("about")}
              className="flex justify-between w-full hover:text-gray-500 transition"
            >
              ABOUT US
              {openDropdown === "about" ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "about" ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <ul className="pl-4 space-y-3 text-gray-700">
                <li>
                  <Link href="/how-we-work" className="hover:text-gray-500 block">
                    How we work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* WHY SAF */}
          <Link
            href="why-saf"
            className="hover:text-gray-500 transition"
            onClick={() => setIsOpen(false)}
          >
            WHY SAF?
          </Link>
        </nav>

        {/* Message icon for email sign-up */}
        <div className="p-6 font-normal text-[17px] flex items-center gap-3 mt-6">
          <FaRegEnvelope className="text-gray-600 text-xl" />
          <Link href="/#contact" className="hover:text-gray-600">
            Get our emails to stay in the know
          </Link>
        </div>
      </div>
    </>
  );
}