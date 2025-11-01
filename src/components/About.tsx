"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function About() {
  const words = ["Creative", "Innovative", "Professional", "Reliable"];
  return (
    <main className="w-screen !pb-30 relative">
      <section className="h-[90vh] !px-20 !py-20 text-white flex flex-col justify-center gap-12 relative" style={{ background: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(0, 0, 0, 1) 100%)",}}>
        <h1 className="text-2xl">About Us</h1>
        <h2 className={`text-7xl font-semibold ${poppins.className}`}>Neuma is a Creative Design Agency With Extensive Experience And Talented Team.</h2>
        <h3 className="text-2xl w-1/2">We are the ones with the creative idea of ​​creating stunning visuals that grab attention and leave a lasting impression!</h3>
        <Image
          src="/bitmap31.png"
          alt="About Us Image"
          width={800}
          height={800}
          className="object-cover rounded-3xl absolute top-[-100] right-[-450] z-0 opacity-10"
        />
      </section>
      <div className="overflow-hidden whitespace-nowrap bg-[#111] text-white !py-10 rotate-357 absolute left-[-10] bottom-[75]">
        <motion.div
          className="flex text-4xl font-semibold uppercase w-[200vw]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex w-screen justify-between !px-15">
              {words.map((word, j) => (
                <span key={j}>{word}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}