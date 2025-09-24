"use client";

import { motion } from "framer-motion";

export default function About3() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

  const features = [
    { title: "Decades of Expertise", desc: "A seasoned team bringing deep operational knowledge to every asset." },
    { title: "Owner-Centric Approach", desc: "We align strategies to maximize value and long-term performance." },
    { title: "Guest-First Design", desc: "Spaces and services crafted to delight and earn loyalty." },
    { title: "Operational Excellence", desc: "Efficiency, quality standards and measurable outcomes across touchpoints." },
    { title: "Brand Partnerships", desc: "Trusted relationships with global hospitality brands and investors." },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Visual */}
          <motion.div variants={item} className="relative group rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
            <img
              src="https://res.cloudinary.com/dntdrlrse/image/upload/v1755004302/6893c3992efc37104b6349d3_688b8373322cc77b23963a29_web-home-image-test-comp_hgfrbu.jpg"
              alt="Zayana Story"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          {/* Features */}
          <motion.div variants={item} className="rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-black/5 p-6 md:p-8">
            <p className="text-[#CBAB58] uppercase tracking-[0.2em] text-xs md:text-sm">Our Story</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">More About Zayana</h2>
            <div className="mt-5 space-y-5">
              {features.map((f, i) => (
                <motion.div key={i} variants={item} className="group flex items-start gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#CBAB58] text-white text-sm font-bold shadow-sm">{i + 1}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-[#CBAB58] transition-colors">{f.title}</h3>
                    <p className="mt-1 text-[#4a4a4a]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-7">
              <a href="/services" className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3 font-semibold text-[#1a1a1a] hover:border-black/20 transition-colors">Our Services</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
