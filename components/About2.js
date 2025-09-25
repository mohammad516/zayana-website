"use client";

import { motion } from "framer-motion";
import { Users, Palette, Cpu, Sofa, Package, Layers } from "lucide-react";
import Image from "next/image";

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
    title: "Architecture",
    desc: `Acrylic sheet is the perfect choice for architectural applications.

Half the weight of glass, yet up to 10x stronger.

Ideal for skylights, windows, and doors.

UV stable, weather resistant, and an excellent noise barrier.`,
    img:
      "https://imgs.search.brave.com/_mxg_2qp3MVSms4BaZSVIBwvoreTrq3VQ6wKdyy9ZCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbGFj/cnlsaWMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA4/L2FjcnlsaWMtc2hl/ZXQuanBn",
    Icon: Users,
  },
  {
    title: "Art & Design",
    desc: `Acrylic brings limitless creativity to life.

Durable and versatile while maintaining its finish.

Thousands of options: thicknesses, patterns, colors, and finishes.

No compromise on design or quality.`,
    img:
      "https://imgs.search.brave.com/wZhR0NjA7pnpqkbFyHTNnJJflys0DiED3_VpvzS8j4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHBtYW51ZmFjdHVy/aW5nLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wOC9Q/b2x5Y2FyYm9uYXRl/LWNvbG9yZnVsLTYw/MHg0OTAuanBn",
    Icon: Palette,
  },
  {
    title: "Engineering",
    desc: `Acrylic offers outstanding technical performance.

Blocks UV rays and reduces sound.

Up to 50 times stronger than double-strength glass.

A reliable material for demanding engineering solutions.`,
    img:
      "https://imgs.search.brave.com/3-G0by6xKNAgQ2Xu-aAYr2nh8TEBrg19nSp31EiRNfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91dmFj/cnlsaWMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L1NxdWFyZS1QbGV4/aWdsYXNzLVJvZC5q/cGc",
    Icon: Cpu,
  },
  {
    title: "Furniture",
    desc: `Acrylic empowers modern furniture design.

Easy to cut, shape, and machine.

Wide variety of thicknesses, colors, and finishes.

Stylish, durable, and resistant to marring.`,
    img:
      "https://imgs.search.brave.com/xTd7kT5ojduKlyD-CoeU3LFuR11D59hDIfbNv6cl-AE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY2L2Qx/LzQ3LzY2ZDE0NzMx/NTQ5NTgxMWU5MDYz/NmYyNDY3NDY1ZTIw/LmpwZw",
    Icon: Sofa,
  },
  {
    title: "Forms Available",
    desc: `We provide acrylic in many forms:
Block · Rod · Sheet · Square · Semicircular · Tube`,
    img:
      "https://imgs.search.brave.com/aGfgFZdTUxCVHJcEbfUbWRlvqf0dDF9vPhE-LOzLn1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91dmFj/cnlsaWMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAx/L0NsZWFyLVBsZXhp/Z2xhc3MtU2hlZXQu/anBn",
    Icon: Package,
  },
  {
    title: "Types Include",
    desc: `Acrylic is available in endless varieties:
Fluorescent · Metallic · Sand · Sandwich · Transparent Solid · Wood Solid · Glitter · Mirror · Clear · Translucent Solid · Marble · Pearl · Stone · and many more!`,
    img:
      "https://imgs.search.brave.com/SeLKvdQ2MYs4e6RpbQyi3VWC9LXklWrIYE-XBukiybY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0MlNKSzJkNUwu/anBn",
    Icon: Layers,
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
          <p className="text-gold-400 uppercase tracking-[0.2em] text-xs md:text-sm">
            What We Do
          </p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">
            Our Acrylic Solutions
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Comprehensive acrylic solutions for all your design and manufacturing needs.
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
                         hover:ring-gold-400/50 hover:shadow-[0_26px_60px_-24px_rgba(245,158,11,0.45)] h-full min-h-[500px] flex flex-col"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gold-400/60" />

              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    priority={false}
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gold-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>

              <div className="p-7 md:p-8 lg:p-9 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/30">
                    <p.Icon className="h-4 w-4 text-gold-400" />
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
            className="inline-flex items-center rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-[#111] px-7 py-3.5
                       font-semibold hover:from-gold-300 hover:via-gold-200 hover:to-gold-400 transition-colors shadow-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
