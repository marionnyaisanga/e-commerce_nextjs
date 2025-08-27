import Link from "next/link";
import { Header } from "../shared-components/Header";
import { Input } from "../shared-components/Input";
import { Button } from "../shared-components/Button";
import { Footer } from "../shared-components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-brand-mint rounded-lg p-8 lg:p-16 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-32 h-24 mx-auto mb-6">
                    <svg viewBox="0 0 100 75" className="w-full h-full text-gray-700">
                      <path
                        d="M20 20 L25 20 L30 50 L75 50 L80 20 L35 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M20 20 L20 15 Q20 10 25 10 L30 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <line x1="35" y1="25" x2="70" y2="25" stroke="currentColor" strokeWidth="1" />
                      <line x1="37" y1="35" x2="72" y2="35" stroke="currentColor" strokeWidth="1" />
                      <line x1="39" y1="45" x2="74" y2="45" stroke="currentColor" strokeWidth="1" />
                      <circle cx="35" cy="60" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="65" cy="60" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  <div className="absolute top-0 right-8 w-16 h-28 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="w-full h-20 bg-gray-900 rounded-t-lg"></div>
                    <div className="p-2">
                      <div className="w-8 h-1 bg-gray-300 rounded mx-auto"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 flex gap-2">
                    <div className="w-8 h-10 bg-pink-300 rounded-sm relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2">
                        <div className="w-1 h-2 bg-pink-400 mx-auto rounded-t"></div>
                      </div>
                    </div>
                    <div className="w-8 h-10 bg-blue-300 rounded-sm relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2">
                        <div className="w-1 h-2 bg-blue-400 mx-auto rounded-t"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto w-full">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Log in to Exclusive
                  </h1>
                  <p className="text-gray-600">Enter your details below</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email or Phone Number"
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 px-0 py-3"
                    />
                  </div>

                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 px-0 py-3"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <Button
                      type="submit"
                      className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-md"
                    >
                      Log In
                    </Button>
                    <Link
                      href="/forgot-password"
                      className="text-brand-red hover:underline text-sm"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
