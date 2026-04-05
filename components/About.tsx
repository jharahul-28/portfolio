"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Radio, Brain } from "lucide-react";

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

const strengths = [
  {
    icon: Cpu,
    title: "Banking System Expert",
    description:
      "Reverse-engineered 120+ legacy banking modules, dramatically accelerating delivery timelines.",
    accent: "violet",
  },
  {
    icon: Zap,
    title: "Performance Optimizer",
    description:
      "Achieved 30% system performance improvements through strategic Spring Boot refactoring.",
    accent: "cyan",
  },
  {
    icon: Radio,
    title: "Real-time Systems",
    description:
      "Built production-grade WebSocket systems supporting concurrent live data streams.",
    accent: "violet",
  },
  {
    icon: Brain,
    title: "AI / LLM Integration",
    description:
      "Architected RAG pipelines with vector databases and GPT for intelligent compliance systems.",
    accent: "cyan",
  },
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
          {/* Left: Professional Summary */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h3 className="text-2xl font-semibold text-slate-100">
              Building systems that scale, perform, and matter.
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a Full Stack Software Engineer based in Bangalore, India, with a strong
                foundation in both backend systems engineering and modern frontend development.
                My work spans from refactoring complex legacy banking infrastructure to building
                real-time collaboration platforms and AI-powered compliance tools.
              </p>
              <p>
                At GlobalLogic, I dove deep into 120+ modules of a legacy banking system —
                reverse-engineering undocumented code, identifying inefficiencies, and
                modernizing core components with Spring Boot. The result was a 40% reduction
                in delivery time and 30% improvement in system performance. I was honored with
                the Spotlight of the Month award for these contributions.
              </p>
              <p>
                During my time at CricsHub, I built a full-stack cricket tournament management
                platform from the ground up — including a real-time WebSocket scoring engine,
                REST APIs for tournament operations, and a live tracking UI in React Native
                that reduced manual management effort by 60%.
              </p>
              <p>
                Beyond my professional work, I actively sharpen my problem-solving skills
                through competitive programming, having solved 380+ DSA problems and placed
                in the top 1% at CodeChef Starters 130. I believe great engineers combine
                technical depth with a product mindset — and I bring both to every project.
              </p>
            </div>

            {/* Location + Status */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "Bangalore, India", color: "violet" },
                { label: "Open to Work", color: "emerald" },
                { label: "Spring Boot + React", color: "cyan" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium glass"
                  style={{
                    color:
                      color === "violet"
                        ? "#a78bfa"
                        : color === "emerald"
                        ? "#34d399"
                        : "#22d3ee",
                    borderColor:
                      color === "violet"
                        ? "rgba(167,139,250,0.2)"
                        : color === "emerald"
                        ? "rgba(52,211,153,0.2)"
                        : "rgba(34,211,238,0.2)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Strength Cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map(({ icon: Icon, title, description, accent }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="glass rounded-2xl p-5 glow-violet group hover:border-violet-500/20 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      accent === "violet"
                        ? "rgba(139,92,246,0.15)"
                        : "rgba(34,211,238,0.15)",
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: accent === "violet" ? "#8b5cf6" : "#22d3ee" }}
                  />
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mb-2">{title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
