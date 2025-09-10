// app/page.tsx

import Home from "../components/Home";
import About from "@/components/About";
import Service from "@/components/ServiceCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Home />
      <About />
      <Service />
    </main>
  );

}
