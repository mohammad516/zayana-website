"use client";

import { motion } from "framer-motion";
import { Users, Crown, Lightbulb, Leaf, Star, PenTool } from "lucide-react";

export default function About2() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const variantsUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const variantsLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const principles = [
    {
      title: "People First",
      desc:
        "We empower talented teams and cultivate a culture where people thrive and service feels personal.",
      img:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      Icon: Users,
    },
    {
      title: "Inspired Leadership",
      desc:
        "Integrity, transparency, and accountability guide every partnership, decision and guest interaction.",
      img:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      Icon: Crown,
    },
    {
      title: "Relentless Innovation",
      desc:
        "We reimagine products, concepts and services to elevate experiences and stay ahead of expectations.",
      img:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      Icon: Lightbulb,
    },
    {
      title: "Sustainable Impact",
      desc:
        "Eco‑conscious operations that respect the planet while driving performance across our portfolio.",
      img:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      Icon: Leaf,
    },
    {
      title: "Excellence & Value",
      desc:
        "Operational precision and guest‑first thinking that create loyalty and long‑term returns.",
      img:
        "https://images.unsplash.com/photo-1482442120256-9c03866de390?q=80&w=1200&auto=format&fit=crop",
      Icon: Star,
    },
    {
      title: "Design With Purpose",
      desc:
        "Timeless aesthetics, crafted details and intuitive flow that make every space feel effortless.",
      img:
        "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop",
      Icon: PenTool,
    },
  ];

  const getVariants = (i) => {
    const mod = i % 3;
    if (mod === 0) return variantsLeft;
    if (mod === 1) return variantsUp;
    return variantsRight;
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <p className="text-[#CBAB58] uppercase tracking-[0.2em] text-xs md:text-sm">What We Believe</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">Our Principles</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            A refined approach to people, planet and performance—anchored in design and service excellence.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch"
        >
          {principles.map((p, i) => (
            <motion.article
              key={i}
              variants={getVariants(i)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/85 to-white/60 backdrop-blur-md
                         ring-1 ring-black/5 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.25)]
                         transition-all duration-300 hover:-translate-y-2
                         hover:ring-[#CBAB58]/50 hover:shadow-[0_26px_60px_-24px_rgba(203,171,88,0.45)] h-full min-h-[500px] flex flex-col"
            >
              {/* top accent line */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-[#CBAB58]/60" />

              {/* image with fixed aspect ratio and overlays */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                {/* bottom gradient (transparent -> black/30) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                {/* soft golden overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[#CBAB58]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>

              {/* content */}
              <div className="p-7 md:p-8 lg:p-9 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#CBAB58]/15 ring-1 ring-[#CBAB58]/30">
                    <p.Icon className="h-4 w-4 text-[#CBAB58]" />
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a]">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-600">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center rounded-full bg-[#CBAB58] text-white px-7 py-3.5
                       font-semibold hover:bg-[#b69449] transition-colors shadow-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
