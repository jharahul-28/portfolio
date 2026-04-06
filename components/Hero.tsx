"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const impactStats = [
  { value: "120+", label: "Modules engineered" },
  { value: "380+", label: "DSA solved" },
  { value: "Top 1%", label: "CodeChef global" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      {/* Animated Gradient Orbs */}
      <motion.div
        aria-hidden
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.55) 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.18,
        }}
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.55) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.13,
        }}
        animate={{ x: [0, -40, 30, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        aria-hidden
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.1,
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Vignette — fades grid edges */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #020617 100%)",
        }}
      />

      {/* Floating widget — current role (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden xl:block absolute right-10 top-[38%] -translate-y-1/2 z-20"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="glass gradient-border-card rounded-2xl p-5 w-52 shadow-xl shadow-black/30"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-slate-400 font-medium">Current Role</span>
          </div>
          <p className="text-sm font-semibold text-slate-100 mb-0.5 leading-snug">
            Trainee Software Engineer
          </p>
          <p className="text-xs font-medium text-violet-400">@ GlobalLogic</p>
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <p className="text-xs text-slate-500">Bangalore · Full-time</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating widget — impact stats (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden xl:block absolute left-10 top-1/2 -translate-y-1/2 z-20"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="glass rounded-2xl p-5 w-48 shadow-xl shadow-black/30"
        >
          <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-4">
            Impact
          </p>
          {impactStats.map(({ value, label }) => (
            <div key={label} className="flex items-center justify-between mb-3 last:mb-0">
              <span className="text-xs text-slate-400">{label}</span>
              <span className="text-sm font-bold gradient-text">{value}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Availability Badge */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Work
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Static Title */}
          <motion.div variants={fadeInUp}>
            <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-wide">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Role Ticker */}
          <motion.div
            variants={fadeInUp}
            className="h-10 flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-lg sm:text-xl font-medium text-violet-400"
              >
                {personalInfo.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <button
              onClick={handleScrollToProjects}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white btn-gradient shadow-lg shadow-violet-500/25"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
            <a
              href="/Rahul_Jha_Resume.pdf"
              download
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-300 glass hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mt-2"
          >
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl glass text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200 glow-violet"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
