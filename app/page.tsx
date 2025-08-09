import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            alongsideOS {" "}
	    <br/>
            <strong className="text-red-600">
              Voice-First AI You Can Deploy in 60 Seconds
            </strong>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Skip pricey ChatGPT seats that sit idle. alongsideOS listens, sees,
            and answers right on top of your work—no copy-paste, no context
            lost.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <Card>
              <CardContent className="p-4">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold">
                        <strong>Setup Time</strong>
                      </td>
                      <td className="py-2">
                        &lt; 1 minute (no admin hoops)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold">
                        <strong>User Minimum</strong>
                      </td>
                      <td className="py-2">
                        1 (scale to thousands at your pace)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold">
                        <strong>Covers</strong>
                      </td>
                      <td className="py-2">
                        Excel, CRM, Google Docs, & any live audio/video meeting
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Why it matters */}
          <div className="max-w-3xl mx-auto text-left mb-8">
            <h3 className="text-xl font-bold text-center mb-4">
              Why it matters
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Spreadsheet stumper?</strong> Hover a cell and hear/see
                the formula fix.
              </li>
              <li>
                <strong>CRM rabbit hole?</strong> Speak the account name; get a
                summary instantly.
              </li>
              <li>
                <strong>Draft in progress?</strong> Ask for rewrites while your
                cursor stays put.
              </li>
              <li>
                <strong>Live meeting—voice & video?</strong> alongsideOS listens
                and flashes answers before you finish the sentence.
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Download for Mac
            </Button>
            <Button size="lg" variant="outline">
              Download for Windows
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 text-center">
        <p className="text-gray-600 italic">
          Trusted by 2,000+ users—from solo founders to global orgs—who need
          voice AI <strong>right now</strong>.
        </p>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 max-w-4xl mx-auto">
            “AI shouldn’t live behind complicated contracts or gated demos.
            alongsideOS delivers voice-aware intelligence right beside every
            human, from Day 1—the very essence of <em>tsukumogami</em>.”
          </blockquote>
        </div>
      </section>

      {/* Core Superpowers Tabs */}
      <section id="features" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="hears" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="hears">Hears Your Voice</TabsTrigger>
              <TabsTrigger value="sees">Sees Your Screen</TabsTrigger>
              <TabsTrigger value="responds">Responds Instantly</TabsTrigger>
            </TabsList>
            <TabsContent value="hears">
              <Card>
                <CardHeader>
                  <CardTitle>Hears Your Voice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Live audio transcription + context understanding in any
                    call—no bot joins required.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sees">
              <Card>
                <CardHeader>
                  <CardTitle>Sees Your Screen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Spots cells, dashboards, or docs so answers stay
                    laser-aligned with what’s visible.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="responds">
              <Card>
                <CardHeader>
                  <CardTitle>⚡ Responds Instantly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    One hot key → clear, voice-ready reply: spoken, on-screen,
                    or mirrored to your phone.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Live Co-Pilot Highlights */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why It Feels Like Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Voice Replies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ask out loud; get answers silently on-screen before you stop
                  talking.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Smart Nudges</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Subtle prompts like “ask budget” or “summarize next steps,”
                  whispered just to you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Compliance Guardrails</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Flags risky phrases as you speak—SOC 2 & HIPAA-grade
                  transport.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Powers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Bonus Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>📱 Mobile Mirror</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Beam live voice-generated answers to your phone—great for
                  in-person meetings or spotless screen-shares.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🧠 Supermemory</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Feed it call recordings, PDFs, Notion docs—then ask anything
                  and get voice-aware, context-rich answers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use-Case Deep Dives */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Use-Case Deep Dives
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="sales">
              <AccordionTrigger>Sales & Success</AccordionTrigger>
              <AccordionContent>
                Handle objections live: speak the question, get an answer
                flashed in-call, log action items automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="interviews">
              <AccordionTrigger>Job Interviews</AccordionTrigger>
              <AccordionContent>
                Voice-mode hints and STAR-formatted replies whispered so you
                shine under pressure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="devs">
              <AccordionTrigger>Developers & Researchers</AccordionTrigger>
              <AccordionContent>
                Read an error aloud or highlight it—receive spoken explanation
                and code fix without leaving your IDE.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Who Uses alongsideOS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Who Uses alongsideOS?
          </h2>
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-semibold">Persona</th>
                      <th className="p-4 font-semibold">Why They Love It</th>
                      <th className="p-4 font-semibold">Replaces</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Solo Founders</strong>
                      </td>
                      <td className="p-4">
                        Affordable voice AI from Day 1—no six-figure vendor
                        talks.
                      </td>
                      <td className="p-4">
                        Unused ChatGPT Plus seats, bulky voice-AI pilots
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Enterprise Sales Teams</strong>
                      </td>
                      <td className="p-4">
                        Live voice coaching and compliance in every pitch.
                      </td>
                      <td className="p-4">
                        Traditional “conversation-intelligence” tools
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Customer Support</strong>
                      </td>
                      <td className="p-4">
                        On-call voice prompts with instantaneous KB lookup.
                      </td>
                      <td className="p-4">Siloed FAQ chatbots</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <strong>Compliance & Finance</strong>
                      </td>
                      <td className="p-4">
                        Voice transcripts + guardrails keep every statement
                        audit-safe.
                      </td>
                      <td className="p-4">
                        Manual call reviews, expensive compliance services
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Competitive Contrast */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-2">How We Stand Apart</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Without Naming Names
            </p>
            <ul className="list-none space-y-4 text-left">
              <li>
                <strong>No “Cheat Mode.”</strong> We elevate human
                expertise—never encourage dishonest shortcuts.
              </li>
              <li>
                <strong>Ditch Idle ChatGPT Seats.</strong> Why pay for
                subscriptions half the company never opens? alongsideOS augments
                or replaces them with real-time, voice-aware context.
              </li>
              <li>
                <strong>Voice AI Minus the Bloat.</strong> No 3-month pilots or
                50-seat minimums—start today, even solo.
              </li>
              <li>
                <strong>Ethics First.</strong> Prompts stay off the desktop
                client; no secret-leaking tricks.
              </li>
              <li>
                <strong>HIPAA-Grade Transport.</strong> Your voice and screen
                data move through encrypted, healthcare-standard channels.
              </li>
              <li>
                <strong>Quiet Craft, Not TikTok Flash.</strong> We build
                substance, not hype reels.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-semibold">Plan</th>
                      <th className="p-4 font-semibold">Monthly</th>
                      <th className="p-4 font-semibold">
                        Key Voice-AI Goodies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Starter</strong>
                      </td>
                      <td className="p-4">Free</td>
                      <td className="p-4">
                        10 live voice queries + transcripts
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Pro</strong>
                      </td>
                      <td className="p-4">$29</td>
                      <td className="p-4">
                        Unlimited voice & screen queries + Mobile Mirror
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <strong>Enterprise</strong>
                      </td>
                      <td className="p-4">Let’s talk</td>
                      <td className="p-4">
                        Voice SSO, call-record retention, custom LLM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organization-Based Billing */}
      <section id="billing" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Organization-Based Billing
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8 italic">
            Flexible, voice-ready, built for modern org charts.
          </p>
          <Card className="max-w-4xl mx-auto mb-6">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-semibold">Feature</th>
                      <th className="p-4 font-semibold">Voice-AI Angle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>One Invoice, Many Teams</strong>
                      </td>
                      <td className="p-4">
                        Spin up voice workspaces for Sales, Support, R&D—share
                        usage or split per team.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Per-Seat or Pooled Minutes</strong>
                      </td>
                      <td className="p-4">
                        Allocate voice minutes org-wide or per power user.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Granular Controls</strong>
                      </td>
                      <td className="p-4">
                        Cap free-tier per user, boost limits for power
                        users—no blanket upgrades.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Real-Time Forecasting</strong>
                      </td>
                      <td className="p-4">
                        Dashboards predict end-of-month spend by team.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <strong>Instant Scale</strong>
                      </td>
                      <td className="p-4">
                        Add seats mid-cycle, auto-proration; remove unused
                        anytime.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <strong>Generous Free Tier</strong>
                      </td>
                      <td className="p-4">
                        Unlimited invites; each user’s first 10 voice queries
                        are free.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="text-center text-gray-600">
            <p>
              <strong>Enterprise Ready:</strong> SOC 2, SSO/SAML, purchase
              orders—plus encrypted Supermemory for private docs & call
              recordings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="support" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="q1">
              <AccordionTrigger>Do others hear the AI?</AccordionTrigger>
              <AccordionContent>
                No. alongsideOS whispers only to you—never joins the call.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>
                Which conferencing tools work?
              </AccordionTrigger>
              <AccordionContent>
                Zoom, Meet, Teams, Webex—and any platform using your mic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Is my voice data secure?</AccordionTrigger>
              <AccordionContent>
                Encrypted end-to-end, stored with HIPAA-grade standards, never
                used for training.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>
                Can I mix per-seat and pooled minutes?
              </AccordionTrigger>
              <AccordionContent>
                Yes—heavy speakers get unlimited; everyone else taps a shared
                minute bank.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>What is Supermemory?</AccordionTrigger>
              <AccordionContent>
                Your encrypted vault of docs & recordings powering voice-aware
                answers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to talk <strong>and</strong> get answers—no copy-paste
            required?
          </h2>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-200"
          >
            Download Free
          </Button>
          <p className="mt-2 text-sm text-gray-300">
            Voice AI in under 60 seconds.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
