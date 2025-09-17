import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="alongsideOS" className="w-7 h-7" />
              <span className="text-xl font-bold text-gray-900">alongsideOS</span>
            </div>
            <p className="text-gray-600 mb-6">Voice-first AI that works alongside you</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/use-cases">Use Cases</Link>
              </li>
              <li>
                <Link href="/excel">Excel</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/use-cases#sales">Sales</Link>
              </li>
              <li>
                <Link href="/use-cases#support">Support</Link>
              </li>
              <li>
                <Link href="/use-cases#recruiting">Recruiting</Link>
              </li>
              <li>
                <Link href="/use-cases#consulting">Consulting</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">Contact</Link>
              </li>
              <li>
                <Link href="/eula">EULA</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">© 2024 alongsideOS. All rights reserved.</div>
      </div>
    </footer>
  );
}
