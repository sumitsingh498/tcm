// src/pages/services/Industrial.jsx → ULTRA RESPONSIVE + SAME FUNCTIONALITY

import React from "react";
import { motion } from "framer-motion";
import { Factory, Truck, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher"; // ← CORRECT IMPORT

export default function Industrial() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute top-14 left-4 xs:left-10 sm:left-20 
          w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 
          bg-[#0A2647]/10 rounded-full blur-3xl
        " />
      </div>

      <div className="relative z-10 px-4 pb-20 text-center pt-28 xs:px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Hero Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-black leading-tight xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] to-[#1e4b80]">
                INDUSTRIAL
              </span>
              <br />
              <span className="text-3xl text-gray-800 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                INFRASTRUCTURE
              </span>
            </h1>
          </motion.h1>

          {/* Subtitle */}
          <p className="max-w-4xl px-2 mx-auto mt-4 text-sm font-light leading-relaxed text-gray-600 sm:mt-6 xs:text-base sm:text-lg md:text-xl lg:text-2xl">
            Warehouses, manufacturing plants, cold storages & logistics parks 
            engineered for maximum efficiency, safety and scalability.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 px-1 xs:gap-8 sm:gap-10 md:grid-cols-4 mt-14 sm:mt-20">
            {[
              { icon: Factory, val: "80+",  label: "Plants Built" },
              { icon: Truck,   val: "2M+", label: "Sq Ft Warehousing" },
              { icon: Shield,  val: "ISO 9001", label: "Certified" },
              { icon: Zap,     val: "24/7", label: "Power Backup Ready" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 transition-all duration-300 bg-white border border-gray-200 shadow-xl xs:p-6 sm:p-8 rounded-3xl hover:shadow-2xl"
              >
                <item.icon className="
                  mx-auto mb-3 xs:mb-4 
                  text-[#0A2647]
                  w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14
                " />
                <div className="text-2xl font-black text-gray-800 xs:text-3xl sm:text-4xl">
                  {item.val}
                </div>
                <p className="mt-1 text-sm text-gray-600 xs:text-base xs:mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
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
                bg-gradient-to-r from-[#0A2647] to-[#1e4b80] 
                text-white font-bold rounded-full shadow-2xl
                text-base xs:text-lg sm:text-xl md:text-2xl
                hover:scale-105 transition-all
              "
            >
              Scale Your Industry
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
