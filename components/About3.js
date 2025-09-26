"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About3() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

  const features = [
    { title: "Passion for Art", desc: "What started as a love for creativity grew into a studio dedicated to unique acrylic art and design." },
    { title: "Crafted with Care", desc: "Every piece is handmade with attention to detail, ensuring quality and originality." },
    { title: "Client-Centered Approach", desc: "We listen to your ideas and transform them into tangible, personalized creations." },
    { title: "Blending Art & Function", desc: "Our work combines beauty with practicality — frames, décor, and furniture that last." },
    { title: "Trusted by Many", desc: "From individuals to businesses, our creations decorate homes, offices, and special spaces across Lebanon." },
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
            <div className="relative w-full h-full min-h-[280px]">
              <Image
                src="/12.png"
                alt="Zayana Story"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority={false}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          {/* Features */}
          <motion.div variants={item} className="rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-black/5 p-6 md:p-8">
            <p className="text-gold-400 uppercase tracking-[0.2em] text-xs md:text-sm">Our Story</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">MORE ABOUT HASBINI ART</h2>
            <div className="mt-5 space-y-5">
              {features.map((f, i) => (
                <motion.div key={i} variants={item} className="group flex items-start gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-white text-sm font-bold shadow-sm">{i + 1}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-gold-400 transition-colors">{f.title}</h3>
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
