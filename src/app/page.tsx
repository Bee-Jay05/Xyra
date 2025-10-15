// app/page.tsx
import Navbar from "@/components/Navbar";
import Home from "../components/Home";
import About from "@/components/About";
import Service from "@/components/ServiceCard";
import Portfolio from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );

}
