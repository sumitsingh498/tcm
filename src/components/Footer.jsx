// src/components/Footer.jsx → FINAL PREMIUM VERSION WITH CLEAN 3D LOGO

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Logo from "../assets/tcmlogo.png";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/tcm-constructions", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/tcmconstructions", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/tcmconstructions", label: "Facebook" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-100">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#F9A826]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2C74B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative px-6 py-16 mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >

          {/* Company Info with 3D Logo */}
          <motion.div variants={item} className="space-y-8">

            {/* 3D Logo Frame */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block"
            >
              <div className="
                p-4 rounded-3xl 
                bg-gradient-to-br from-gray-200 via-white to-gray-300
                shadow-[0px_10px_25px_rgba(0,0,0,0.25)]
                border border-gray-300
                transition-all duration-500
                hover:shadow-[0px_18px_45px_rgba(249,168,38,0.45)]
              ">
                <img
                  src={Logo}
                  alt="TCM Constructions Logo"
                  className="h-132 w-auto object-contain 
                    drop-shadow-[0_8px_15px_rgba(0,0,0,0.35)] 
                    transition-all duration-500"
                />
              </div>

              {/* Shine reflection */}
              <div className="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none hover:opacity-100">
                <div className="absolute left-0 w-full h-10 rounded-full -top-5 bg-gradient-to-b from-white/50 to-transparent blur-2xl"></div>
              </div>
            </motion.div>

          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F9A826] flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              Get in Touch
            </h3>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-600">
                Killa No. 144, Bhora Kalan, Pataudi,<br />
                Gurugram, Haryana 122413
              </p>

              <a
                href="tel:+918685882050"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-[#F9A826]/5 hover:border-[#F9A826]/30 transition-all group"
              >
                <Phone className="w-6 h-6 text-[#F9A826] group-hover:scale-110 transition" />
                <span className="font-medium text-gray-800">+91 86858 82050</span>
              </a>

              <a
                href="mailto:info@tcmconstructionspvtltd.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-[#2C74B3]/5 hover:border-[#2C74B3]/30 transition-all group"
              >
                <Mail className="w-6 h-6 text-[#2C74B3] group-hover:scale-110 transition" />
                <span className="font-medium text-gray-800">info@tcmconstructionspvtltd.com</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F9A826]">Follow Us</h3>

            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gradient-to-r hover:from-[#F9A826]/5 hover:to-[#2C74B3]/5 hover:border-[#F9A826]/30 transition-all group"
                >
                  <Icon className="w-6 h-6 text-[#F9A826] group-hover:scale-110 transition" />
                  <span className="font-medium text-gray-800 group-hover:text-[#F9A826] transition">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Line */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 mt-16 text-center border-t border-gray-300"
        >
          <p className="text-sm text-gray-600">
            © {currentYear} TCM Constructions Pvt Ltd. All rights reserved. | Crafted with passion in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
