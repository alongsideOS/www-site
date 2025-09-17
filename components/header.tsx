import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="alongsideOS" className="w-7 h-7" />
          <span className="text-xl font-bold text-gray-900">alongsideOS</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">
            FAQ
          </Link>
          <Link href="https://calendar.app.google/fk1EMKKerDqLojZh7" target="_blank">
            <Button variant="outline" size="sm">
              Book Demo
            </Button>
          </Link>
        </nav>
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
