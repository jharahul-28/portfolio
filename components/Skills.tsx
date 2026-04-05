"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/lib/data";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

const categoryAccents: Record<string, { bg: string; text: string; border: string }> = {
  Languages: {
    bg: "rgba(139,92,246,0.12)",
    text: "#a78bfa",
    border: "rgba(139,92,246,0.25)",
  },
  Backend: {
    bg: "rgba(34,211,238,0.12)",
    text: "#67e8f9",
    border: "rgba(34,211,238,0.25)",
  },
  Frontend: {
    bg: "rgba(139,92,246,0.12)",
    text: "#c4b5fd",
    border: "rgba(139,92,246,0.20)",
  },
  Databases: {
    bg: "rgba(34,211,238,0.12)",
    text: "#22d3ee",
    border: "rgba(34,211,238,0.20)",
  },
  "Core Concepts": {
    bg: "rgba(139,92,246,0.10)",
    text: "#a78bfa",
    border: "rgba(139,92,246,0.20)",
  },
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-400 max-w-xl mx-auto"
          >
            A curated set of technologies I work with to build scalable, production-ready software.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {skillCategories.map((cat) => {
            const accent = categoryAccents[cat.category] ?? categoryAccents["Languages"];
            return (
              <motion.div key={cat.category} variants={fadeInUp}>
                <div className="glass rounded-2xl p-6 lg:p-8">
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-2 h-6 rounded-full"
                      style={{
                        background: `linear-gradient(to bottom, ${accent.text}, transparent)`,
                      }}
                    />
                    <h3 className="text-base font-semibold text-slate-200">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Badge grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="px-4 py-2 rounded-xl text-sm font-medium cursor-default select-none transition-transform duration-200 hover:scale-105"
                        style={{
                          backgroundColor: accent.bg,
                          color: accent.text,
                          border: `1px solid ${accent.border}`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
