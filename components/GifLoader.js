"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const SLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null; // Hide component after animation

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fff] z-[9999]">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
     <Image
  src="/logo2.jpeg"
  alt="S Loader"
  width={576}
  height={576}
  priority
  fetchPriority="high"
  sizes="(max-width: 640px) 24rem, (max-width: 768px) 28rem, (max-width: 1024px) 32rem, 36rem"
  className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] object-contain"
/>

      </motion.div>
    </div>
  );
};

export default SLoader;
