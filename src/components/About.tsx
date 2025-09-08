"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current?.offsetWidth, // dynamic end
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="container h-screen w-screen overflow-hidden flex">
      <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-white">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600">
            Xyra is a modern design brand blending sleek minimalism with dope creative vibes.
          </p>
        </div>
      </div>

      <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To push the boundaries of design, delivering work that feels bold, fresh, and future-ready.
          </p>
        </div>
      </div>

      <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gray-200">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Branding, visual identity, and creative design solutions that make you unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}