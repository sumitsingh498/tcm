// src/pages/services/Renovation.jsx → ULTRA RESPONSIVE + SAME FUNCTIONALITY

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Paintbrush, Home, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher"; // ← CORRECT IMPORT

export default function Renovation() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute top-0 right-0 
          w-56 h-56 xs:w-72 xs:h-72 sm:w-96 sm:h-96 
          bg-[#F9A826]/10 rounded-full blur-3xl
        " />
      </div>

      <div className="relative z-10 px-4 pb-20 text-center pt-28 xs:px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Hero Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-4xl font-black leading-tight xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] to-[#FFB84D]">
                RENOVATION &
              </span>
              <br />
              <span className="text-3xl text-gray-800 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                REMODELING
              </span>
            </h1>
          </motion.h1>

          {/* Subtitle */}
          <p className="max-w-4xl px-2 mx-auto mt-4 text-sm leading-relaxed text-gray-600 sm:mt-6 xs:text-base sm:text-lg md:text-xl lg:text-2xl">
            Breathe new life into your space — heritage restoration, modern makeovers, 
            office fit-outs & home transformations.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 px-1 xs:gap-8 sm:gap-10 xs:grid-cols-2 md:grid-cols-3 mt-14 sm:mt-20">
            {[
              { icon: Paintbrush, title: "Interior Fit-Outs" },
              { icon: Hammer,     title: "Structural Upgrades" },
              { icon: Home,       title: "Heritage Restoration" },
              { icon: Sparkles,   title: "Smart Home Integration" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-all duration-300 bg-white border border-gray-200 shadow-xl xs:p-8 sm:p-10 rounded-3xl hover:shadow-2xl"
              >
                <item.icon className="
                  mx-auto mb-4 xs:mb-5 sm:mb-6 
                  text-[#F9A826]
                  w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16
                " />
                <h3 className="text-lg font-bold text-gray-800 xs:text-xl sm:text-2xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="mt-16 sm:mt-20 lg:mt-24"
          >
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3 sm:gap-4
                px-8 py-4 xs:px-10 xs:py-5 sm:px-14 sm:py-7
                bg-gradient-to-r from-[#F9A826] to-[#FFB84D] 
                text-black font-bold rounded-full shadow-2xl
                text-base xs:text-lg sm:text-xl md:text-2xl
                hover:scale-105 transition-all
              "
            >
              Transform Your Space
              <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
            </Link>
          </motion.div>
            {/* Service Switcher - Auto detects current page */}
          <ServiceSwitcher />

        </div>
      </div>
    </section>
  );
}
