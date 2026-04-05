"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

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

interface FormState {
  name: string;
  email: string;
  message: string;
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "rahuljha84211@gmail.com",
    href: "mailto:rahuljha84211@gmail.com",
    accent: "violet",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8252766445",
    href: "tel:+918252766445",
    accent: "cyan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jharahul28",
    href: personalInfo.linkedin,
    accent: "violet",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jharahul-28",
    href: personalInfo.github,
    accent: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    accent: "violet",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only: simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-500 bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all duration-200";

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-400 max-w-xl mx-auto"
          >
            I'm currently open to new opportunities. Whether you have a question, a
            project idea, or just want to say hi — my inbox is always open.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start"
        >
          {/* Left: Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                Let's build something great together.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm a full stack engineer who thrives on challenging problems — from
                modernizing legacy banking systems to architecting AI-powered platforms.
                If you're looking for someone who combines backend precision with
                frontend craftsmanship, let's talk.
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, accent }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl glass group hover:border-violet-500/15 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        accent === "violet"
                          ? "rgba(139,92,246,0.12)"
                          : "rgba(34,211,238,0.12)",
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: accent === "violet" ? "#8b5cf6" : "#22d3ee" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-slate-300 hover:text-violet-400 transition-colors duration-200 truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300 truncate">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={fadeInUp}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white btn-gradient shadow-lg shadow-violet-500/20"
              >
                {submitted ? (
                  <>
                    <span className="text-emerald-300">Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-slate-500 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
