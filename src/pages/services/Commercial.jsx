// src/pages/services/Commercial.jsx → ULTRA RESPONSIVE + SAME FUNCTIONALITY

import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher"; // ← CORRECT IMPORT

export default function Commercial() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-4 w-56 h-56 xs:w-72 xs:h-72 md:w-96 md:h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-4 w-48 h-48 xs:w-64 xs:h-64 md:w-80 md:h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pb-20 pt-28 xs:px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14 xs:mb-16 sm:mb-20"
          >
            <h1 className="text-4xl font-black tracking-tight xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] to-[#FF7A2D]">
                COMMERCIAL
              </span>
              <br />
              <span className="text-3xl text-gray-800 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                CONSTRUCTION
              </span>
            </h1>

            <p className="max-w-4xl px-2 mx-auto mt-6 text-sm font-light leading-relaxed text-gray-600 sm:mt-8 xs:text-base sm:text-lg md:text-xl">
              World-class office towers, retail destinations, and corporate campuses
              built for success, sustainability, and timeless appeal.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 px-1 mb-16 xs:gap-8 sm:gap-10 md:grid-cols-4 sm:mb-20">
            {[ 
              {icon: Building2, val: "150+", label: "Commercial Projects"},
              {icon: Award,     val: "42",   label: "Awards Won"},
              {icon: Clock,     val: "98%",  label: "On-Time Delivery"},
              {icon: Users,     val: "50M+", label: "Sq Ft Built"},
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 text-center bg-white border border-gray-200 shadow-xl xs:p-6 sm:p-8 rounded-3xl"
              >
                <s.icon className="mx-auto mb-3 xs:mb-4 text-[#F9A826] w-10 h-10 xs:w-12 xs:h-12" />
                <div className="text-2xl font-black text-gray-800 xs:text-3xl sm:text-4xl">
                  {s.val}
                </div>
                <div className="mt-1 text-sm text-gray-600 xs:mt-2 xs:text-base">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid gap-10 mb-16 sm:gap-12 lg:grid-cols-2 sm:mb-20">
            {/* Left Text */}
            <div className="px-2 space-y-6 xs:space-y-8 sm:px-0">
              <h2 className="text-2xl font-bold text-gray-800 xs:text-3xl sm:text-4xl ">
                Why Choose TCM for Commercial?
              </h2>

              <ul className="space-y-5 sm:space-y-6">
                {[
                  "LEED & IGBC Certified Designs",
                  "Smart Building Integration",
                  "Seismic-Resistant Structures",
                  "Fast-Track Construction Methodology",
                  "Zero Defect Handover",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="
                      w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 
                      rounded-full 
                      bg-gradient-to-br from-[#F9A826] to-[#FF7A2D]
                      flex-shrink-0
                    " />
                    <span className="text-base text-gray-700 xs:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placeholder Image Box (responsive) */}
            <div className="h-64 bg-gray-200 border-2 border-dashed rounded-3xl xs:h-72 sm:h-80 md:h-96" />
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:mb-8 xs:text-3xl sm:text-4xl md:text-5xl">
              Ready to Build Your{" "}
              <span className="text-[#F9A826]">Corporate Landmark</span>?
            </h2>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3 sm:gap-4
                px-8 py-4 xs:px-10 xs:py-5 sm:px-12 sm:py-6
                bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] 
                text-black font-bold rounded-full shadow-2xl
                text-base xs:text-lg sm:text-xl
                transition-all hover:scale-105
              "
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7" />
            </Link>
          </motion.div>
            {/* Service Switcher - Auto detects current page */}
                    <ServiceSwitcher />

        </div>
      </div>
    </section>
  );
}
