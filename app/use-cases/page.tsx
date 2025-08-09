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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-10 md:py-16 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
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
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Voice‑First AI that works alongside every team
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              We’re not adding voice as an afterthought—we’re enabling voice as the primary interface. Talk to your
              tools. Whisper to your workflow. Get instant answers without breaking eye contact with your customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
                  Try Voice Now
                </Button>
              </Link>
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" variant="outline">
                  See Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Right TOC */}
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-7xl">
        <div className="flex gap-10">
          {/* Main */}
          <main className="flex-1 max-w-4xl">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24 mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded">
                <Mic className="w-3 h-3" />
                Voice‑First
              </div>
              <h2 className="text-2xl md:3xl lg:text-4xl font-bold text-gray-900 mt-3">
                What “Voice‑First” means here
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                alongsideOS listens securely to what matters—your calls, your meetings, your quick side
                conversations—and responds in under a second with on‑point guidance, snippets, and next steps. No
                tab‑hopping, no copy‑paste. Just talk and move forward.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <FeaturePill icon={<Zap className="w-4 h-4" />} title="Realtime whisper" />
                <FeaturePill icon={<ShieldCheck className="w-4 h-4" />} title="Private & compliant" />
                <FeaturePill icon={<FileText className="w-4 h-4" />} title="Automatic logging" />
              </div>
            </section>

            {/* Sales */}
            <section id="sales" className="scroll-mt-24 mb-14">
              <SectionHeader
                icon={<PhoneCall className="w-5 h-5 text-gray-700" />}
                title="Sales — voice that closes the gap"
                accent="Speak, sell, and stay present."
              />
              <p className="text-gray-700 leading-relaxed mt-3">
                Turn every rep into your best closer. alongsideOS quietly listens to discovery and demo calls, then
                delivers voice‑triggered prompts and crisp answers—exactly when objections surface.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Whisper‑mode objection handling with source‑linked answers</li>
                <li>Push‑to‑talk shortcuts for pricing, integrations, and ROI stories</li>
                <li>Next‑step nudges and auto‑logged follow‑ups in your CRM</li>
              </ul>
              <CTAInline />
            </section>

            {/* Support */}
            <section id="support" className="scroll-mt-24 mb-14">
              <SectionHeader
                icon={<Headphones className="w-5 h-5 text-gray-700" />}
                title="Support — voice that resolves faster"
                accent="Respond confidently, out loud."
              />
              <p className="text-gray-700 leading-relaxed mt-3">
                For live chats, phone queues, or screen‑shares, agents get instant, spoken guidance: policies, runbooks,
                and steps tailored to the situation. The AI keeps pace with the customer’s voice.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Voice‑activated runbooks and troubleshooting trees</li>
                <li>Policy‑aware guidance with compliance guardrails</li>
                <li>Automatic case notes and resolution summaries</li>
              </ul>
              <CTAInline />
            </section>

            {/* Recruiting */}
            <section id="recruiting" className="scroll-mt-24 mb-14">
              <SectionHeader
                icon={<Users className="w-5 h-5 text-gray-700" />}
                title="Recruiting — voice that uncovers signal"
                accent="Stay in the conversation; let AI take the notes."
              />
              <p className="text-gray-700 leading-relaxed mt-3">
                alongsideOS listens for competencies, red flags, and highlights in real time, surfacing voice prompts to
                dig deeper—while drafting structured feedback and next steps as you talk.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Live voice prompts tailored to role competencies</li>
                <li>Summaries in STAR format, generated as you speak</li>
                <li>ATS‑ready notes filed automatically after the call</li>
              </ul>
              <CTAInline />
            </section>

            {/* Consulting */}
            <section id="consulting" className="scroll-mt-24 mb-14">
              <SectionHeader
                icon={<Briefcase className="w-5 h-5 text-gray-700" />}
                title="Consulting — voice that moves workshops"
                accent="Facilitate. Decide. Document—by voice."
              />
              <p className="text-gray-700 leading-relaxed mt-3">
                Workshops and exec stand‑ups move faster when answers arrive at the speed of conversation. Ask for data
                pulls, frameworks, or next‑step drafts without leaving the room or the whiteboard.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Voice‑triggered frameworks and decision templates</li>
                <li>Instant transcripts with action items and owners</li>
                <li>Client‑ready summaries delivered before the meeting ends</li>
              </ul>
              <CTAInline />
            </section>

            {/* Why Voice-First */}
            <section id="why-voice" className="scroll-mt-24 mb-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded">
                <Mic className="w-3 h-3" />
                Voice‑First
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">Why we’re voice‑first</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                <ReasonCard
                  title="Presence over process"
                  body="When you’re face‑to‑face—or voice‑to‑voice—typing is friction. Talking keeps you with the customer while AI does the heavy lifting."
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
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
                  Start Talking
                </Button>
              </Link>
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" variant="outline">
                  Book a Voice Demo
                </Button>
              </Link>
              </div>
            </section>
          </main>

          {/* Right Sidebar TOC */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">On this page</h3>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    aria-current={activeSection === s.id ? "true" : "false"}
                    className={`w-full flex items-center gap-2 text-left text-sm py-2 px-3 rounded-md transition-colors ${
                      activeSection === s.id
                        ? "bg-red-50 text-red-600 border-l-2 border-red-600"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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

      <Footer />
    </div>
  )
}

/* Inline helper components */
function FeaturePill({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700">
      {icon}
      <span>{title}</span>
    </div>
  )
}

function SectionHeader({ icon, title, accent }: { icon: React.ReactNode; title: string; accent: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-1 rounded">
        {icon}
        <span>Voice‑First AI</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">{title}</h2>
      <p className="text-red-700 font-medium mt-1">{accent}</p>
    </div>
  )
}

function ReasonCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-700 mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  )
}

function CTAInline() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-5">
      <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
        <Button className="bg-red-600 hover:bg-red-700 focus:ring-red-500">Speak a Prompt</Button>
      </Link>
      <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
        <Button variant="outline">See a Sales/Support Demo</Button>
      </Link>
    </div>
  )
}
