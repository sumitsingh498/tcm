import React from "react";
import { motion } from "framer-motion";
import { Hammer, Paintbrush, Home, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Renovation() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20 text-center">
        <div className="mx-auto max-w-7xl">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-black md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] to-[#FFB84D]">
                RENOVATION &
              </span>
              <br />
              <span className="text-5xl text-gray-800 md:text-7xl">REMODELING</span>
            </h1>
          </motion.h1>
          <p className="max-w-4xl mx-auto mt-8 text-xl text-gray-600 md:text-2xl">
            Breathe new life into your space — heritage restoration, modern makeovers, office fit-outs & home transformations.
          </p>

          <div className="grid gap-10 mt-20 md:grid-cols-3">
            {[
              { icon: Paintbrush, title: "Interior Fit-Outs" },
              { icon: Hammer, title: "Structural Upgrades" },
              { icon: Home, title: "Heritage Restoration" },
              { icon: Sparkles, title: "Smart Home Integration" },
            ].map((item, i) => (
              <motion.div key={i} className="p-10 bg-white shadow-xl rounded-3xl">
                <item.icon className="w-16 h-16 mx-auto mb-6 text-[#F9A826]" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-24">
            <Link to="/contact" className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-[#F9A826] to-[#FFB84D] text-black font-bold text-2xl rounded-full hover:scale-105 shadow-2xl">
              Transform Your Space <ArrowRight className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}