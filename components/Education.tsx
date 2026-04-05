"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { educationList } from "@/lib/data";

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

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="section-padding"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Education
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              className="glass rounded-2xl p-7 flex flex-col gap-5 glow-violet hover:border-violet-500/20 transition-all duration-300 group"
            >
              {/* Icon + Score Row */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      index === 0
                        ? "rgba(139,92,246,0.15)"
                        : "rgba(34,211,238,0.15)",
                  }}
                >
                  <GraduationCap
                    size={22}
                    style={{ color: index === 0 ? "#8b5cf6" : "#22d3ee" }}
                  />
                </div>

                {/* Score Badge */}
                <div className="text-right">
                  <p
                    className="text-3xl font-extrabold gradient-text leading-none"
                  >
                    {edu.score}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{edu.scoreLabel}</p>
                </div>
              </div>

              {/* Institution + Degree */}
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-1">
                  {edu.institution}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: index === 0 ? "#a78bfa" : "#67e8f9" }}
                >
                  {edu.degree}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar size={12} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin size={12} />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
