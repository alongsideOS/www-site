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
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-radial-pink opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Mic className="w-4 h-4" />
              Voice-First AI Enablement
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-300 leading-tight mb-8">
              AI that works
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400">alongside you</span>
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-2xl text-white/90 mb-6 font-medium">Deploy voice-first AI in days, not quarters.</p>
              <p className="text-xl text-white/70">
                Works for teams of 1. Scales to thousands. No copy-paste, no context switching.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-8 py-4 text-lg shadow-2xl backdrop-blur-sm border border-white/20">
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
      <section className="relative bg-gradient-to-br from-red-50/30 via-rose-50/20 to-pink-50/30 py-24">
        <div className="absolute inset-0 bg-gradient-radial-rose opacity-8"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">The AI enablement gap</h2>
            <p className="text-2xl text-gray-800 font-medium">Current AI tools create more problems than they solve</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-2xl">
              <AlertTriangle className="w-10 h-10 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tool sprawl</h3>
              <p className="text-lg text-gray-700 mb-4 font-medium">Copy-paste between apps kills momentum</p>
              <p className="text-sm text-gray-600">Lost minutes per task, per user</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-2xl">
              <Shield className="w-10 h-10 text-rose-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shadow AI risk</h3>
              <p className="text-lg text-gray-700 mb-4 font-medium">Unvetted tools create compliance drift</p>
              <p className="text-sm text-gray-600">Data leakage, policy violations</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-2xl">
              <TrendingDown className="w-10 h-10 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Idle licenses</h3>
              <p className="text-lg text-gray-700 mb-4 font-medium">Expensive seats that nobody opens</p>
              <p className="text-sm text-gray-600">Shelfware budgets, low adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="features" className="relative py-24 bg-gradient-to-br from-white via-red-50/20 to-rose-50/30">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-8"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">AI that lives where work happens</h2>
            <p className="text-2xl text-gray-800 font-medium">alongsideOS integrates with your existing tools</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Voice-First</h3>
              </div>
              <p className="text-xl text-gray-700 mb-6 font-medium">Listens to your meetings without joining calls</p>
              <p className="text-lg text-gray-600">
                Instant answers on your screen or phone. Never appears on participant lists.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50/80 via-white to-red-50/40 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm">
              <div className="text-lg text-gray-700 mb-4 font-medium">Live demo</div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 text-lg shadow-lg">
                "What's the renewal risk for Acme Corp?"
                <div className="mt-3 text-gray-600 font-medium">→ On-screen summary + next steps</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-gradient-to-br from-gray-50/80 via-white to-rose-50/40 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm lg:order-1">
              <div className="text-lg text-gray-700 mb-4 font-medium">Excel integration</div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 text-lg shadow-lg">
                Hover cell → "Fix this formula"
                <div className="mt-3 text-gray-600 font-medium">→ Safe rewrite with explanation</div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
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
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Supermemory</h3>
              </div>
              <p className="text-xl text-gray-700 mb-6 font-medium">Your org's knowledge, instantly accessible</p>
              <p className="text-lg text-gray-600">Notion pages, PDFs, wikis, playbooks. Source-linked answers.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50/80 via-white to-pink-50/40 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm">
              <div className="text-lg text-gray-700 mb-6 font-medium">Knowledge base</div>
              <div className="space-y-3">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 text-lg flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  Sales playbook.pdf
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 text-lg flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-rose-500 rounded-full shadow-lg"></div>
                  Support KB (Notion)
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 text-lg flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg"></div>
                  Company wiki
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
        <div className="absolute inset-0 bg-gradient-radial-rose opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-300 mb-8">Built for every team</h2>
            <p className="text-2xl text-white/80 font-medium">Immediate value across all functions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 className="w-8 h-8 text-white" />,
                title: "Sales & RevOps",
                wins: "Live objection handling",
                replaces: "Idle ChatGPT seats",
                color: "red",
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Support & Success",
                wins: "Policy-correct answers",
                replaces: "Manual call notes",
                color: "rose",
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Compliance & Risk",
                wins: "Real-time guardrails",
                replaces: "Manual QA sampling",
                color: "pink",
              },
              {
                icon: <Code className="w-8 h-8 text-white" />,
                title: "Engineering",
                wins: "Error explanations",
                replaces: "Context-less chat",
                color: "red",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-white" />,
                title: "Finance & Ops",
                wins: "Spreadsheet modeling",
                replaces: "Ad-hoc analyst hours",
                color: "rose",
              },
              {
                icon: <UserCheck className="w-8 h-8 text-white" />,
                title: "People & L&D",
                wins: "Interview assistance",
                replaces: "Inconsistent processes",
                color: "pink",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-600 to-${item.color}-700 rounded-2xl flex items-center justify-center shadow-xl`}>
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
      <section className="relative py-24 bg-gradient-to-br from-rose-50/20 via-white to-pink-50/30">
        <div className="absolute inset-0 bg-gradient-radial-pink opacity-8"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">Three steps to deployment</h2>
            <p className="text-2xl text-gray-800 font-medium">From pilot to scale in weeks, not months</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
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
              <div className="w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
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
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
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
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-12"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-300 mb-8">Measurable business impact</h2>
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
      <section className="relative py-24 bg-gradient-to-br from-rose-50/20 via-white to-pink-50/30">
        <div className="absolute inset-0 bg-gradient-radial-rose opacity-8"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">Enterprise-grade security</h2>
              <p className="text-2xl text-gray-800 mb-10 font-medium">Built for compliance from day one</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">SSO/SAML + SCIM</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">Audit logs & retention</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">Policy guardrails</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/90 via-red-50/30 to-pink-50/40 p-10 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-sm">
              <div className="text-lg text-gray-700 mb-6 font-medium">Compliance certifications</div>
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
      <section id="faq" className="relative py-24 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-6"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">Frequently asked questions</h2>
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
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-red opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-radial-pink opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-300 mb-8">Ready to deploy AI that actually works?</h2>
          <p className="text-2xl text-white/80 mb-10 font-medium">Voice-first AI in under 60 seconds</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-10 py-5 text-xl shadow-2xl backdrop-blur-sm border border-white/20">
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