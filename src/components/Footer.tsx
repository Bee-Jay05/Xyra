import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});


// components/Footer.tsx
export default function Footer() {
  return (
    <footer className={`bg-gray-900 text-gray-300 !py-20 ${poppins.className}`}>
      <div className="max-w-6xl !mx-auto !px-4 text-center">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">Xyra</h2>
        </div>

        {/* Navigation */}
        <div>
          <ul className="!mt-8 flex justify-between max-w-md !mx-auto text-sm font-medium">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/work" className="hover:text-white">Work</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <div className="!mt-6 flex justify-between w-[250px] !mx-auto text-sm font-medium">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

    </footer>
  );
}