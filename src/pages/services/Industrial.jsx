import React from "react";
import { motion } from "framer-motion";
import { Factory, Truck, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Industrial() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#0A2647]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20 text-center">
        <div className="mx-auto max-w-7xl">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-black md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] to-[#1e4b80]">
                INDUSTRIAL
              </span>
              <br />
              <span className="text-5xl text-gray-800 md:text-7xl">INFRASTRUCTURE</span>
            </h1>
          </motion.h1>
          <p className="max-w-5xl mx-auto mt-8 text-xl text-gray-600 md:text-2xl">
            Warehouses, manufacturing plants, cold storages & logistics parks engineered for maximum efficiency, safety and scalability.
          </p>

          <div className="grid gap-8 mt-20 md:grid-cols-4">
            {[
              { icon: Factory, val: "80+", label: "Plants Built" },
              { icon: Truck, val: "2M+", label: "Sq Ft Warehousing" },
              { icon: Shield, val: "ISO 9001", label: "Certified" },
              { icon: Zap, val: "24/7", label: "Power Backup Ready" },
            ].map((item, i) => (
              <motion.div key={i} className="p-8 bg-white shadow-xl rounded-3xl">
                <item.icon className="w-14 h-14 mx-auto mb-4 text-[#0A2647]" />
                <div className="text-4xl font-black">{item.val}</div>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-24">
            <Link to="/contact" className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-[#0A2647] to-[#1e4b80] text-white font-bold text-2xl rounded-full hover:scale-105 shadow-2xl">
              Scale Your Industry <ArrowRight className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}