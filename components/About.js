"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.96, y: 14 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gold-400">About Us</p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111]">
            Welcome to Hasbini‑Art Est.
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#333]">
            We craft premium laser‑cut and engraved products using state‑of‑the‑art CNC and
            CO₂ laser machines. From acrylic to metal, our focus is precision, consistency and
            refined finishing—elevated with golden accents.
          </p>
        </div>

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {images.map((src, i) => (
            <motion.article
              key={i}
              variants={card}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all"
            >
              {/* media */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={`${src.replace("/upload/", "/upload/f_auto,q_auto/")}`}
                  alt={`Laser gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              {/* hover border glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-gold-400 group-hover:shadow-lg transition-all duration-300" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 lg:mt-16 flex justify-center">
          <a
            href="/products"
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 px-7 sm:px-9 py-3.5 sm:py-4 text-[#111] font-semibold shadow-2xl hover:from-gold-300 hover:via-gold-200 hover:to-gold-400 transition-colors"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}
