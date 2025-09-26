"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 to-black text-gray-300 py-12 px-6">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand / Logo */}
        <h2 className="text-lg font-semibold tracking-widest text-white">
          HASBINI-ART
        </h2>

        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/hasbiniartofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center 
              transition-all duration-300 group-hover:bg-pink-600/90 group-hover:scale-110">
              <FaInstagram className="text-2xl text-white" />
            </div>
          </a>
          <a
            href="https://wa.me/96176620088"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center 
              transition-all duration-300 group-hover:bg-green-500/90 group-hover:scale-110">
              <FaWhatsapp className="text-2xl text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center">
        <p className="text-sm tracking-wide text-gray-400">
          © {new Date().getFullYear()} HASBINI-ART — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
