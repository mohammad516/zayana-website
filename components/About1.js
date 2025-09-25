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
  const values = [
    {
      title: "High-Grade Quality",
      desc: "We use only virgin cast acrylic to ensure the highest quality standards in all our products.",
    },
    {
      title: "Expert Craftsmanship",
      desc: "Our skilled artisans bring years of experience to create unique and innovative designs.",
    },
    {
      title: "Custom Solutions",
      desc: "We specialize in creating custom acrylic products tailored to your specific needs and requirements.",
    },
    {
      title: "Premium Materials",
      desc: "Only the finest materials are used in our manufacturing process to guarantee durability and beauty.",
    },
  ];

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
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/ac.png"
                  alt="Zayana hospitality services"
                  width={1200}
                  height={420}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA..." // ضع نسخة صغيرة base64
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
              We are a leading manufacturer of medium to high-grade acrylic
              products. Our handmade work stands out with virgin cast acrylic,
              unique colors, novel designs, and high quality.
            </p>

            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              Since our establishment, we have been committed to delivering
              exceptional acrylic products that combine functionality with
              aesthetic appeal. Our dedication to quality and innovation has
              made us a trusted partner for businesses across various industries.
            </p>

            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              From furniture and hospitality supplies to institutional and
              special products, we create solutions that meet the diverse needs
              of our clients while maintaining the highest standards of
              craftsmanship.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#0f1722]">
              Our Values
            </h3>

            <ul className="mt-6 space-y-5">
              {values.map((val, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-flex h-3 w-3 rounded-full bg-gold-400 flex-shrink-0"
                    aria-hidden
                  />
                  <div>
                    <strong className="text-[#0f1722]">{val.title}:</strong>{" "}
                    <span className="text-gray-600">{val.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/services"
                aria-label="Explore our services"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 px-6 py-3 text-[#111] font-semibold shadow-md hover:from-gold-300 hover:via-gold-200 hover:to-gold-400 transition"
              >
                Explore Services
                <span
                  aria-hidden
                  className="inline-block transform transition-transform group-hover:translate-x-1"
                >
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
