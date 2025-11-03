"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import branding from "@/lotties/Hiring.json"
import website from "@/lotties/Tutoring Online.json"
import visual from "@/lotties/Successful Marketer.json"
import development from "@/lotties/Working with Cobot.json"
import platform from "@/lotties/Binance Coin.json"
import app from "@/lotties/E-tickets.json"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function Services() {
  

  return (
    <section className={`!py-48 bg-black text-center !px-16 ${poppins.className}`}>
      <div className="text-white relative before:absolute before:content-[''] before:w-[2.5px] before:h-80 before:bg-[radial-gradient(circle,rgba(200,200,200,1)_0%,rgba(0,0,0,1)_100%)] before:top-[320] before:left-1/2 before:-translate-x-1/2">
         <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-9xl md:text-10xl font-medium"
        >
          Services
        </motion.h1>
        <p className="!mt-8 !mb-8 text-xl text-[#737373] max-w-md !mx-auto font-medium">
          Two worlds. One vision. We craft powerful visuals and build digital experiences.
        </p>
        <span className="font-medium !py-2 !px-4 bg-[radial-gradient(185.4%_106.06%_at_66.51%_82.61%,#131111_0%,#262222_100%)] rounded-full text-lg text-gray-200">Complex solution</span>
        <h2 className="!mt-100 w-lg !mx-auto text-2xl">Instead of a request which sounds like “I need a website”, we embrace - “I want to market my product to get first organic users”, where we can suggest what to do, and execute the approved plan from A to Z.</h2>
      </div>
      <div className="w-3/4 grid grid-cols-2 !mx-auto !mt-32 gap-8">
        <div className="col-span-1 !px-12 !py-12 rounded-lg text-center flex flex-col items-center text-white bg-[#101010]">
          <h1 className="text-4xl">Brand Strategy</h1>
          <p className="!mt-8 text-lg text-gray-500">We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.</p>
          <Lottie
            animationData={branding}
            loop={true}
            className="w-full !mt-8"
          />
        </div>
        <div className="col-span-1 !px-12 !py-12 rounded-lg text-center flex flex-col items-center text-white bg-[#101010]">
          <h1 className="text-4xl">Brand Visual</h1>
          <p className="!mt-8 text-lg text-gray-500">We create brand materials that speak of your values non-verbally and complement your offering to the market.</p>
          <Lottie
            animationData={visual}
            loop={true}
            className="w-full !mt-8"
          />
        </div>
        <div className="col-span-1 !px-12 !py-12 rounded-lg text-center flex flex-col items-center text-white bg-[#101010]">
          <h1 className="text-4xl">Platforms</h1>
          <p className="!mt-8 text-lg text-gray-500">We think about the big picture and focus primarily on your app&apos;s business success. We research deeply, validate thoroughly, and launch confidently.</p>
          <Lottie
            animationData={platform}
            loop={true}
            className="w-full !mt-8"
          />
        </div>
        <div className="col-span-1 !px-12 !py-12 rounded-lg text-center flex flex-col items-center text-white bg-[#101010]">
          <h1 className="text-4xl">Websites</h1>
          <p className="!mt-8 text-lg text-gray-500">We do not just design websites. We build reliable sales & marketing tools that drive predictably good metrics.</p>
          <Lottie
            animationData={website}
            loop={true}
            className="w-full !mt-8"
          />
        </div>
        <div className="col-span-1 !px-12 !py-12 rounded-lg text-center flex flex-col items-center text-white bg-[#101010]">
          <h1 className="text-4xl">Mobile App</h1>
          <p className="!mt-8 text-lg text-gray-500">We are masters of UX gamification and user engagement. In a world where any app competes with Instagram we make usable products that attract and retain.</p>
          <Lottie
            animationData={app}
            loop={true}
            className="w-full !mt-8"
          />
        </div>
        <div className="col-span-1 !px-12 !py-12 rounded-lg text-center flex flex-col items-center text-white bg-[#101010]">
          <h1 className="text-4xl">Development</h1>
          <p className="!mt-8 text-lg text-gray-500">We can take care of your product&apos;s implementation, assuring the most efficient usage of time & resources in every decision & each line of code while maintaining seamless operation.</p>
          <Lottie
            animationData={development}
            loop={true}
            className="w-full !mt-8"
          />
        </div>
      </div>
    </section>
  );
}