import { Search, ChevronDown, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Input } from "../Input";

export function Header() {
  return (
    <header className="w-full">
      <div className="bg-black text-white text-center py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="underline cursor-pointer hover:no-underline">
              ShopNow
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-black">
              Exclusive
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-black hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1"
              >
                About
              </Link>
              <Link
                href="/signup"
                className="text-black hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1"
              >
                Sign Up
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-64 pr-10 bg-gray-50 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>

              <Heart />
              <ShoppingCart />
              <User />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
