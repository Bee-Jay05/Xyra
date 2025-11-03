"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});


export default function Navbar({onContactClick}: {onContactClick: () => void}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <nav className={`fixed top-5 left-0 w-full z-50 ${poppins.className}`}>
      <motion.div 
        className={`!mx-auto !px-4 !py-2 flex items-center justify-between backdrop-blur-lg rounded-md bg-[#191919] transition-all duration-1000 ${scrolled ? "w-sm" : "w-xl"}`}>
        {/* Brand */}
        <Link href="#hero" className="text-xl font-bold !text-white">
          <Image
            src="/neuma2.png"
            alt="XYRA Logo"
            width={96}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={`hidden overflow-hidden md:flex gap-4 text-white font-medium text-sm transition-all duration-1000 origin-right justify-between ${poppins.className} ${scrolled ? "w-[0px]" : "w-[260px]"}`}>
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
        
        <div className="flex items-center gap-4">
          <div className={`transition-all duration-1000 overflow-hidden ${scrolled ? "w-[128px]" : "w-0"}`}>
            <button className={`bg-[#404040] text-white rounded-md hover:bg-[#7fb069] !px-3 !py-2 transition-all duration-1000 overflow-hidden min-w-[128px]`}>
              Book A Call
            </button>
          </div>
          <button
  onClick={() => {
    console.log("Navbar Contact button clicked");
    if (typeof onContactClick !== "function") {
      console.log("onContactClick is NOT a function", onContactClick);
    } else {
      onContactClick();
    }
  }}
  className="md:block bg-[#d36135] text-white !px-3 !py-2 rounded-md hover:bg-[#7fb069] transition-all duration-300"
>
  Contact
</button>
          
        </div>
        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </motion.div>

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