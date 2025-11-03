"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { ArrowRight, X } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function Contact({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hover, setHover] = useState(false);
  const workTypes = [
    "Web Design",
    "Brand Identity",
    "UI/UX Design",
    "Motion Design",
    "Development",
    "Strategy",
  ];

  if (!open) return null; // defensive early return (optional)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 flex justify-end"
        >
          {/* dim background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black pointer-events-auto"
          />

          {/* Layer 1 - blue (fast) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: "easeInOut", delay: 0 }}
            className="absolute top-0 right-0 h-full w-2/5 bg-blue-600 rounded-l-2xl pointer-events-none"
          />

          {/* Layer 2 - dark (slower) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.48, ease: "easeInOut", delay: 0.08 }}
            className="absolute top-0 right-0 h-full w-2/5 bg-[#1f1f1f] rounded-l-2xl pointer-events-none"
          />

          {/* Panel - slowest */}
          <motion.section
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.16 }}
            className={`relative h-screen w-2/5 bg-[#171717] rounded-l-2xl !p-12 overflow-y-auto z-70 ${poppins.className}`}
            aria-modal="true"
            role="dialog"
          >
            <div className="flex justify-between items-start !mb-8">
              <h2 className="text-white text-lg font-semibold leading-snug max-w-xs">
                Get in touch to find out how we can collaborate
              </h2>
              <button
                onClick={onClose}
                aria-label="Close contact"
                className="flex justify-end bg-[#222222] text-white rounded-full !p-3"
              >
                <X size={20} />
              </button>
            </div>

            <form className="grid grid-cols-2 gap-6 flex-1">
              <div>
                <label className="text-gray-300 text-sm">Your Full Name</label>
                <input
                  type="text"
                  className="!mt-2 w-full !p-4 rounded-full bg-[#222222] h-12 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Your Company</label>
                <input
                  type="text"
                  className="!mt-2 w-full !p-4 rounded-full bg-[#222222] h-12 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="col-span-2">
                <label className="text-gray-300 text-sm">Email Address</label>
                <input
                  type="email"
                  className="!mt-2 w-full !p-4 rounded-full bg-[#222222] h-12 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-300 text-sm !mb-3">
                  Type of Work{" "}
                  <span className="text-xs text-gray-500 !ml-1">
                    (Pick what you’d like to explore)
                  </span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {workTypes.map((type, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 text-white text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-blue-600 w-4 h-4 rounded-sm"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows={4}
                  className="!mt-2 w-full !p-4 rounded-3xl bg-[#222222] text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div
                className="col-span-1 flex items-center !mt-4 relative"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                {/* Left Arrow (appears on hover) */}
                <motion.div
                    className="absolute left-0 w-14 h-14 rounded-full bg-white text-[#171717] flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: hover ? 1 : 0 }}
                    transition={{ duration: 0.4}}
                >
                    <ArrowRight />
                </motion.div>

                {/* Send Message Button */}
                <motion.button
                    type="submit"
                    animate={{ x: hover ? "56px" : "0px" }} // roughly the width of arrow
                    transition={{ duration: 0.4}}
                    className="bg-[#222222] text-white !px-6 h-14 rounded-full hover:bg-blue-700 active:scale-95 transition-transform"
                >
                    Send Message
                </motion.button>

                {/* Right Arrow (shrinks away on hover) */}
                <motion.div
                    className="absolute right-0 w-14 h-14 rounded-full bg-white text-[#171717] flex items-center justify-center"
                    animate={{ scale: hover ? 0 : 1 }}
                    transition={{ duration: 0.4}}
                >
                    <ArrowRight />
                </motion.div>
                </div>
            </form>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}