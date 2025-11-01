"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function Approach() {
  const tabs = [
    {
      id: "discover",
      title: "Discover",
      content:
        "We start by listening. Every brand has a story and a reason it exists. Through research, audits, and workshops, we uncover what makes yours distinct and what your audience truly values.",
      image: "/Untitled design (25).png",
    },
    {
      id: "define",
      title: "Define",
      content:
        "Insights turn into direction. We translate findings into a clear brand strategy—positioning, tone, and visual principles that align your identity with your goals.",
      image: "/Untitled design (21).png",
    },
    {
      id: "design",
      title: "Design",
      content:
        "Where strategy becomes visible. We craft cohesive design systems, from logo to interface, blending function and emotion to create visual clarity and recognition.",
      image: "/Untitled design (23).png",
    },
    {
      id: "develop",
      title: "Develop",
      content:
        "Ideas take shape. We prototype, test, and refine across platforms, ensuring your brand looks and performs perfectly in every environment.",
      image: "/Untitled design (26).png",
    },
    {
      id: "deliver",
      title: "Deliver",
      content:
        "We launch with intent. Final assets, guidelines, and deliverables are built for longevity, with measurable impact and adaptability as your brand evolves.",
      image: "/Untitled design (24).png",
    },
  ];

  const [active, setActive] = useState("discover");
  return (
    <main className="w-screen h-screen">
      <section className={`h-full w-full !p-20 flex gap-12 grid grid-cols-2 ${poppins.className}`}>
        <div className="col-span-1">
          <h1 className={`text-7xl font-semibold ${poppins.className}`}>Our Approach</h1>
          <div className="flex-1 relative h-[500px] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={tabs.find((t) => t.id === active)?.image || ""}
                  alt={active}
                  width={500}
                  height={500}
                  className="object-cover !mt-10"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="col-span-1 flex flex-col !pt-[20vh]">
          <div className="flex justify-between gap-8 !py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`group relative !pb-2 text-[22px] font-normal transition-colors duration-300 ${
                  active === tab.id
                  ? "text-black font-semibold"
                  : "text-gray-400 hover:text-black"
                }`}
              >
                {tab.title}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] bg-black transition-all duration-300 origin-left ${
                    active === tab.id ? "w-0" : "w-0 group-hover:w-full"
                  }`}
                />
                {active === tab.id && (
                  <motion.span
                    layoutId="dot"
                    initial= "scale-0"
                    animate= "scale-1"
                    exit= "scale-0"
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute left-1/2 -bottom-[6px] w-[10px] h-[10px] bg-black rounded-full -translate-x-1/2"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="h-32 flex items-center justify-center !mt-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-black w-full text-xl"
              >
                {tabs.find((t) => t.id === active)?.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}