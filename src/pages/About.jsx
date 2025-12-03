// src/pages/About.jsx → 100% FULLY RESPONSIVE + MOBILE OPTIMIZED

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Trophy, Target, Heart, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafting India's Future, One Landmark at a Time";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "300+", label: "Expert Team Members" },
    { icon: Trophy, value: "20+", label: "Awards Won" },
    { icon: Target, value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    { icon: Heart, title: "Integrity", desc: "Honesty and transparency in every deal" },
    { icon: Wrench, title: "Innovation", desc: "Using cutting-edge technology & methods" },
    { icon: Target, title: "Excellence", desc: "No compromise on quality — ever" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 sm:w-80 sm:h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 text-center sm:mb-16 lg:mb-20"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] via-[#2C74B3] to-[#144272]">
                ABOUT US
              </span>
            </h1>

            <div className="flex justify-center h-16 mt-6 sm:h-20 sm:mt-10">
              <p className="max-w-4xl px-4 text-lg font-medium text-center text-gray-600 sm:text-xl md:text-2xl">
                {typedText}
                <span className="inline-block ml-2 w-1 h-8 sm:h-10 bg-[#F9A826] animate-pulse" />
              </p>
            </div>
          </motion.div>

          {/* Founder & Vision - Mobile Stacked */}
          <div className="grid gap-10 mb-16 lg:gap-16 lg:mb-24 md:grid-cols-2">
            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F9A826] to-[#2C74B3] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />
                <div className="relative p-6 border border-gray-200 shadow-2xl sm:p-8 lg:p-10 bg-white/90 backdrop-blur-xl rounded-3xl">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9A826] mb-2">Prop. Anuj</h3>
                  <p className="mb-4 text-lg text-gray-700 sm:mb-6 sm:text-xl">Founder & Visionary Leader</p>
                  <blockquote className="text-base italic leading-relaxed text-gray-600 sm:text-lg">
                    "Every great structure begins with a dream. At TCM, we don't just build buildings — we build trust, legacy, and the future of India."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Vision Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 space-y-5 text-base leading-relaxed text-gray-700 md:order-2 sm:text-lg"
            >
              <p>
                Founded in <strong className="text-[#F9A826]">Gurugram</strong> by <strong className="text-[#F9A826]">Prop. Anuj</strong>, TCM Construction has rapidly evolved into one of India's most trusted names in construction.
              </p>
              <p>
                With over <strong className="text-[#0A2647]">500+ landmark projects</strong> spanning residential, commercial, and industrial sectors, we blend global standards with local excellence.
              </p>
              <p className="text-lg font-semibold text-gray-800 sm:text-xl">
                We don’t just construct — we shape skylines and create legacies that stand the test of time.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-16 sm:gap-8 lg:mb-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-6 text-center bg-white border border-gray-200 shadow-xl sm:p-8 rounded-3xl"
              >
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#F9A826]" />
                <div className="text-3xl font-black text-gray-800 sm:text-4xl">{stat.value}</div>
                <p className="mt-2 text-xs tracking-wider text-gray-600 uppercase sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <div className="mb-16 lg:mb-24">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-10 text-3xl font-bold text-center text-gray-800 sm:mb-12 lg:mb-16 sm:text-4xl md:text-5xl"
            >
              Our <span className="text-[#F9A826]">Core Values</span>
            </motion.h2>

            <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-6 sm:p-8 lg:p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 hover:border-[#F9A826]/40 hover:shadow-2xl transition-all duration-500 text-center md:text-left"
                >
                  <div className="inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] text-white mb-5 sm:mb-6 group-hover:scale-110 transition">
                    <value.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800 sm:text-2xl">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="px-4 mb-6 text-3xl font-bold leading-tight text-gray-800 sm:mb-8 sm:text-4xl md:text-5xl">
              Ready to Build Your <span className="text-[#F9A826]">Legacy</span>?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-lg sm:text-xl rounded-full hover:scale-105 shadow-2xl transition-all duration-300"
            >
              Start Your Project Today
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}