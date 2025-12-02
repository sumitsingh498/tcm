// src/pages/services/Commercial.jsx
import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Commercial() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center">
            <h1 className="text-6xl font-black tracking-tight md:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] to-[#FF7A2D]">
                COMMERCIAL
              </span>
              <br />
              <span className="text-5xl text-gray-800 md:text-7xl">CONSTRUCTION</span>
            </h1>
            <p className="max-w-4xl mx-auto mt-8 text-xl text-gray-600">
              World-class office towers, retail destinations, and corporate campuses built for success, sustainability, and timeless appeal.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-8 mb-20 md:grid-cols-4">
            {[{icon: Building2, val: "150+", label: "Commercial Projects"}, {icon: Award, val: "42", label: "Awards Won"}, {icon: Clock, val: "98%", label: "On-Time Delivery"}, {icon: Users, val: "50M+", label: "Sq Ft Built"}].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="p-8 text-center bg-white border border-gray-200 shadow-xl rounded-3xl">
                <s.icon className="w-12 h-12 mx-auto mb-4 text-[#F9A826]" />
                <div className="text-4xl font-black text-gray-800">{s.val}</div>
                <div className="mt-2 text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid gap-12 mb-20 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">Why Choose TCM for Commercial?</h2>
              <ul className="space-y-6">
                {["LEED & IGBC Certified Designs", "Smart Building Integration", "Seismic-Resistant Structures", "Fast-Track Construction Methodology", "Zero Defect Handover"].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F9A826] to-[#FF7A2D] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-3xl h-96" /> {/* Placeholder for image */}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-800 md:text-5xl">
              Ready to Build Your <span className="text-[#F9A826]">Corporate Landmark</span>?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-xl rounded-full hover:scale-105 shadow-2xl transition-all">
              Start Your Project <ArrowRight className="w-7 h-7" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}