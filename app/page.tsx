"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GoogleTagManager } from "@/components/google-tag-manager"
import { handleCalendarClick } from "@/lib/calendar-utils"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeEditor } from "@/components/code-editor"
import { Underline } from "@/components/ui/underline"
import {
  ArrowRight,
  Mic,
  Shield,
  Users,
  Zap,
  CheckCircle,
  Star,
  Calendar,
  BarChart3,
  Target,
  Clock,
  TrendingUp,
  Award,
  Menu,
  X,
  FileText,
  RotateCw,
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const exampleSystemPrompt = `<!-- SYSTEM PROMPT -->
<system_prompt version="3.0">
  <identity>
    <name>Alongside</name>
    <role>Live sales assistant analyzing conversations and screens in real-time</role>
  </identity>
  <response_hierarchy>
    <priority level="1">
      <trigger>Question detected (50%+ confidence)</trigger>
      <action>Answer immediately</action>
    </priority>
    <priority level="2">
      <trigger>Company/technical term in last 15 words</trigger>
      <action>Define it</action>
    </priority>
    <priority level="4">
      <trigger>Sales objection detected</trigger>
      <action>Counter with specific response tied to conversation</action>
    </priority>
  </response_hierarchy>
  <response_types>
    <technical>
      <rule>Start with code immediately</rule>
      <rule>Comment every line</rule>
    </technical>
    <behavioral>
      <rule>Use STAR format (Situation, Task, Action, Result)</rule>
    </behavioral>
  </response_types>
  <never>
    <rule>Never summarize unless asked</rule>
    <rule>Never give unsolicited advice</rule>
  </never>
</system_prompt>

<!-- APPLICATION WAVE EXAMPLE -->
<wave id="sales-objection-security">
  <role>Sales Engineer</role>
  <trigger>
    Prospect asks: "How secure is your platform?"
  </trigger>
  <response>
    Emphasize SOC2 + ISO27001 certifications, data encryption in transit & at rest.
    Highlight admin-only role controls and real-time audit trails.
    Close with: "Would you like our compliance one-pager?"
  </response>
  <compliance>
    Language approved by Legal & Security teams. Immutable.
  </compliance>
</wave>`

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#enterprise", label: "Enterprise" },
    { href: "#security", label: "Security" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GoogleTagManager />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center space-x-3">
            <img src="/logo.png" alt="AlongsideOS" className="h-8 w-auto" />
            <span className="text-xl font-semibold"><Underline>AlongsideOS</Underline></span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleCalendarClick}>
              Request Demo
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="container mx-auto grid gap-4 px-6 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full" onClick={handleCalendarClick}>
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="py-24 sm:py-32 md:py-40">
          <div className="container mx-auto max-w-7xl px-6 text-center">
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-primary mb-4">
              <Underline>AlongsideOS</Underline>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              The Era of Desktop AI
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Stop jumping between apps. Use your voice to complete tasks and automate complex
              workflows with <Underline>AlongsideOS</Underline>, the world’s first voice-first AI workflow platform.
            </p>
            <div className="mt-10 flex justify-center gap-x-4">
              <Button size="lg" onClick={handleCalendarClick}>
                Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See it in Action
              </Button>
            </div>
          </div>
        </section>

        {/* Philosophy / Core Value */}
        <section id="features" className="py-24 sm:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI That Sees, Hears, and Acts
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Real enterprise AI belongs on your desktop — <Underline>alongside</Underline> your OS, where it can see
                your screen, hear your context, and act with you instantly.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Mic, title: "See", desc: "Understands your desktop screen and context." },
                { icon: Mic, title: "Hear", desc: "Listens to your voice and ongoing conversation." },
                { icon: Zap, title: "Respond", desc: "Uses AI to answer, act, and automate instantly." },
                { icon: Shield, title: "Govern", desc: "Enterprise-grade guardrails and audit trails built in." },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="py-24 sm:py-32 bg-primary dark:bg-card">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground dark:text-foreground">
                The <Underline colorClass="text-primary-foreground dark:text-foreground">AlongsideOS</Underline> Platform
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 dark:text-muted-foreground">
                Our platform transforms enterprise knowledge into voice-driven workflows called{" "}
                <strong className="text-primary-foreground dark:text-foreground">Waves</strong>. Each Wave is a reusable, auditable AI workflow,
                triggered by voice and deployed directly to the desktop.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: FileText, title: "Generates", description: "Capture internal knowledge as structured workflows." },
                { icon: RotateCw, title: "Refines", description: "Improve and re-train Waves with real usage data." },
                { icon: ArrowRight, title: "Deploys", description: "Push updates directly to employee desktops." },
                { icon: BarChart3, title: "Audits", description: "Track outcomes, compliance, and ROI." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground dark:bg-primary/10 dark:text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-foreground dark:text-foreground">{item.title}</h3>
                  <p className="mt-1 text-primary-foreground/80 dark:text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-24 text-center">
              <h3 className="font-mono text-2xl font-bold tracking-tighter text-primary-foreground dark:text-foreground sm:text-3xl">
                Enterprise-Grade Security
              </h3>
              <p className="font-mono mt-3 text-lg text-primary-foreground/80 dark:text-muted-foreground">
                Built with the scale, security, and governance that modern enterprises demand.
              </p>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-24 sm:py-32 bg-card dark:bg-background">
          <div className="container mx-auto max-w-4xl px-6">
            <h3 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-foreground">
              Example: Voice-Triggered Security Wave
            </h3>
            <CodeEditor
              code={exampleSystemPrompt}
              language="xml"
              title="security-wave-example.xml"
              collapsible={true}
              previewLines={12}
            />
          </div>
        </section>

        {/* Enterprise Features */}
        <section id="enterprise" className="py-24 sm:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Core Enterprise Capabilities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful, intuitive tools for teams and admins to build, deploy, and manage AI
                workflows with confidence.
              </p>
            </div>

            <div className="mt-16">

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                {[
                  "Role-based access control",
                  "Admin-only customization privileges",
                  "Audit trails for prompts and knowledge changes",
                  "Least-privilege defaults and compliance-ready design",
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <span className="text-muted-foreground text-sm text-left">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-8">
                <h3 className="text-2xl font-semibold">For Teams</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Trigger prompts by voice or click",
                    "Save and star useful answers",
                    "Propose new prompts to the library",
                    "Share snippets with peers",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-8">
                <h3 className="text-2xl font-semibold">For Admins</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Manage roles, permissions, and access",
                    "Approve/reject prompt suggestions",
                    "Configure compliance guardrails",
                    "Audit usage and track analytics",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases & Outcomes */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Where Enterprises Use AlongsideOS
              </h2>
            </div>
            <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: TrendingUp, title: "Win Sales Deals", desc: "Handle technical and pricing objections live." },
                { icon: Shield, title: "Stay Compliant", desc: "Keep regulated answers aligned and safe." },
                { icon: Users, title: "Accelerate Onboarding", desc: "New hires learn directly in live calls." },
                { icon: Target, title: "Elevate Support", desc: "Resolve issues faster with guided troubleshooting prompts." },
                { icon: Clock, title: "Faster ramp", desc: "Reps customer-ready in days, not weeks." },
                { icon: Award, title: "Higher win rates", desc: "Live objection handling boosts confidence." },
                { icon: Shield, title: "Reduced risk", desc: "Approved answers only, in every call." },
                { icon: BarChart3, title: "Stronger ROI", desc: "Enablement tied directly to your custom content." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Enterprises Say
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  From accelerating sales cycles to ensuring compliance, see how leaders are
                  leveraging <Underline>AlongsideOS</Underline>.
                </p>
              </div>
              <div className="space-y-8">
                <figure className="rounded-xl border bg-card p-6">
                  <div className="mb-2 flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <blockquote className="text-base text-foreground">
                    "AlongsideOS's Customization Suite made our product knowledge usable in real
                    time. That changed our win rate."
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    — VP Sales, SaaS Enterprise
                  </figcaption>
                </figure>
                <figure className="rounded-xl border bg-card p-6">
                  <div className="mb-2 flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <blockquote className="text-base text-foreground">
                    "Team Prompts + Active Prompt turned compliance from a liability into a
                    strength."
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    — Head of Risk, Financial Services
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>



        {/* CTA */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-2xl bg-primary/5 px-6 py-20 sm:py-24 md:px-12">
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                  Start Your Enterprise Pilot
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Book a personalized demo and discover how voice AI can transform your workflow.
                </p>
                <Button size="lg" className="mt-8" onClick={handleCalendarClick}>
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 sm:py-32 border-t">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-12 w-full">
              {[
                { q: "How does Google Calendar integration help?", a: "It preloads meeting context so Waves are relevant from the first second." },
                { q: "What are Waves?", a: "Waves are <strong>voice-based AI workflows</strong> generated and deployed by the AlongsideOS Platform." },
                { q: "How are Waves different from prompts?", a: "Prompts are static. <strong>Waves are dynamic, role-aware, auditable workflows</strong> tied to compliance and outcomes." },
                { q: "Does AlongsideOS record meetings?", a: "No. It focuses on in-call enablement. Recording is admin-configurable." },
                { q: "Who controls customization?", a: "Admins only. They define, refine, and approve all Waves." },
              ].map(({ q, a }, i) => (
                <AccordionItem key={i} value={`item-${i + 1}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: a }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="AlongsideOS" className="h-7 w-auto" />
              <span className="text-lg font-semibold"><Underline>AlongsideOS</Underline></span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <Underline>AlongsideOS</Underline> Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm font-medium">
              <a href="#" className="text-muted-foreground/80 hover:text-foreground">Privacy</a>
              <a href="#" className="text-muted-foreground/80 hover:text-foreground">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
