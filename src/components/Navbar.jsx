// src/components/Navbar.jsx → FULLY RESPONSIVE + HORIZONTAL MOBILE BUTTONS + NO ERRORS

import React, { useState, useEffect } from "react";  // ← FIXED: was useφοEffect
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  // Scroll to top + close menu on navigation
  const handleNavClick = (to) => {
    setIsOpen(false);
    if (location.pathname !== to) {
      navigate(to);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auto-close menu & scroll to top when page changes
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 shadow-lg bg-white/95 backdrop-blur-md"
      >
        <div className="px-4 py-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

          {/* Logo + Hamburger */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => handleNavClick("/")}
              className="text-2xl font-black tracking-tighter select-none sm:text-3xl lg:text-4xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] via-[#FF7A2D] to-[#0A2647]">
                TCM CONSTRUCTION
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="items-center hidden gap-8 lg:flex xl:gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`relative text-base xl:text-lg font-semibold transition-all duration-300 pb-1
                    ${location.pathname === link.to
                      ? "text-[#F9A826]"
                      : "text-gray-700 hover:text-[#F9A826]"
                    }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg border-2 border-gray-300 lg:hidden hover:border-[#F9A826] transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Horizontal Button Row */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? 90 : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="mt-3 overflow-hidden border-t border-gray-200 lg:hidden"
          >
            <div className="px-2 py-4">
              <div className="flex gap-3 px-2 overflow-x-auto scrollbar-hide">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.to}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: isOpen ? 1 : 0.8, opacity: isOpen ? 1 : 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(link.to)}
                    className={`min-w-max px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 shadow-md
                      ${location.pathname === link.to
                        ? "bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-black shadow-orange-500/50"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20 lg:h-24" />
    </>
  );
}