import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Eye,
  Ear,
  Zap,
  Smartphone,
  Brain,
  Shield,
  Users,
  Briefcase,
  Code,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="alongsideOS" className="w-8 h-8" />
            <div className="text-xl md:text-2xl font-bold text-gray-900">
              alongsideOS
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
                alongsideOS - <strong className="text-red-600">Zero Copy-Paste AI</strong>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 font-light italic">
                Your screen, your audio, your mic... instant ChatGPT-level insight.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Stop tab-hopping, screenshot juggling, and window shuffling. 
                
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                alongsideOS auto-detects what you see and hear, then delivers spot-on answers in the moment—no extra clicks, no context lost.
              </p>
            </div>

            {/* Key Feature Highlight */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 max-w-5xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                Instant AI on Whatever's in Front of You
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-6 md:mb-8">
                Excel formulas, CRM dashboards, Google Docs edits, or live video
                calls—if you can see it or say it, alongsideOS delivers
                ChatGPT-grade answers <strong>without</strong> a single
                copy-paste.
              </p>

              {/* Use Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white p-4 md:p-6 rounded-lg border">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📊 Spreadsheet stumper?
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Hover a cell and get the exact formula explained or fixed.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg border">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🎯 CRM rabbit hole?
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Summon account insights in one keystroke—no tab-hopping.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg border">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📝 Draft in progress?
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Ask for rewrites or data pulls while your cursor stays put.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg border">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🎥 Live meeting—voice & video?
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    The AI listens in real time and flashes responses before you
                    finish a sentence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-red-500"
              >
                Download for Mac
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-3 bg-transparent w-full sm:w-auto"
              >
                Download for Windows
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-gray-500 text-center px-4">
              Trusted by 2,000+ reps, devs & interviewees worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="space-y-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed">
                "We are redefining how AI and humans work together."
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
                AI shouldn't be a distant temple you visit a few times a day.
                <br className="hidden md:block" />
                AI should work{" "}
                <em className="font-medium text-red-600">alongside</em> humans.
              </p>
              <div className="pt-4 border-t border-gray-200 max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                  Ultimately, our vision at alongsideOS is for the AI to be part
                  of the —
                  <span className="font-medium">operating system</span>.
                </p>
                <p className="text-base md:text-lg text-gray-500 font-medium">
                  This is what the Japanese call{" "}
                  <strong className="text-gray-700">tsukumogami</strong>.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Features Tabs */}
      <section id="features" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Core Superpowers
          </h2>
          <Tabs defaultValue="sees" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 md:mb-8 h-auto">
              <TabsTrigger
                value="sees"
                className="flex items-center gap-2 p-3 text-sm"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Sees Your Screen</span>
                <span className="sm:hidden">Screen</span>
              </TabsTrigger>
              <TabsTrigger
                value="hears"
                className="flex items-center gap-2 p-3 text-sm"
              >
                <Ear className="w-4 h-4" />
                <span className="hidden sm:inline">Hears Your Call</span>
                <span className="sm:hidden">Audio</span>
              </TabsTrigger>
              <TabsTrigger
                value="responds"
                className="flex items-center gap-2 p-3 text-sm"
              >
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Responds Instantly</span>
                <span className="sm:hidden">Instant</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sees" className="text-center">
              <div className="bg-white p-6 md:p-8 rounded-lg border">
                <Eye className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  👀 Sees Your Screen
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Knows every pixel you're viewing (slides, code, CRM) so
                  answers arrive pre-contextualized.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="hears" className="text-center">
              <div className="bg-white p-6 md:p-8 rounded-lg border">
                <Ear className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  👂 Hears Your Call
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Transcribes live audio privately. No bot joins, no one
                  notices—just perfect context.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="responds" className="text-center">
              <div className="bg-white p-6 md:p-8 rounded-lg border">
                <Zap className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  ⚡ Responds Instantly
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  One hot-key → crystal-clear answer, snippet, or follow-up
                  prompt in {"<"} 1 sec.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Magic Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Why It Feels Like Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="w-5 h-5 text-gray-600" />
                  Instant Answers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Field curve-ball questions with confident, source-linked
                  replies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="w-5 h-5 text-red-600" />
                  Smart Nudges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Gentle reminders to ask budget, propose next step, or dig into
                  pain points.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-gray-600" />
                  Compliance Guardrails
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Flags risky wording before it leaves your lips—SOC 2 & GDPR
                  ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Powers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Bonus Powers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-gray-600" />
                  📱 Mobile Mirror
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Stream answers to your phone (or a teammate's) for roaming
                  freedom or spotless screen-shares—perfect for hallway huddles
                  and stealth coaching.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-gray-600" />
                  🧠 Supermemory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">
                  Upload org-secured docs, Notion pages, wikis, or PDFs.
                  alongsideOS locks them in an encrypted vault and serves
                  hyper-contextual answers on demand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Use Cases
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="sales">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Sales & Success
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Close faster: real-time objection handling + automatic next-step
                logging.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="interviews">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Job Interviews
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Private cheat-sheet with live hints and STAR-formatted answers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dev">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Developers & Researchers
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Highlight error → get explanation, fix, and docs without leaving
                IDE.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Who Uses alongsideOS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Enterprise Sales Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Turn every rep into your best closer with on-call answers,
                  pain-point prompts, and deal-closing nudges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Customer Success & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Handle tough questions live, surface account history
                  instantly, and log next steps without manual notes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Compliance & Finance Pros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Stay on-message and steer clear of off-limits topics; every
                  conversation is guard-railed and documented.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Job Seekers & Interviewees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Whisper-mode hints and tailored talking points so you nail
                  every question—with zero visible aids.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Contrast */}
      <section id="why-us" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-6">
              How We Stand Apart
            </h2>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 font-light italic">
              Without Naming Names
            </p>

            <div className="space-y-8 md:space-y-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    <strong>No "Cheat Mode."</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Our purpose is to <em>elevate</em> human expertise, not
                    spoon-feed shortcuts that erode trust.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    <strong>Quiet, Serious Craft.</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    You won't catch us flooding TikTok with cringe demos or
                    shouting gimmicks on X. We focus on product and principle,
                    not noise.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    <strong>Ethics First.</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    We keep our prompts out of the desktop client, never bake
                    secrets into local code, and refuse data-harvesting tricks.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    <strong>HIPAA-Grade Transport.</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    All messaging moves through end-to-end encrypted,
                    healthcare-standard channels. Competing tools? Let's just
                    say their security docs read more like marketing brochures.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    <strong>Zero Leaks, Zero Drama.</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Because the best AI sidekick is the one your security team
                    actually approves—and the one that never shows up in
                    tomorrow's breach headlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>Perfect for trying out</CardDescription>
                <div className="text-2xl md:text-3xl font-bold">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 10 live queries / month</li>
                  <li>• Basic screen reading</li>
                  <li>• Audio transcription</li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 focus:ring-red-500">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-600 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-600">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>For power users</CardDescription>
                <div className="text-2xl md:text-3xl font-bold">Let's talk</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Unlimited queries</li>
                  <li>• Mobile mirror</li>
                  <li>• Supermemory vault</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 focus:ring-red-500">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For organizations</CardDescription>
                <div className="text-2xl md:text-3xl font-bold">Let's talk</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• SSO & SAML</li>
                  <li>• Audit logs</li>
                  <li>• Custom LLM</li>
                  <li>• Dedicated support</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPONENT: Organization-Based Billing (Enterprise Advantage) */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
              Organization-Based Billing
            </h3>
            <p className="text-lg text-center text-gray-600 mb-10 italic">
              Flexible, fair, and built for modern org charts.
            </p>
            <div className="overflow-x-auto bg-white rounded-lg border">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Feature
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      How It Works
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      One Invoice, Many Teams
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Pay once per org, spin up unlimited workspaces with unique
                      roles & quotas.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      Per-Seat or Pooled Usage
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Classic seats <em>or</em> shared query buckets for
                      seasonal surges.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      Granular Controls
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Cap free-tier per user, boost limits for power users—no
                      blanket upgrades.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      Real-Time Forecasting
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Dashboards predict end-of-month spend by team.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      Instant Scale
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Add seats mid-cycle, auto-proration; remove unused
                      anytime.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      Generous Free Tier
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Unlimited invites; each user’s first 10 queries are free.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
              <p>
                <strong className="font-semibold text-gray-700">
                  Enterprise Ready:
                </strong>{" "}
                SOC 2, SSO/SAML, purchase-order support—plus encrypted
                Supermemory storage for private docs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="support" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="visible">
              <AccordionTrigger>Is it visible to others?</AccordionTrigger>
              <AccordionContent>
                No. alongsideOS never joins the meeting or appears on shared
                screens.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="apps">
              <AccordionTrigger>Which apps are supported?</AccordionTrigger>
              <AccordionContent>
                All: Zoom, Meet, Teams, Webex—even phone calls via mic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security">
              <AccordionTrigger>How is my data secured?</AccordionTrigger>
              <AccordionContent>
                AES-256 at rest, TLS 1.3 in transit, and never used for model
                training.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="supermemory">
              <AccordionTrigger>What exactly is Supermemory?</AccordionTrigger>
              <AccordionContent>
                An encrypted knowledge vault where you store Notion pages, PDFs,
                playbooks—anything. The AI references them to craft pinpoint
                answers without ever leaking your data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing">
              <AccordionTrigger>
                Can I mix per-seat and pooled usage?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Assign heavy users unlimited seats, while the rest of the
                org draws from a shared query bank.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="company" className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to turn every "umm" into "aha"?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            No credit card, full power for 10 uses.
          </p>
          <Button
            size="lg"
            className="text-base md:text-lg px-6 md:px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 bg-red-600 hover:bg-red-700 focus:ring-red-500"
          >
            Download Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="alongsideOS" className="w-6 h-6" />
                <div className="text-xl font-bold text-gray-900">
                  alongsideOS
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Your invisible AI sidekick for real-time answers that work
                alongside you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-600">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-red-600 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-red-600 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-600">
                <li>
                  <Link
                    href="#support"
                    className="hover:text-red-600 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#company"
                    className="hover:text-red-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-600">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-red-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-us"
                    className="hover:text-red-600 transition-colors"
                  >
                    Why Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2024 alongsideOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
