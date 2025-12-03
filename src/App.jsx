// src/App.jsx → FINAL 100% WORKING (Light Theme Only)

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load all pages → Lightning fast performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

// Service Detail Pages (All Fixed & Ready)
const Commercial = lazy(() => import("./pages/services/Commercial"));
const Residential = lazy(() => import("./pages/services/Residential"));
const Industrial = lazy(() => import("./pages/services/Industrial"));
const Renovation = lazy(() => import("./pages/services/Renovation"));
const DesignBuild = lazy(() => import("./pages/services/DesignBuild"));
const Civil = lazy(() => import("./pages/services/Civil"));

export default function App() {
  return (
    <Router>
      {/* Light Theme Only — Clean & Professional */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

        <Navbar /> {/* Your updated light-theme Navbar */}

        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
              <div className="text-center">
                <h1 className="text-6xl font-black tracking-tighter text-gray-800 md:text-8xl">
                  TCM
                </h1>
                <p className="text-3xl md:text-4xl font-bold text-[#F9A826] mt-4">
                  CONSTRUCTION
                </p>
                <div className="mt-8 mx-auto w-48 h-1 bg-gradient-to-r from-[#F9A826] via-[#FF7A2D] to-[#0A2647] rounded-full animate-pulse" />
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* All Service Detail Pages — Fully Working */}
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/services/industrial" element={<Industrial />} />
            <Route path="/services/renovation" element={<Renovation />} />
            <Route path="/services/design-build" element={<DesignBuild />} />
            <Route path="/services/civil" element={<Civil />} />

            {/* Optional: 404 fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}