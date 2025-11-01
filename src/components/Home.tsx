"use client";

import { Poppins } from "next/font/google";
import Image from 'next/image';
// import { Modak } from "next/font/google";

// const modak = Modak({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-modak",
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

// const letters = ["X", "Y", "R", "A"];

export default function Home() {
  return (
    <main className={`min-h-screen text-black flex flex-col`}>
      <section className="flex justify-center items-center text-center h-screen bg-black" style={{ background: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(0, 0, 0, 1) 100%)",}}>
        <div className="w-1/2 h-full relative overflow-hidden">
          <div className="absolute right-0 bottom-0 h-full w-[130%]">
            <Image
              src="/Untitled design (19).png"
              alt="3d-logo"
              width={2048}
              height={2048}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-1/2 h-full text-white flex flex-col justify-center gap-6 !px-8 text-start">
          <h1 className="text-6xl">A UI/UX design and web development studio shaping digital products & brands that matter.</h1>
          <h3 className={`text-xl ${poppins.className}`}>We help startups, scaleups, and bold brands design better user experiences, build scalable websites, and create distinct visual identities. All rooted in strategy, creativity, and clean execution.</h3>
        </div>
      </section>
      
    </main>
  );
}