"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

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
  visible: { transition: { staggerChildren: 0.18 } },
};

type ProjectVisualConfig = {
  gradient: string;
  orb1Color: string;
  orb2Color: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  accent: string;
  numberColor: string;
};

const projectVisuals: Record<number, ProjectVisualConfig> = {
  1: {
    gradient:
      "linear-gradient(145deg, #1a0b2e 0%, #120d24 50%, #0a0f1e 100%)",
    orb1Color: "rgba(139,92,246,0.6)",
    orb2Color: "rgba(168,85,247,0.35)",
    badge: "AI · RAG · Compliance",
    badgeColor: "#c4b5fd",
    badgeBg: "rgba(139,92,246,0.18)",
    badgeBorder: "rgba(139,92,246,0.3)",
    accent: "#8b5cf6",
    numberColor: "#7c3aed",
  },
  2: {
    gradient:
      "linear-gradient(145deg, #061521 0%, #081825 50%, #0a1520 100%)",
    orb1Color: "rgba(34,211,238,0.45)",
    orb2Color: "rgba(6,182,212,0.3)",
    badge: "React Native · GPS · Firebase",
    badgeColor: "#67e8f9",
    badgeBg: "rgba(34,211,238,0.15)",
    badgeBorder: "rgba(34,211,238,0.25)",
    accent: "#22d3ee",
    numberColor: "#0891b2",
  },
};

function ProjectVisualHeader({ projectId }: { projectId: number }) {
  const config = projectVisuals[projectId];
  if (!config) return null;

  return (
    <div
      className="h-44 rounded-t-2xl relative overflow-hidden"
      style={{ background: config.gradient }}
    >
      {/* Orb 1 */}
      <div
        className="absolute w-56 h-56 rounded-full"
        style={{
          background: `radial-gradient(circle, ${config.orb1Color} 0%, transparent 70%)`,
          filter: "blur(50px)",
          top: "-20%",
          left: "-10%",
        }}
      />
      {/* Orb 2 */}
      <div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: `radial-gradient(circle, ${config.orb2Color} 0%, transparent 70%)`,
          filter: "blur(60px)",
          bottom: "-30%",
          right: "-15%",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />
      {/* Type badge */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide"
          style={{
            color: config.badgeColor,
            background: config.badgeBg,
            border: `1px solid ${config.badgeBorder}`,
          }}
        >
          {config.badge}
        </span>
      </div>
      {/* Large faint index number */}
      <div className="absolute bottom-1 right-5 z-10 select-none pointer-events-none">
        <span
          className="text-8xl font-black leading-none"
          style={{ color: config.numberColor, opacity: 0.1 }}
        >
          {String(projectId).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

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
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3"
          >
            Selected Work
          </motion.p>
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
            className="mt-5 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            End-to-end systems built for real-world impact — from AI compliance
            platforms to real-time mobile apps.
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const visual = projectVisuals[project.id];
            const accent = visual?.accent ?? "#8b5cf6";

            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="card-depth rounded-2xl overflow-hidden flex flex-col"
              >
                <ProjectVisualHeader projectId={project.id} />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 leading-tight">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-medium mt-1"
                        style={{ color: accent }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="p-2.5 rounded-xl text-slate-400 hover:text-violet-400 hover:bg-violet-500/10 border border-transparent hover:border-violet-500/20 transition-all duration-200"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 flex-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: accent }}
                        />
                        <span className="text-xs text-slate-400 leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer: tech + CTA */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            backgroundColor: `${accent}12`,
                            color:
                              visual?.badgeColor ?? "#a78bfa",
                            border: `1px solid ${accent}22`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 group"
                        style={{ color: accent }}
                      >
                        View on GitHub
                        <ArrowUpRight
                          size={12}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Coming Soon — spans full width */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 glass rounded-2xl px-8 py-6 flex items-center justify-between opacity-40 border-dashed"
          >
            <div>
              <p className="text-sm font-semibold text-slate-300">
                More projects in progress
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Currently in active development · check back soon
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-lg flex-shrink-0">
              🚧
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
