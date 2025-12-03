// src/components/ServiceSwitcher.jsx → ULTRA RESPONSIVE + SAME FUNCTIONALITY

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, Home, Factory, Hammer, FileText, HardHat, ArrowRight 
} from "lucide-react";

const allServices = [
  { icon: Building2, title: "Commercial", link: "/services/commercial", color: "from-[#F9A826] to-[#FF7A2D]" },
  { icon: Home, title: "Residential", link: "/services/residential", color: "from-[#2C74B3] to-[#144272]" },
  { icon: Factory, title: "Industrial", link: "/services/industrial", color: "from-[#0A2647] to-[#1e4b80]" },
  { icon: Hammer, title: "Renovation", link: "/services/renovation", color: "from-[#F9A826] to-[#FFB84D]" },
  { icon: FileText, title: "Design & Build", link: "/services/design-build", color: "from-[#2C74B3] to-[#39A0ED]" },
  { icon: HardHat, title: "Civil Engineering", link: "/services/civil", color: "from-[#072A4E] to-[#0A2647]" },
];

export default function ServiceSwitcher() {
  const location = useLocation();
  const currentPath = location.pathname;

  const otherServices = allServices.filter(s => s.link !== currentPath);

  return (
    <div className="px-3 mt-16 xs:px-4 sm:px-6 lg:px-8 xs:mt-20 sm:mt-24 lg:mt-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-2xl font-black text-center text-gray-800  xs:mb-12 sm:mb-16 xs:text-3xl sm:text-4xl md:text-5xl"
        >
          Explore Our Other <span className="text-[#F9A826]">Services</span>
        </motion.h2>

        {/* Responsive Grid */}
        <div
          className="grid grid-cols-1 gap-5  xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:gap-6 sm:gap-8 lg:gap-10"
        >
          {otherServices.map((service, i) => (
            <motion.div
              key={service.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <Link
                to={service.link}
                className="
                  block h-full 
                  p-5 xs:p-6 sm:p-8 
                  bg-white rounded-3xl shadow-xl border border-gray-200
                  hover:border-transparent hover:shadow-2xl 
                  transition-all duration-500
                  hover:ring-4 hover:ring-[#F9A826]/20
                "
              >
                <div className="flex flex-col items-start h-full text-left">

                  {/* Icon */}
                  <div className={`
                    inline-flex 
                    p-3 xs:p-4 sm:p-5 
                    rounded-2xl bg-gradient-to-br ${service.color} 
                    text-white shadow-lg mb-4 xs:mb-5 sm:mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <service.icon className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold leading-tight text-gray-800  xs:text-xl sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Arrow */}
                  <div className="
                    mt-auto flex items-center 
                    font-bold text-[#F9A826] 
                    text-sm xs:text-base
                  ">
                    View Service
                    <ArrowRight className="w-5 h-5 ml-2 transition group-hover:translate-x-4" />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
