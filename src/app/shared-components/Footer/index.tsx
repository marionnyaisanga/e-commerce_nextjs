import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
                        <h4 className="text-xl mb-4">Subscribe</h4>
                        <p className="text-gray-300 mb-4">Get 10% off your first order</p>
                        <div className="flex">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-white text-white placeholder:text-gray-400 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                            <Button
                                size="icon"
                                className="bg-transparent border border-white border-l-0 rounded-l-none hover:bg-white hover:text-black"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Support</h3>
                        <div className="space-y-3">
                            <p className="text-gray-300">
                                111 Bijoy sarani, Dhaka,
                                <br />
                                DH 1515, Bangladesh.
                            </p>
                            <p className="text-gray-300">exclusive@gmail.com</p>
                            <p className="text-gray-300">+88015-88888-9999</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Account</h3>
                        <nav className="space-y-3">
                            <Link href="/account" className="block text-gray-300 hover:text-white transition-colors">
                                My Account
                            </Link>
                            <Link href="/login" className="block text-gray-300 hover:text-white transition-colors">
                                Login / Register
                            </Link>
                            <Link href="/cart" className="block text-gray-300 hover:text-white transition-colors">
                                Cart
                            </Link>
                            <Link href="/wishlist" className="block text-gray-300 hover:text-white transition-colors">
                                Wishlist
                            </Link>
                            <Link href="/shop" className="block text-gray-300 hover:text-white transition-colors">
                                Shop
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Link</h3>
                        <nav className="space-y-3">
                            <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-use" className="block text-gray-300 hover:text-white transition-colors">
                                Terms Of Use
                            </Link>
                            <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                                FAQ
                            </Link>
                            <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Download App</h3>
                        <p className="text-gray-400 text-sm mb-4">Save $3 with App New User Only</p>

                        <div className="flex gap-2 mb-6">
                            <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                                <div className="w-16 h-16 bg-black rounded grid grid-cols-8 grid-rows-8 gap-px p-1">
                                    {Array.from({ length: 64 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`bg-white ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="w-24 h-8 bg-white rounded flex items-center justify-center">
                                    <span className="text-xs text-black font-medium">Google Play</span>
                                </div>
                                <div className="w-24 h-8 bg-white rounded flex items-center justify-center">
                                    <span className="text-xs text-black font-medium">App Store</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 text-center">
                    <p className="text-gray-400 text-sm">
                        © Copyright Rimel 2022. All right reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
