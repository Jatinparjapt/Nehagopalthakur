"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants, cubicBezier } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Mail,
  Sparkles,
  Mic2,
  Users2,
  LineChart,
  HeartHandshake,
  Briefcase,
  Star,
  Rocket,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  }),
};


const SectionCard: React.FC<{
  label: string;
  title: string;
  children: React.ReactNode;
  index?: number;
}> = ({ label, title, children, index = 0 }) => (
  <motion.section
    className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 px-5 py-6 sm:px-8 sm:py-8 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_80px_rgba(236,72,153,0.55)] hover:-translate-y-1"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    custom={index}
  >
    <div className="pointer-events-none absolute inset-px rounded-[26px] bg-gradient-to-tr from-pink-500/5 via-purple-500/5 to-cyan-400/5" />
    <div className="relative flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-pink-100">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{label}</span>
        </div>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-50">
        {title}
      </h2>
      <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  </motion.section>
);

const PillStat: React.FC<{
  label: string;
  value: string;
  note?: string;
}> = ({ label, value, note }) => (
  <div className="flex flex-col gap-1 rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3">
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
      {label}
    </p>
    <p className="text-lg font-semibold text-slate-50">{value}</p>
    {note && <p className="text-xs text-slate-400">{note}</p>}
  </div>
);

const PrincipleChip: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="group flex flex-col gap-1 rounded-2xl border border-slate-700/60 bg-slate-900/80 px-4 py-3 hover:border-pink-400/70 hover:bg-slate-900 transition-colors">
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
      <Star className="h-3.5 w-3.5 text-pink-400" />
      {title}
    </p>
    <p className="text-xs sm:text-sm text-slate-300 mt-1">
      {desc}
    </p>
  </div>
);

const TimelineItem: React.FC<{
  year: string;
  role: string;
  org: string;
  points: string[];
}> = ({ year, role, org, points }) => (
  <div className="relative pl-6 sm:pl-8">
    <div className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-pink-400 to-orange-300 shadow-[0_0_0_4px_rgba(244,114,182,0.25)]" />
    <div className="absolute left-2.5 top-4 bottom-0 w-px bg-slate-700/70" />
    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      {year}
    </div>
    <div className="text-sm sm:text-base font-semibold text-slate-50">
      {role}
    </div>
    <div className="text-xs sm:text-sm text-slate-400 mb-2">{org}</div>
    <ul className="space-y-1.5 text-xs text-slate-300">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const NehaGopalThakurPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scrollWidth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <motion.div
        className="fixed left-0 top-0 z-30 h-0.5 w-full origin-left bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400"
        style={{ scaleX: scrollWidth }}
      />
      {/* Glow background */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-500/25 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,_#020617_60%,_#000_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617_0%,rgba(15,23,42,0.3)_40%,rgba(15,23,42,0.9)_100%),radial-gradient(circle_at_top,_rgba(148,163,184,0.25)_0,_transparent_55%)] opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20" />
      </motion.div>

      {/* Top navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 via-orange-400 to-amber-300 text-slate-950 font-bold shadow-[0_0_35px_rgba(248,113,113,0.9)]"
            whileHover={{ scale: 1.06, rotate: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
              NG
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide text-slate-50">
                Neha Gopal Thakur
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Operator • Culture Architect • COO Mindset
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 md:flex">
            <a href="#about" className="rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-pink-300 transition-colors">
              About
            </a>
            <a href="#journey" className="rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-pink-300 transition-colors">
              Journey
            </a>
            <a href="#ops" className="rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-pink-300 transition-colors">
              Operations
            </a>
            <a href="#leadership" className="rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-pink-300 transition-colors">
              Leadership
            </a>
            <a href="#media" className="rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-pink-300 transition-colors">
              Media
            </a>
            <a href="#contact" className="rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-pink-300 transition-colors">
              Connect
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:neha@tallento.ai"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-pink-400/80 hover:text-pink-50"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Say Hello</span>
            </a>
          </div>
        </div>
      </header>

      {/* Floating social bar */}
      <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        <span className="h-10 w-px bg-gradient-to-b from-pink-500/60 via-slate-500/40 to-cyan-400/60" />
        <a
          href="mailto:neha@tallento.ai"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/90 text-slate-300 hover:border-pink-400/80 hover:text-pink-200 transition-colors"
          aria-label="Email Neha"
        >
          <Mail className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/90 text-slate-300 hover:border-pink-400/80 hover:text-pink-200 transition-colors"
          aria-label="Neha on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/90 text-slate-300 hover:border-pink-400/80 hover:text-pink-200 transition-colors"
          aria-label="Neha on Instagram"
        >
          <Instagram className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/90 text-slate-300 hover:border-pink-400/80 hover:text-pink-200 transition-colors"
          aria-label="Back to top"
        >
          <Rocket className="h-4 w-4" />
        </button>
        <span className="h-10 w-px bg-gradient-to-b from-cyan-400/60 via-slate-500/40 to-pink-500/60" />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 pb-16 sm:gap-8 sm:px-6 sm:py-10 lg:gap-10">
        {/* Hero */}
        <motion.section
          className="relative grid gap-8 rounded-[28px] border border-slate-800/80 bg-slate-950/70 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:p-9 shadow-[0_0_70px_rgba(15,23,42,0.85)] overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="pointer-events-none absolute inset-px rounded-[24px] bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-sky-400/10" />

          <div className="relative flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Building Tallento with Heart + Discipline</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Director & COO — Tallento.ai
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-50">
                The Operator Behind
                <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  {" "}
                  India’s Education Hiring Revolution
                </span>
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-slate-300">
                Neha spent 12+ years in a top IT MNC before stepping away from a stable career to
                co-build Tallento.ai from the ground up. She designs the invisible systems that keep a
                100+ member team aligned, culture-positive, and obsessed with outcomes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-amber-300 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(248,113,113,0.7)]"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Mic2 className="h-4 w-4" />
                <span>Invite Neha for a Talk / Panel</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>Currently mentoring and scaling ops at Tallento.ai</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <PillStat label="Years in Tech & Ops" value="12+" note="IT + EdTech + Recruitment" />
              <PillStat label="Teams Managed" value="100+" note="HR, Sales, Ops, Support" />
              <PillStat label="Institutes Served" value="5,500+" note="Coaching, schools & universities" />
              <PillStat label="Cities Impacted" value="100+" note="Pan-India hiring ecosystem" />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1">
                <Users2 className="h-3.5 w-3.5" />
                People-first but performance-obsessed
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1">
                <LayoutDashboard className="h-3.5 w-3.5" />
                Builds systems, not chaos
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1">
                <HeartHandshake className="h-3.5 w-3.5" />
                Protects culture & customer equally
              </span>
            </div>
          </div>

          {/* Right side: holographic profile */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-[32px] border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_0_80px_rgba(15,23,42,1)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 0 90px rgba(248,113,113,0.9)" }}
            >
              <div className="absolute inset-px rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_55%)]" />

              <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
                      Operator Profile
                    </span>
                    <span className="text-sm font-semibold text-slate-50">
                      Neha Gopal Thakur
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-900/70 px-2 py-1 text-[10px] text-slate-300 border border-slate-600/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    LIVE
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full border border-pink-400/70 bg-slate-950/80 overflow-hidden flex items-center justify-center text-xs font-semibold tracking-wide text-pink-100">
                    NG
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Add Neha’s portrait here for the live profile look.
                  </p>
                </div>

                <div className="space-y-2 mt-3 text-[11px] text-slate-200">
                  <p className="text-xs text-slate-200/90">
                    “If we fix culture, process and clarity, growth is just math.”
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl bg-slate-950/60 px-3 py-2 border border-slate-700/70">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                        Core Zone
                      </p>
                      <p className="text-xs text-slate-100 mt-0.5">Operations, People, Delivery</p>
                    </div>
                    <div className="rounded-2xl bg-slate-950/60 px-3 py-2 border border-slate-700/70">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                        Current Focus
                      </p>
                      <p className="text-xs text-slate-100 mt-0.5">Scale Tallento without losing soul</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-[11px] text-slate-200">
                  <div className="flex flex-col">
                    <span className="uppercase tracking-[0.24em] text-slate-500">OPS HEALTH</span>
                    <span className="text-sm font-semibold text-emerald-300">92%</span>
                    <span className="text-[10px] text-slate-400">SLA, morale & delivery index</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-100">
                      <ArrowRight className="h-3 w-3" />
                      +8% vs last quarter
                    </div>
                    <div className="flex gap-1.5 text-[10px] text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Users2 className="h-3 w-3" /> Team
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <LineChart className="h-3 w-3" /> Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About section */}
        <div id="about" className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <SectionCard label="About" title="From corporate comfort to startup chaos — by choice">
            <p>
              Before Tallento.ai, Neha led large-scale teams and delivery mandates at a top IT MNC. She
              understood process, governance, and how to ship reliably inside a giant system. But she also saw
              how India’s talent markets — especially in education — were disorganized, opaque and unfair.
            </p>
            <p className="mt-3">
              When Sandeep started FPSJOBS (now Tallento.ai) from a small room in Muzaffarpur, Neha didn’t just
              advise from the sidelines. She walked away from 12 years of corporate comfort to join him fully.
              From that day, every recruiter, candidate and client touchpoint has passed through her lens of
              empathy + discipline.
            </p>
            <p className="mt-3 text-slate-300">
              Today, she acts as the stabilizing force in a high-velocity startup — protecting culture, enforcing
              clarity, and making sure big vision translates into daily execution.
            </p>
          </SectionCard>

          <SectionCard label="Snapshot" title="Neha in one view" index={1}>
            <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="space-y-2">
                <PrincipleChip
                  title="Operating Superpower"
                  desc="Turns chaos into calm systems without losing speed or humanity."
                />
                <PrincipleChip
                  title="People Philosophy"
                  desc="High expectations, high support. No politics. Radical clarity in feedback."
                />
              </div>
              <div className="space-y-2">
                <PrincipleChip
                  title="What She Protects"
                  desc="Client trust, team morale, and non-negotiable ethics in hiring & operations."
                />
                <PrincipleChip
                  title="What Drives Her"
                  desc="Building a company where people are proud of both the work and how it’s done."
                />
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Journey */}
        <div id="journey" className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <SectionCard label="Journey" title="Career arc: IT leader to COO-mindset founder partner" index={2}>
            <div className="space-y-4">
              <TimelineItem
                year="2009 — 2021"
                role="Manager & Delivery Leader"
                org="Top IT MNC (Pune)"
                points={[
                  "Led multi-city teams delivering critical projects for global clients.",
                  "Built reputation for zero-escalation delivery and high team retention.",
                  "Mentored young managers, especially women stepping into leadership roles.",
                ]}
              />
              <TimelineItem
                year="2021 onwards"
                role="Director & Co-Builder, Tallento.ai (formerly FPSJOBS)"
                org="Jaipur & Pan-India"
                points={[
                  "Left stable corporate role to go all-in on building Tallento.ai.",
                  "Designed hiring, training and performance systems for 100+ internal team members.",
                  "Co-created culture frameworks, recruiter training academies and client success playbooks.",
                ]}
              />
            </div>
          </SectionCard>

          <SectionCard label="Now" title="What Neha is solving right now" index={3}>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-pink-400" />
                <span>
                  Making Tallento’s recruitment engine scalable without losing the personal touch that built trust
                  with 1.8M+ educators.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-pink-400" />
                <span>
                  Installing discipline in sales, HR and delivery teams so that promises to clients and candidates
                  are honoured on time, every time.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-pink-400" />
                <span>
                  Building internal leaders who can run verticals independently while staying aligned to Tallento’s
                  values.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-pink-400" />
                <span>
                  Designing future-ready ops playbooks for new products: Tribe, Tallento Living, mentorship, and IT
                  recruitment.
                </span>
              </li>
            </ul>
          </SectionCard>
        </div>

        {/* Operations cockpit */}
        <div id="ops" className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <SectionCard
            label="Operator’s Cockpit"
            title="How Neha reads the company in one glance"
            index={4}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Neha’s dashboard isn’t just revenue graphs. She tracks a blend of hard metrics and soft signals to
                  judge if the company is truly healthy.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      <strong>Execution Health:</strong> SLAs met, joins delivered vs commitment, billing accuracy.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      <strong>Culture Health:</strong> attendance, energy on the floor, conflict resolution quality.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      <strong>Client Trust:</strong> escalations, repeat mandates, response time on tough cases.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      <strong>Team Growth:</strong> promotions from within, skill upgrades, ownership shown.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-pink-300" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      LIVE OPS SNAPSHOT
                    </p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-300 border border-slate-600/70">
                    <CalendarDays className="h-3 w-3" />
                    Today
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <PillStat label="Open Mandates" value="148" note="across IIT-JEE, NEET, K-12 & IT" />
                  <PillStat label="Join Probability" value="78%" note="based on RTJ & pipeline" />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-emerald-200">Green Zone</p>
                    <p className="text-xs mt-1">Billing, delivery and client NPS are on track.</p>
                  </div>
                  <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 px-3 py-2">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-amber-200">Watchlist</p>
                    <p className="text-xs mt-1">Attendance dip in one pod + delayed feedback from 3 clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard label="Playbooks" title="Neha-style operating rules" index={5}>
            <ol className="space-y-2 text-sm text-slate-300">
              <li>
                <strong>1. No silent confusion.</strong> If a team doesn’t understand something, it’s a process
                design problem, not a talent problem.
              </li>
              <li>
                <strong>2. Feedback is a favor.</strong> Honest, specific feedback — given with respect — is how people
                grow. Sugar-coating only delays pain.
              </li>
              <li>
                <strong>3. Protect deep work.</strong> Noise, gossip and constant context-switching kill output. She
                designs days so people can actually finish meaningful work.
              </li>
              <li>
                <strong>4. Clarity beats drama.</strong> Written SOPs, clear owners and clean escalation paths solve
                most “political” issues.
              </li>
              <li>
                <strong>5. Values &gt; shortcuts.</strong> No revenue target is worth breaking trust — with candidates,
                clients or team.
              </li>
            </ol>
          </SectionCard>
        </div>

        {/* Leadership, culture & media */}
        <div id="leadership" className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <SectionCard label="Leadership" title="How people experience Neha as a leader" index={6}>
            <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
              <div className="space-y-2">
                <p>
                  Team members often describe Neha as “someone who will push you hard, but never leave you alone in
                  the problem.” She is direct, but deeply fair.
                </p>
                <ul className="space-y-2">
                  <li>
                    • Asks tough questions without attacking the person.
                  </li>
                  <li>
                    • Remembers personal context: family, health, background.
                  </li>
                  <li>
                    • Celebrates silent performers, not just loud voices.
                  </li>
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3 sm:p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  CULTURE SNAPSHOT
                </p>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <PillStat label="Team NPS" value="9.1 / 10" note="internal pulse checks" />
                  <PillStat label="Attrition" value="Low" note="vs industry benchmark" />
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Her goal is simple: build a place where serious, hungry people feel respected, stretched and safe
                  enough to do the best work of their careers.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard label="Media" title="Talks, panels & conversations" index={7}>
            <p className="text-sm text-slate-300">
              Neha speaks most comfortably about real operations, not buzzwords. If you’re curating a stage or
              podcast on any of these themes, she’s the right voice:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                • Building discipline in early-stage startups without killing heart.
              </li>
              <li>
                • Women in leadership beyond tokenism: making real decisions.
              </li>
              <li>
                • Turning recruitment chaos into a predictable engine in India.
              </li>
              <li>
                • Managing big-career transitions: corporate to founder life.
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              For speaking invites, closed-door leadership sessions or culture workshops, reach out via email or
              LinkedIn.
            </p>
          </SectionCard>
        </div>

        {/* Contact & footer */}
        <div id="contact" className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <SectionCard label="Connect" title="Bring Neha into your next problem-solving room" index={8}>
            <p className="text-sm text-slate-300">
              Whether you’re a founder struggling with team chaos, an HR head trying to fix recruitment, or an
              educator building your own institution — Neha is most excited when there’s a real, messy problem to
              solve.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-300">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  DIRECT CHANNELS
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:neha@tallento.ai"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-pink-400/80 hover:text-pink-50"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email: neha@tallento.ai</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-pink-400/80 hover:text-pink-50"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-pink-400/80 hover:text-pink-50"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Follow behind-the-scenes</span>
                  </a>
                </div>
              </div>

              <div className="space-y-2 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3 sm:p-4 text-sm text-slate-300">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  HOW SHE LIKES TO WORK
                </p>
                <ul className="mt-2 space-y-1.5 text-xs">
                  <li>
                    • Clear context + honest data over glossy decks.
                  </li>
                  <li>
                    • Few, decisive meetings instead of endless back-and-forth.
                  </li>
                  <li>
                    • Ownership on both sides for implementing what’s decided.
                  </li>
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard label="Personal" title="Beyond spreadsheets & dashboards" index={9}>
            <p className="text-sm text-slate-300">
              Neha is a quiet backbone more than a loud brand. She’s most herself in:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              <li>
                • Long walks where ideas become plans.
              </li>
              <li>
                • One-on-one conversations with team members stuck in tough life decisions.
              </li>
              <li>
                • Evenings where family, work and future plans all share the same table.
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              This website is a living snapshot. As Tallento evolves, so will Neha’s role, experiments and lessons.
              The north star stays the same: build something big, solid and deeply humane.
            </p>
          </SectionCard>
        </div>

        <footer className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-4 text-[11px] text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Neha Gopal Thakur. Built with love, clarity & discipline.</p>
          <p>
            Co-building <span className="text-pink-300">Tallento.ai</span> & ecosystems for honest opportunity.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default NehaGopalThakurPage;
