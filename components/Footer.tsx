"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-white/[0.06]"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Branding */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
                RJ
              </div>
              <span className="font-semibold text-slate-300 text-sm">Rahul Jha</span>
            </div>
            <p className="text-xs text-slate-500">
              Built with{" "}
              <span className="text-red-400">❤️</span>{" "}
              using Next.js & Tailwind CSS &mdash; &copy; {currentYear}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
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
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 rounded-lg glass text-slate-400 hover:text-violet-400 hover:border-violet-500/25 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Right: Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-xs font-medium text-slate-400 hover:text-violet-400 hover:border-violet-500/25 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
