import Link from "next/link";

export default function Footer() {
  return (
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
                  href="/#features"
                  className="hover:text-red-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
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
                  href="/#support"
                  className="hover:text-red-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#company"
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
                    href="/#about"
                    className="hover:text-red-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#why-us"
                    className="hover:text-red-600 transition-colors"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-transfer"
                    className="hover:text-red-600 transition-colors"
                  >
                    Data Transfer
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
  );
}
