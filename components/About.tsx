"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Radio, Brain } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const strengths = [
  {
    icon: Cpu,
    title: "Banking System Expert",
    description:
      "Reverse-engineered 120+ legacy banking modules, dramatically accelerating delivery timelines.",
    accent: "violet" as const,
  },
  {
    icon: Zap,
    title: "Performance Optimizer",
    description:
      "Achieved 30% system performance improvements through strategic Spring Boot refactoring.",
    accent: "cyan" as const,
  },
  {
    icon: Radio,
    title: "Real-time Systems",
    description:
      "Built production-grade WebSocket systems supporting concurrent live data streams.",
    accent: "violet" as const,
  },
  {
    icon: Brain,
    title: "AI / LLM Integration",
    description:
      "Architected RAG pipelines with vector databases and GPT for intelligent compliance systems.",
    accent: "cyan" as const,
  },
];

const stats = [
  {
    metric: "40%",
    label: "faster delivery",
    context:
      "Modernized 120+ legacy banking modules at GlobalLogic — Spotlight of the Month",
    accent: "#8b5cf6",
  },
  {
    metric: "30%",
    label: "perf. boost",
    context: "Strategic Spring Boot refactoring across core banking services",
    accent: "#22d3ee",
  },
  {
    metric: "60%",
    label: "less manual work",
    context: "Real-time WebSocket scoring engine powering live cricket tournaments",
    accent: "#8b5cf6",
  },
  {
    metric: "380+",
    label: "DSA solved",
    context: "Top 1% globally at CodeChef Starters 130",
    accent: "#22d3ee",
  },
];

const statusBadges = [
  { label: "Bangalore, India", accent: "#a78bfa", border: "rgba(167,139,250,0.2)" },
  { label: "Open to Work", accent: "#34d399", border: "rgba(52,211,153,0.2)" },
  { label: "Spring Boot + React", accent: "#22d3ee", border: "rgba(34,211,238,0.2)" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3"
          >
            Background
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-100 mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left: positioning + impact stats */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3 leading-snug">
                Building systems that scale, perform, and matter.
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Full Stack Engineer specializing in backend systems and mobile development —
                from modernizing legacy banking infrastructure to shipping real-time apps
                and AI-powered platforms.
              </p>
            </div>

            {/* Impact Stats */}
            <ul className="space-y-2.5">
              {stats.map(({ metric, label, context, accent }) => (
                <li key={metric}>
                  <motion.div
                    className="flex items-center gap-4 glass rounded-xl px-4 py-3.5 transition-colors duration-200 hover:border-white/[0.12]"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex-shrink-0 w-16 text-right">
                      <span
                        className="text-xl font-bold block leading-none"
                        style={{
                          background: `linear-gradient(135deg, ${accent}, ${accent === "#8b5cf6" ? "#22d3ee" : "#8b5cf6"})`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          color: "transparent",
                        }}
                      >
                        {metric}
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                    <div className="w-px self-stretch bg-white/[0.06]" />
                    <p className="text-xs text-slate-400 leading-relaxed">{context}</p>
                  </motion.div>
                </li>
              ))}
            </ul>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {statusBadges.map(({ label, accent, border }) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium glass"
                  style={{ color: accent, borderColor: border }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: strength cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map(({ icon: Icon, title, description, accent }) => {
              const color = accent === "violet" ? "#8b5cf6" : "#22d3ee";
              return (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="card-depth rounded-2xl p-5 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        accent === "violet"
                          ? "rgba(139,92,246,0.12)"
                          : "rgba(34,211,238,0.12)",
                    }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100 mb-2">{title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
                  {/* Bottom accent line */}
                  <div
                    className="mt-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
