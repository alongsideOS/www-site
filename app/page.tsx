"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
  
  const xmlCode = `<system_prompt version="3.0">
  
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

</system_prompt>`

  return (
    <div className="min-h-screen bg-background">
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
                <Button variant="outline" size="sm" className="w-full">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Voice-First AI Enablement
            </Badge>
            <h1 className="text-5xl md:text-7xl font-light text-balance leading-tight mb-8">
              Your Knowledge. <span className="font-medium">Your AI.</span> Delivered Through Voice.
            </h1>

            <div className="space-y-6 mb-12">
              <p className="text-2xl font-medium text-balance leading-relaxed">
                AlongsideOS is the <span className="text-primary">desktop voice assistant</span> that adapts entirely to
                your enterprise.
              </p>

              <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
                <span className="hidden md:block w-12 h-px bg-border"></span>
                <span className="text-center">Unlike generic AI tools</span>
                <span className="hidden md:block w-12 h-px bg-border"></span>
              </div>

              <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
                AlongsideOS empowers your teams <strong className="text-foreground">during calls</strong> with real-time
                answers, prompts, and definitions — all customized with your{" "}
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                  playbooks, policies, and product truth
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Request a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                Start Your Pilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Voice AI Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Why Voice AI Enablement Matters</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">Immediate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get answers while you speak — no post-call delays.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">Unobtrusive</h3>
              <p className="text-muted-foreground leading-relaxed">
                Always in flow, no screen-switching, no disruption.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">Empowering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Voice amplifies your team's confidence in the moment.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <blockquote className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
              AI is everywhere.{" "}
              <strong className="text-foreground not-italic">
                Enablement happens only when it's live, contextual, and customized.
              </strong>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Customization Suite */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-foreground text-lg font-medium mb-4">Enterprise AI customization</p>
            <h2 className="text-4xl md:text-5xl font-light text-balance leading-tight mb-16">
              The Customization Suite turns your knowledge into voice-powered intelligence.
            </h2>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Content Injection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upload product docs, policies, SLAs, SOPs, glossaries, and risk frameworks. AlongsideOS turns them
                    into searchable, speakable, instantly retrievable intelligence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Role-Aware Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sales, Engineers, Legal, Support — each role gets tailored prompts and definitions. AlongsideOS
                    ensures relevance by matching content to team context.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Guardrails & Governance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Admins set guardrails for what's approved, blocked, or flagged. Built-in analytics track prompt
                    adoption, accuracy, and compliance alignment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Real-Time Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Context-aware suggestions surface automatically during calls. AlongsideOS listens for key moments
                    and delivers the right prompt at the right time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <RotateCw className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your content evolves, and so does AlongsideOS. Automatic content refresh cycles ensure your team
                    always has the latest information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Precision Targeting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not every prompt is for every person. AlongsideOS delivers role-specific, situation-aware content
                    that matches your team's exact needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto mt-16">
            <h4 className="text-lg font-medium mb-6">Example — A Complete System Prompt in XML:</h4>
            <CodeEditor 
              code={xmlCode} 
              language="xml" 
              title="alongside-system-prompt-v3.xml" 
              collapsible={true}
              previewLines={8}
            />
            <p className="text-muted-foreground mt-6 italic text-center">
              This is how your team's knowledge becomes a <strong>sophisticated AI assistant</strong> during live calls.
            </p>
          </div>
        </div>
      </section>

      {/* Delivered Through Voice */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Delivered Through Voice</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Customization powers the engine. <strong>Voice delivers it in the moment of need.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Active Prompt</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Context-aware suggestions surface automatically in-call.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Team Prompts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A shared prompt library, curated by admins, reusable across teams.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Instant Lookups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ask for policies, definitions, or competitive intel by voice and get answers on the spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Every Role */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Features for Every Role</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium mb-8">For Teams</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Trigger prompts by voice or click</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Save and star useful answers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Propose new prompts to the library</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Share snippets with peers</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-8">For Admins</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Manage roles, permissions, and access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Approve/reject prompt suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Configure compliance guardrails</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span>Audit usage and track analytics</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Integrated Into Your Workflow</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-medium mb-4">Google Calendar Integration</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Pre-loads meeting context (title, attendees, links) so AlongsideOS is ready the moment a call begins.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Auto-sync
                </Badge>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-medium mb-4">Conferencing Tools</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Works seamlessly alongside Zoom, Teams, Meet, and others.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Universal
                </Badge>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-medium mb-4">Enterprise Identity</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Secure SSO and role mapping, managed by admins.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  SSO Ready
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rollout & Adoption */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Rollout & Adoption</h2>
            <p className="text-xl text-muted-foreground">A structured approach to enterprise success</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    1
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🚀</span>
                    <h3 className="text-2xl font-medium">Team Kickoff</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Structured kickoff sessions ensure high adoption from day one. Teams get hands-on guidance, tailored
                    to their roles.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="outline">Role-specific training</Badge>
                    <Badge variant="outline">Hands-on guidance</Badge>
                    <Badge variant="outline">Day 1 ready</Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🛠</span>
                    <h3 className="text-2xl font-medium">Admin Training</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Admins learn to configure prompts, manage roles, enforce compliance, and measure outcomes.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="outline">Prompt configuration</Badge>
                    <Badge variant="outline">Role management</Badge>
                    <Badge variant="outline">Compliance setup</Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-green-500/5 to-transparent rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📈</span>
                    <h3 className="text-2xl font-medium">Ongoing Enablement</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Content refresh cycles and analytics keep the Customization Suite aligned with business changes.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="outline">Content refresh</Badge>
                    <Badge variant="outline">Analytics tracking</Badge>
                    <Badge variant="outline">Business alignment</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Where Enterprises Use AlongsideOS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Win Sales Deals</h3>
              <p className="text-sm text-muted-foreground">Handle technical and pricing objections live.</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Stay Compliant</h3>
              <p className="text-sm text-muted-foreground">Keep regulated answers aligned and safe.</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Accelerate Onboarding</h3>
              <p className="text-sm text-muted-foreground">New hires learn directly in live calls.</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Elevate Support</h3>
              <p className="text-sm text-muted-foreground">
                Resolve issues faster with guided troubleshooting prompts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI / Outcomes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Measurable Business Outcomes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Faster ramp</h3>
              <p className="text-sm text-muted-foreground">reps customer-ready in days, not weeks</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Higher win rates</h3>
              <p className="text-sm text-muted-foreground">live objection handling boosts confidence</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Reduced risk</h3>
              <p className="text-sm text-muted-foreground">approved answers only, in every call</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Stronger ROI</h3>
              <p className="text-sm text-muted-foreground">enablement tied directly to your custom content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">What Enterprises Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed mb-6">
                "AlongsideOS's Customization Suite made our product knowledge usable in real time. That changed our win
                rate."
              </blockquote>
              <div className="text-sm text-muted-foreground">— VP Sales, SaaS Enterprise</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed mb-6">
                "Team Prompts + Active Prompt turned compliance from a liability into a strength."
              </blockquote>
              <div className="text-sm text-muted-foreground">— Head of Risk, Financial Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Enterprise Security & Governance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium">Role-based access control</h3>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium">Admin-only customization privileges</h3>
            </div>
            <div className="text-center">
              <BarChart3 className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium">Audit trails for prompts and knowledge changes</h3>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-medium">Least-privilege defaults and compliance-ready design</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Schedule Your Demo</h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              See AlongsideOS in action with your team. Book a personalized demo to explore how voice-powered AI can transform your workflow.
            </p>
          </div>

          <div className="bg-card rounded-lg border overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tWEP8ks8gSOwZ2kdhx6hMOUXDrzRb8qVC4yPTsOhs-zBKLP3GSCCAW0PVBXXFbAlxy3T5y8Ve?gv=true" 
              className="w-full h-[600px] border-0"
              title="Schedule Demo with AlongsideOS"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Does AlongsideOS record meetings?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. AlongsideOS is focused on in-call enablement. Recording and retention are configurable by admins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What is the difference between Team Prompts and Active Prompt?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <strong>Team Prompts</strong> are curated, reusable commands. <strong>Active Prompt</strong> surfaces
                automatically during key moments in a call.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does Google Calendar integration help?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                It pre-loads context — attendees, titles, links — so AlongsideOS is ready before the meeting starts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">What can admins control?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Roles, permissions, prompt libraries, compliance guardrails, analytics, and audits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">What can team members do?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Trigger prompts by voice, save answers, suggest new prompts, and share content back with admins.
              </AccordionContent>
            </AccordionItem>
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