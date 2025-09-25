"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RoundedHoverButton1 from "./Bookbtn1";

export default function WhatWeDo() {
  const [rows, setRows] = useState([]);

  // Replace with your API endpoint
  const API_URL = "/api/services";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        // Take only first 4 items
        const formatted = data.slice(0, 4).map((item, index) => ({
          number: index + 1,
          title: item.title,
          text: item.description,
          img: item.img?.[0] || "",
        }));

        setRows(formatted);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden px-6 py-20 md:px-12">
      {/* Background gradient + refined noise + vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#121212]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.55\"/></svg>')" }} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent),radial-gradient(60%_40%_at_50%_120%,rgba(0,0,0,0.6),transparent)]" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center md:mb-16 md:text-left"
      >
        <h2 className="bg-gradient-to-r from-white via-gold-300 to-gold-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl drop-shadow-[0_0_20px_rgba(250,204,21,0.15)]">
          What We Do
        </h2>
        <div className="mx-auto mt-4 h-[2px] w-28 rounded bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 md:mx-0" />
      </motion.div>

      {/* Cards Container with stagger animation */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:gap-8"
      >
        {rows.map((row) => (
          <motion.article
            key={row.number}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2, rotateX: 1.2, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-amber-200/10 bg-white/[0.035] p-5 shadow-2xl md:p-6"
          >
            {/* Glow on hover */}
            <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-50" style={{ background: "radial-gradient(140px_140px_at_var(--x,50%)_var(--y,50%), rgba(245,158,11,0.45), rgba(250,204,21,0.35), transparent_70%)" }} />
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gold-300/10" />

            <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-12 md:gap-8">
              {/* Image */}
              {row.img ? (
                <div className="md:col-span-6">
                  <div className="relative overflow-hidden rounded-xl ring-1 ring-gold-300/10">
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      src={row.img}
                      alt={row.title}
                      className="aspect-[16/9] w-full object-cover shadow-xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(60%_60%_at_30%_20%,rgba(250,204,21,0.12),transparent),linear-gradient(120deg,rgba(245,158,11,0.06),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              ) : (
                <div className="md:col-span-6" />
              )}

              {/* Text */}
              <div className="relative z-10 md:col-span-6">
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-400 text-sm font-bold text-white shadow-lg ring-1 ring-gold-300/30 md:h-10 md:w-10"
                  >
                    {row.number}
                  </motion.div>
                  <div className="mobcenter md:mobcenter-none">
                    <h3 className="text-left text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
                      {row.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 max-w-prose text-left text-zinc-300/90 md:mt-4">
                  {row.text}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="mt-12 flex justify-center md:mt-16">
        <div className="group relative">
          {/* Golden glow wrapper */}
          <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[conic-gradient(from_0deg,rgba(245,158,11,0.5),rgba(250,204,21,0.4),rgba(253,224,71,0.35),rgba(245,158,11,0.5))] opacity-50 transition duration-700 group-hover:opacity-80" />
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-2 ring-gold-400/30 group-hover:animate-pulse" />
          <RoundedHoverButton1 />
        </div>
      </div>
    </section>
  );
}
