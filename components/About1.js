"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About1() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={item}
            className="order-1 md:order-1"
            aria-hidden="false"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
              {/* motion wrapper keeps hover animation */}
              <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                <Image
                  src="https://res.cloudinary.com/dntdrlrse/image/upload/f_auto,q_auto/v1754936920/6893c3992efc37104b634a10_services-test_kkli5f.webp"
                  alt="Zayana hospitality"
                  width={1200}
                  height={420}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="w-full h-80 md:h-[420px] object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={item} className="flex flex-col justify-center">
            <p className="text-gold-400 uppercase tracking-wider text-xs md:text-sm">
              About Us
            </p>

            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-[#0f1722]">
              Welcome to Hasbini-Art Est.
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              Zayana Hospitality is one of the industry's leading third-party hotel
              management companies, operating hotels on behalf of owners to maximize
              returns while elevating guest experiences across every touchpoint.
            </p>

            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              We deliver on this promise through innovation, operational excellence and
              a guest-first mindset across our portfolio of upscale hotels, residences,
              F&B outlets and lifestyle venues.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Hotel Management",
                "Asset Management",
                "Food & Beverage",
                "Hotel Owner Services",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* small gold dot / icon */}
                  <span className="mt-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-gold-400 flex-shrink-0" aria-hidden>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#f59e0b" />
                    </svg>
                  </span>
                  <span className="text-[#0f1722] font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 px-5 py-3 text-[#111] font-semibold shadow-md hover:from-gold-300 hover:via-gold-200 hover:to-gold-400 transition"
              >
                Explore Services
                <span aria-hidden className="inline-block transform transition-transform group-hover:translate-x-1">
                  ➜
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
