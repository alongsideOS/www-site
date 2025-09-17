"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Mic,
  PhoneCall,
  Headphones,
  Briefcase,
  Users,
  Sparkles,
  ArrowLeft,
  Zap,
  ShieldCheck,
  FileText,
} from "lucide-react"
import Header from "@/components/header";
import Footer from "@/components/footer";

type Section = {
  id: string
  title: string
  icon?: React.ReactNode
}

const sections: Section[] = [
  { id: "overview", title: "Voice‑First Overview", icon: <Mic className="w-4 h-4" /> },
  { id: "sales", title: "Sales", icon: <PhoneCall className="w-4 h-4" /> },
  { id: "support", title: "Support", icon: <Headphones className="w-4 h-4" /> },
  { id: "recruiting", title: "Recruiting", icon: <Users className="w-4 h-4" /> },
  { id: "consulting", title: "Consulting", icon: <Briefcase className="w-4 h-4" /> },
  { id: "why-voice", title: "Why Voice‑First", icon: <Sparkles className="w-4 h-4" /> },
]

export default function UseCasesPage() {
  const [activeSection, setActiveSection] = useState<string>("overview")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash.slice(1)
    if (hash) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
          setActiveSection(hash)
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-16 md:py-20 border-b border-gray-100 bg-gradient-to-br from-white via-red-50/20 to-rose-50/30">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-8"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 leading-tight">
              Voice‑First AI that works alongside every team
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mt-6 font-medium">
              We're not adding voice as an afterthought—we're enabling voice as the primary interface. Talk to your
              tools. Whisper to your workflow. Get instant answers without breaking eye contact with your customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-8 py-4 text-lg shadow-xl">
                  Try Voice Now
                </Button>
              </Link>
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" variant="outline" className="font-bold px-8 py-4 text-lg">
                  See Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Right TOC */}
      <div className="relative bg-gradient-to-br from-white via-rose-50/10 to-pink-50/20">
        <div className="absolute inset-0 bg-gradient-radial-rose opacity-6"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 max-w-7xl">
          <div className="flex gap-12">
            {/* Main */}
            <main className="flex-1 max-w-4xl">
              {/* Overview */}
              <section id="overview" className="scroll-mt-24 mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-700 bg-red-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-100">
                  <Mic className="w-4 h-4" />
                  Voice‑First
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-4">
                  What "Voice‑First" means here
                </h2>
                <p className="text-gray-700 text-xl leading-relaxed mt-6 font-medium">
                  alongsideOS listens securely to what matters—your calls, your meetings, your quick side
                  conversations—and responds in under a second with on‑point guidance, snippets, and next steps. No
                  tab‑hopping, no copy‑paste. Just talk and move forward.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <FeaturePill icon={<Zap className="w-5 h-5 text-red-600" />} title="Realtime whisper" />
                  <FeaturePill icon={<ShieldCheck className="w-5 h-5 text-rose-600" />} title="Private & compliant" />
                  <FeaturePill icon={<FileText className="w-5 h-5 text-pink-600" />} title="Automatic logging" />
                </div>
              </section>

              {/* Sales */}
              <section id="sales" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<PhoneCall className="w-5 h-5 text-red-600" />}
                  title="Sales — voice that closes the gap"
                  accent="Speak, sell, and stay present."
                />
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Turn every rep into your best closer. alongsideOS quietly listens to discovery and demo calls, then
                  delivers voice‑triggered prompts and crisp answers—exactly when objections surface.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 text-lg">
                  <li>Whisper‑mode objection handling with source‑linked answers</li>
                  <li>Push‑to‑talk shortcuts for pricing, integrations, and ROI stories</li>
                  <li>Next‑step nudges and auto‑logged follow‑ups in your CRM</li>
                </ul>
                <CTAInline />
              </section>

              {/* Support */}
              <section id="support" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<Headphones className="w-5 h-5 text-rose-600" />}
                  title="Support — voice that resolves faster"
                  accent="Respond confidently, out loud."
                />
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  For live chats, phone queues, or screen‑shares, agents get instant, spoken guidance: policies, runbooks,
                  and steps tailored to the situation. The AI keeps pace with the customer's voice.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 text-lg">
                  <li>Voice‑activated runbooks and troubleshooting trees</li>
                  <li>Policy‑aware guidance with compliance guardrails</li>
                  <li>Automatic case notes and resolution summaries</li>
                </ul>
                <CTAInline />
              </section>

              {/* Recruiting */}
              <section id="recruiting" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<Users className="w-5 h-5 text-pink-600" />}
                  title="Recruiting — voice that uncovers signal"
                  accent="Stay in the conversation; let AI take the notes."
                />
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  alongsideOS listens for competencies, red flags, and highlights in real time, surfacing voice prompts to
                  dig deeper—while drafting structured feedback and next steps as you talk.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 text-lg">
                  <li>Live voice prompts tailored to role competencies</li>
                  <li>Summaries in STAR format, generated as you speak</li>
                  <li>ATS‑ready notes filed automatically after the call</li>
                </ul>
                <CTAInline />
              </section>

              {/* Consulting */}
              <section id="consulting" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<Briefcase className="w-5 h-5 text-red-600" />}
                  title="Consulting — voice that moves workshops"
                  accent="Facilitate. Decide. Document—by voice."
                />
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Workshops and exec stand‑ups move faster when answers arrive at the speed of conversation. Ask for data
                  pulls, frameworks, or next‑step drafts without leaving the room or the whiteboard.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 text-lg">
                  <li>Voice‑triggered frameworks and decision templates</li>
                  <li>Instant transcripts with action items and owners</li>
                  <li>Client‑ready summaries delivered before the meeting ends</li>
                </ul>
                <CTAInline />
              </section>

              {/* Why Voice-First */}
              <section id="why-voice" className="scroll-mt-24 mb-4">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-700 bg-red-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-100">
                  <Mic className="w-4 h-4" />
                  Voice‑First
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-4">Why we're voice‑first</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <ReasonCard
                    title="Presence over process"
                    body="When you're face‑to‑face—or voice‑to‑voice—typing is friction. Talking keeps you with the customer while AI does the heavy lifting."
                  />
                  <ReasonCard
                    title="Speed to clarity"
                    body="Push‑to‑talk prompts deliver the right snippet in under a second, so momentum never breaks."
                  />
                  <ReasonCard
                    title="Trust through compliance"
                    body="Guardrails keep answers policy‑safe and audit‑ready, from discovery to support escalations."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-8 py-4 text-lg shadow-xl">
                      Start Talking
                    </Button>
                  </Link>
                  <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                    <Button size="lg" variant="outline" className="font-bold px-8 py-4 text-lg">
                      Book a Voice Demo
                    </Button>
                  </Link>
                </div>
              </section>
            </main>

            {/* Right Sidebar TOC */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">On this page</h3>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      aria-current={activeSection === s.id ? "true" : "false"}
                      className={`w-full flex items-center gap-3 text-left text-sm py-3 px-4 rounded-xl transition-colors font-medium ${
                        activeSection === s.id
                          ? "bg-red-50/80 backdrop-blur-sm text-red-700 border-l-4 border-red-600 shadow-lg"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 hover:backdrop-blur-sm"
                      }`}
                    >
                      {s.icon}
                      <span>{s.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

/* Inline helper components */
function FeaturePill({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200/50 bg-white/70 backdrop-blur-sm text-lg text-gray-800 font-medium shadow-lg">
      {icon}
      <span>{title}</span>
    </div>
  )
}

function SectionHeader({ icon, title, accent }: { icon: React.ReactNode; title: string; accent: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700 bg-gray-100/80 backdrop-blur-sm px-3 py-2 rounded-lg">
        {icon}
        <span>Voice‑First AI</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">{title}</h2>
      <p className="text-red-700 font-bold mt-2 text-lg">{accent}</p>
    </div>
  )
}

function ReasonCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-gray-200/50 rounded-2xl p-6 bg-white/70 backdrop-blur-sm shadow-xl">
      <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
      <p className="text-gray-700 mt-3 text-base leading-relaxed">{body}</p>
    </div>
  )
}

function CTAInline() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
        <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 shadow-lg">Speak a Prompt</Button>
      </Link>
      <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
        <Button variant="outline" className="font-bold px-6 py-3">See a Sales/Support Demo</Button>
      </Link>
    </div>
  )
}