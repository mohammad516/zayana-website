"use client";
import About1 from "@/components/About1";
import About2 from "@/components/About2";
import About3 from "@/components/About3";
import { motion } from "framer-motion";

export default function AboutUsBanner() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="mb-[8em]">
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-b-[40px]">
        <img
          src="https://res.cloudinary.com/dntdrlrse/image/upload/v1754932283/6893c3992efc37104b6347d9_6894d0917370c0ff0cbac10b_chs-about-us-video-720-poster-00001_fr0byh.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="relative z-10 h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-3xl">
            <motion.p variants={item} className="text-[#CBAB58] tracking-[0.2em] uppercase text-xs md:text-sm mb-2">Our Mission</motion.p>
            <motion.h1
              variants={item}
              className="mx-auto max-w-3xl !text-3xl md:!text-5xl font-extrabold text-white tracking-tight leading-[1.15] break-words"
              style={{ textShadow: 'none' }}
            >
              Redefining Hospitality With Design, Care and Precision
            </motion.h1>
            <motion.p variants={item} className="mt-3 text-white/90 text-sm md:text-base">
              We create experiences that feel personal, thoughtful and memorable—crafted by a team obsessed with detail.
            </motion.p>
            <motion.div variants={item} className="mt-6">
              <a href="/services" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[#1a1a1a] font-semibold hover:bg-white/90 transition-colors shadow">
                Our Services
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <About1 />
      <About2 />
      <About3 />
    </div>
  );
}
