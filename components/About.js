"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gold-400">
            About Us
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
            Welcome to Hasbini-Art Est.
          </h2>
          <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-[#444]">
            We believe every space deserves a touch of art. Our passion is to
            design pieces that inspire, beautify, and last.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {images.map((src, i) => (
            <motion.article
              key={i}
              variants={card}
              whileHover={{
                scale: 1.05,
                rotate: 1.5,
                y: -6,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur bg-white/70 shadow-xl border border-gold-200/40 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              {/* مربع بنسبة 1:1 باستخدام padding-bottom */}
              <div className="relative w-full overflow-hidden pb-[100%]">
                <Image
                  src={src}
                  alt={`Laser gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* تأثير الحواف عند hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-gold-400 group-hover:shadow-gold-300/40 transition-all duration-500" />
            </motion.article>
          ))}
        </motion.div>
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
            {/* زر إغلاق */}
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
