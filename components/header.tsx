import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
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
            href="/#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            FAQ
          </Link>
          <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
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
  );
}
