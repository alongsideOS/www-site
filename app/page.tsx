import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Eye,
  Smartphone,
  Brain,
  Shield,
  Users,
  Code,
  CheckCircle,
  Mic,
  BarChart3,
  TrendingDown,
  AlertTriangle,
  UserCheck,
  ArrowUp,
  ArrowDown,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-4">
                <Mic className="w-3 h-3" />
                Voice-First AI Enablement
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
                alongsideOS for <strong className="text-red-600">AI Enablement</strong>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 font-light italic">
                Stand up real, voice-first AI in days—not quarters. Works for a team of 1, scales to thousands.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Why switch now:</strong> Stop paying for idle ChatGPT seats and heavyweight "voice AI" pilots.
                alongsideOS rides on top of Excel, your CRM, Google Docs, and <strong>live audio/video</strong> so
                answers appear <strong>in real time</strong>—without copy-paste or context loss.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button
                  size="lg"
                  className="text-base md:text-lg px-6 md:px-8 py-3 w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-red-500"
                >
                  Start Free
                </Button>
              </Link>
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base md:text-lg px-6 md:px-8 py-3 bg-transparent w-full sm:w-auto"
                >
                  Book a Team Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Enablement Gap */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            The AI Enablement Gap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Tool sprawl & tab-hopping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  <strong>Impact:</strong> Lost minutes per task, per user
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Old Way:</strong> Copy/paste screenshots into chatbots
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-red-600" />
                  Shadow AI & policy risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  <strong>Impact:</strong> Compliance drift, data leakage
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Old Way:</strong> Unvetted agents & public prompts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  Idle licenses & low adoption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  <strong>Impact:</strong> Shelfware budgets
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Old Way:</strong> Expensive seats that no one opens
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="features" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            alongsideOS: Enablement That Lives Where Work Happens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mic className="w-5 h-5 text-red-600" />
                  Voice-First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Hears your meetings/calls (without joining) and replies instantly on your screen or phone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="w-5 h-5 text-gray-600" />
                  Screen-Aware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Knows what's in front of you—cells, CRM records, docs—so answers are actually relevant.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="w-5 h-5 text-gray-600" />
                  Supermemory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Bring your org-secured Notion pages, PDFs, wikis, playbooks. Get contextual, source-linked answers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-gray-600" />
                  Enterprise Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  SSO/SAML, audit logs, HIPAA-grade transport, "no prompts in client," and org-based billing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Why it matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Excel</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Hover a cell → hear/see the formula fix with rationale and a safe rewrite.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 CRM</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Say "what's the renewal risk for Acme?" → on-screen summary + next-step prompts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-2">📝 Docs</h3>
              <p className="text-gray-600 text-sm md:text-base">
                "Tighten this paragraph, keep the citations" → rewrite without moving your cursor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-2">🎥 Live voice & video</h3>
              <p className="text-gray-600 text-sm md:text-base">
                The AI listens in real time and flashes answers before you finish the question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Who Uses alongsideOS?
          </h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  RevOps & Sales Enablement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day-1 Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Live objection handling, battlecards on tap, next-step nudges
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replaces / Consolidates</h4>
                    <p className="text-gray-600 text-sm">
                      Idle ChatGPT seats, bulky "conversation intelligence" suites
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  Customer Support & Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day-1 Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Policy-correct answers, KB lookups, call summary + action items
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replaces / Consolidates</h4>
                    <p className="text-gray-600 text-sm">Siloed FAQ bots, tab-sprawl, manual after-call notes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gray-600" />
                  Compliance & Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day-1 Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Real-time phrase guardrails, searchable transcripts, audit trails
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replaces / Consolidates</h4>
                    <p className="text-gray-600 text-sm">Manual QA sampling, generic transcription tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-600" />
                  Engineering & Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day-1 Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Error explanations by voice, doc lookups, code diffs explained
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replaces / Consolidates</h4>
                    <p className="text-gray-600 text-sm">Contextless LLM chat, copy-paste into IDEs/terminals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gray-600" />
                  Ops & Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day-1 Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Spreadsheet modeling help, scenario summaries, meeting recaps
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replaces / Consolidates</h4>
                    <p className="text-gray-600 text-sm">One-off spreadsheet macros, ad-hoc analyst hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-gray-600" />
                  People & L&D
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Day-1 Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Role prompts, competency checklists, interview assist (no screen artifacts)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replaces / Consolidates</h4>
                    <p className="text-gray-600 text-sm">Slideware "AI training", inconsistent interviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            How alongsideOS slots into your stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-gray-600" />
                  1) Listen & See (Private)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  alongsideOS listens to <strong>your mic</strong> and reads <strong>your screen only</strong>—never
                  joins the call, never appears on screen-shares.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-gray-600" />
                  2) Reason with Supermemory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Live context + your approved sources (Notion, PDFs, wikis) → precise, citation-ready answers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-gray-600" />
                  3) Respond Anywhere
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Surface the reply on desktop, or <strong>mirror to mobile</strong> for spotless presentations and
                  in-person meetings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Path */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            A Pragmatic Enablement Path
          </h2>
          <Tabs defaultValue="crawl" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 md:mb-8 h-auto">
              <TabsTrigger value="crawl" className="flex items-center gap-2 p-3 text-sm">
                <span>Crawl (Week 1–2)</span>
              </TabsTrigger>
              <TabsTrigger value="walk" className="flex items-center gap-2 p-3 text-sm">
                <span>Walk (Month 1–2)</span>
              </TabsTrigger>
              <TabsTrigger value="run" className="flex items-center gap-2 p-3 text-sm">
                <span>Run (Quarter 1–2)</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="crawl">
              <div className="bg-white p-6 md:p-8 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Crawl Phase</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pilot with 10–25 users</li>
                  <li>• Connect Supermemory to a single domain (e.g., Support KB)</li>
                  <li>• Turn on basic guardrails</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="walk">
              <div className="bg-white p-6 md:p-8 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Walk Phase</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Expand to Sales/CS teams</li>
                  <li>• Add CRM context integration</li>
                  <li>• Enable mobile mirror for field teams</li>
                  <li>• Start team-level analytics</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="run">
              <div className="bg-white p-6 md:p-8 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Run Phase</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Org-wide rollout with pooled voice minutes</li>
                  <li>• Custom LLMs and fine-grained quotas</li>
                  <li>• Automated outcome metrics</li>
                  <li>• Advanced compliance controls</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Business Outcomes by Function */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Business Outcomes to Track (by function)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* RevOps & Sales */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  RevOps & Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowUp className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Win rate ↑ (deal stage conversion)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Sales cycle length ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Ramp time ↓ (new reps to quota)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowUp className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Next-step capture rate ↑</span>
                </div>
              </CardContent>
            </Card>

            {/* Customer Success & Support */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Users className="w-4 h-4 text-purple-600" />
                  Customer Success & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Time-to-correct-answer ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Re-open rate ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowUp className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">CSAT / CES ↑</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">After-call work time ↓</span>
                </div>
              </CardContent>
            </Card>

            {/* Compliance & Risk */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Shield className="w-4 h-4 text-red-600" />
                  Compliance & Risk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Policy deviation rate ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Audit prep hours ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Data egress incidents = 0</span>
                </div>
              </CardContent>
            </Card>

            {/* Engineering & Data */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Code className="w-4 h-4 text-green-600" />
                  Engineering & Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Time-to-fix ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Context-switches/hour ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">PR turnaround ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Incident MTTR ↓</span>
                </div>
              </CardContent>
            </Card>

            {/* Ops & Finance */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <DollarSign className="w-4 h-4 text-yellow-600" />
                  Ops & Finance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Spreadsheet error rate ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Forecast cycle time ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Decision latency ↓</span>
                </div>
              </CardContent>
            </Card>

            {/* People & L&D */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <UserCheck className="w-4 h-4 text-indigo-600" />
                  People & L&D
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Time-to-hire ↓</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowUp className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Interview consistency ↑</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-gray-700">Ramp-to-productivity ↓</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Security & Governance
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-600 mb-8">What your CISO will ask</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="zero-leak">
                <AccordionTrigger>Zero-Leak Client</AccordionTrigger>
                <AccordionContent>
                  No prompts or secrets shipped inside the desktop app. Nothing sensitive appears on screen-shares or
                  recordings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="hipaa">
                <AccordionTrigger>HIPAA-Grade Transport</AccordionTrigger>
                <AccordionContent>
                  End-to-end encryption in transit; AES-256 at rest; private stores under your control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="guardrails">
                <AccordionTrigger>Policy Guardrails</AccordionTrigger>
                <AccordionContent>
                  Real-time phrase alerts; domain allowlists; role-scoped Supermemory.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="audit">
                <AccordionTrigger>Audit & Retention</AccordionTrigger>
                <AccordionContent>
                  Notes/transcripts with immutable logs, admin export, and lifecycle controls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sso">
                <AccordionTrigger>SSO/SAML + SCIM</AccordionTrigger>
                <AccordionContent>Provisioning and deprovisioning for fast, compliant rollouts.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mobile Mirror & No Cheat Mode */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  Move freely. Present cleanly. Collaborate quietly.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Beam answers to your phone (or a teammate's) while you present. Keep the main screen pristine; keep
                  the help private.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  "No Cheat Mode" by design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We raise the bar on <strong>human + AI</strong> performance—no shady shortcuts, no "say this to
                  pretend you know that." alongsideOS cues you to ask better questions and close cleanly, without
                  compromising ethics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization-Based Billing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">Organization-Based Billing</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12">
            Flexible, fair, and aligned to real orgs—not org charts on paper.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">One Invoice, Many Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Workspaces for Sales, Support, Eng—shared or isolated Supermemory scopes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Per-Seat or Pooled Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Mix power-user seats with shared voice pools for seasonal peaks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Granular Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Role limits, free-tier caps, and source allowlists per team.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Instant Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    <strong>Add seats mid-cycle, auto-proration; remove unused anytime.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Competitive Contrast */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Why not the "usual" route?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-4 mb-8">
              <p className="text-gray-700">
                • "Conversation intelligence" that arrives <strong>after</strong> the call
              </p>
              <p className="text-gray-700">• "Voice AI" that demands a 3-month pilot and 50-seat minimum</p>
              <p className="text-gray-700">• Fleet-wide ChatGPT seats that sit unused</p>
            </div>
            <p className="text-lg font-semibold text-gray-900">
              <strong>AlongsideOS is live, voice-aware, screen-aware—and deploys in under a minute.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="join-call">
              <AccordionTrigger>Does it join the call?</AccordionTrigger>
              <AccordionContent>
                No. It listens from your mic and never appears on participant lists or screen-shares.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="private-docs">
              <AccordionTrigger>Can it use our private docs safely?</AccordionTrigger>
              <AccordionContent>
                Yes—Supermemory stores org-secured sources and scopes access by role/workspace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pilot-speed">
              <AccordionTrigger>How fast can we pilot?</AccordionTrigger>
              <AccordionContent>Under 60 seconds for a single seat; a day to invite a team with SSO.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="ethics">
              <AccordionTrigger>What about ethics?</AccordionTrigger>
              <AccordionContent>
                "No cheat mode." We coach better questions and compliant answers—never misrepresentation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="replaces">
              <AccordionTrigger>What does it replace?</AccordionTrigger>
              <AccordionContent>
                Idle ChatGPT seats, heavyweight voice pilots, after-call analytics suites, and DIY prompt glue.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="company" className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to enable AI where the work actually happens?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">Voice-first AI in under 60 seconds</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 bg-red-600 hover:bg-red-700 focus:ring-red-500"
              >
                Start Free
              </Button>
            </Link>
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              >
                Book a Team Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
