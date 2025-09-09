// app/page.tsx

import Home from "../components/Home";
import About from "@/components/About";
import Button from "../components/Button";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Home />
      <About />
      <Button />
    </main>
  );

}
