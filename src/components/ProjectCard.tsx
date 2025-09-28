import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

const projects = [
  {
    title: "Minimalist Logo Pack",
    img: "/Untitled design (18).png",
    desc: "A collection of sleek, modern logos designed for startups.",
  },
  {
    title: "E-commerce UI Design",
    img: "/Screenshot 2025-09-25 18.10.51.png",
    desc: "Clean and functional shopping experience crafted with minimal aesthetics.",
  },
  {
    title: "Brand Identity System",
    img: "/_ (11).jpeg",
    desc: "Complete visual system with typography, colors, and assets.",
  },
];

export default function Portfolio() {
  return (
    <section className={`w-full !py-24 bg-white ${poppins.className}`} id="portfolio">
      <div className="max-w-6xl !mx-auto !px-6">
        {/* Header */}
        <div className="text-center !mb-16">
          <h2 className="text-7xl md:text-6xl font-normal text-gray-900 !mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl !mx-auto">
            A showcase of projects where design meets impact. Sleek visuals, clean UI,
            and identity systems crafted for brands that want to stand out.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
}