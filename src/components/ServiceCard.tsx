"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

const graphicsServices = [
  { title: "Brand Identity", desc: "Logos, color systems, typography, and full brand guidelines." },
  { title: "Graphic Design", desc: "Social media graphics, posters, and marketing visuals." },
  { title: "Motion Graphics", desc: "Dynamic visuals and animated branding assets." },
  { title: "Creative Direction", desc: "Helping you define and shape your brand’s visual voice." },
];

const webServices = [
  { title: "Web Design", desc: "Modern, responsive websites tailored to your brand." },
  { title: "Web Development", desc: "Full-stack builds with performance and scalability in mind." },
  { title: "UI/UX", desc: "User-focused interfaces and seamless digital experiences." },
  { title: "E-Commerce", desc: "Custom online stores with secure payments & smooth UX." },
];

export default function Services() {
  

  return (
    <section className={`!py-16 bg-white text-center h-screen !px-16 ${poppins.className}`}>
      <div>
         <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-6xl font-normal"
        >
          Our Services
        </motion.h1>
        <p className="!mt-4 text-lg text-gray-600 max-w-2xl !mx-auto">
          Two worlds. One vision. We craft powerful visuals and build digital experiences.
        </p>
      </div>
    <div className="!mt-8 flex w-full gap-12 bg-[#6b7fff] bg-[linear-gradient(135deg,#CFF0FF_0%,#FED6FF_100%)] !p-8 rounded-3xl">
        <div className="w-1/2 !p-8 rounded-3xl bg-white flex flex-col">
          <div className="flex border-b !border-b-gray-500 !pb-8">
            <h2 className="text-2xl md:text-4xl font-normal text-center">Creative & Graphics</h2>
            <Image
              src="/640744d0e7b29de6f1a29aee_icon-services-design.svg"
              alt="Design Icon"
              width={40}
              height={40}
              className="ml-4 !ml-auto"
            />
          </div>
          <div className="text-start">
            {graphicsServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="!py-5 border-b !border-b-gray-500"
              >
                <h3 className="text-2xl font-normal">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-1/2 !p-8 rounded-3xl bg-white flex flex-col">
          <div className="flex border-b !border-b-gray-500 !pb-8">
            <h2 className="text-2xl md:text-4xl font-normal text-center">Web & Digital</h2>
            <Image
              src="/6449421486eae3cf4d387564_development-Illustration.svg"
              alt="Web Icon"
              width={40}
              height={40}
              className="ml-4 !ml-auto"
            />
          </div>
          <div className="text-start">
            {webServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="!py-5 border-b !border-b-gray-500"
              >
                <h3 className="text-2xl font-normal">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}