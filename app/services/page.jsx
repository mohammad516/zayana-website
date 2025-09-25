"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();

        const mappedRows = data.map((item, index) => ({
          number: index + 1,
          title: item.title,
          text: item.description,
          list: item.list || [],
          img: item.img[0] || "",
          paragraph: item.paragraph || "",
        }));

        setRows(mappedRows);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          What We Do
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-[#fbc94b] to-black mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Cards */}
      <div className="space-y-20">
        {rows.map((row) => (
          <motion.div
            key={row.number}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 
                       bg-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10"
          >
            {/* Image */}
           <motion.div
  whileHover={{ rotateY: 8, rotateX: 5, scale: 1.05 }}
  transition={{ type: "spring", stiffness: 150, damping: 10 }}
  className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg flex justify-center"
>
  <img
    src={row.img}
    alt={row.title}
    className="object-contain w-full h-auto max-h-[500px] transition-transform duration-700"
  />
</motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Title with Number */}
              <div className="flex items-center justify-center md:justify-start mb-6">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-14 h-14 flex items-center justify-center rounded-full 
                             bg-gradient-to-r  from-gold-400 via-gold-300 to-gold-500 text-white font-bold mr-4 shadow-md"
                >
                  {row.number}
                </motion.span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {row.title}
                </h3>
              </div>

              {/* Main Text */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                {row.text}
              </motion.p>

              {/* List */}
              {row.list?.length > 0 && (
                <ul className="mt-6 space-y-3 text-gray-700">
                  {row.list.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="flex items-center gap-3 text-lg"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#CBAB58] flex-shrink-0 shadow-sm"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}

              {/* Extra Paragraph */}
              {row.paragraph && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-600 mt-6 text-lg italic"
                >
                  {row.paragraph}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
