"use client";

import { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LazyImage from "./ui/LazyImage";

export default function Home() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchAboutImages = async () => {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();

        const imageUrls = data
          .map((item) => item.image || item.img || item.url)
          .filter(Boolean);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching about images:", error);
        setImages([
          "https://picsum.photos/id/1011/800/600",
          "https://picsum.photos/id/1015/800/600",
          "https://picsum.photos/id/1016/800/600",
        ]);
      }
    };

    fetchAboutImages();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-center max-w-5xl mx-auto"
        >
          {/* subtle animated gold glow behind heading */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
            initial={{ opacity: 0.3, scale: 0.98 }}
            whileInView={{ opacity: 0.5, scale: 1.02 }}
            transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: false }}
          >
            <span className="block w-[26rem] h-[26rem] sm:w-[34rem] sm:h-[34rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.20),transparent_60%)] blur-3xl" />
          </motion.div>
          
          <h2 className="mt-6 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]">
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(6px)", scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              Welcome to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26, filter: "blur(8px)", scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.9, delay: 0.08, type: "spring", stiffness: 120, damping: 16 }}
              viewport={{ once: true }}
              className="relative inline-block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              Hasbini Art Est.
              {/* decorative underline */}
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-3 h-1.5 w-4/5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 rounded-full blur-[1.5px] shadow-[0_0_18px_rgba(212,175,55,0.35)]" />
              {/* subtle shimmer sweep */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-120%" }}
                whileInView={{ x: "120%" }}
                transition={{ duration: 1.6, ease: "easeOut", repeat: 2, repeatDelay: 2.8 }}
                viewport={{ once: false }}
              />
            </motion.span>
          </h2>
         
        </motion.div>

        {/* Gallery */}
        {images.length === 0 ? (
          // 🌀 Skeleton Loading أثناء انتظار الصور
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-200 rounded-2xl w-full h-64 sm:h-80 md:h-96"
                />
              ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-14 grid grid-cols-3 gap-0"
          >
            {images.map((src, i) => (
              <Fragment key={i}>
                <motion.article
                  variants={card}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1.5,
                    y: -6,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <LazyImage
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    sizes="33vw"
                    containerClassName="relative w-full aspect-square overflow-hidden"
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={i < 2}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </motion.article>
                {(i + 1) % 9 === 0 && i < images.length - 1 && (
                  <div className="col-span-3 h-8 md:h-14 lg:h-20 bg-white" />
                )}
              </Fragment>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full view"
              width={1200}
              height={1200}
              className="rounded-xl object-contain w-full max-h-[90vh]"
            />
            {/* زر الإغلاق */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full shadow z-[10000]"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
