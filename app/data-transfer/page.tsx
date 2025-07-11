import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DataTransferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-2">
            AlongsideOS Data Transfer Agreement
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last Updated on April 1, 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">
              RECORD 1: EU Meeting Data to US-Based Processing Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <p><strong>Destination:</strong> United States</p>
              <p><strong>Legal Mechanism:</strong> Standard Contractual Clauses (SCCs)</p>
              <p><strong>Effective Date:</strong> April 1, 2025</p>
              <p><strong>Transfer Frequency:</strong> Live during active user sessions</p>
              <p><strong>Data Volume:</strong> Continuous during active meetings</p>
              <p><strong>Scope:</strong> Regular and ongoing</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Objective & Data Types</h3>
            <p><strong>Objective:</strong> To facilitate real-time meeting transcription, AI-driven analysis, and insight generation for our European enterprise clients.</p>
            <p><strong>Data Types:</strong></p>
            <ul className="list-disc list-inside pl-4">
              <li>Voice and audio recordings from meetings in the EU</li>
              <li>Generated transcripts and associated text content</li>
              <li>Speech patterns and related voice data</li>
              <li>Metadata from meetings, such as timestamps and participant IDs</li>
              <li>User identification details, including names and email addresses</li>
              <li>Business-related context from meeting content</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Protective Measures</h3>
            <ul className="list-disc list-inside pl-4">
              <li>Secure data transit via end-to-end encryption (TLS 1.2+)</li>
              <li>Encryption of data at rest using AES-256</li>
              <li>Use of pseudonymization for user identifiers where feasible</li>
              <li>Automated deletion of data post-processing</li>
              <li>Strict access controls to limit data processing to authorized AI systems</li>
              <li>Comprehensive audit logs for all data access and processing events</li>
              <li>Frequent security assessments and penetration tests</li>
              <li>Adherence to data minimization principles</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Risk Evaluation</h3>
            <ul className="list-disc list-inside pl-4">
                <li><strong>Government Access:</strong> Potential for data access by U.S. government agencies under statutes like the CLOUD Act or FISA.</li>
                <li><strong>Data Latency:</strong> The need for real-time processing currently limits options for data localization within the EU.</li>
                <li><strong>Mitigation Strategy:</strong> Risks are counterbalanced by robust technical safeguards and policies for limited data retention.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">
              RECORD 2: EU User Account Data to US-Based Database Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <p><strong>Destination:</strong> United States</p>
                <p><strong>Legal Mechanism:</strong> Standard Contractual Clauses (SCCs)</p>
                <p><strong>Effective Date:</strong> April 1, 2025</p>
                <p><strong>Transfer Frequency:</strong> Ongoing for account management</p>
                <p><strong>Data Volume:</strong> All EU-based user account data</p>
                <p><strong>Scope:</strong> Regular and ongoing</p>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3">Objective & Data Types</h3>
            <p><strong>Objective:</strong> To enable user authentication, manage accounts, and deliver services to our EU enterprise users.</p>
            <p><strong>Data Types:</strong></p>
            <ul className="list-disc list-inside pl-4">
                <li>Authentication credentials and user verification data</li>
                <li>User profile information (e.g., names, emails, job titles)</li>
                <li>Data on organization and team membership</li>
                <li>Settings and user preference configurations</li>
                <li>Session data and login history</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-3">Protective Measures</h3>
            <ul className="list-disc list-inside pl-4">
                <li>Securing data at rest with AES-256 database encryption</li>
                <li>Utilizing encrypted connections (TLS 1.2+) for all database access</li>
                <li>Enforcing multi-factor authentication for any administrative access</li>
                <li>Monitoring and logging all database access</li>
                <li>Applying regular security patches and updates</li>
                <li>Implementing encrypted and secure data backups</li>
                <li>Using network isolation and firewalls</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-3">High-Risk Discoveries</h3>
            <ul className="list-disc list-inside pl-4">
                <li><strong>Government Access:</strong> Database records could be subject to access requests from U.S. law enforcement.</li>
                <li><strong>Data Storage:</strong> User data is stored for extended periods in U.S. infrastructure.</li>
                <li><strong>Admin Access:</strong> Possibility of technical access by US-based database administrators.</li>
                <li><strong>Mitigation Strategy:</strong> Risks are addressed through strong contractual clauses and technical controls.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">
              RECORD 3: EU System Logs to US-Based Monitoring Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <p><strong>Destination:</strong> United States</p>
                <p><strong>Legal Mechanism:</strong> Standard Contractual Clauses (SCCs)</p>
                <p><strong>Effective Date:</strong> April 1, 2025</p>
                <p><strong>Transfer Frequency:</strong> Automated, continuous log transfers</p>
                <p><strong>Data Volume:</strong> High-volume, automated data transfers</p>
                <p><strong>Scope:</strong> Regular and ongoing</p>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3">Objective & Data Types</h3>
            <p><strong>Objective:</strong> For monitoring system health, tracking errors, and optimizing performance for our EU services.</p>
            <p><strong>Data Types:</strong></p>
            <ul className="list-disc list-inside pl-4">
                <li>Error reports and system event logs</li>
                <li>Usage statistics and performance metrics</li>
                <li>IP addresses and device details (anonymized when possible)</li>
                <li>Diagnostic data from the application</li>
                <li>Logs related to security events</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-3">Protective Measures</h3>
            <ul className="list-disc list-inside pl-4">
                <li>Encryption of log data both in transit and at rest</li>
                <li>Automated anonymization of IP addresses where feasible</li>
                <li>Strict retention periods (typically 90 days)</li>
                <li>Access controls to ensure logs are only seen by authorized staff</li>
                <li>Secure, automated log rotation and deletion</li>
                <li>Practices to minimize data collection in logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">
              Justification for Data Processing Outside the EU
            </h2>
            <p>AlongsideOS utilizes a serverless architecture where all processing infrastructure is based in the United States. The processing of personal data from EU residents in the US is founded on the following business and technical necessities:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Rationale</h3>
            <ul className="list-disc list-inside pl-4">
                <li>Our serverless model necessitates a centralized processing infrastructure.</li>
                <li>Real-time AI functions require low-latency connections to our AI service partners.</li>
                <li>Current technological constraints limit the feasibility of real-time EU-based processing at our required scale.</li>
                <li>The service architecture is optimized for high performance and reliability.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Legal Rationale</h3>
            <ul className="list-disc list-inside pl-4">
                <li>We have implemented Standard Contractual Clauses (SCCs) with all our U.S.-based data processors.</li>
                <li>Our additional safeguards often exceed the minimum requirements of the SCCs.</li>
                <li>We have conducted and documented Transfer Impact Assessments (TIAs).</li>
                <li>The rights of data subjects are upheld despite the US processing location.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Business Rationale</h3>
            <ul className="list-disc list-inside pl-4">
                <li>Access to U.S.-based AI processing is essential for the core functionality of our service.</li>
                <li>Processing requirements are driven by customer demand for our advanced AI features.</li>
                <li>Our competitive position depends on access to leading-edge AI technologies.</li>
                <li>Service quality and reliability are best maintained through our current architectural design.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Future Planning</h3>
            <ul className="list-disc list-inside pl-4">
                <li>We are actively monitoring changes in EU regulations regarding data localization.</li>
                <li>We are continuously evaluating EU-based processing alternatives as the technology landscape evolves.</li>
                <li>We maintain the flexibility to adapt our architecture in response to new legal requirements.</li>
                <li>We perform ongoing assessments of the necessity and proportionality of data transfers.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
