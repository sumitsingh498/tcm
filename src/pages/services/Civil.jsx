// src/pages/services/Civil.jsx → 100% RESPONSIVE + SAME FUNCTIONALITY

import React from "react";
import { motion } from "framer-motion";
import { 
  HardHat, 
  Waypoints, 
  Landmark, 
  Mountain, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher";

export default function Civil() {
  const stats = [
    { icon: Waypoints, val: "500+", label: "Km Roads Built" },
    { icon: Landmark,  val: "18",   label: "Bridges & Flyovers" },
    { icon: Mountain,  val: "12",   label: "Hill Projects" },
    { icon: HardHat,   val: "100%", label: "Safety Record" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#072A4E]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#0A2647]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10 sm:mb-16 lg:mb-20"
          >
            <h1 className="text-4xl font-black leading-tight  xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#072A4E] via-[#0A2647] to-[#1e4b80]">
                CIVIL ENGINEERING
              </span>
              <span className="block mt-3 text-3xl text-gray-800  xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                & INFRASTRUCTURE
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl px-2 mx-auto text-sm font-light leading-relaxed text-gray-600  xs:text-base sm:text-lg md:text-xl lg:text-2xl sm:px-4"
          >
            Roads, bridges, flyovers, canals & large-scale public infrastructure — 
            built with precision, safety, and engineered to last generations.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid max-w-5xl grid-cols-2 gap-4 px-2 mx-auto  mt-14 sm:mt-20 lg:mt-24 md:grid-cols-4 xs:gap-6 sm:gap-8">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="
                  p-4 xs:p-6 sm:p-8 
                  bg-white rounded-3xl shadow-xl border border-gray-200 
                  hover:shadow-2xl hover:border-[#072A4E]/20 
                  transition-all duration-400
                "
              >
                <item.icon className="mx-auto mb-4 text-[#072A4E] w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14" />
                <div className="text-2xl font-black text-gray-800 xs:text-3xl sm:text-4xl">
                  {item.val}
                </div>
                <p className="mt-2 text-gray-600 uppercase tracking-wider text-[10px] xs:text-xs sm:text-sm font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-14 sm:mt-20 lg:mt-24"
          >
            <Link
              to="/contact"
              className="
                group inline-flex items-center gap-4 
                px-8 py-5 xs:px-10 xs:py-6 sm:px-14 sm:py-7 
                bg-gradient-to-r from-[#072A4E] to-[#0A2647] text-white 
                font-bold rounded-full 
                shadow-2xl hover:scale-105 hover:shadow-[#072A4E]/40 
                transition-all duration-300
                text-base xs:text-lg sm:text-xl lg:text-2xl
              "
            >
              Discuss Your Infra Project
              <ArrowRight className="w-6 h-6 transition xs:w-7 xs:h-7 sm:w-8 sm:h-8 group-hover:translate-x-3" />
            </Link>
          </motion.div>

          {/* Service Switcher */}
          <ServiceSwitcher />
        </div>
      </div>
    </section>
  );
}
