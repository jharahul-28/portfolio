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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

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
      {/* Gradient Orbs */}
      <div
        aria-hidden
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Content */}
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
            <p className="text-xl sm:text-2xl font-semibold text-slate-300">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
              {
                href: personalInfo.github,
                icon: Github,
                label: "GitHub",
              },
              {
                href: personalInfo.linkedin,
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: `mailto:${personalInfo.email}`,
                icon: Mail,
                label: "Email",
              },
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
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
