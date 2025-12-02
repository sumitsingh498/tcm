// src/pages/Contact.jsx → FINAL LIGHT THEME PREMIUM VERSION

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 -right-20 w-80 h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-[#F9A826]/5 via-transparent to-[#2C74B3]/5 blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] to-[#2C74B3]">
                CONTACT US TODAY
              </span>
              <br />
              
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-xl font-light text-gray-600">
              Let’s turn your vision into reality. Our team is ready to help you build something extraordinary.
            </p>
          </motion.div>

          <div className="grid items-start max-w-6xl gap-12 mx-auto lg:grid-cols-2">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 border border-gray-200 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl lg:p-12"
            >
              <h2 className="flex items-center gap-3 mb-8 text-3xl font-bold text-gray-800">
                <Send className="w-8 h-8 text-[#F9A826]" />
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="w-20 h-20 mx-auto mb-4 text-green-500" />
                  <p className="text-2xl font-bold text-gray-800">Thank You!</p>
                  <p className="mt-2 text-gray-600">We’ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 transition-all duration-300 text-gray-800 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 transition-all duration-300 text-gray-800 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your project..."
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-lg py-5 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send className="w-6 h-6" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10 text-gray-700"
            >
              <div>
                <h2 className="mb-8 text-4xl font-bold text-gray-800">We’re Here to Help</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Whether you're planning a residential villa, commercial complex, or industrial facility — our team is ready to bring your vision to life with precision and excellence.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#F9A826]/50 transition-all group"
                >
                  <div className="p-4 bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] rounded-xl text-white group-hover:scale-110 transition">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Visit Our Office</h3>
                    <p className="mt-1 leading-relaxed text-gray-600">
                      Killa No. 144, Bhora Kalan,<br />
                      Pataudi, Gurugram,<br />
                      Haryana 122413, India
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="tel:+918685882050"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#F9A826]/50 transition-all group"
                >
                  <div className="p-4 bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] rounded-xl text-white group-hover:scale-110 transition">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
                    <p className="text-2xl font-bold text-[#0A2647] mt-1">+91 86858 82050</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@tcmconstructionspvtltd.com"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#F9A826]/50 transition-all group"
                >
                  <div className="p-4 bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] rounded-xl text-white group-hover:scale-110 transition">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
                    <p className="text-lg text-[#0A2647] mt-1 underline decoration-dotted">
                      info@tcmconstructionspvtltd.com
                    </p>
                  </div>
                </motion.a>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-[#F9A826]/10 to-[#2C74B3]/10 rounded-3xl border border-[#F9A826]/20">
                <p className="text-lg font-medium text-gray-800">
                  <strong className="text-[#F9A826]">Office Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}