import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Eye,
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
  DollarSign,
  Play,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-radial-orange opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Mic className="w-4 h-4" />
              Voice-First AI Enablement
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-blue-200 leading-tight mb-8">
              AI that works
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">alongside you</span>
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-2xl text-white/90 mb-6 font-medium">Deploy voice-first AI in days, not quarters.</p>
              <p className="text-xl text-white/70">
                Works for teams of 1. Scales to thousands. No copy-paste, no context switching.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg shadow-2xl backdrop-blur-sm border border-white/20">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free
                </Button>
              </Link>
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-bold px-8 py-4 text-lg shadow-xl">
                  Book Demo
                </Button>
              </Link>
            </div>

            <div className="text-lg text-white/60 font-medium">Trusted by teams at 50+ companies</div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 py-24">
        <div className="absolute inset-0 bg-gradient-radial-blue opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 mb-8">The AI enablement gap</h2>
            <p className="text-2xl text-slate-700 font-medium">Current AI tools create more problems than they solve</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-2xl">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tool sprawl</h3>
              <p className="text-lg text-gray-600 mb-4 font-medium">Copy-paste between apps kills momentum</p>
              <p className="text-sm text-gray-500">Lost minutes per task, per user</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-2xl">
              <Shield className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shadow AI risk</h3>
              <p className="text-lg text-gray-600 mb-4 font-medium">Unvetted tools create compliance drift</p>
              <p className="text-sm text-gray-500">Data leakage, policy violations</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-2xl">
              <TrendingDown className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Idle licenses</h3>
              <p className="text-lg text-gray-600 mb-4 font-medium">Expensive seats that nobody opens</p>
              <p className="text-sm text-gray-500">Shelfware budgets, low adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="features" className="relative py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-radial-purple opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 mb-8">AI that lives where work happens</h2>
            <p className="text-2xl text-slate-700 font-medium">alongsideOS integrates with your existing tools</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Voice-First</h3>
              </div>
              <p className="text-xl text-gray-700 mb-6 font-medium">Listens to your meetings without joining calls</p>
              <p className="text-lg text-gray-600">
                Instant answers on your screen or phone. Never appears on participant lists.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm">
              <div className="text-lg text-gray-600 mb-4 font-medium">Live demo</div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 text-lg shadow-lg">
                "What's the renewal risk for Acme Corp?"
                <div className="mt-3 text-gray-600 font-medium">→ On-screen summary + next steps</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm lg:order-1">
              <div className="text-lg text-gray-600 mb-4 font-medium">Excel integration</div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 text-lg shadow-lg">
                Hover cell → "Fix this formula"
                <div className="mt-3 text-gray-600 font-medium">→ Safe rewrite with explanation</div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Screen-Aware</h3>
              </div>
              <p className="text-xl text-gray-700 mb-6 font-medium">Knows what's in front of you</p>
              <p className="text-lg text-gray-600">Cells, CRM records, docs—answers are contextually relevant.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Supermemory</h3>
              </div>
              <p className="text-xl text-gray-700 mb-6 font-medium">Your org's knowledge, instantly accessible</p>
              <p className="text-lg text-gray-600">Notion pages, PDFs, wikis, playbooks. Source-linked answers.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm">
              <div className="text-lg text-gray-600 mb-6 font-medium">Knowledge base</div>
              <div className="space-y-3">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 text-lg flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                  Sales playbook.pdf
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 text-lg flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                  Support KB (Notion)
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 text-lg flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                  Company wiki
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 py-24">
        <div className="absolute inset-0 bg-gradient-radial-green opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-green-200 to-blue-200 mb-8">Built for every team</h2>
            <p className="text-2xl text-white/80 font-medium">Immediate value across all functions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
                title: "Sales & RevOps",
                wins: "Live objection handling",
                replaces: "Idle ChatGPT seats",
                color: "blue",
              },
              {
                icon: <Users className="w-8 h-8 text-green-400" />,
                title: "Support & Success",
                wins: "Policy-correct answers",
                replaces: "Manual call notes",
                color: "green",
              },
              {
                icon: <Shield className="w-8 h-8 text-red-400" />,
                title: "Compliance & Risk",
                wins: "Real-time guardrails",
                replaces: "Manual QA sampling",
                color: "red",
              },
              {
                icon: <Code className="w-8 h-8 text-purple-400" />,
                title: "Engineering",
                wins: "Error explanations",
                replaces: "Context-less chat",
                color: "purple",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
                title: "Finance & Ops",
                wins: "Spreadsheet modeling",
                replaces: "Ad-hoc analyst hours",
                color: "yellow",
              },
              {
                icon: <UserCheck className="w-8 h-8 text-indigo-400" />,
                title: "People & L&D",
                wins: "Interview assistance",
                replaces: "Inconsistent processes",
                color: "indigo",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center shadow-xl`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-bold text-white mb-2">Day-1 wins</div>
                    <div className="text-lg text-white/80">{item.wins}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-2">Replaces</div>
                    <div className="text-lg text-white/80">{item.replaces}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-radial-cyan opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 mb-8">Three steps to deployment</h2>
            <p className="text-2xl text-slate-700 font-medium">From pilot to scale in weeks, not months</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Pilot (Week 1-2)</h3>
              <ul className="text-gray-700 space-y-3 text-left text-lg">
                <li>• 10-25 users</li>
                <li>• Single knowledge domain</li>
                <li>• Basic guardrails</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Expand (Month 1-2)</h3>
              <ul className="text-gray-700 space-y-3 text-left text-lg">
                <li>• Sales/CS teams</li>
                <li>• CRM integration</li>
                <li>• Mobile mirror</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-3xl font-black text-white">3</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Scale (Quarter 1-2)</h3>
              <ul className="text-gray-700 space-y-3 text-left text-lg">
                <li>• Org-wide rollout</li>
                <li>• Custom LLMs</li>
                <li>• Advanced controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-24">
        <div className="absolute inset-0 bg-gradient-radial-yellow opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-yellow-200 to-orange-200 mb-8">Measurable business impact</h2>
            <p className="text-2xl text-white/80 font-medium">Track ROI across every function</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { metric: "Win rate", change: "↑ 23%", team: "Sales" },
              { metric: "Resolution time", change: "↓ 40%", team: "Support" },
              { metric: "Time to hire", change: "↓ 35%", team: "Recruiting" },
              { metric: "Error rate", change: "↓ 60%", team: "Finance" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/20 shadow-2xl">
                <div className="text-4xl lg:text-5xl font-black text-white mb-4">{item.change}</div>
                <div className="text-xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-lg text-white/70">{item.team}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-radial-green opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-900 via-blue-900 to-slate-900 mb-8">Enterprise-grade security</h2>
              <p className="text-2xl text-slate-700 mb-10 font-medium">Built for compliance from day one</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">SSO/SAML + SCIM</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">Audit logs & retention</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">Policy guardrails</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white via-green-50 to-blue-50 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm">
              <div className="text-lg text-gray-600 mb-6 font-medium">Compliance certifications</div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-200/50 shadow-lg">
                  <div className="text-xl font-bold text-gray-900">SOC 2</div>
                  <div className="text-lg text-gray-600">Type II</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-200/50 shadow-lg">
                  <div className="text-xl font-bold text-gray-900">HIPAA</div>
                  <div className="text-lg text-gray-600">Compliant</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-200/50 shadow-lg">
                  <div className="text-xl font-bold text-gray-900">GDPR</div>
                  <div className="text-lg text-gray-600">Ready</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-200/50 shadow-lg">
                  <div className="text-xl font-bold text-gray-900">ISO 27001</div>
                  <div className="text-lg text-gray-600">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-radial-blue opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 mb-8">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                q: "Does it join the call?",
                a: "No. It listens from your mic and never appears on participant lists.",
              },
              {
                q: "How fast can we pilot?",
                a: "Under 60 seconds for a single seat. One day for team SSO setup.",
              },
              {
                q: "Is our data secure?",
                a: "Yes. End-to-end encryption, SOC 2 compliant, never used for training.",
              },
              {
                q: "What does it replace?",
                a: "Idle ChatGPT seats, heavyweight voice pilots, manual note-taking.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-8 shadow-xl">
                <AccordionTrigger className="text-left font-bold text-lg text-gray-900">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700 text-lg font-medium">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-radial-orange opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-blue-200 mb-8">Ready to deploy AI that actually works?</h2>
          <p className="text-2xl text-white/80 mb-10 font-medium">Voice-first AI in under 60 seconds</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-10 py-5 text-xl shadow-2xl backdrop-blur-sm border border-white/20">
                <Play className="w-6 h-6 mr-3" />
                Start Free
              </Button>
            </Link>
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-bold px-10 py-5 text-xl shadow-2xl">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}