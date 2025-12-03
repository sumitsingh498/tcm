// src/pages/Services.jsx → FULLY RESPONSIVE + CLICKABLE CARDS + NO ERRORS

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Home, 
  Factory, 
  Hammer, 
  FileText, 
  HardHat,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Premium office towers, retail complexes, and corporate campuses designed for productivity, aesthetics, and long-term value.",
    color: "from-[#F9A826] to-[#FF7A2D]",
    link: "/services/commercial"
  },
  {
    icon: Home,
    title: "Residential Projects",
    desc: "Luxury villas, high-rise apartments, and gated communities built with comfort, elegance, and family-first design.",
    color: "from-[#2C74B3] to-[#144272]",
    link: "/services/residential"
  },
  {
    icon: Factory,
    title: "Industrial Infrastructure",
    desc: "State-of-the-art warehouses, manufacturing plants, and logistics hubs engineered for efficiency and scalability.",
    color: "from-[#0A2647] to-[#1e4b80]",
    link: "/services/industrial"
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Transforming old structures into modern masterpieces — from heritage restorations to complete interior makeovers.",
    color: "from-[#F9A826] to-[#FFB84D]",
    link: "/services/renovation"
  },
  {
    icon: FileText,
    title: "Design & Build Services",
    desc: "End-to-end solutions — from concept and 3D modeling to final execution — all under one trusted roof.",
    color: "from-[#2C74B3] to-[#39A0ED]",
    link: "/services/design-build"
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    desc: "Bridges, roads, flyovers, and large-scale infrastructure delivered on time with zero compromise on safety.",
    color: "from-[#0A2647] to-[#072A4E]",
    link: "/services/civil"
  }
];

export default function Services() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-[#F9A826]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-72 h-72 sm:w-80 sm:h-80 bg-[#2C74B3]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">

          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] via-[#2C74B3] to-[#144272]">
                OUR SERVICES
              </span>
            </h1>
            <p className="max-w-3xl px-4 mx-auto mt-6 text-base font-light leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              From vision to victory — we deliver excellence in every category of construction. 
              <span className="block mt-2 text-[#F9A826] font-semibold">Your dream project deserves the best.</span>
            </p>
          </motion.div>

          {/* Services Grid - Fully Responsive */}
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-16 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#F9A826]/40 transition-all duration-500"
              >
                <Link to={service.link} className="block h-full">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className={`inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-left text-gray-800 sm:text-2xl lg:text-3xl">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-left text-gray-600 sm:text-base">
                      {service.desc}
                    </p>

                    <div className="mt-6 flex items-center text-[#F9A826] font-bold text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Learn More 
                      <ArrowRight className="w-5 h-5 ml-2 transition group-hover:translate-x-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="px-4 mt-16 text-center lg:mt-24"
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl md:text-5xl">
              Ready to Start Your <span className="text-[#F9A826]">Next Big Project</span>?
            </h2>

            <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row sm:gap-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="w-6 h-6 transition sm:w-7 sm:h-7 group-hover:translate-x-2" />
              </Link>

              <Link
                to="/projects"
                className="px-8 py-5 sm:px-12 sm:py-6 border-4 border-[#0A2647] text-[#0A2647] font-bold text-lg sm:text-xl rounded-full hover:bg-[#0A2647] hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}