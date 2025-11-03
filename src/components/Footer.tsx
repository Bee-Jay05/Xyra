import { Poppins } from "next/font/google";
import Link from 'next/link';
import Image from "next/image";
import { Dribbble, Github, Instagram, Twitter, Linkedin } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});


// components/Footer.tsx
export default function Footer() {
  return (
    <footer className={`text-gray-300 !p-4 h-screen w-screen ${poppins.className}`}>
      <div className="bg-black h-full w-full rounded-lg !p-16 flex relative flex-col justify-between">
        <div className="grid grid-cols-3 flex justify-between !mb-8">
          <div className="col-span-1 grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col gap-4">
              <h2 className="text-md font-semibold text-white">Company</h2>
              <Link href="/about" className="hover:text-white transition text-sm">About Us</Link>
              <Link href="/careers" className="hover:text-white transition text-sm">Careers</Link>
              <Link href="/blog" className="hover:text-white transition text-sm">Blog</Link>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <h2 className="text-md font-semibold text-white">Services</h2>
              <Link href="/services/branding" className="hover:text-white transition text-sm">Brand Strategy</Link>
              <Link href="/services/visual" className="hover:text-white transition text-sm">Brand Visual</Link>
              <Link href="/services/platforms" className="hover:text-white transition text-sm">Platforms</Link>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <h2 className="text-md font-semibold text-white">Support</h2>
              <Link href="/contact" className="hover:text-white transition text-sm">Contact Us</Link>
              <Link href="/faq" className="hover:text-white transition text-sm">FAQ</Link>
              <Link href="/terms" className="hover:text-white transition text-sm">Terms of Service</Link>
            </div>
          </div>
          <div className="col-span-2 items-end flex flex-col">
            <h1 className="text-5xl relative before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-white before:-bottom-4 before:origin-left hover:before:w-full before:transition-all before:duration-300 !mb-8">hello@neuma.io</h1>
            <div className="flex gap-4">
              <Link href="" className="bg-[#171717] w-12 h-12 flex items-center justify-center rounded-lg">
                <Dribbble />
              </Link>
              <Link href="" className="bg-[#171717] w-12 h-12 flex items-center justify-center rounded-lg">
                <Github />
              </Link>
              <Link href="" className="bg-[#171717] w-12 h-12 flex items-center justify-center rounded-lg">
                <Instagram />
              </Link>
              <Link href="" className="bg-[#171717] w-12 h-12 flex items-center justify-center rounded-lg">
                <Linkedin />
              </Link>
              <Link href="" className="bg-[#171717] w-12 h-12 flex items-center justify-center rounded-lg">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full overflow-y-hidden h-54">
          <Image 
            src="/neuma2.png"
            alt="logo"
            width={2048}
            height={2048}
            className="object-cover w-full"
          />
          
        </div>
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}