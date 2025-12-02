import React from "react";
import { motion } from "framer-motion";
import { Home, Heart, Shield, Trees, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Residential() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#2C74B3]/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20 text-center">
        <div className="mx-auto text-center max-w-7xl">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-black md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C74B3] to-[#144272]">
                RESIDENTIAL
              </span>
              <br />
              <span className="text-5xl text-gray-800 md:text-7xl">PROJECTS</span>
            </h1>
          </motion.h1>
          <p className="max-w-4xl mx-auto mt-8 text-xl text-gray-600 md:text-2xl">
            Luxury villas, premium apartments & gated townships where comfort, elegance and happiness come home.
          </p>

          <div className="grid gap-10 mt-20 md:grid-cols-3">
            {[
              { icon: Home, title: "Luxury Villas & Bungalows" },
              { icon: Heart, title: "Family-Centric Planning" },
              { icon: Shield, title: "100% Vastu Compliant" },
              { icon: Trees, title: "Green & Sustainable" },
              { icon: Sparkles, title: "Premium Amenities" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-3xl shadow-xl border border-gray-200 hover:border-[#2C74B3]/30 transition"
              >
                <item.icon className="w-16 h-16 mx-auto mb-6 text-[#2C74B3]" />
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-24">
            <Link to="/contact" className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-[#2C74B3] to-[#144272] text-white font-bold text-2xl rounded-full hover:scale-105 shadow-2xl transition">
              Build Your Dream Home <ArrowRight className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}