"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
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

  const images = [
    // High‑quality laser cutting / engraving / CNC imagery
    "https://imgs.search.brave.com/DpS5Ffy_4VWED1_VPWiC4Pb0w5JL9tombn8IPJsFXD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3R5bGVjbmMuY29t/L3VwbG9hZHMvYWxs/aW1nLzI0MDczMC8x/LTI0MEkwMTM0NjMx/MC1MXzQ4MF8zNjAu/anBn",
    "https://imgs.search.brave.com/k_YTXqP0YtgVp0-VSYtaPnxDwXFV0qYAezdWNUgnPpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/ODk3NDEyNi9waG90/by9sYXNlci10b3Jj/aC1jdXRzLXdvb2Qt/cGxhdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXlzdHlj/TXl4OFRHVFFYbGd5/UVVzYzh2cjNzRnVD/THp3VXA5R3BjU09E/R0U9",
    "https://imgs.search.brave.com/9PylgjvZXGz2hDIL5OIgVz4-xBiKodQzz3cyuHNxRSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJvdGVjbGFzZXIu/Y29tL3N0YXRpY19w/cm9jZXNzZWQvYjBi/MzZjZjBiMjI3Zjlh/NDMyMzQ0OThhZjU0/NDZiNDcvY2xvc2Ut/dXAtb2YtdHJvdGVj/LXNwZWVkeS1zZXJp/ZXMtY28tbGFzZXIt/Y3V0dGVyLWhlYWQt/b3Zlci1lbmdyYXZp/bmctYmVkLmpwZz97/JTIyaW1hZ2UlMjI6/JTIyaHR0cHM6Ly9i/YWNrZW5kLnRyb3Rl/Y2xhc2VyLmNvbS9z/dGF0aWMvaW1hZ2Vz/L0xhc2VyX01hY2hp/bmVzL1NwZWVkeV9T/ZXJpZXMvc3BlZWR5/LWFpci1jb21wcmVz/cy5qcGclMjIsJTIy/ZWRpdHMlMjI6eyUy/MnJlc2l6ZSUyMjp7/JTIyd2lkdGglMjI6/NjQwLCUyMmZpdCUy/MjolMjJjb3ZlciUy/Mn19LCUyMm91dHB1/dEZvcm1hdCUyMjp7/JTIyZm9ybWF0JTIy/OiUyMndlYnAlMjJ9/fQ",
    "https://imgs.search.brave.com/vB8nS1C8QtPhjSGPahR2zLZXR93jRYxLu20Xqa47qnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcHRs/YXNlcnMuY29tL2lt/Zy9jbXMvQ01TX0Fy/dGljbGVzL1dvb2Qt/UHJvY2Vzc2luZy93/b29kLWN1dHRpbmcv/Q2hvb3NpbmctdGhl/LWJlc3QtbGFzZXIt/d29vZC1jdXR0ZXIt/YS1jb21wbGV0ZS1n/dWlkZS9MYXNlci13/b29kLWN1dHRlci1j/dXR0aW5nLWEtYmVh/dXRpZnVsLW5hdHVy/YWwtcGF0dGVybi10/aHJvdWdoLWEtcGx5/d29vZC1zaGVldC53/ZWJw",
    "https://imgs.search.brave.com/a5tUueDvmx-_bt5ZhfTIJz42zVkaYf3yam8HjbJNDZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzAyLzE2Lzk1/LzM2MF9GXzEzMDIx/Njk1NDFfb3ZTbDE4/VWRTZmxpbWYxbjYw/UjhKWG85U1hQZjZq/WTUuanBn",
    "https://imgs.search.brave.com/ewbCErFAlYzInj84BdbxcmFa3q7dB4WYY3oNsa_FnMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWVvbmxhc2VyLmNh/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA1L1doYXQtaXMt/dGhlLUJlc3QtV29v/ZC1mb3ItTGFzZXIt/RW5ncmF2aW5nLTcw/MHg0NDEuanBn",
    "https://imgs.search.brave.com/0MX9U3RNgGHCO16w6pmCBczj2JhlMTy7nmu9syS-6wo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MTkzMDEyMy9waG90/by9sYXNlci1jdXRz/LXN0YXItZnJvbS1w/bHl3b29kLWxhc2Vy/LXBseXdvb2QtcHJv/ZHVjdGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NDVW/bDdHd1VPTzEzM3Bh/Qzd6cUhvUUdsaWtq/UEpfYWZfaFNSQ0Ex/Tl80RT0",
    "https://imgs.search.brave.com/lMew3D2IbCCcywIY3k0yAAaxTceDVmt4eQsN1PSdaQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzM1Lzg2Lzg1/LzM2MF9GXzYzNTg2/ODU0MF9taURYTVZO/VndqeURsME1UZVRj/MjN3S0p2cEVRWnRY/VS5qcGc",
    "https://imgs.search.brave.com/XaqDDG0Hdx0zJB-kflzIJvR5VHVT66BFos_-9zXM3Dg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NjYyMzc4OS9waG90/by9sYXNlci1lbmdy/YXZpbmctYW5kLWN1/dHRpbmctbWFjaGlu/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WnJfV3JmVmc5/Mk8xSGNiTElnOVBK/UUV0VktCdG1lTEk4/RGFGeXNaMzA0OD0",
  ];

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
            We craft premium laser-cut and engraved products using state-of-the-art CNC
            and CO₂ laser machines. From acrylic to metal, our focus is precision,
            consistency and refined finishing — elevated with golden accents.
          </p>
        </motion.div>

        {/* Gallery with animations */}
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
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur bg-white/70 shadow-xl border border-gold-200/40"
            >
              {/* media */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Laser gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-gold-400 group-hover:shadow-gold-300/40 transition-all duration-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


