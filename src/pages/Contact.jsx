// src/pages/Contact.jsx → ULTRA RESPONSIVE + MOBILE NUMBER FIELD + PREMIUM CLEAN

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Decorative Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute top-0 left-0 
          w-56 h-56 xs:w-72 xs:h-72 sm:w-96 sm:h-96 
          bg-[#F9A826]/10 rounded-full blur-3xl
        " />
        <div className="
          absolute bottom-20 right-0 
          w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 
          bg-[#2C74B3]/10 rounded-full blur-3xl
        " />
        <div className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-full h-64 sm:h-80 
          bg-gradient-to-r from-[#F9A826]/5 via-transparent to-[#2C74B3]/5 
          blur-3xl
        " />
      </div>

      <div className="relative z-10 px-4 pt-24 pb-16 xs:px-5 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h1 className="text-4xl font-black tracking-tight  xs:text-5xl sm:text-6xl md:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] to-[#2C74B3]">
                CONTACT US TODAY
              </span>
            </h1>

            <p className="max-w-2xl px-2 mx-auto mt-4 text-sm font-light text-gray-600  xs:text-base sm:text-lg md:text-xl">
              Let’s turn your vision into reality. Our team is ready to help you build something extraordinary.
            </p>
          </motion.div>

          {/* 2-Column Responsive Grid */}
          <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto  lg:gap-12 lg:grid-cols-2">

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 shadow-2xl  bg-white/90 backdrop-blur-xl rounded-3xl xs:p-7 sm:p-8 lg:p-10"
            >
              <h2 className="flex items-center gap-3 mb-6 text-xl font-bold text-gray-800  sm:mb-8 xs:text-2xl sm:text-3xl">
                <Send className="text-[#F9A826] w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                Send Us a Message
              </h2>

              {/* After Submit Success Message */}
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500 sm:w-20 sm:h-20" />
                  <p className="text-xl font-bold text-gray-800 xs:text-2xl">Thank You!</p>
                  <p className="mt-2 text-sm text-gray-600 xs:text-base sm:text-lg">
                    We’ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="
                      w-full px-5 py-3 xs:py-4 
                      border border-gray-300 rounded-xl 
                      focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 
                      placeholder-gray-500 text-gray-800
                      text-sm xs:text-base
                    "
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    required
                    pattern="[0-9+\-\s]{10,15}"
                    className="
                      w-full px-5 py-3 xs:py-4
                      border border-gray-300 rounded-xl 
                      focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 
                      placeholder-gray-500 text-gray-800
                      text-sm xs:text-base
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="
                      w-full px-5 py-3 xs:py-4 
                      border border-gray-300 rounded-xl 
                      focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 
                      placeholder-gray-500 text-gray-800
                      text-sm xs:text-base
                    "
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project..."
                    required
                    className="
                      w-full px-5 py-3 xs:py-4 
                      border border-gray-300 rounded-xl resize-none
                      focus:border-[#F9A826] focus:ring-4 focus:ring-[#F9A826]/20 
                      placeholder-gray-500 text-gray-800
                      text-sm xs:text-base
                    "
                  />

                  <button
                    type="submit"
                    className="
                      w-full py-3 xs:py-4 sm:py-5 
                      bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] 
                      rounded-xl font-bold text-black
                      text-sm xs:text-base sm:text-lg
                      hover:scale-105 hover:shadow-2xl transition
                      flex items-center justify-center gap-2
                    "
                  >
                    Send Message
                    <Send className="w-5 h-5 xs:w-6 xs:h-6" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-10"
            >
              {/* Intro */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-800 xs:text-3xl sm:text-4xl sm:mb-6">
                  We’re Here to Help
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 xs:text-base sm:text-lg">
                  Whether you're planning a residential villa, commercial complex, 
                  or industrial facility — our team will bring your vision to life with precision.
                </p>
              </div>

              {/* Address */}
              <motion.div
                whileHover={{ x: 10 }}
                className="
                  flex items-start gap-3 xs:gap-4 sm:gap-5 
                  p-5 xs:p-6 
                  bg-white/70 backdrop-blur-sm rounded-2xl 
                  border border-gray-200 hover:border-[#F9A826]/50 
                  transition-all group
                "
              >
                <div className="
                  p-3 xs:p-4 bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] 
                  rounded-xl text-white group-hover:scale-110 transition
                ">
                  <MapPin className="w-6 h-6 xs:w-7 xs:h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 xs:text-xl">Visit Our Office</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 xs:text-base">
                    Killa No. 144, Bhora Kalan,<br />
                    Pataudi, Gurugram,<br />
                    Haryana 122413, India
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.a
                href="tel:+918685882050"
                whileHover={{ x: 10 }}
                className="
                  flex items-start gap-3 xs:gap-4 sm:gap-5
                  p-5 xs:p-6 
                  bg-white/70 backdrop-blur-sm rounded-2xl 
                  border border-gray-200 hover:border-[#F9A826]/50 
                  transition-all group
                  block
                "
              >
                <div className="
                  p-3 xs:p-4 bg-gradient-to-br from-[#F9A826] to-[#FF7A2D]
                  rounded-xl text-white group-hover:scale-110 transition
                ">
                  <Phone className="w-6 h-6 xs:w-7 xs:h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 xs:text-xl">Call Us</h3>
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#0A2647] mt-1">
                    +91 86858 82050
                  </p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@tcmconstructionspvtltd.com"
                whileHover={{ x: 10 }}
                className="
                  flex items-start gap-3 xs:gap-4 sm:gap-5 
                  p-5 xs:p-6 
                  bg-white/70 backdrop-blur-sm rounded-2xl 
                  border border-gray-200 hover:border-[#F9A826]/50 
                  transition-all group
                  block
                "
              >
                <div className="
                  p-3 xs:p-4 bg-gradient-to-br from-[#F9A826] to-[#FF7A2D]
                  rounded-xl text-white group-hover:scale-110 transition
                ">
                  <Mail className="w-6 h-6 xs:w-7 xs:h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 xs:text-xl">Email Us</h3>
                  <p className="text-sm xs:text-base sm:text-lg text-[#0A2647] mt-1 underline decoration-dotted break-all">
                    info@tcmconstructionspvtltd.com
                  </p>
                </div>
              </motion.a>

              {/* Office Hours */}
              <div className="
                mt-6 xs:mt-8 
                p-5 xs:p-6 sm:p-7 
                bg-gradient-to-r from-[#F9A826]/10 to-[#2C74B3]/10 
                rounded-3xl border border-[#F9A826]/20
              ">
                <p className="text-sm font-medium text-gray-800 xs:text-base sm:text-lg">
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
