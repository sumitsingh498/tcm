// src/pages/services/Residential.jsx → 100% FULLY RESPONSIVE + SERVICE SWITCHER

import React from "react";
import { motion } from "framer-motion";
import { Home, Heart, Shield, Trees, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher"; // ← CORRECT IMPORT

export default function Residential() {
  const features = [
    { icon: Home, title: "Luxury Villas & Bungalows" },
    { icon: Heart, title: "Family-Centric Planning" },
    { icon: Shield, title: "100% Vastu Compliant" },
    { icon: Trees, title: "Green & Sustainable" },
    { icon: Sparkles, title: "Premium Amenities" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#2C74B3]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-[#144272]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <h1 className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="block text-transparent bg-clip-text 
                bg-gradient-to-r from-[#2C74B3] via-[#144272] to-[#0A2647]">
                RESIDENTIAL
              </span>
              <span className="block mt-3 text-4xl text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                PROJECTS
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl px-4 mx-auto text-base font-light leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-2xl"
          >
            Luxury villas, premium apartments & gated townships where comfort, elegance, and happiness come home.
          </motion.p>

          {/* Features Grid - Fully Responsive */}
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-12 sm:mt-20 lg:mt-24">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group p-8 sm:p-10 bg-white rounded-3xl shadow-xl border border-gray-200 
                  hover:border-[#2C74B3]/40 hover:shadow-2xl transition-all duration-500"
              >
                <div className="inline-flex p-5 sm:p-6 rounded-2xl 
                  bg-gradient-to-br from-[#2C74B3] to-[#144272] text-white mb-6 
                  group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-xl font-bold leading-tight text-gray-800 sm:text-2xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 lg:mt-24"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 
                px-10 py-6 sm:px-14 sm:py-7 
                bg-gradient-to-r from-[#2C74B3] to-[#144272] text-white 
                font-bold text-lg sm:text-xl lg:text-2xl rounded-full 
                shadow-2xl hover:scale-105 hover:shadow-blue-500/30 
                transition-all duration-300"
            >
              Build Your Dream Home
              <ArrowRight className="transition w-7 h-7 sm:w-8 sm:h-8 group-hover:translate-x-3" />
            </Link>
          </motion.div>

          {/* Service Switcher - Auto detects current page */}
          <ServiceSwitcher />

        </div>
      </div>
    </section>
  );
}