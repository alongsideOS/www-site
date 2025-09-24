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

  const combinedCode = `<!-- SYSTEM PROMPT -->
${xmlCode}

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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              The World's First Voice-First AI Workflow Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-light text-balance leading-tight mb-8">
              Get Answers While You Speak — <span className="font-medium">No Post-Call Delays</span>
            </h1>

            <div className="space-y-6 mb-12">
              <p className="text-2xl font-medium text-balance leading-relaxed">
                AlongsideOS is the <span className="text-primary">AI Enablement Platform</span> that turns enterprise knowledge into voice-driven workflows called <strong className="text-foreground">Waves</strong>.
              </p>

              <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
                <span className="hidden md:block w-12 h-px bg-border"></span>
                <span className="text-center">Live answers, prompts, and workflows</span>
                <span className="hidden md:block w-12 h-px bg-border"></span>
              </div>

              <p className="text-xl text-balance leading-relaxed max-w-3xl mx-auto">
                Your teams don't wait for notes or summaries — they get{" "}
                <strong className="text-foreground">live answers, prompts, and workflows in the moment</strong>, while still speaking.
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

      {/* Why Enterprises Choose AlongsideOS */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Why Enterprises Choose AlongsideOS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">Voice Native</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enablement delivered in real time, inside conversations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">Customization First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Encode your playbooks, policies, and product truth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">Workflows at Scale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploy dynamic, auditable AI flows — we call them Waves.
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
            <p className="text-foreground text-lg font-medium mb-4">The Wave Engine</p>
            <h2 className="text-4xl md:text-5xl font-light text-balance leading-tight mb-16">
              The AlongsideOS Platform transforms knowledge into voice workflows.
            </h2>
            
            <div className="mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                At the heart of AlongsideOS is the <strong className="text-foreground">Wave Engine</strong> — the platform that generates, refines, and deploys voice-based AI workflows.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-8">What the Platform Delivers</h3>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Customization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upload product docs, policies, SLAs, SOPs, and glossaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Waves</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform static knowledge into structured, voice-triggered workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Role-Aware Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sales, Legal, Support, Engineering each get tailored Waves.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Governance & Guardrails</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Admins approve language, block unsafe responses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <RotateCw className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Auditability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every Wave is logged, versioned, and performance-tracked.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Real-Time Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Context-aware workflows surface automatically during calls based on conversation dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto mt-16">
            <h4 className="text-lg font-medium mb-6">Complete System Prompt + Wave Example in XML:</h4>
            <CodeEditor 
              code={combinedCode} 
              language="xml" 
              title="alongside-system-prompt-with-wave-example.xml" 
              collapsible={true}
              previewLines={10}
            />
            <p className="text-muted-foreground mt-6 italic text-center">
              This is how AlongsideOS turns your content into <strong>reusable, auditable voice workflows</strong>.
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
              AlongsideOS isn't a dashboard you check later. It's <strong className="text-foreground">an unobtrusive assistant in the room with you</strong>.
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
                  Context-aware suggestions surface automatically while you speak.
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
                  Shared, reusable Waves curated by admins, voice-triggered in calls.
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
                  Ask by voice for policies, definitions, or competitive intel — get the answer instantly.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <blockquote className="text-xl text-muted-foreground italic max-w-3xl mx-auto border-l-4 border-primary pl-6">
              <strong className="text-foreground not-italic">This immediacy is what distinguishes AlongsideOS</strong>: the only platform where voice + workflows meet.
            </blockquote>
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
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-6">Start Your Enterprise Pilot</h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              AlongsideOS is <strong className="text-foreground">the world's first voice-first AI workflow platform</strong>. 
              Turn your knowledge into live, auditable voice workflows today.
            </p>
          </div>

          <div className="bg-card rounded-lg border overflow-hidden relative">
            {/* Background iframe for visual appeal */}
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tWEP8ks8gSOwZ2kdhx6hMOUXDrzRb8qVC4yPTsOhs-zBKLP3GSCCAW0PVBXXFbAlxy3T5y8Ve?gv=true" 
              className="w-full h-[600px] border-0 pointer-events-none"
              title="Schedule Demo with AlongsideOS Preview"
              tabIndex={-1}
            />
            
            {/* Gray modal overlay */}
            <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center text-black px-6">
                <div className="mb-6">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-black" />
                  <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 mb-4">
                    <h3 className="text-2xl font-semibold mb-2">Ready to See AlongsideOS in Action?</h3>
                    <p className="text-gray-800 text-lg">
                      Book a personalized demo and discover how voice AI can transform your workflow.
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  onClick={handleCalendarClick}
                  className="text-base px-8 py-3 bg-white text-gray-900 hover:bg-gray-100"
                >
                  Book Demo Now
                </Button>
              </div>
            </div>
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
              <AccordionTrigger className="text-left">How does Google Calendar integration help?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                It preloads meeting context so Waves are relevant from the first second.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What are Waves?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Waves are <strong>voice-based AI workflows</strong> generated and deployed by the AlongsideOS Platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">How are Waves different from prompts?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Prompts are static. <strong>Waves are dynamic, role-aware, auditable workflows</strong> tied to compliance and outcomes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does AlongsideOS differ from other AI tools?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unlike Distyl (workflow-first) or Cluely (note-taking + prompts), AlongsideOS unites both:
                <br/><br/>
                • <strong>Immediate voice guidance</strong><br/>
                • <strong>Customizable workflows (Waves)</strong><br/>
                • <strong>Enterprise governance</strong>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Does AlongsideOS record meetings?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. It focuses on in-call enablement. Recording is admin-configurable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border-0 rounded-lg px-6">
              <AccordionTrigger className="text-left">Who controls customization?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Admins only. They define, refine, and approve all Waves.
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