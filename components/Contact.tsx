"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

// ─── Animation Variants ────────────────────────────────────────────────────────

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

// ─── Types ─────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ─── Static Data ───────────────────────────────────────────────────────────────

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

const EMPTY_FORM: FormFields = { name: "", email: "", message: "" };

// ─── Validation ────────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState<string>("");

  // Validate a single field on blur
  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types (only if field was already touched)
    if (touched[name as keyof FormFields]) {
      const fieldErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormFields] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Run full validation before submit
    const allErrors = validate(form);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const endpoint = 'https://formspree.io/f/mreorzzj';
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          // Honeypot — Formspree ignores submissions where this is filled
          _gotcha: "",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(EMPTY_FORM);
        setErrors({});
        setTouched({});
        // Auto-reset banner after 6 s
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg =
          (data as { error?: string }).error ||
          "Submission failed. Please try again or email me directly.";
        setServerError(msg);
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-500 bg-white/[0.04] border transition-all duration-200 focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed";

  const inputClass = (field: keyof FormFields) =>
    `${inputBase} ${errors[field] && touched[field]
      ? "border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20"
      : "border-white/[0.08] focus:border-violet-500/50 focus:ring-violet-500/25"
    }`;

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
            I&apos;m currently open to new opportunities. Whether you have a question, a
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
                Let&apos;s build something great together.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&apos;m a full stack engineer who thrives on challenging problems — from
                modernizing legacy banking systems to architecting AI-powered platforms.
                If you&apos;re looking for someone who combines backend precision with
                frontend craftsmanship, let&apos;s talk.
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
              noValidate
              className="glass rounded-2xl p-7 space-y-5"
              aria-label="Contact form"
            >
              {/* Honeypot — hidden from real users, bots fill it in */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
                style={{ display: "none" }}
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Full Name <span aria-hidden="true" className="text-violet-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  disabled={isLoading || isSuccess}
                  aria-invalid={!!(errors.name && touched.name)}
                  aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                  className={inputClass("name")}
                />
                <AnimatePresence>
                  {errors.name && touched.name && (
                    <motion.p
                      id="name-error"
                      role="alert"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle size={11} aria-hidden="true" />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Email Address <span aria-hidden="true" className="text-violet-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  disabled={isLoading || isSuccess}
                  aria-invalid={!!(errors.email && touched.email)}
                  aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                  className={inputClass("email")}
                />
                <AnimatePresence>
                  {errors.email && touched.email && (
                    <motion.p
                      id="email-error"
                      role="alert"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle size={11} aria-hidden="true" />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Message <span aria-hidden="true" className="text-violet-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  disabled={isLoading || isSuccess}
                  aria-invalid={!!(errors.message && touched.message)}
                  aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                  className={inputClass("message") + " resize-none"}
                />
                <AnimatePresence>
                  {errors.message && touched.message && (
                    <motion.p
                      id="message-error"
                      role="alert"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle size={11} aria-hidden="true" />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Server-level error banner */}
              <AnimatePresence>
                {status === "error" && serverError && (
                  <motion.div
                    role="alert"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-xs text-red-300 bg-red-500/10 border border-red-500/20"
                  >
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{serverError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <CheckCircle2 size={14} className="flex-shrink-0" aria-hidden="true" />
                    <span>Message sent! I&apos;ll get back to you within 24 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading || isSuccess}
                whileHover={!isLoading && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isLoading && !isSuccess ? { scale: 0.98 } : {}}
                aria-label={isLoading ? "Sending message…" : "Send message"}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white btn-gradient shadow-lg shadow-violet-500/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none transition-opacity duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span className="text-emerald-200">Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={15} aria-hidden="true" />
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
