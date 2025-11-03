// app/page.tsx
import Home from "../components/Home";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Approach from "@/components/Approach";
import Service from "@/components/ServiceCard";
import Portfolio from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Home />
      <About />
      <WhyUs />
      <Approach />
      <Service />
      <Portfolio />
      <Footer />
    </main>
  );

}
