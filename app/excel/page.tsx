"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  ArrowRight,
  Mic, 
  Zap, 
  Headphones, 
  Bot, 
  BarChart3, 
  Sigma, 
  Replace, 
  Wand2, 
  Shield, 
  Database, 
  ArrowLeft,
  CheckCircle,
  Menu,
  X
} from "lucide-react"

export default function ExcelPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
            
            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-50">
            <div className="px-6 py-4 space-y-4">
              <a
                href="/#features"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/#enterprise"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise
              </a>
              <a
                href="/#security"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
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
              Voice‑First for Excel
            </Badge>
            <h1 className="text-5xl md:text-6xl font-light text-balance leading-tight mb-8">
              AI Built for Excel — now <span className="font-medium">Voice‑First</span>
            </h1>
            <p className="text-2xl font-medium text-balance leading-relaxed mb-8">
              For the first time, build and operate spreadsheets by speaking. Work in real time during meetings,
              auto‑update models as conversations evolve, and chat to tell Excel exactly what to do—no copy‑paste, no
              context switching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Download for Excel
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-balance text-center mb-4">
            Speak models into existence. Review. Approve. Ship.
          </h2>
          <p className="text-xl text-center max-w-4xl mx-auto mt-4 font-medium text-muted-foreground mb-12">
            AlongsideOS understands your grid, listens securely to the room, and applies changes with auditable
            precision. Use your voice or chat—both drive the same Excel‑native actions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Zap className="w-6 h-6 text-foreground" />
                  Real‑time during meetings
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Press‑to‑talk, propose a change, and see diffs before applying. Budgets, sensitivity tables, and
                roll‑ups update as you speak—without breaking eye contact.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Sigma className="w-6 h-6 text-foreground" />
                  Formulas, pivots, charts by voice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                "Insert a pivot by region," "Explain this INDEX‑MATCH," "Convert to XLOOKUP," or "Chart MTD vs plan."
                AlongsideOS writes, explains, and fixes in place.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Bot className="w-6 h-6 text-foreground" />
                  Chat to command Excel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Prefer typing? Chat in plain English: clean data, label outliers, create scenarios, add notes—then apply
                with one click.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Headphones className="w-6 h-6 text-foreground" />
                  1) Listen securely
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                In meeting mode, AlongsideOS privately transcribes your conversation and tracks sheet context—never
                joining the call, never visible to others.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Wand2 className="w-6 h-6 text-foreground" />
                  2) Propose precise changes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Voice or chat instructions generate a preview: formulas, ranges, pivots, or charts—complete with
                explanations and source references.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Replace className="w-6 h-6 text-foreground" />
                  3) Apply and auto‑document
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Approve to apply. We log what changed, where, and why—perfect for peer review, audit, and handoffs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Excel use cases */}
      <section id="use-cases" className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Built for real Excel work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <BarChart3 className="w-6 h-6 text-foreground" />
                  FP&A and planning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Speak sensitivities, what‑ifs, or driver tweaks. Generate scenarios, reconcile versions, and push
                annotated summaries on the fly.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Database className="w-6 h-6 text-foreground" />
                  Data clean‑up and modeling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Fill gaps, standardize labels, dedupe, and detect outliers by voice. Convert ad‑hoc sheets into tidy
                models with documented steps.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Sigma className="w-6 h-6 text-foreground" />
                  Formula help and auditing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Ask "why is this returning blank?" or "explain this array formula." Get fixes, tests, and safer
                alternatives—applied only with your approval.
              </CardContent>
            </Card>
            <Card className="bg-card border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <Wand2 className="w-6 h-6 text-foreground" />
                  Charts and reporting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                "Create a variance chart by product," "Add MTD annotations," or "Draft a commentary paragraph." Voice or
                chat, results arrive in‑sheet.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Private by design</h2>
              <p className="text-xl font-medium text-muted-foreground">
                We keep meeting audio and sheet context protected with end‑to‑end encrypted transport. Content is never
                used for model training without explicit consent. Admins control retention, export, and redaction.
              </p>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 font-medium text-lg mb-4">
                <Shield className="w-6 h-6 text-foreground" />
                Compliance highlights
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span>AES‑256 at rest, TLS 1.3 in transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Role‑based access controls and SSO/SAML</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Audit logs for in‑sheet changes and approvals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Policy guardrails for regulated language</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="what-is-voice-first" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">What do you mean by "voice‑first for Excel"?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                AlongsideOS lets you operate Excel by speaking—create formulas, pivots, and charts; clean data; generate
                scenarios; and document changes—while you stay focused on the conversation. You can also chat if you
                prefer typing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meeting-mode" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does it work during meetings?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                In meeting mode, AlongsideOS privately listens to the conversation, proposes spreadsheet changes, and
                updates your model after you approve—so numbers evolve with the discussion without screen juggling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="versions" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Which Excel versions are supported?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We support current Excel on Windows and macOS. Admins can control rollout and policy guardrails for
                enterprise deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Is my data secure? Does the AI see everything?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We only process the ranges and audio necessary to fulfill your request. Transport is end‑to‑end
                encrypted; content is not used to train models without consent; audit logging tracks who approved what.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="apply-changes" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Does it apply changes automatically?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You're in control. AlongsideOS shows a preview and explanation first. Apply with one click—or ask for a
                safer alternative. Admins can enforce review before apply.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="chat-vs-voice" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Can I just chat instead of using voice?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Voice and chat share the same engine. Speak when you need speed in meetings; chat for precise
                instructions or async work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-foreground-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance mb-6">Talk to Excel. In real time.</h2>
          <p className="text-xl md:text-2xl mt-4 font-medium opacity-90">
            Build models faster, explain formulas instantly, and keep momentum in every meeting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="text-base px-10 py-5">
              Download for Excel
            </Button>
            <Button size="lg" variant="outline" className="text-base px-10 py-5 bg-primary-foreground/10 text-foreground-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
              Book a Voice Demo
            </Button>
          </div>
        </div>
      </section>

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