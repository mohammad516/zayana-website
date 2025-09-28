// components/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ---------- helpers ---------- */
const splitToChars = (text: string) =>
  text.split("").map((char, i) => ({ char, i }));

/* ---------- AnimatedHeadline ---------- */
const AnimatedHeadline: React.FC<{ lines: (string | JSX.Element)[] }> = ({ lines }) => {
  const lineDelay = 0.06;
  return (
    <div aria-hidden className="leading-[1.1]">
      {lines.map((line, li) => {
        const isString = typeof line === "string";
        const chars = isString ? splitToChars(line as string) : [];

        return (
          <h1
            key={li}
            className={`block overflow-hidden text-white tracking-tight leading-[1.15] ${
              li === 0
                ? "text-[clamp(2rem,5vw,3.5rem)] font-extrabold"
                : "text-[clamp(2.5rem,6.5vw,4.75rem)] font-black"
            }`}
          >
            {isString ? (
              <motion.span
                initial="hidden"
                animate="show"
                className="inline-block will-change-transform"
                aria-hidden
              >
                {chars.map(({ char, i }) => {
                  const delay = li * 0.18 + i * lineDelay;
                  return (
                    <motion.span
                      key={i}
                      className="inline-block origin-bottom align-baseline"
                      variants={{
                        hidden: { y: "110%", rotate: -6, opacity: 0, scale: 0.98 },
                        show: { y: "0%", rotate: 0, opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut", delay }}
                      aria-hidden
                    >
                      <span className={char === " " ? "inline-block w-[0.32em]" : "inline-block"}>
                        {char}
                      </span>
                    </motion.span>
                  );
                })}
              </motion.span>
            ) : (
              line
            )}
          </h1>
        );
      })}
    </div>
  );
};

/* ---------- Particle ---------- */
const Particle: React.FC<{ size: number; left: number; top: number; delay: number; duration: number }> = ({
  size,
  left,
  top,
  delay,
  duration,
}) => {
  return (
    <motion.div
      className="absolute rounded-full z-10 pointer-events-none"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 3}px rgba(200,159,61,0.35)`,
        background:
          "radial-gradient(circle, rgba(200,159,61,0.95) 0%, rgba(245,158,11,0.45) 40%, transparent 100%)",
      }}
      animate={{
        y: [0, -18 - size / 2, 0],
        opacity: [0.25, 1, 0.25],
        x: [0, Math.sin(left + delay) * 8, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

/* ---------- Background Carousel ---------- */
const BackgroundCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // كل 6 ثواني تتغير الصورة
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt={`Hero background ${i}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>
      ))}

      {/* ✅ Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-gold-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------- Main Hero ---------- */
const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const bgParallax = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      const nx = e.clientX / (window.innerWidth || 1) - 0.5;
      const ny = e.clientY / (window.innerHeight || 1) - 0.5;
      x.set(nx);
      y.set(ny);
    };
    const handleScroll = () => {
      bgParallax.set(window.scrollY || 0);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [x, y, bgParallax]);

  const tagline = "PRECISION • ARTISTRY • ELEGANCE";

  const lines: (string | JSX.Element)[] = [
    "Crafting",
    <span key="tomorrow" className="whitespace-nowrap">
      Tomorrow’s
    </span>,
    "Art Today",
  ];

  const subtitle =
    "From custom frames to elegant furniture and décor, we design and craft acrylic creations that bring beauty and individuality into every space.";

  const particles = Array.from({ length: 20 }).map((_, i) => {
    const left = (i * 13 + 7) % 100;
    const top = (i * 17 + 9) % 100;
    const size = 1 + (i % 3);
    const delay = (i % 6) * 0.2;
    const duration = 4 + (i % 5);
    return { left, top, size, delay, duration };
  });

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Hasbini Art"
      style={{ paddingTop: "var(--navbar-height, 64px)" }}
    >
      {/* ✅ Background Carousel */}
      <BackgroundCarousel images={["/12.jpeg", "/ab.png", "/hero.webp"]} />

      {/* Particles */}
      <div className="absolute inset-0 -z-5" aria-hidden>
        {particles.map((p, i) => (
          <Particle key={i} left={p.left} top={p.top} size={p.size * 2} delay={p.delay} duration={p.duration} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-6xl w-full px-6 sm:px-8 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-xs sm:text-sm md:text-sm tracking-[0.28em] text-white/80 uppercase mb-4"
        >
          {tagline}
        </motion.p>

        {/* Headline */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.12 }}>
          <AnimatedHeadline lines={lines} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/products"
              aria-label="Explore Collection"
              className="relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-[#222] text-lg bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 shadow-[0_10px_30px_rgba(200,159,61,0.18)] transition-all"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Explore Collection
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/about"
              aria-label="Our Story"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 rounded-full font-medium text-white border border-white/20 bg-white/5 hover:bg-white/8 transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
