// src/pages/Services.jsx → WITH CLICKABLE "LEARN MORE" LINKS

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ← ADD THIS
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
    link: "/services/commercial" // ← NEW: Click goes here
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
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2C74B3]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20">
        <div className="mx-auto text-center max-w-7xl">
          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-black leading-none tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] via-[#2C74B3] to-[#144272]">
                OUR SERVICES
              </span>
              <br />
              
            </h1>
            <p className="max-w-4xl mx-auto mt-8 text-xl font-light leading-relaxed text-gray-600 md:text-2xl">
              From vision to victory — we deliver excellence in every category of construction. 
              <span className="text-[#F9A826] font-semibold"> Your dream project deserves the best.</span>
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#F9A826]/30 transition-all duration-500 cursor-pointer"
              >
                <Link to={service.link} className="block h-full"> {/* ← Makes entire card clickable */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                  <div className="p-8 lg:p-10">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-10 h-10" />
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed text-gray-600">
                      {service.desc}
                    </p>

                    {/* Clickable "Learn More" */}
                    <div className="mt-6 flex items-center text-[#F9A826] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Learn More <ArrowRight className="w-5 h-5 ml-2 transition group-hover:translate-x-3" />
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
            className="mt-24 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
              Ready to Start Your <span className="text-[#F9A826]">Next Big Project</span>?
            </h2>
            <div className="flex flex-col justify-center gap-6 mt-10 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="transition w-7 h-7 group-hover:translate-x-2" />
              </Link>
              <Link
                to="/projects"
                className="px-12 py-6 border-4 border-[#0A2647] text-[#0A2647] font-bold text-xl rounded-full hover:bg-[#0A2647] hover:text-white transition-all duration-300"
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