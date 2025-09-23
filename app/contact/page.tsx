"use client"

import React from 'react'
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

  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#f3f2ec] via-[#f6f5f0] to-[#efece3] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm tracking-widest text-[#ab8c52] uppercase mb-2">Get in touch</p>
            <h1
              className="mx-auto max-w-3xl !text-3xl md:!text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-[1.15] break-words"
              style={{ textShadow: 'none' }}
            >
              We'd love to hear from you
            </h1>
            <p className="mt-3 text-[#4a4a4a]">Fill out the form and our team will get back to you within 24 hours.</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md ring-1 ring-black/5 shadow-xl">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_0%_0%,#fff,transparent_40%),radial-gradient(1200px_circle_at_100%_100%,#f5efe0,transparent_40%)]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left info panel */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/5">
                <h2 className="text-2xl font-bold text-[#1a1a1a]">Contact details</h2>
                <p className="mt-2 text-[#6b6b6b]">Reach us directly using the information below.</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-black/10 p-4 bg-white/70">
                    <p className="text-sm text-[#6b6b6b]">Phone</p>
                    <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">+961 78 808 100</p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4 bg-white/70">
                    <p className="text-sm text-[#6b6b6b]">Email</p>
                    <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">hello@zayana.com</p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4 bg-white/70">
                    <p className="text-sm text-[#6b6b6b]">Response time</p>
                    <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">Within 24 hours</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm text-[#6b6b6b]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#CBAB58]" />
                    <span>Wholesale & B2B support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#CBAB58]" />
                    <span>Customized recommendations</span>
                  </div>
                </div>
              </div>

              {/* Right form panel */}
              <div className="p-8 md:p-12">
                <form action={async formData => { await sendEmail(formData); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a]">First Name</label>
                      <input
                        className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#CBAB58]"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a]">Last Name</label>
                      <input
                        className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#CBAB58]"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a]">Email</label>
                      <input
                        className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#CBAB58]"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a]">Phone Number</label>
                      <input
                        className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#CBAB58]"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={value} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#1a1a1a]">Message</label>
                      <textarea
                        className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#CBAB58]"
                        name="message"
                        placeholder="Message"
                        rows={8}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-8 py-3 text-white font-semibold hover:bg-[#2a2a2a] transition-colors">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
