// src/pages/services/Civil.jsx → FINAL FIXED & BEAUTIFUL (Zero Errors)

import React from "react";
import { motion } from "framer-motion";
import { 
  HardHat, 
  Waypoints,         // Roads & highways
  Landmark,           // Perfect for bridges & flyovers
  Mountain, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Civil() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#072A4E]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20 text-center">
        <div className="mx-auto max-w-7xl">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-black md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#072A4E] to-[#0A2647]">
                CIVIL ENGINEERING
              </span>
              <br />
              <span className="text-5xl text-gray-800 md:text-7xl">& INFRASTRUCTURE</span>
            </h1>
          </motion.h1>
          <p className="max-w-5xl mx-auto mt-8 text-xl text-gray-600 md:text-2xl">
            Roads, bridges, flyovers, canals & large-scale public infrastructure — built to last generations.
          </p>

          <div className="grid gap-8 mt-20 md:grid-cols-4">
            {[
              { icon: Waypoints, val: "500+", label: "Km Roads Built" },
              { icon: Landmark,  val: "18",   label: "Bridges & Flyovers" },   // Valid & beautiful
              { icon: Mountain,  val: "12",   label: "Hill Projects" },
              { icon: HardHat,   val: "100%", label: "Safety Record" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-gray-200 shadow-xl rounded-3xl"
              >
                <item.icon className="w-14 h-14 mx-auto mb-4 text-[#072A4E]" />
                <div className="text-4xl font-black text-gray-800">{item.val}</div>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-24">
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-[#072A4E] to-[#0A2647] text-white font-bold text-2xl rounded-full hover:scale-105 shadow-2xl transition-all"
            >
              Discuss Your Infra Project <ArrowRight className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}