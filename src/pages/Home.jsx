// src/pages/Home.jsx → 100% RESPONSIVE (Mobile + Tablet + Desktop) with FULL 3D Background
import React, { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Instances,
  Instance,
  OrbitControls,
  Sparkles,
  ContactShadows,
  Environment,
  Sky,
  PerspectiveCamera,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Bot, Send, X } from "lucide-react";

/* ========================
   Floating CTA Buttons (Responsive)
   ======================== */
function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed z-50 flex flex-col gap-3 left-3 bottom-20 sm:gap-4 sm:left-4 sm:bottom-24"
    >
      <a
        href="https://wa.me/918685882050"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-green-500 rounded-full shadow-2xl group sm:w-14 sm:h-14 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white w-7 h-7 sm:w-8 sm:h-8" />
      </a>
      <a
        href="tel:+918685882050"
        className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-blue-600 rounded-full shadow-2xl group sm:w-14 sm:h-14 hover:scale-110"
        aria-label="Call"
      >
        <Phone className="text-white w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </motion.div>
  );
}

/* ========================
   Compact Chatbot (Responsive)
   ======================== */
const Chatbot = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Namaste! I'm TCM Assistant", from: "bot" },
    { text: "How can we help you build your dream project?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { text: input, from: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { text: "Great! Our team will contact you within 1 hour.", from: "bot" }]);
    }, 1000);
  };

  return (
    <div className="fixed z-50 right-3 bottom-20 sm:right-4 sm:bottom-24">
      {!open ? (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#5183bb] via-[#1e4b80] to-[#2C74B3] rounded-full shadow-2xl flex items-center justify-center border border-white/20"
        >
          <Bot className="w-8 h-8 text-white sm:w-10 sm:h-10 drop-shadow-lg" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ y: 100, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          className="w-72 sm:w-80 md:w-96 h-[400px] sm:h-[480px] bg-white rounded-3xl shadow-3xl overflow-hidden flex flex-col border border-gray-200"
        >
          <div className="p-3 sm:p-4 bg-gradient-to-r from-[#4782c5] to-[#2C74B3] text-white flex justify-between items-center">
            <div>
              <div className="text-base font-bold sm:text-lg">TCM Assistant</div>
              <div className="text-xs opacity-90">Typically replies in minutes</div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 transition rounded-full hover:bg-white/20">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm sm:p-4 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm font-medium shadow-sm ${
                    msg.from === "user" ? "bg-[#2C74B3] text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2 p-3 bg-white border-t sm:p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about projects..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#2C74B3] transition text-sm"
            />
            <button onClick={sendMessage} className="bg-[#2C74B3] hover:bg-[#1e4b80] text-white p-2 sm:p-3 rounded-full transition">
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
});

/* ========================
   Instanced Skyline (90 buildings) - UNCHANGED
   ======================== */
const buildings = [...Array(90)].map(() => ({
  position: [(Math.random() - 0.5) * 90, 0, -Math.random() * 80 - 10],
  scale: [1 + Math.random() * 2.5, 2 + Math.random() * 12, 1 + Math.random() * 2.5],
  color: ["#072A4E", "#0A3A63", "#0f3b5e", "#2C74B3"][Math.floor(Math.random() * 4)],
}));

function Skyline() {
  return (
    <Instances limit={buildings.length}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.15} metalness={0.8} />

      {buildings.map((data, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
          <Instance position={data.position} scale={data.scale} color={data.color}>
            <mesh>
              <boxGeometry args={[1.02, 1.02, 1.02]} />
              <meshStandardMaterial emissive={data.color} emissiveIntensity={0.25} metalness={0.9} roughness={0.1} />
            </mesh>
          </Instance>
        </Float>
      ))}
    </Instances>
  );
}

/* ========================
   Animated Neon Grid - UNCHANGED
   ======================== */
function NeonGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.1) * 3;
    }
  });

  return (
    <group ref={gridRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial color="#020d1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {[...Array(50)].map((_, i) => {
        const pos = i * 5 - 125;
        return (
          <mesh key={`h${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[pos, -1.98, 0]}>
            <planeGeometry args={[1.5, 300]} />
            <meshBasicMaterial color="#39A0ED" transparent opacity={0.18} blending={2} />
          </mesh>
        );
      })}
      {[...Array(50)].map((_, i) => {
        const pos = i * 5 - 125;
        return (
          <mesh key={`v${i}`} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -1.98, pos]}>
            <planeGeometry args={[1.5, 300]} />
            <meshBasicMaterial color="#39A0ED" transparent opacity={0.15} blending={2} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ========================
   Parallax Particle Field - UNCHANGED
   ======================== */
function ParticleField() {
  const points = useMemo(() => {
    const p = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      p[i * 3] = (Math.random() - 0.5) * 200;
      p[i * 3 + 1] = Math.random() * 40 - 10;
      p[i * 3 + 2] = -Math.random() * 150;
    }
    return p;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={600} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={1} color="#F9A826" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

/* ========================
   Main 3D Scene – NO postprocessing! UNCHANGED
   ======================== */
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 10, 35]} fov={60} />
      <Sky sunPosition={[100, 20, 100]} inclination={0.4} azimuth={0.25} />

      <fog attach="fog" args={["#020d1a", 30, 140]} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[15, 25, 10]} intensity={1.8} castShadow shadow-mapSize={2048} />

      <NeonGrid />
      <Skyline />
      <ParticleField />

      <Sparkles count={120} scale={[250, 60, 250]} size={5} speed={0.5} opacity={0.8} color="#39A0ED" />
      <Sparkles count={40} scale={[200, 40, 200]} size={8} speed={0.3} opacity={0.6} color="#F9A826" />

      <ContactShadows position={[0, -2.1, 0]} opacity={0.5} scale={120} blur={2.8} far={25} />

      <Environment preset="night" />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
}

/* ========================
   Hero Page - NOW RESPONSIVE
   ======================== */
export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building India's Most Iconic Structures";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020d1a] to-[#04182b]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-blue/80 via-black/40 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-20 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="mx-auto text-center max-w-7xl"
        >
          <h1 className="font-black text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f233a] via-[#39A0ED] to-[#F9A826] drop-shadow-2xl">
              TCM
            </span>
            <span className="block mt-2 text-4xl font-bold sm:mt-4 sm:text-5xl md:text-7xl lg:text-8xl text-white/95">
              CONSTRUCTION
            </span>
          </h1>

          <div className="flex items-center justify-center h-20 mt-6 sm:h-24 sm:mt-10">
            <h2 className="text-xl font-medium text-gray-200 sm:text-2xl md:text-4xl lg:text-5xl">
              {typedText}
              <span className="inline-block ml-2 w-1 h-10 sm:h-12 bg-[#F9A826] animate-pulse" />
            </h2>
          </div>

          <p className="max-w-3xl mx-auto mt-4 text-base font-light text-gray-300 sm:mt-6 sm:text-lg">
            Led by <span className="font-bold text-[#F9A826]">Prop. Anuj</span> • 500+ Landmark Projects • Gurugram, Haryana
          </p>

          <div className="flex flex-col justify-center gap-4 mt-8 sm:gap-6 sm:mt-12 sm:flex-row">
            <a
              href="/contact"
              className="group px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#F9A826] to-[#ff6b1b] text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-[#F9A826]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              Start Your Project <ArrowRight className="w-6 h-6 transition sm:w-7 sm:h-7 group-hover:translate-x-1" />
            </a>
            <a
              href="/projects"
              className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 border-4 rounded-full sm:px-12 sm:py-5 sm:text-xl border-white/30 backdrop-blur-sm hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 text-center sm:gap-10 sm:mt-20 md:grid-cols-4">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "20+", label: "Years of Excellence" },
              { value: "₹2,500Cr+", label: "Total Value Built" },
              { value: "50+", label: "Cities Transformed" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F9A826] drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium tracking-wider text-gray-400 uppercase sm:mt-2 sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <FloatingActions />
      <Chatbot />
    </section>
  );
}