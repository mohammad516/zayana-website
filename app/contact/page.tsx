"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-2xl rounded-2xl p-10 bg-white/5 backdrop-blur-lg border border-yellow-500/20 shadow-[0_0_50px_-12px_rgba(202,138,4,0.4)]"
      >
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-500">
          Let’s Talk
        </h2>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">We’ll get back to you shortly 🚀</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Field */}
            {[
              { id: "name", label: "Full Name *", type: "text" },
              { id: "email", label: "Email Address *", type: "email" },
              { id: "phone", label: "Phone Number", type: "tel" },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={(formData as any)[field.id]}
                  onChange={handleChange}
                  required={field.label.includes("*")}
                  className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-transparent focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 outline-none transition-all duration-300"
                  placeholder={field.label}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-yellow-500"
                >
                  {field.label}
                </label>
              </motion.div>
            ))}

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-transparent focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 outline-none transition-all duration-300 resize-none"
                placeholder="Message *"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-yellow-500"
              >
                Message *
              </label>
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <button
                type="submit"
                className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold shadow-lg shadow-yellow-600/30 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
