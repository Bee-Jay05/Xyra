"use client"

import { Poppins } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

const categories = [
  { id: "all", title: "All", count: 12 },
  { id: "branding", title: "Branding", count: 4 },
  { id: "web", title: "Design", count: 3 },
  { id: "dev", title: "Development", count: 2 },
  { id: "marketing", title: "Marketing", count: 3 },
]

const projects = [
  { id: 1, title: "Lumen", category: "branding", content: "A comprehensive branding project for a tech startup, including logo design, color palette, typography, and brand guidelines." },
  { id: 2, title: "Waveform", category: "web", content: "A modern, responsive website for a music streaming service, featuring user-friendly navigation, multimedia integration, and a sleek design." },
  { id: 3, title: "Aural", category: "dev", content: "Development of a mobile app for a podcast platform, with features like offline listening, personalized recommendations, and social sharing." },
  { id: 4, title: "Orbit", category: "web", content: "A dynamic e-commerce website for a fashion brand, incorporating advanced filtering options, a seamless checkout process, and mobile optimization." },
  { id: 5, title: "Glyph", category: "branding", content: "Creation of a visual identity for a publishing company, including logo design, book cover templates, and marketing collateral." },
  { id: 6, title: "Pulse", category: "web", content: "Design of a health and fitness website, featuring interactive workout plans, nutrition tracking, and community forums." },
  // add more projects...
];

export default function Portfolio() {
  const [ hovered, setHovered ] = useState<string | null>(null);
  const [active, setActive] = useState<string>("all");
  const filtered =
  active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section className={`w-full !py-48 bg-white ${poppins.className}`} id="portfolio">
      <div className="max-w-5xl !mx-auto !px-6">
        {/* Header */}
        <div className="text-center !mb-16">
          <h2 className="text-7xl md:text-8xl font-medium text-black">Our Work</h2>
          <p className="text-gray-600 max-w-2xl text-3xl !mx-auto !mt-12">
            We think about the big picture and focus primarily on your product’s funding & business success.
          </p>
        </div>

        <div className="flex gap-24 justify-center !my-12">
          {categories.map((cat) => {
            const show = active === cat.id || hovered === cat.id;
            return(
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative text-2xl font-medium transition-all duration-300 ${
                active === cat.id ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
              aria-pressed={active === cat.id}
            >
              {cat.title}
              <div className="absolute left-1/2 -bottom-36 -translate-x-1/2 w-[140px] h-[128px] pointer-events-none">
                  <svg
                    viewBox="0 0 600 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    aria-hidden
                  >
                    <motion.text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="400"
                      fontWeight="700"
                      stroke="#000"
                      strokeWidth="6"
                      fill="none"
                      initial={{
                        strokeDasharray: "0 1000",
                        strokeDashoffset: "0",
                        opacity: 0,
                      }}
                      animate={
                        show
                          ? {
                              strokeDasharray: "1000 0",
                              strokeDashoffset: 0,
                              opacity: 1,
                            }
                          : {
                              strokeDasharray: "0 1000",
                              strokeDashoffset: 0,
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 0.9,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {cat.count}
                    </motion.text>
                  </svg>
              </div>
            </button>
            );
          })}
        </div>
        {/* <div className="col-span-1 flex flex-col !pt-12">
          <div className="flex gap-16 !py-2 !mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`group relative !pb-2 text-[22px] font-normal transition-colors duration-300 ${
                  active === tab.id
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.title}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] bg-blue-500 transition-all duration-300 origin-left ${
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
                    className="absolute left-1/2 -bottom-[6px] w-[10px] h-[10px] bg-blue-500 rounded-full -translate-x-1/2"
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
                className="text-white w-full text-xl"
              >
                {tabs.find((t) => t.id === active)?.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div> */}

        

        {/* Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="!p-6 bg-white">
                <h3 className="text-xl font-semibold !mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 !mt-40">
          {filtered.map((p) => (
            <article key={p.id} className="hover:bg-gray-200 transition-all duration-300 rounded-xl !py-6 !px-4">
              <h3 className="text-3xl text-black font-normal !mb-6 relative before:absolute before:content-[''] before:bg-black before:w-12 before:h-[3px] before:-bottom-2">{p.title}</h3>
              <div className="text-md text-gray-500">{p.content}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}