"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GoogleTagManager, trackMeetingForm } from "@/components/google-tag-manager"
import { handleCalendarClick } from "@/lib/calendar-utils"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeEditor } from "@/components/code-editor"
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
  Palette,
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const exampleSystemPrompt = `<!-- SYSTEM PROMPT -->
<system_prompt version="3.0">
  
  <!-- IDENTITY -->
  <identity>
    <name>Alongside</name>
    <role>Live sales assistant analyzing conversations and screens in real-time</role>
    <response_style>Direct, actionable, no fluff</response_style>
  </identity>

  <!-- RESPONSE DECISION TREE -->
  <response_hierarchy>
    
    <priority level="1">
      <trigger>Question detected (50%+ confidence)</trigger>
      <action>Answer immediately</action>
      <format>
        - Headline (≤6 words)
        - 2 key points (≤15 words each)
        - Supporting details if needed
      </format>
    </priority>
    
    <priority level="2">
      <trigger>Company/technical term in last 15 words</trigger>
      <action>Define it</action>
      <exclude>Common terms, already defined</exclude>
    </priority>
    
    <priority level="3">
      <trigger>Story/background shared without question</trigger>
      <action>Suggest 1-3 follow-up questions</action>
    </priority>
    
    <priority level="4">
      <trigger>Sales objection detected</trigger>
      <action>Counter with specific response tied to conversation</action>
    </priority>
    
    <priority level="5">
      <trigger>No action needed</trigger>
      <action>Say "Not sure what you need help with right now"</action>
    </priority>
    
  </response_hierarchy>

  <!-- SPEAKER LABELS -->
  <speakers>
    <me>User being helped</me>
    <them>Other person</them>
    <correction_rule>
      If context doesn't make sense, speakers are likely mislabeled - infer correct speaker
    </correction_rule>
  </speakers>

  <!-- SPECIALIZED RESPONSES -->
  <response_types>
    
    <technical>
      <rule>Start with code immediately</rule>
      <rule>Comment every line</rule>
      <rule>Add complexity analysis after</rule>
    </technical>
    
    <behavioral>
      <rule>Use STAR format (Situation, Task, Action, Result)</rule>
      <rule>Include specific metrics</rule>
      <rule>Never invent user details</rule>
    </behavioral>
    
    <objection_handling>
      <rule>State objection type</rule>
      <rule>Give specific counter using conversation context</rule>
      <rule>Never use generic scripts</rule>
    </objection_handling>
    
  </response_types>

  <!-- FORMATTING -->
  <format_rules>
    <rule>NO headers (#, ##)</rule>
    <rule>NO pronouns</rule>
    <rule>NO meta-phrases ("let me help", "I see that")</rule>
    <rule>Bold for emphasis</rule>
    <rule>LaTeX for math ($...$)</rule>
    <rule>Escape currency (\\$100)</rule>
  </format_rules>

  <!-- SALES CAPABILITIES -->
  <sales_features>
    <real_time>Objection handling, battle cards, talk tracks</real_time>
    <automation>Follow-up emails, CRM sync, call summaries</automation>
    <analytics>Clarity, conviction, engagement tracking</analytics>
  </sales_features>

  <!-- HARD CONSTRAINTS -->
  <never>
    <rule>Never summarize unless asked</rule>
    <rule>Never give unsolicited advice</rule>
    <rule>Never use pleasantries</rule>
    <rule>Never say "screenshot" - say "the screen"</rule>
    <rule>Never give >3 suggestions</rule>
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

  return (
    <div className="min-h-screen bg-background">
      <GoogleTagManager />
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="AlongsideOS" className="w-8 h-8" />
              <span className="text-xl font-semibold text-foreground">AlongsideOS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-colors">
                Enterprise
              </a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </a>
              <Button variant="outline" size="sm" onClick={handleCalendarClick}>
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
                href="#features"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#enterprise"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise
              </a>
              <a
                href="#security"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full" onClick={handleCalendarClick}>
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-balance tracking-tighter leading-tight mb-6">
            The Era of Desktop AI Has Begun
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed mb-10">
            Instead of jumping between apps, use your{" "}
            <strong className="text-foreground">voice</strong> to complete tasks and automate complex
            workflows with AlongsideOS, the world’s first voice-first AI workflow platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" onClick={handleCalendarClick}>
              Get a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
              See it in Action
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION: PHILOSOPHY */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
            The Next Interface for Work
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            AI shouldn’t live inside a browser tab.{" "}
            <strong className="text-foreground">
              Real enterprise AI belongs on your desktop — alongside your OS
            </strong>
            , where it can see your screen, hear your context, and act with you.
          </p>
          <blockquote className="text-xl sm:text-2xl text-foreground max-w-4xl mx-auto border-l-4 border-primary pl-6 text-left">
            AlongsideOS combines <strong className="font-semibold">screen understanding</strong>,{" "}
            <strong className="font-semibold">voice</strong>,{" "}
            <strong className="font-semibold">live transcripts</strong>, and{" "}
            <strong className="font-semibold">workflow automation</strong> to deliver real-time
            intelligence on your machine.
          </blockquote>
        </div>
      </section>

      {/* SECTION: CORE VALUE */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
            We Call It Desktop AI
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
            Desktop AI means{" "}
            <strong className="text-foreground">
              AI that sees what you see, hears what you hear, and acts immediately
            </strong>{" "}
            — no switching apps, no waiting for summaries.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Mic,
                title: "See",
                description: "Understands your desktop screen and context.",
              },
              {
                icon: Mic,
                title: "Hear",
                description: "Listens to your voice and ongoing conversation.",
              },
              {
                icon: Zap,
                title: "Respond",
                description: "Uses AI to answer, act, and automate instantly.",
              },
              {
                icon: Shield,
                title: "Govern",
                description: "Enterprise-grade guardrails and audit trails built in.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card p-8 rounded-2xl text-left">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
            The AlongsideOS Platform
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
            The AlongsideOS Platform transforms your enterprise knowledge into{" "}
            <strong className="text-foreground">voice-driven workflows</strong> known as{" "}
            <strong className="text-foreground">Waves</strong>. Each Wave is a reusable, auditable
            AI workflow — triggered by voice, powered by your data, and deployed directly on the
            desktop.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Generates",
                description: "Capture internal knowledge as structured workflows.",
              },
              {
                icon: RotateCw,
                title: "Refines",
                description: "Improve and re-train Waves with real usage data.",
              },
              {
                icon: ArrowRight,
                title: "Deploys",
                description: "Push updates directly to employee desktops.",
              },
              {
                icon: BarChart3,
                title: "Audits",
                description: "Track outcomes, compliance, and ROI.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card p-8 rounded-2xl text-left">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-2xl font-medium mb-6">
              Example — A Voice-Triggered Security Wave
            </h3>
            <CodeEditor
              code={exampleSystemPrompt}
              language="xml"
              title="security-wave-example.xml"
              collapsible={true}
              previewLines={10}
            />
          </div>
        </div>
      </section>

      {/* Features for Every Role */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Features for Every Role
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8">For Teams</h3>
              <div className="space-y-6">
                {[
                  "Trigger prompts by voice or click",
                  "Save and star useful answers",
                  "Propose new prompts to the library",
                  "Share snippets with peers",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8">For Admins</h3>
              <div className="space-y-6">
                {[
                  "Manage roles, permissions, and access",
                  "Approve/reject prompt suggestions",
                  "Configure compliance guardrails",
                  "Audit usage and track analytics",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Integrated Into Your Workflow
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Google Calendar Integration",
                description:
                  "Pre-loads meeting context (title, attendees, links) so AlongsideOS is ready the moment a call begins.",
                badge: "Auto-sync",
              },
              {
                icon: Mic,
                title: "Conferencing Tools",
                description: "Works seamlessly alongside Zoom, Teams, Meet, and others.",
                badge: "Universal",
              },
              {
                icon: Shield,
                title: "Enterprise Identity",
                description: "Secure SSO and role mapping, managed by admins.",
                badge: "SSO Ready",
              },
            ].map(({ icon: Icon, title, description, badge }) => (
              <div
                key={title}
                className="bg-card border rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
                </div>
                <div className="flex-shrink-0 pt-4 md:pt-0">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    {badge}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rollout & Adoption */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Rollout & Adoption
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              A structured approach to enterprise success
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-16">
              {[
                {
                  step: 1,
                  emoji: "🚀",
                  title: "Team Kickoff",
                  description:
                    "Structured kickoff sessions ensure high adoption from day one. Teams get hands-on guidance, tailored to their roles.",
                  badges: ["Role-specific training", "Hands-on guidance", "Day 1 ready"],
                },
                {
                  step: 2,
                  emoji: "🛠",
                  title: "Admin Training",
                  description:
                    "Admins learn to configure prompts, manage roles, enforce compliance, and measure outcomes.",
                  badges: ["Prompt configuration", "Role management", "Compliance setup"],
                },
                {
                  step: 3,
                  emoji: "📈",
                  title: "Ongoing Enablement",
                  description:
                    "Content refresh cycles and analytics keep the Customization Suite aligned with business changes.",
                  badges: ["Content refresh", "Analytics tracking", "Business alignment"],
                },
              ].map(({ step, emoji, title, description, badges }) => (
                <div key={step} className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {step}
                    </div>
                  </div>
                  <div className="flex-1 bg-card border rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{emoji}</span>
                      <h3 className="text-2xl font-semibold">{title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {badges.map((badge) => (
                        <Badge key={badge} variant="outline">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Where Enterprises Use AlongsideOS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Win Sales Deals",
                description: "Handle technical and pricing objections live.",
              },
              {
                icon: Shield,
                title: "Stay Compliant",
                description: "Keep regulated answers aligned and safe.",
              },
              {
                icon: Users,
                title: "Accelerate Onboarding",
                description: "New hires learn directly in live calls.",
              },
              {
                icon: Target,
                title: "Elevate Support",
                description: "Resolve issues faster with guided troubleshooting prompts.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI / Outcomes */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Measurable Business Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Faster ramp",
                description: "Reps customer-ready in days, not weeks.",
              },
              {
                icon: TrendingUp,
                title: "Higher win rates",
                description: "Live objection handling boosts confidence.",
              },
              {
                icon: Shield,
                title: "Reduced risk",
                description: "Approved answers only, in every call.",
              },
              {
                icon: BarChart3,
                title: "Stronger ROI",
                description: "Enablement tied directly to your custom content.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              What Enterprises Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground mb-6">
                "AlongsideOS's Customization Suite made our product knowledge usable in real time.
                That changed our win rate."
              </blockquote>
              <div className="text-sm text-muted-foreground">— VP Sales, SaaS Enterprise</div>
            </div>
            <div className="bg-card border rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground mb-6">
                "Team Prompts + Active Prompt turned compliance from a liability into a strength."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Head of Risk, Financial Services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Enterprise Security & Governance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Role-based access control",
              },
              {
                icon: Users,
                title: "Admin-only customization privileges",
              },
              {
                icon: BarChart3,
                title: "Audit trails for prompts and knowledge changes",
              },
              {
                icon: Award,
                title: "Least-privilege defaults and compliance-ready design",
              },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Start Your Enterprise Pilot
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
              Turn your knowledge into live, auditable voice workflows today.
            </p>
          </div>

          <div className="bg-card rounded-2xl border overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center text-foreground px-6">
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Ready to See AlongsideOS in Action?
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Book a personalized demo and discover how voice AI can transform your workflow.
                  </p>
                </div>
                <Button size="lg" onClick={handleCalendarClick} className="text-base px-8 py-3">
                  Book Demo Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tWEP8ks8gSOwZ2kdhx6hMOUXDrzRb8qVC4yPTsOhs-zBKLP3GSCCAW0PVBXXFbAlxy3T5y8Ve?gv=true"
              className="w-full h-[600px] border-0 pointer-events-none opacity-10"
              title="Schedule Demo with AlongsideOS Preview"
              tabIndex={-1}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How does Google Calendar integration help?",
                a: "It preloads meeting context so Waves are relevant from the first second.",
              },
              {
                q: "What are Waves?",
                a: "Waves are <strong>voice-based AI workflows</strong> generated and deployed by the AlongsideOS Platform.",
              },
              {
                q: "How are Waves different from prompts?",
                a: "Prompts are static. <strong>Waves are dynamic, role-aware, auditable workflows</strong> tied to compliance and outcomes.",
              },
              {
                q: "How does AlongsideOS differ from other AI tools?",
                a: "Unlike Distyl (workflow-first) or Cluely (note-taking + prompts), AlongsideOS unites both:<br/><br/>• <strong>Immediate voice guidance</strong><br/>• <strong>Customizable workflows (Waves)</strong><br/>• <strong>Enterprise governance</strong>",
              },
              {
                q: "Does AlongsideOS record meetings?",
                a: "No. It focuses on in-call enablement. Recording is admin-configurable.",
              },
              {
                q: "Who controls customization?",
                a: "Admins only. They define, refine, and approve all Waves.",
              },
            ].map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="bg-card border rounded-lg"
              >
                <AccordionTrigger className="text-left text-lg px-6 py-4">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base px-6 pb-4">
                  <div dangerouslySetInnerHTML={{ __html: a }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              The comprehensive <strong>AI Enablement platform</strong>: customized, governed, and
              delivered through voice.
            </p>
            <Button size="lg" onClick={handleCalendarClick}>
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground mt-12 border-t border-border pt-8">
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
