// src/pages/Projects.jsx → FINAL PREMIUM LIGHT THEME + REAL IMAGES

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Home, Factory, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const allProjects = [
  {
    id: 1,
    name: "Skyline Corporate Tower",
    type: "commercial",
    location: "Gurugram",
    img: "https://images.unsplash.com/photo-1486401897504-2b8123ec0d8e?w=800&q=80&fit=crop"
  },
  {
    id: 2,
    name: "The Palm Residency",
    type: "residential",
    location: "Pataudi",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&fit=crop"
  },
  {
    id: 3,
    name: "Metro Industrial Park",
    type: "industrial",
    location: "Manesar",
    img: "https://images.unsplash.com/photo-1581092580490-4d66393df8c3?w=800&q=80&fit=crop"
  },
  {
    id: 4,
    name: "Heritage Villa Complex",
    type: "residential",
    location: "Gurugram",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop"
  },
  {
    id: 5,
    name: "TechOne Business Center",
    type: "commercial",
    location: "Cyber City",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop"
  },
  {
    id: 6,
    name: "Green Valley Warehousing",
    type: "industrial",
    location: "Bhiwadi",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&fit=crop"
  },
  {
    id: 7,
    name: "Elite Corporate Plaza",
    type: "commercial",
    location: "Sector 44",
    img: "https://images.unsplash.com/photo-1543782249-3f02e6b9f8c3?w=800&q=80&fit=crop"
  },
  {
    id: 8,
    name: "Sunrise Luxury Homes",
    type: "residential",
    location: "Sohna Road",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&fit=crop"
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "residential", label: "Residential", icon: Home },
  { id: "industrial", label: "Industrial", icon: Factory },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.type === filter);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">

          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <h1 className="text-6xl font-black tracking-tight md:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] via-[#2C74B3] to-[#144272]">
                OUR PROJECTS
              </span>
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl font-light text-gray-600 md:text-2xl">
              From towering corporate landmarks to dream homes and industrial powerhouses — 
              <span className="text-[#F9A826] font-semibold"> every project is a masterpiece.</span>
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300
                  ${filter === cat.id 
                    ? "bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black shadow-xl" 
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-[#F9A826]"
                  }`}
              >
                <cat.icon className="w-6 h-6" />
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-[#F9A826]/30 transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex items-end transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100">
                  <div className="p-6 text-white">
                    <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{project.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#F9A826]" />
                    {project.location}
                  </div>
                  <p className="text-sm uppercase tracking-wider text-[#F9A826] font-semibold mt-3">
                    {project.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 text-center"
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-800 md:text-5xl">
              Want to See Your Name Here?
            </h2>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black font-bold text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project Today
              <ArrowRight className="transition w-7 h-7 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}