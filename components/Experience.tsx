"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Timeline } from "@mantine/core";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

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
            Experience
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Timeline
            active={experiences.length}
            bulletSize={44}
            lineWidth={2}
            color="violet"
            styles={{
              item: {
                paddingBottom: "2.5rem",
              },
              itemBullet: {
                backgroundColor: "#1e293b",
                borderColor: "#8b5cf6",
                borderWidth: "2px",
              },
              itemLine: {
                borderColor: "rgba(139,92,246,0.3)",
              },
            }}
          >
            {experiences.map((exp) => {
              const accentColor = companyColors[exp.company] ?? "#8b5cf6";
              return (
                <Timeline.Item
                  key={exp.id}
                  bullet={
                    <span
                      className="text-xs font-bold"
                      style={{ color: accentColor }}
                    >
                      {exp.company.slice(0, 2).toUpperCase()}
                    </span>
                  }
                  title={
                    <div className="ml-2 -mt-1">
                      {/* Company + Role Badge row */}
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <span
                          className="text-xl font-bold"
                          style={{ color: "#f1f5f9" }}
                        >
                          {exp.company}
                        </span>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: "rgba(139,92,246,0.15)",
                            color: "#a78bfa",
                            border: "1px solid rgba(139,92,246,0.25)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Role */}
                      <p
                        className="text-base font-medium mb-2"
                        style={{ color: accentColor }}
                      >
                        {exp.role}
                      </p>

                      {/* Meta: period + location */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="flex items-center gap-1.5 text-sm text-slate-400">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-400">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span
                              className="mt-0.5 text-xs font-bold flex-shrink-0"
                              style={{ color: "#8b5cf6" }}
                            >
                              ▸
                            </span>
                            <span className="text-sm text-slate-400 leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              );
            })}
          </Timeline>
        </motion.div>
      </div>
    </section>
  );
}
