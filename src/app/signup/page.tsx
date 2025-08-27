import Link from "next/link";
import { Header } from "../shared-components/Header";
import { Input } from "../shared-components/Input";
import { Button } from "../shared-components/Button";
import { Footer } from "../shared-components/Footer";

export default function SignUp() {
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
                    Create an account
                  </h1>
                  <p className="text-gray-600">Enter your details below</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 px-0 py-3"
                    />
                  </div>

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

                  <div className="pt-4 space-y-4">
                    <Button
                      type="submit"
                      className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3 rounded-md"
                    >
                      Create Account
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-gray-300 py-3 rounded-md flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Sign up with Google
                    </Button>

                    <p className="text-center text-sm text-gray-600">
                      Already have account?{" "}
                      <Link
                        href="/signin"
                        className="text-black hover:underline font-medium"
                      >
                        Sign In
                      </Link>
                    </p>
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
