"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

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

const companyColors: Record<string, string> = {
  GlobalLogic: "#8b5cf6",
  CricsHub: "#22d3ee",
  HoppRyde: "#a78bfa",
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Career
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-100 mb-4"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical connector line */}
          <div
            className="absolute left-5 top-3 bottom-8 w-px timeline-line"
            aria-hidden
          />

          <div className="space-y-8">
            {experiences.map((exp) => {
              const accent = companyColors[exp.company] ?? "#8b5cf6";

              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className="relative flex gap-7"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold"
                      style={{
                        background: "#0f172a",
                        border: `2px solid ${accent}`,
                        color: accent,
                        boxShadow: `0 0 12px ${accent}40`,
                      }}
                    >
                      {exp.company.slice(0, 2).toUpperCase()}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 card-depth rounded-2xl overflow-hidden">
                    {/* Top accent gradient line */}
                    <div
                      className="h-[2px] w-full"
                      style={{
                        background: `linear-gradient(90deg, ${accent}, transparent)`,
                      }}
                    />

                    <div className="p-6 lg:p-7">
                      {/* Company + type badge */}
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h3
                          className="text-xl font-bold"
                          style={{ color: accent }}
                        >
                          {exp.company}
                        </h3>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: `${accent}18`,
                            color: accent,
                            border: `1px solid ${accent}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Role */}
                      <p className="text-base font-semibold text-slate-200 mb-4">
                        {exp.role}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-5 mb-5">
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Briefcase size={12} />
                          {exp.type}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: accent }}
                            />
                            <span className="text-sm text-slate-400 leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
