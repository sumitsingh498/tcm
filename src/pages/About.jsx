// src/pages/About.jsx → FINAL LIGHT THEME (Clean & Professional)

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
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl font-black tracking-tight text-gray-800 md:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] via-[#2C74B3] to-[#144272]">
                ABOUT TCM CONSTRUCTIONS
              </span>
              <br />
              
            </h1>

            <div className="flex items-center justify-center h-20 mt-10">
              <p className="text-xl font-medium text-gray-600 md:text-2xl">
                {typedText}
                <span className="inline-block ml-2 w-1 h-10 bg-[#F9A826] animate-pulse" />
              </p>
            </div>
          </motion.div>

          {/* Founder & Vision */}
          <div className="grid items-center gap-16 mb-24 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F9A826] to-[#2C74B3] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />
                <div className="relative p-10 border border-gray-200 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl">
                  <h3 className="text-4xl font-bold text-[#F9A826] mb-3">Prop. Anuj</h3>
                  <p className="mb-6 text-xl text-gray-700">Founder & Visionary Leader</p>
                  <blockquote className="text-lg italic leading-relaxed text-gray-600">
                    "Every great structure begins with a dream. At TCM, we don't just build buildings — we build trust, legacy, and the future of India."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed text-gray-700"
            >
              <p>
                Founded in <strong className="text-[#F9A826]">Gurugram</strong> by <strong className="text-[#F9A826]">Prop. Anuj</strong>, TCM Constructions has rapidly evolved into one of India's most trusted names in construction.
              </p>
              <p>
                With over <strong className="text-[#0A2647]">500+ landmark projects</strong> spanning residential, commercial, and industrial sectors, we blend global standards with local excellence.
              </p>
              <p className="text-xl font-semibold text-gray-800">
                We don’t just construct — we shape skylines and create legacies that stand the test of time.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mb-24 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 text-center bg-white border border-gray-200 shadow-xl rounded-3xl"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#F9A826]" />
                <div className="text-4xl font-black text-gray-800">{stat.value}</div>
                <p className="mt-2 text-sm tracking-wider text-gray-600 uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-16 text-4xl font-bold text-center text-gray-800 md:text-5xl"
            >
              Our <span className="text-[#F9A826]">Core Values</span>
            </motion.h2>

            <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-3">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 hover:border-[#F9A826]/40 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] text-white mb-6 group-hover:scale-110 transition">
                    <value.icon className="w-10 h-10" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-800">{value.title}</h3>
                  <p className="leading-relaxed text-gray-600">{value.desc}</p>
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
            <h2 className="mb-8 text-4xl font-bold text-gray-800 md:text-5xl">
              Ready to Build Your <span className="text-[#F9A826]">Legacy</span>?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-xl rounded-full hover:scale-105 shadow-2xl transition-all duration-300"
            >
              Start Your Project Today
              <ArrowRight className="w-7 h-7" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}