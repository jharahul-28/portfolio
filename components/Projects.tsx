"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

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
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "#020617" }}
    >
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
            Projects
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-400 max-w-xl mx-auto"
          >
            Selected projects that demonstrate my approach to solving real-world problems
            with clean engineering.
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group glass rounded-2xl p-6 flex flex-col gap-5 glow-violet hover:border-violet-500/25 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
                    <p className="text-sm font-medium text-violet-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2 rounded-lg text-slate-400 hover:text-violet-400 hover:bg-violet-500/10 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-1.5 flex-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-violet-500 text-xs mt-1 flex-shrink-0">▸</span>
                    <span className="text-xs text-slate-400 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(139,92,246,0.12)",
                      color: "#a78bfa",
                      border: "1px solid rgba(139,92,246,0.20)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border-dashed opacity-50"
            style={{ minHeight: "280px" }}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center">
              <span className="text-2xl">🚧</span>
            </div>
            <p className="text-sm font-medium text-slate-400 text-center">
              More projects coming soon...
            </p>
            <p className="text-xs text-slate-500 text-center">
              Currently in active development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
