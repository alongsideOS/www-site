"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import Header from "@/components/header";
import Footer from "@/components/footer";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "description", title: "Description of Service" },
  { id: "license", title: "License Grant" },
  { id: "restrictions", title: "Use Restrictions" },
  { id: "privacy", title: "Privacy and Data" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "updates", title: "Updates and Modifications" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Information" },
]

export default function EulaPage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>

            {/* Title */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">End User License Agreement</h1>
              <p className="text-lg text-gray-600">Last updated: January 2024</p>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none">
              <section id="acceptance" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By downloading, installing, or using alongsideOS ("the Software"), you agree to be bound by the terms
                  and conditions of this End User License Agreement ("EULA"). If you do not agree to these terms, do not
                  install or use the Software.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This EULA constitutes a legal agreement between you (either an individual or a single entity) and
                  alongsideOS, Inc. ("Company", "we", "us", or "our") regarding your use of the Software.
                </p>
              </section>

              <section id="description" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  alongsideOS is an AI-powered assistant that provides real-time answers and insights based on your
                  screen content and audio input. The Software operates by analyzing visual and audio data to deliver
                  contextual AI responses without requiring manual copy-paste operations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Software includes features such as screen reading, audio transcription, real-time AI responses,
                  mobile mirroring, and encrypted document storage ("Supermemory").
                </p>
              </section>

              <section id="license" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. License Grant</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Subject to your compliance with this EULA, the Company grants you a limited, non-exclusive,
                  non-transferable, revocable license to install and use the Software on devices you own or control for
                  your personal or internal business purposes.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">License Scope:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Personal use on your own devices</li>
                    <li>Internal business use within your organization</li>
                    <li>Use in accordance with your subscription plan limits</li>
                  </ul>
                </div>
              </section>

              <section id="restrictions" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use Restrictions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Reverse engineer, decompile, or disassemble the Software</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                  <li>Use the Software for any illegal or unauthorized purpose</li>
                  <li>Share your account credentials with unauthorized users</li>
                  <li>Attempt to circumvent usage limitations or security measures</li>
                  <li>Use the Software to process confidential information without proper authorization</li>
                </ul>
              </section>

              <section id="privacy" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. The Software processes screen content and audio data to provide AI
                  responses. All data transmission uses end-to-end encryption with healthcare-grade security standards.
                </p>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-red-900 mb-2">Data Processing:</h3>
                  <ul className="list-disc list-inside text-red-800 space-y-1">
                    <li>Screen content is analyzed locally and via encrypted channels</li>
                    <li>Audio is transcribed using secure, private processing</li>
                    <li>No data is used for model training without explicit consent</li>
                    <li>All data is encrypted at rest (AES-256) and in transit (TLS 1.3)</li>
                  </ul>
                </div>
              </section>

              <section id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Software and all related intellectual property rights are and remain the exclusive property of the
                  Company. This EULA does not grant you any rights to the Company's trademarks, service marks, or logos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You retain ownership of your data and content. The Company claims no ownership rights over the
                  information you process through the Software.
                </p>
              </section>

              <section id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE COMPANY DISCLAIMS ALL WARRANTIES,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Company does not warrant that the Software will be error-free, uninterrupted, or meet your
                  specific requirements. AI responses are generated based on available data and may not always be
                  accurate or complete.
                </p>
              </section>

              <section id="limitation-liability" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR
                  USE.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Company's total liability shall not exceed the amount paid by you for the Software in the twelve
                  (12) months preceding the claim.
                </p>
              </section>

              <section id="termination" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This EULA is effective until terminated. You may terminate it at any time by uninstalling the Software
                  and destroying all copies. The Company may terminate this EULA immediately if you breach any terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, you must cease all use of the Software and destroy all copies in your possession or
                  control.
                </p>
              </section>

              <section id="updates" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates and Modifications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company may update the Software and this EULA from time to time. Updates may be installed
                  automatically or require your action. Continued use of the Software after updates constitutes
                  acceptance of any revised terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We will notify you of material changes to this EULA through the Software or via email.
                </p>
              </section>

              <section id="governing-law" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This EULA shall be governed by and construed in accordance with the laws of the State of Delaware,
                  United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising under this EULA shall be resolved through binding arbitration in accordance with
                  the rules of the American Arbitration Association.
                </p>
              </section>

              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this EULA, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>alongsideOS, Inc.</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Email: legal@alongsideos.com</p>
                  <p className="text-gray-700 mb-2">Address: [Company Address]</p>
                  <p className="text-gray-700">Phone: [Company Phone]</p>
                </div>
              </section>
            </div>
          </div>

          {/* Right Sidebar Navigation */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-red-50 text-red-600 border-l-2 border-red-600"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
