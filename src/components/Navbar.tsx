"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-5 left-0 w-full z-50 ${poppins.className}`}>
      <div className="max-w-4xl !mx-auto !px-8 !py-1 flex items-center justify-between backdrop-blur-lg rounded-full border border-gray-200 shadow-md">
        {/* Brand */}
        <Link href="#hero" className="text-2xl font-bold text-gray-900">
          Xyra
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#6b7fff] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 px-6 py-4"
        >
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#6b7fff] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}