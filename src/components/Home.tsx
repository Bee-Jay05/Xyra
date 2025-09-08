"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const letters = ["X", "Y", "R", "A"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 h-screen">
        <motion.div
          className="flex space-x-2 md:space-x-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className={`text-6xl md:text-[300px] font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] ${inter.className}`}
              variants={{
                hidden: { opacity: 0, y: 80, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 120, damping: 10 },
                },
              }}
              whileHover={{ 
                scale: 1.15, 
                color: "#1a1a1a", 
                textShadow: "0px 2px 8px rgba(0,0,0,0.15)" 
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline with typing effect */}
        <motion.p
          className="mt-6 text-lg md:text-4xl text-gray-600 font-light"
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          Design that feels inevitable.
        </motion.p>
      </section>
      
    </main>
  );
}