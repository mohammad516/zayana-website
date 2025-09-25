"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useState } from "react";
import { sendEmail } from '../api/sendEmail/sendEmail'

export default function Home() { 
  const [inputs, setInputs] = useState({});
  const [value, setValue] = useState(''); 

  const handleChange = (e: any) => { 
    if (e.target.name == "phone") { 
      const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
      setValue(numericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  // Precompute encoded SVG noise to avoid JSX parser issues with quotes
  const noiseSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.55"/></svg>';
  const noiseBg: string = `url("data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg)}")`;

  return (
    <>
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Dark luxury background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#121212]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: noiseBg }} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_40%_at_50%_-10%,rgba(255,255,255,0.05),transparent),radial-gradient(50%_40%_at_50%_110%,rgba(0,0,0,0.6),transparent)]" />

        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm tracking-widest text-gold-400 uppercase mb-2">Get in touch</p>
            <motion.h1
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mx-auto max-w-3xl !text-3xl md:!text-4xl font-extrabold tracking-tight leading-[1.15] break-words bg-gradient-to-r from-white via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              We'd love to hear from you
            </motion.h1>
            <p className="mt-3 text-zinc-300/90">Fill out the form and our team will get back to you within 24 hours.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl"
          >
            {/* gold glow on hover */}
            <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[28px] opacity-0 transition-opacity duration-500 hover:opacity-50" style={{ background: "radial-gradient(160px_160px_at_20%_0%, rgba(245,158,11,0.35), transparent 70%), radial-gradient(160px_160px_at_80%_100%, rgba(251,191,36,0.25), transparent 70%)" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left info panel */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                <h2 className="text-2xl font-bold text-zinc-100">Contact details</h2>
                <p className="mt-2 text-zinc-400">Reach us directly using the information below.</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04]">
                    <p className="text-sm text-zinc-400">Phone</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-100">+961 78 808 100</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04]">
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-100">hello@hasbiniart.com</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04]">
                    <p className="text-sm text-zinc-400">Response time</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-100">Within 24 hours</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gold-400" />
                    <span>Wholesale & B2B support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gold-400" />
                    <span>Customized recommendations</span>
                  </div>
                </div>
              </div>

              {/* Right form panel */}
              <div className="p-8 md:p-12">
                <form action={async formData => { await sendEmail(formData); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-200">First Name</label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-zinc-100 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-gold-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-200">Last Name</label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-zinc-100 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-gold-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-200">Email</label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-zinc-100 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-gold-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-200">Phone Number</label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-zinc-100 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-gold-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={value}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-zinc-200">Message</label>
                      <textarea
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-zinc-100 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-gold-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        name="message"
                        placeholder="Message"
                        rows={8}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="group relative">
                      <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[conic-gradient(from_0deg,rgba(245,158,11,0.5),rgba(250,204,21,0.4),rgba(253,224,71,0.35),rgba(245,158,11,0.5))] opacity-50 transition duration-700 group-hover:opacity-80" />
                      <button type="submit" className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 px-10 py-3.5 text-[#111] font-semibold shadow-2xl transition-all duration-300 hover:from-gold-300 hover:via-gold-200 hover:to-gold-400">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
