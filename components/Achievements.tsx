"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code2, Brain, Users } from "lucide-react";
import { achievements, activities } from "@/lib/data";

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

const iconMap = {
  trophy: Trophy,
  code: Code2,
  brain: Brain,
  users: Users,
};

const accentColors = [
  { bg: "rgba(139,92,246,0.12)", text: "#8b5cf6", border: "rgba(139,92,246,0.25)", glow: "rgba(139,92,246,0.3)" },
  { bg: "rgba(34,211,238,0.12)", text: "#22d3ee", border: "rgba(34,211,238,0.25)", glow: "rgba(34,211,238,0.3)" },
  { bg: "rgba(167,139,250,0.12)", text: "#a78bfa", border: "rgba(167,139,250,0.25)", glow: "rgba(167,139,250,0.3)" },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
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
            Achievements
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap] ?? Trophy;
            const colors = accentColors[index % accentColors.length];

            return (
              <motion.div
                key={achievement.id}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300 cursor-default"
                style={{ borderColor: "rgba(241,245,249,0.08)" }}
                whileHover={{
                  borderColor: colors.border,
                  boxShadow: `0 0 24px ${colors.glow}, 0 0 48px ${colors.glow.replace("0.3", "0.12")}`,
                  scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  <Icon size={26} style={{ color: colors.text }} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Activities Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-slate-100 mb-6 text-center"
          >
            Activities & Leadership
          </motion.h3>

          <div className="space-y-4">
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start group hover:border-violet-500/20 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.20)",
                  }}
                >
                  <Users size={20} style={{ color: "#8b5cf6" }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h4 className="text-base font-bold text-slate-100">
                      {activity.organization}
                    </h4>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(34,211,238,0.12)",
                        color: "#22d3ee",
                        border: "1px solid rgba(34,211,238,0.20)",
                      }}
                    >
                      {activity.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
