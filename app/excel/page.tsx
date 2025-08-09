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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 lg:py-28 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
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
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded">
              <Mic className="w-3 h-3" />
              Voice‑First for Excel
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">AI Built for Excel — now Voice‑First</h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              For the first time, build and operate spreadsheets by speaking. Work in real time during meetings,
              auto‑update models as conversations evolve, and chat to tell Excel exactly what to do—no copy‑paste, no
              context switching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
                Download for Excel
              </Button>
              <Button size="lg" variant="outline">
                Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Speak models into existence. Review. Approve. Ship.
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-3">
            alongsideOS understands your grid, listens securely to the room, and applies changes with auditable
            precision. Use your voice or chat—both drive the same Excel‑native actions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  Real‑time during meetings
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Press‑to‑talk, propose a change, and see diffs before applying. Budgets, sensitivity tables, and
                roll‑ups update as you speak—without breaking eye contact.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sigma className="w-5 h-5 text-gray-600" />
                  Formulas, pivots, charts by voice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                “Insert a pivot by region,” “Explain this INDEX‑MATCH,” “Convert to XLOOKUP,” or “Chart MTD vs plan.”
                alongsideOS writes, explains, and fixes in place.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-gray-600" />
                  Chat to command Excel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Prefer typing? Chat in plain English: clean data, label outliers, create scenarios, add notes—then apply
                with one click.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-gray-600" />
                  1) Listen securely
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                In meeting mode, alongsideOS privately transcribes your conversation and tracks sheet context—never
                joining the call, never visible to others.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-gray-600" />
                  2) Propose precise changes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Voice or chat instructions generate a preview: formulas, ranges, pivots, or charts—complete with
                explanations and source references.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Replace className="w-5 h-5 text-gray-600" />
                  3) Apply and auto‑document
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Approve to apply. We log what changed, where, and why—perfect for peer review, audit, and handoffs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Excel use cases */}
      <section id="use-cases" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Built for real Excel work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  FP&amp;A and planning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Speak sensitivities, what‑ifs, or driver tweaks. Generate scenarios, reconcile versions, and push
                annotated summaries on the fly.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-gray-600" />
                  Data clean‑up and modeling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Fill gaps, standardize labels, dedupe, and detect outliers by voice. Convert ad‑hoc sheets into tidy
                models with documented steps.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sigma className="w-5 h-5 text-gray-600" />
                  Formula help and auditing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Ask “why is this returning blank?” or “explain this array formula.” Get fixes, tests, and safer
                alternatives—applied only with your approval.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-gray-600" />
                  Charts and reporting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                “Create a variance chart by product,” “Add MTD annotations,” or “Draft a commentary paragraph.” Voice or
                chat, results arrive in‑sheet.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Private by design</h2>
              <p className="text-gray-700 mt-3">
                We keep meeting audio and sheet context protected with end‑to‑end encrypted transport. Content is never
                used for model training without explicit consent. Admins control retention, export, and redaction.
              </p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <Shield className="w-5 h-5 text-gray-600" />
                Compliance highlights
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
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
      <section id="faq" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="what-is-voice-first">
              <AccordionTrigger>What do you mean by “voice‑first for Excel”?</AccordionTrigger>
              <AccordionContent>
                alongsideOS lets you operate Excel by speaking—create formulas, pivots, and charts; clean data; generate
                scenarios; and document changes—while you stay focused on the conversation. You can also chat if you
                prefer typing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meeting-mode">
              <AccordionTrigger>How does it work during meetings?</AccordionTrigger>
              <AccordionContent>
                In meeting mode, alongsideOS privately listens to the conversation, proposes spreadsheet changes, and
                updates your model after you approve—so numbers evolve with the discussion without screen juggling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="versions">
              <AccordionTrigger>Which Excel versions are supported?</AccordionTrigger>
              <AccordionContent>
                We support current Excel on Windows and macOS. Admins can control rollout and policy guardrails for
                enterprise deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security">
              <AccordionTrigger>Is my data secure? Does the AI see everything?</AccordionTrigger>
              <AccordionContent>
                We only process the ranges and audio necessary to fulfill your request. Transport is end‑to‑end
                encrypted; content is not used to train models without consent; audit logging tracks who approved what.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="apply-changes">
              <AccordionTrigger>Does it apply changes automatically?</AccordionTrigger>
              <AccordionContent>
                You’re in control. alongsideOS shows a preview and explanation first. Apply with one click—or ask for a
                safer alternative. Admins can enforce review before apply.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="chat-vs-voice">
              <AccordionTrigger>Can I just chat instead of using voice?</AccordionTrigger>
              <AccordionContent>
                Yes. Voice and chat share the same engine. Speak when you need speed in meetings; chat for precise
                instructions or async work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Talk to Excel. In real time.</h2>
          <p className="text-lg md:text-xl text-gray-300 mt-3">
            Build models faster, explain formulas instantly, and keep momentum in every meeting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
              Download for Excel
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              Book a Voice Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
