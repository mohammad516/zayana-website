"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ 
        height: "100vh",
        paddingTop: "var(--navbar-height, 64px)"
      }}
    >
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image with Enhanced Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://kernlasers.com/wp-content/uploads/2021/04/acrylic-gallery-02.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            scale,
            opacity
          }}
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent z-10" />

        {/* Dynamic Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-[#C89F3D]/20 rounded-full z-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 border border-white/10 rounded-full z-20"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-[#C89F3D]/10 to-transparent rounded-full blur-sm z-20"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced Floating Particles with Trails */}
        {[...Array(25)].map((_, i) => {
          const left = (i * 7 + 13) % 100;
          const top = (i * 11 + 17) % 100;
          const duration = 4 + (i % 4);
          const delay = (i % 5) * 0.3;
          const size = 1 + (i % 3);

          return (
            <motion.div
              key={i}
              className="absolute rounded-full z-20"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(200, 159, 61, 0.6) 0%, rgba(200, 159, 61, 0.2) 50%, transparent 100%)`,
                boxShadow: `0 0 ${size * 3}px rgba(200, 159, 61, 0.4)`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
                x: [0, (Math.sin(i) * 10), 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Mouse-Following Gradient Orbs */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-radial from-[#C89F3D]/20 via-[#C89F3D]/5 to-transparent rounded-full blur-2xl z-20"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-xl z-20"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Cinematic Light Rays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C89F3D]/5 to-transparent z-20"
          style={{
            transform: `rotate(${(mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1920)) * 30 - 15}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Futuristic Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto h-full justify-center pt-24 sm:pt-28 lg:pt-32" style={{ paddingTop: "calc(var(--navbar-height, 64px) + 4rem)" }}>
        {/* Premium Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-4 mt-4 sm:mt-6 lg:mt-8"
        >
          <motion.h2
            className="relative text-sm sm:text-base md:text-lg tracking-[0.4em] font-light text-white/80 uppercase"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.3)",
                "0 0 20px rgba(255, 255, 255, 0.5)",
                "0 0 10px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            HASBINI ART
        </motion.h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#C89F3D] to-transparent" />
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white max-w-6xl tracking-tight leading-[1.35] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.15] xl:leading-[1.15] space-y-2 sm:space-y-3 md:space-y-4"
        >
          <span className="block whitespace-nowrap">Art that</span>
          <motion.span
            className="relative block whitespace-nowrap text-[#C89F3D] mt-1 sm:mt-2 md:mt-3"
            animate={{
              textShadow: [
                "0 0 30px rgba(200, 159, 61, 0.6), 0 0 60px rgba(200, 159, 61, 0.4)",
                "0 0 50px rgba(200, 159, 61, 0.8), 0 0 100px rgba(200, 159, 61, 0.6)",
                "0 0 30px rgba(200, 159, 61, 0.6), 0 0 60px rgba(200, 159, 61, 0.4)",
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Inspires
          </motion.span>
          <span className="block whitespace-nowrap">and</span>
          <motion.span
            className="relative block whitespace-nowrap text-[#C89F3D] mt-1 sm:mt-2 md:mt-3"
            animate={{
              textShadow: [
                "0 0 30px rgba(200, 159, 61, 0.6), 0 0 60px rgba(200, 159, 61, 0.4)",
                "0 0 50px rgba(200, 159, 61, 0.8), 0 0 100px rgba(200, 159, 61, 0.6)",
                "0 0 30px rgba(200, 159, 61, 0.6), 0 0 60px rgba(200, 159, 61, 0.4)",
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            Transforms
          </motion.span>
        </motion.h1>

        {/* Futuristic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300/90 max-w-4xl leading-relaxed font-light"
        >
          Handcrafted acrylic creations with{" "}
          <span className="text-[#C89F3D] font-medium">passion</span>,{" "}
          <span className="text-[#C89F3D] font-medium">precision</span>, and{" "}
          <span className="text-[#C89F3D] font-medium">timeless beauty</span>.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center relative z-40"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C89F3D] via-[#b78930] to-[#C89F3D] rounded-full p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C89F3D]/30 to-[#b78930]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
          <Link
            href="/products"
            className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#C89F3D] to-[#b78930] hover:from-[#b78930] hover:to-[#C89F3D] text-[#45474B] font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl border-0 backdrop-blur-sm transition-all duration-500 hover:shadow-white hover:shadow-2xl text-lg sm:text-xl"
          >
            Explore Collection
          </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/30 rounded-full p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Link
            href="/about"
            className="relative inline-flex items-center justify-center border-2 border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full backdrop-blur-sm transition-all duration-500 hover:border-white/80 hover:shadow-white/30 hover:shadow-2xl text-lg sm:text-xl font-semibold"
          >
            Discover More
          </Link>
          </motion.div>
        </motion.div>

        {/* Futuristic Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-16 flex justify-center z-[9999] pointer-events-none"
        >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-white/60 hover:text-white/90 cursor-pointer transition-colors duration-500 group"
        >
          {/* Glowing Line */}
          <motion.div
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-12 bg-gradient-to-b from-[#C89F3D] via-white/80 to-transparent mb-2 group-hover:from-[#C89F3D] group-hover:via-[#C89F3D]/60 group-hover:to-transparent"
          />
          
          {/* Futuristic Chevron */}
          <motion.div
            animate={{
              y: [0, 4, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-4 h-4 border-r-2 border-b-2 border-white/70 transform rotate-45 group-hover:border-[#C89F3D] transition-colors duration-300"
            />
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-4 h-4 border-r-2 border-b-2 border-[#C89F3D]/50 transform rotate-45 blur-sm"
            />
          </motion.div>
          
          {/* Subtle Text */}
          <motion.span
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-xs font-light tracking-widest mt-3 group-hover:text-[#C89F3D] transition-colors duration-300"
          >
            SCROLL
          </motion.span>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;