// src/pages/Projects.jsx → 100% ULTRA RESPONSIVE + SAME DESIGN & FUNCTIONALITY

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

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute top-10 left-4 
          w-56 h-56 xs:w-72 xs:h-72 sm:w-96 sm:h-96 
          bg-[#F9A826]/10 rounded-full blur-3xl
        " />
        <div className="
          absolute bottom-16 right-4 
          w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 
          bg-[#2C74B3]/10 rounded-full blur-3xl
        " />
      </div>

      <div className="relative z-10 px-4 pb-20 pt-28 xs:px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-14 sm:mb-16"
          >
            <h1 className="text-4xl font-black tracking-tight  xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2647] via-[#2C74B3] to-[#144272]">
                OUR PROJECTS
              </span>
            </h1>

            <p className="max-w-3xl px-2 mx-auto mt-4 text-sm font-light leading-relaxed text-gray-600  sm:mt-6 xs:text-base sm:text-lg md:text-xl">
              From towering corporate landmarks to dream homes and industrial powerhouses — 
              <span className="text-[#F9A826] font-semibold"> every project is a masterpiece.</span>
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 xs:gap-5 sm:gap-6 mb-14 sm:mb-16">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`
                  flex items-center gap-2 xs:gap-3 sm:gap-4
                  px-6 py-3 xs:px-7 xs:py-4 sm:px-8 sm:py-4
                  rounded-full font-semibold
                  text-sm xs:text-base sm:text-lg
                  transition-all duration-300
                  ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black shadow-xl"
                      : "bg-white border-2 border-gray-300 text-gray-700 hover:border-[#F9A826]"
                  }
                `}
              >
                <cat.icon className="w-5 h-5 xs:w-6 xs:h-6" />
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6  xs:gap-8 sm:gap-10 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="
                  group relative overflow-hidden
                  bg-white rounded-3xl shadow-xl border border-gray-200
                  hover:shadow-2xl hover:border-[#F9A826]/30
                  transition-all duration-500 cursor-pointer
                "
              >
                {/* Project Image */}
                <div className="relative h-56 xs:h-64 sm:h-72">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end transition-opacity duration-500 opacity-0  bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100">
                  <div className="p-4 text-white xs:p-5 sm:p-6">
                    <h3 className="mb-1 text-xl font-bold xs:mb-2 xs:text-2xl">{project.name}</h3>
                    <div className="flex items-center gap-2 text-xs xs:text-sm">
                      <MapPin className="w-3 h-3 xs:w-4 xs:h-4" />
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="p-4 xs:p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-gray-800 xs:text-xl">{project.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600 xs:text-sm">
                    <MapPin className="w-3 h-3 xs:w-4 xs:h-4 text-[#F9A826]" />
                    {project.location}
                  </div>
                  <p className="mt-2 xs:mt-3 text-xs xs:text-sm uppercase tracking-wider text-[#F9A826] font-semibold">
                    {project.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center sm:mt-20 lg:mt-24"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-800  sm:mb-8 xs:text-3xl sm:text-4xl md:text-5xl">
              Want to See Your Name Here?
            </h2>
            <Link
              to="/contact"
              className="
                group inline-flex items-center gap-3 sm:gap-4 
                px-8 py-4 xs:px-10 xs:py-5 sm:px-12 sm:py-6
                bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] 
                text-black font-bold rounded-full shadow-2xl
                text-base xs:text-lg sm:text-xl
                hover:scale-105 transition-all
              "
            >
              Start Your Project Today
              <ArrowRight className="w-6 h-6 transition xs:w-7 xs:h-7 group-hover:translate-x-2" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
