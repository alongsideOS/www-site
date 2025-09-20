"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
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
  CheckCircle,
  Target,
} from "lucide-react"

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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="AlongsideOS" className="w-8 h-8" />
              <span className="text-xl font-semibold text-foreground">AlongsideOS</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="/#enterprise" className="text-muted-foreground hover:text-foreground transition-colors">
                Enterprise
              </a>
              <a href="/#security" className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </a>
              <Button variant="outline" size="sm">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
            <Badge variant="secondary" className="mb-6">
              Use Cases — Voice-First AI
            </Badge>
            <h1 className="text-5xl md:text-6xl font-light text-balance leading-tight mb-8">
              Voice‑First AI that works <span className="font-medium">alongside every team</span>
            </h1>
            <p className="text-2xl font-medium text-balance leading-relaxed mb-8">
              We're not adding voice as an afterthought—we're enabling voice as the primary interface. Talk to your
              tools. Whisper to your workflow. Get instant answers without breaking eye contact with your customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Try Voice Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                See Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Right TOC */}
      <div className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="flex gap-12">
            {/* Main */}
            <main className="flex-1 max-w-4xl">
              {/* Overview */}
              <section id="overview" className="scroll-mt-24 mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-secondary px-3 py-2 rounded-lg">
                  <Mic className="w-4 h-4" />
                  Voice‑First
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-balance leading-tight mt-4 mb-6">
                  What "Voice‑First" means here
                </h2>
                <p className="text-xl leading-relaxed font-medium text-muted-foreground mb-8">
                  AlongsideOS listens securely to what matters—your calls, your meetings, your quick side
                  conversations—and responds in under a second with on‑point guidance, snippets, and next steps. No
                  tab‑hopping, no copy‑paste. Just talk and move forward.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeaturePill icon={<Zap className="w-5 h-5 text-foreground" />} title="Realtime whisper" />
                  <FeaturePill icon={<ShieldCheck className="w-5 h-5 text-foreground" />} title="Private & compliant" />
                  <FeaturePill icon={<FileText className="w-5 h-5 text-foreground" />} title="Automatic logging" />
                </div>
              </section>

              {/* Sales */}
              <section id="sales" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<PhoneCall className="w-5 h-5 text-foreground" />}
                  title="Sales — voice that closes the gap"
                  accent="Speak, sell, and stay present."
                />
                <p className="text-lg leading-relaxed text-muted-foreground mt-4 mb-6">
                  Turn every rep into your best closer. AlongsideOS quietly listens to discovery and demo calls, then
                  delivers voice‑triggered prompts and crisp answers—exactly when objections surface.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Whisper‑mode objection handling with source‑linked answers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Push‑to‑talk shortcuts for pricing, integrations, and ROI stories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Next‑step nudges and auto‑logged follow‑ups in your CRM</span>
                  </li>
                </ul>
                <CTAInline />
              </section>

              {/* Support */}
              <section id="support" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<Headphones className="w-5 h-5 text-foreground" />}
                  title="Support — voice that resolves faster"
                  accent="Respond confidently, out loud."
                />
                <p className="text-lg leading-relaxed text-muted-foreground mt-4 mb-6">
                  For live chats, phone queues, or screen‑shares, agents get instant, spoken guidance: policies, runbooks,
                  and steps tailored to the situation. The AI keeps pace with the customer's voice.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Voice‑activated runbooks and troubleshooting trees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Policy‑aware guidance with compliance guardrails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Automatic case notes and resolution summaries</span>
                  </li>
                </ul>
                <CTAInline />
              </section>

              {/* Recruiting */}
              <section id="recruiting" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<Users className="w-5 h-5 text-foreground" />}
                  title="Recruiting — voice that uncovers signal"
                  accent="Stay in the conversation; let AI take the notes."
                />
                <p className="text-lg leading-relaxed text-muted-foreground mt-4 mb-6">
                  AlongsideOS listens for competencies, red flags, and highlights in real time, surfacing voice prompts to
                  dig deeper—while drafting structured feedback and next steps as you talk.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Live voice prompts tailored to role competencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Summaries in STAR format, generated as you speak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>ATS‑ready notes filed automatically after the call</span>
                  </li>
                </ul>
                <CTAInline />
              </section>

              {/* Consulting */}
              <section id="consulting" className="scroll-mt-24 mb-16">
                <SectionHeader
                  icon={<Briefcase className="w-5 h-5 text-foreground" />}
                  title="Consulting — voice that moves workshops"
                  accent="Facilitate. Decide. Document—by voice."
                />
                <p className="text-lg leading-relaxed text-muted-foreground mt-4 mb-6">
                  Workshops and exec stand‑ups move faster when answers arrive at the speed of conversation. Ask for data
                  pulls, frameworks, or next‑step drafts without leaving the room or the whiteboard.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Voice‑triggered frameworks and decision templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Instant transcripts with action items and owners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span>Client‑ready summaries delivered before the meeting ends</span>
                  </li>
                </ul>
                <CTAInline />
              </section>

              {/* Why Voice-First */}
              <section id="why-voice" className="scroll-mt-24 mb-4">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-secondary px-3 py-2 rounded-lg">
                  <Sparkles className="w-4 h-4" />
                  Voice‑First
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-balance leading-tight mt-4 mb-8">Why we're voice‑first</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base px-8">
                    Start Talking
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                    Book a Voice Demo
                  </Button>
                </div>
              </section>
            </main>

            {/* Right Sidebar TOC */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">On this page</h3>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      aria-current={activeSection === s.id ? "true" : "false"}
                      className={`w-full flex items-center gap-3 text-left text-sm py-3 px-4 rounded-xl transition-colors font-medium ${
                        activeSection === s.id
                          ? "bg-primary/10 text-foreground border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/logo.png" alt="AlongsideOS" className="w-8 h-8" />
              <span className="text-xl font-semibold">AlongsideOS</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The comprehensive <strong>AI Enablement platform</strong>: customized, governed, and delivered through
              voice.
            </p>
            <Button size="lg" className="mb-8">
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <span>© 2025 AlongsideOS Inc.</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Inline helper components */
function FeaturePill({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl border bg-card text-card-foreground shadow-sm">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
  )
}

function SectionHeader({ icon, title, accent }: { icon: React.ReactNode; title: string; accent: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-secondary px-3 py-2 rounded-lg">
        {icon}
        <span>Voice‑First AI</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-light text-balance leading-tight mt-4">{title}</h2>
      <p className="text-foreground font-medium mt-2 text-lg">{accent}</p>
    </div>
  )
}

function ReasonCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border rounded-2xl p-6 bg-card shadow-sm">
      <h4 className="font-medium text-lg mb-3">{title}</h4>
      <p className="text-muted-foreground leading-relaxed">{body}</p>
    </div>
  )
}

function CTAInline() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button className="px-6 py-3">Speak a Prompt</Button>
      <Button variant="outline" className="px-6 py-3 bg-transparent">See a Sales/Support Demo</Button>
    </div>
  )
}