"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function About() {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const section = gsap.utils.toArray('.panels');
      
      gsap.to(section, {
        x: -170 + 'vw',
        ease: 'none',
        scrollTrigger: {
          trigger: '.container',
          scrub: 1,
          pin: true,
          end: "bottom bottom"
        }
      });
    }
  );

  return (
    <div className={`container h-[270vw] max-w-screen overflow-hidden bg-white ${poppins.className}`}>
      <div className="panels flex h-screen w-[270vw]">
        <div className="panel w-1/4 h-screen !p-20 flex items-center justify-center">
          <h1 className='text-9xl'>What About Xyra?</h1>
        </div>
        <div className="panel w-1/4 h-screen flex items-center justify-center">
          <div className="bg-rose-100 w-[90%] h-[80%] rounded-4xl !p-12 relative ">
            <h1 className='text-[360px]/70 absolute right-[40px] top-[30px] text-ultrabold text-rose-200'>01</h1>
            <h2 className='!mt-[360px] text-7xl'>Who We Are</h2>
            <h3 className='text-lg'>Xyra is a modern graphic design brand that blends minimalism with bold creativity. Every design we craft is intentional, clean, and unforgettable.</h3>
          </div>
        </div>
        <div className="panel w-1/4 h-screen flex items-center justify-center">
          <div className="bg-violet-100 w-[90%] h-[80%] rounded-4xl !p-12 relative">
            <h1 className='text-[360px]/70 absolute right-[40px] top-[30px] text-ultrabold text-violet-200'>02</h1>
            <h2 className='!mt-[360px] text-7xl'>Our Vision</h2>
            <h3 className='text-lg'>To redefine digital visuals by pushing boundaries of style and storytelling. We don’t just make things look good — we make them feel inevitable.</h3>
          </div>
        </div>
        <div className="panel w-1/4 h-screen flex items-center justify-center">
          <div className="bg-cyan-100 w-[90%] h-[80%] rounded-4xl !p-12 relative">
            <h1 className='text-[360px]/70 absolute right-[40px] top-[30px] text-ultrabold text-cyan-200'>03</h1>
            <h2 className='!mt-[360px] text-7xl'>What We Do</h2>
            <h3 className='text-lg'>Branding, UI/UX, social media visuals, and creative assets — all designed to give your brand a distinct voice that stands out in a crowded world.</h3>
          </div>
        </div>
      </div>
      
    </div>
  );
}