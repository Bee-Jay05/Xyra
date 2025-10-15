import { Poppins } from "next/font/google";
import Link from 'next/link'

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
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/services">Services</Link></li>
            <li><Link className="hover:text-white" href="/work">Work</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <div className="!mt-6 flex justify-between w-[250px] !mx-auto text-sm font-medium">
            <Link className="hover:text-white" href="#">Twitter</Link>
            <Link className="hover:text-white" href="#">LinkedIn</Link>
            <Link className="hover:text-white" href="#">Insta</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}