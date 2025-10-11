"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

        // Take all items (no limit)
        const formatted = data.map((item, index) => ({
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
    <section className="relative mx-auto min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50 px-6 py-20 md:px-12">
      {/* Modern animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white/90 to-yellow-50/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-100/20 via-transparent to-transparent" />
      </div>
      
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-r from-amber-200/30 to-yellow-200/30 blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 h-24 w-24 rounded-full bg-gradient-to-r from-yellow-200/40 to-amber-200/40 blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 h-20 w-20 rounded-full bg-gradient-to-r from-amber-300/20 to-yellow-300/20 blur-lg animate-pulse delay-2000" />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 text-center"
      >
        <motion.h2 
          className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease-in-out infinite'
          }}
        >
          What We Do
        </motion.h2>
        <motion.div 
          className="mx-auto mt-6 sm:mt-8 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-gradient-to-r from-amber-300/30 to-yellow-300/30 blur-sm" />
        <div className="absolute -top-2 -right-6 h-6 w-6 rounded-full bg-gradient-to-r from-yellow-400/40 to-amber-400/40 blur-sm" />
      </motion.div>

      {/* Cards Container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.05 },
          },
        }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {rows.map((row, index) => (
          <motion.article
            key={row.number}
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              y: -12, 
              scale: 1.03,
              rotateX: 2,
              rotateY: 1
            }}
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl ring-1 ring-amber-200/30 transition-all duration-500 hover:shadow-2xl hover:ring-amber-300/60 hover:bg-white/90"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(251, 191, 36, 0.2)'
            }}
          >
            {/* Glassmorphism overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-50/60 via-transparent to-yellow-50/40 opacity-0 transition-all duration-700 group-hover:opacity-100" />
            
            {/* Animated border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 via-yellow-400/30 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ 
                   background: 'linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.3), transparent)',
                   backgroundSize: '200% 200%',
                   animation: 'shimmer 2s ease-in-out infinite'
                 }} />
            
            {/* Logo badge - consistent size and positioning */}
            <div className="mb-6 sm:mb-8 flex items-center justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl ring-3 sm:ring-4 ring-amber-200/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                  boxShadow: '0 12px 40px rgba(251, 191, 36, 0.25), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Image
                  src="/logo2t.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="relative z-10 object-contain sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Image */}
            {row.img && (
              <div className="mb-6 overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm">
                <motion.div 
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-amber-50/30"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 2,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  style={{
                    boxShadow: '0 10px 40px rgba(251, 191, 36, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
                  }}
                >
                  <Image
                    src={row.img}
                    alt={row.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    priority={index < 3}
                  />
                  
                  {/* Image overlay effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </motion.div>
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <motion.h3 
                className="mb-3 sm:mb-4 text-center text-lg sm:text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                {row.title}
              </motion.h3>
              <motion.p 
                className="text-center text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {row.text}
              </motion.p>
            </div>

            {/* Modern decorative elements */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-amber-200/30 to-yellow-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-yellow-200/40 to-amber-200/40 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            
            {/* Floating particles */}
            <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-amber-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-bounce" />
            <div className="absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-yellow-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse" />
          </motion.article>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div 
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500" />
          
          <motion.div
            whileHover={{ 
              scale: 1.08,
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 px-8 py-4 shadow-2xl ring-4 ring-amber-200/50 transition-all duration-500 hover:shadow-3xl hover:ring-amber-300/70"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #eab308 50%, #f59e0b 100%)',
              boxShadow: '0 20px 60px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <RoundedHoverButton1 />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Add custom CSS animations
const styles = `
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
