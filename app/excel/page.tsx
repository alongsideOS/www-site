"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mic, Zap, Headphones, Bot, BarChart3, Sigma, Replace, Wand2, Shield, Database, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ExcelPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-16 md:py-24 lg:py-32 border-b border-gray-100 bg-gradient-to-br from-white via-red-50/20 to-rose-50/30">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-8"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-red-700 bg-red-50/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-100 mb-6">
              <Mic className="w-4 h-4" />
              Voice‑First for Excel
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 leading-tight mb-6">AI Built for Excel — now Voice‑First</h1>
            <p className="text-xl md:text-2xl text-gray-700 mt-6 font-medium">
              For the first time, build and operate spreadsheets by speaking. Work in real time during meetings,
              auto‑update models as conversations evolve, and chat to tell Excel exactly what to do—no copy‑paste, no
              context switching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-8 py-4 text-lg shadow-xl">
                  Download for Excel
                </Button>
              </Link>
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" variant="outline" className="font-bold px-8 py-4 text-lg">
                  Enterprise Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="relative py-16 md:py-20 bg-gradient-to-br from-white via-rose-50/10 to-pink-50/20">
        <div className="absolute inset-0 bg-gradient-radial-rose opacity-6"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-4">
            Speak models into existence. Review. Approve. Ship.
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mt-4 font-medium">
            alongsideOS understands your grid, listens securely to the room, and applies changes with auditable
            precision. Use your voice or chat—both drive the same Excel‑native actions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Zap className="w-6 h-6 text-red-600" />
                  Real‑time during meetings
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Press‑to‑talk, propose a change, and see diffs before applying. Budgets, sensitivity tables, and
                roll‑ups update as you speak—without breaking eye contact.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Sigma className="w-6 h-6 text-rose-600" />
                  Formulas, pivots, charts by voice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                "Insert a pivot by region," "Explain this INDEX‑MATCH," "Convert to XLOOKUP," or "Chart MTD vs plan."
                alongsideOS writes, explains, and fixes in place.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Bot className="w-6 h-6 text-pink-600" />
                  Chat to command Excel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Prefer typing? Chat in plain English: clean data, label outliers, create scenarios, add notes—then apply
                with one click.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative py-16 md:py-20 bg-gradient-to-br from-red-50/20 via-white to-rose-50/30">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-8"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Headphones className="w-6 h-6 text-red-600" />
                  1) Listen securely
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                In meeting mode, alongsideOS privately transcribes your conversation and tracks sheet context—never
                joining the call, never visible to others.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Wand2 className="w-6 h-6 text-rose-600" />
                  2) Propose precise changes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Voice or chat instructions generate a preview: formulas, ranges, pivots, or charts—complete with
                explanations and source references.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Replace className="w-6 h-6 text-pink-600" />
                  3) Apply and auto‑document
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Approve to apply. We log what changed, where, and why—perfect for peer review, audit, and handoffs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Excel use cases */}
      <section id="use-cases" className="relative py-16 md:py-20 bg-gradient-to-br from-white via-pink-50/10 to-red-50/20">
        <div className="absolute inset-0 bg-gradient-radial-pink opacity-6"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-12">Built for real Excel work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                  FP&A and planning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Speak sensitivities, what‑ifs, or driver tweaks. Generate scenarios, reconcile versions, and push
                annotated summaries on the fly.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Database className="w-6 h-6 text-rose-600" />
                  Data clean‑up and modeling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Fill gaps, standardize labels, dedupe, and detect outliers by voice. Convert ad‑hoc sheets into tidy
                models with documented steps.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Sigma className="w-6 h-6 text-pink-600" />
                  Formula help and auditing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                Ask "why is this returning blank?" or "explain this array formula." Get fixes, tests, and safer
                alternatives—applied only with your approval.
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Wand2 className="w-6 h-6 text-red-600" />
                  Charts and reporting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-lg">
                "Create a variance chart by product," "Add MTD annotations," or "Draft a commentary paragraph." Voice or
                chat, results arrive in‑sheet.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="relative py-16 md:py-20 bg-gradient-to-br from-rose-50/20 via-white to-pink-50/30">
        <div className="absolute inset-0 bg-gradient-radial-rose opacity-8"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Private by design</h2>
              <p className="text-xl text-gray-700 font-medium">
                We keep meeting audio and sheet context protected with end‑to‑end encrypted transport. Content is never
                used for model training without explicit consent. Admins control retention, export, and redaction.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 font-bold text-gray-900 text-lg mb-4">
                <Shield className="w-6 h-6 text-red-600" />
                Compliance highlights
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
                <li>AES‑256 at rest, TLS 1.3 in transit</li>
                <li>Role‑based access controls and SSO/SAML</li>
                <li>Audit logs for in‑sheet changes and approvals</li>
                <li>Policy guardrails for regulated language</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16 md:py-20 bg-gradient-to-br from-white via-red-50/10 to-rose-50/20">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-6"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="what-is-voice-first" className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900">What do you mean by "voice‑first for Excel"?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg font-medium">
                alongsideOS lets you operate Excel by speaking—create formulas, pivots, and charts; clean data; generate
                scenarios; and document changes—while you stay focused on the conversation. You can also chat if you
                prefer typing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meeting-mode" className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900">How does it work during meetings?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg font-medium">
                In meeting mode, alongsideOS privately listens to the conversation, proposes spreadsheet changes, and
                updates your model after you approve—so numbers evolve with the discussion without screen juggling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="versions" className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900">Which Excel versions are supported?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg font-medium">
                We support current Excel on Windows and macOS. Admins can control rollout and policy guardrails for
                enterprise deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security" className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900">Is my data secure? Does the AI see everything?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg font-medium">
                We only process the ranges and audio necessary to fulfill your request. Transport is end‑to‑end
                encrypted; content is not used to train models without consent; audit logging tracks who approved what.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="apply-changes" className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900">Does it apply changes automatically?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg font-medium">
                You're in control. alongsideOS shows a preview and explanation first. Apply with one click—or ask for a
                safer alternative. Admins can enforce review before apply.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="chat-vs-voice" className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900">Can I just chat instead of using voice?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg font-medium">
                Yes. Voice and chat share the same engine. Speak when you need speed in meetings; chat for precise
                instructions or async work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-radial-pink opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-300 mb-6">Talk to Excel. In real time.</h2>
          <p className="text-xl md:text-2xl text-white/80 mt-4 font-medium">
            Build models faster, explain formulas instantly, and keep momentum in every meeting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-10 py-5 text-xl shadow-2xl backdrop-blur-sm border border-white/20">
                Download for Excel
              </Button>
            </Link>
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-bold px-10 py-5 text-xl shadow-2xl">
                Book a Voice Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}