

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, Truck, Headphones, Shield, Smartphone, Laptop, Watch, Camera, Gamepad } from "lucide-react";
import { Button } from "./shared-components/Button";
import { Footer } from "./shared-components/Footer";
import { Header } from "./shared-components/Header";
import { ProductCard } from "./shared-components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 py-8 border-r">
              <nav className="space-y-4">
                <Link href="/category/womens-fashion" className="flex items-center justify-between text-gray-700 hover:text-black">
                  Woman&apos;s Fashion <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/category/mens-fashion" className="flex items-center justify-between text-gray-700 hover:text-black">
                  Men&apos;s Fashion <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/category/electronics" className="block text-gray-700 hover:text-black">
                  Electronics
                </Link>
                <Link href="/category/home-lifestyle" className="block text-gray-700 hover:text-black">
                  Home & Lifestyle
                </Link>
                <Link href="/category/medicine" className="block text-gray-700 hover:text-black">
                  Medicine
                </Link>
                <Link href="/category/sports-outdoor" className="block text-gray-700 hover:text-black">
                  Sports & Outdoor
                </Link>
                <Link href="/category/baby-toys" className="block text-gray-700 hover:text-black">
                  Baby&apos;s & Toys
                </Link>
                <Link href="/category/groceries-pets" className="block text-gray-700 hover:text-black">
                  Groceries & Pets
                </Link>
                <Link href="/category/health-beauty" className="block text-gray-700 hover:text-black">
                  Health & Beauty
                </Link>
              </nav>
            </aside>
            
            {/* Main Content */}
            <div className="flex-1 py-8">
              {/* Hero Banner */}
              <div className="bg-black text-white rounded-lg p-8 mb-16 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-black text-xs font-bold">📱</span>
                      </div>
                      <span className="text-gray-300">iPhone 14 Series</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      Up to 10%<br />
                      off Voucher
                    </h1>
                    <Link href="/shop" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80">
                      Shop Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto" aria-label="iPhone 14 Series product image"></div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-8" role="tablist">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === 1}
                      aria-label={`Slide ${i}`}
                      className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-brand-red' : 'bg-gray-500'}`}
                    />
                  ))}
                </div>
              </div>
              
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-5 h-10 bg-brand-red rounded"></div>
                  <span className="text-brand-red font-semibold">Today&apos;s</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4 lg:gap-8">
                  <h2 className="text-2xl lg:text-3xl font-bold">Flash Sales</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
                    <div className="flex gap-3 sm:gap-4 text-center">
                      <div>
                        <div className="text-xs text-gray-500">Days</div>
                        <div className="text-xl lg:text-2xl font-bold">03</div>
                      </div>
                      <div className="text-brand-red text-xl lg:text-2xl">:</div>
                      <div>
                        <div className="text-xs text-gray-500">Hours</div>
                        <div className="text-xl lg:text-2xl font-bold">23</div>
                      </div>
                      <div className="text-brand-red text-xl lg:text-2xl">:</div>
                      <div>
                        <div className="text-xs text-gray-500">Minutes</div>
                        <div className="text-xl lg:text-2xl font-bold">19</div>
                      </div>
                      <div className="text-brand-red text-xl lg:text-2xl">:</div>
                      <div>
                        <div className="text-xs text-gray-500">Seconds</div>
                        <div className="text-xl lg:text-2xl font-bold">56</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex gap-2">
                      <Button size="icon" variant="outline" className="rounded-full" aria-label="Previous products">
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full" aria-label="Next products">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    {
                      name: "HAVIT HV-G92 Gamepad",
                      price: "120",
                      oldPrice: "160",
                      discount: "-40%",
                      rating: 5,
                      reviews: 88,
                      image: "/images/gamepad.jpg"
                    },
                    {
                      name: "AK-900 Wired Keyboard",
                      price: "960",
                      oldPrice: "1160",
                      discount: "-35%",
                      rating: 4,
                      reviews: 75,
                      image: "/images/2.jpg"
                    },
                    {
                      name: "IPS LCD Gaming Monitor",
                      price: "370",
                      oldPrice: "400",
                      discount: "-30%",
                      rating: 5,
                      reviews: 99,
                      image: "/images/3.jpg"
                    },
                    {
                      name: "S-Series Comfort Chair",
                      price: "375",
                      oldPrice: "400",
                      discount: "-25%",
                      rating: 4,
                      reviews: 99,
                      image: "/images/4.jpg"
                    }
                  ].map((product, i) => (
                    <ProductCard
                      key={i}
                      image={product.image}
                      title={product.name}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      rating={product.rating}
                      reviews={product.reviews}
                      discount={product.discount}
                      buttonText="Add To Cart"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8">
                    View All Products
                  </Button>
                </div>
              </section>
              
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-5 h-10 bg-brand-red rounded"></div>
                  <span className="text-brand-red font-semibold">Categories</span>
                </div>
                <h2 className="text-3xl font-bold mb-8">Browse By Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { name: "Phones", icon: <Smartphone/> },
                    { name: "Computers", icon: <Laptop /> },
                    { name: "SmartWatch", icon: <Watch /> },
                    { name: "Camera", icon: <Camera />, active: true },
                    { name: "HeadPhones", icon: <Headphones /> },
                    { name: "Gaming", icon: <Gamepad /> }
                  ].map((category, i) => (
                    <div key={i} className={`p-6 text-center cursor-pointer transition-colors ${category.active ? 'bg-brand-red text-white' : 'hover:bg-brand-red hover:text-white'} rounded-lg`}>
                      <div className="text-4xl mb-4" aria-hidden="true">{category.icon}</div>
                      <div className="font-medium">{category.name}</div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-5 h-10 bg-brand-red rounded"></div>
                  <span className="text-brand-red font-semibold">This Month</span>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold">Best Selling Products</h2>
                  <Button className="bg-brand-red hover:bg-brand-red-hover text-white">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "The north coat",
                      price: "260",
                      oldPrice: "360",
                      rating: 5,
                      reviews: 65,
                      image: "/images/5.png"
                    },
                    {
                      name: "Gucci duffle bag",
                      price: "960",
                      oldPrice: "1160",
                      rating: 4,
                      reviews: 65,
                      image: "/images/6.png"
                    },
                    {
                      name: "RGB liquid CPU Cooler",
                      price: "160",
                      oldPrice: "170",
                      rating: 4,
                      reviews: 65,
                      image: "/images/7.png"
                    },
                    {
                      name: "Small BookShelf",
                      price: "360",
                      rating: 5,
                      reviews: 65,
                      image: "/images/8.png"
                    }
                  ].map((product, i) => (
                    <ProductCard
                      key={i}
                      image={product.image}
                      title={product.name}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      rating={product.rating}
                      reviews={product.reviews}
                    />
                  ))}
                </div>
              </section>
              
              <section className="mb-16">
                <div className="bg-black text-white rounded-lg p-8 lg:p-16 relative overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-green-400 mb-4">Categories</p>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        Enhance Your<br />
                        Music Experience
                      </h2>
                      <div className="flex gap-4 mb-8">
                        {["23", "05", "59", "35"].map((time, i) => (
                          <div key={i} className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                            <div className="font-bold text-sm">{time}</div>
                            <div className="text-xs">{["Hours", "Days", "Minutes", "Seconds"][i]}</div>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-8">
                        Buy Now!
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto" aria-label="Music experience product"></div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-5 h-10 bg-brand-red rounded"></div>
                  <span className="text-brand-red font-semibold">Our Products</span>
                </div>
                <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCard
                      key={i}
                      image={`/images/${i + 1}.jpg`}
                      title="Product Name"
                      price="120"
                      oldPrice="160"
                      rating={5}
                      reviews={88}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8">
                    View All Products
                  </Button>
                </div>
              </section>
              
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-5 h-10 bg-brand-red rounded"></div>
                  <span className="text-brand-red font-semibold">Featured</span>
                </div>
                <h2 className="text-3xl font-bold mb-8">New Arrival</h2>
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-2 lg:row-span-2 bg-black text-white rounded-lg p-8 relative overflow-hidden">
                    <Image
                      src="/images/playstation.jpg"
                      alt="PlayStation 5"
                      layout="fill"
                      objectFit="cover"
                      className="z-0"
                      priority
                    />
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
                      <p className="text-gray-300 mb-4">Black and White version of the PS5 coming out on sale.</p>
                      <Link href="/products/playstation-5" className="text-white underline hover:no-underline">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-2 h-[300px] bg-black text-white rounded-lg p-8 relative overflow-hidden">
                    <Image
                      src="/images/girl.jpg"
                      alt="Women's Collections"
                      layout="fill"
                      objectFit="cover"
                      className="z-0"
                      priority
                    />
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-xl font-bold mb-2">Women&apos;s Collections</h3>
                      <p className="text-gray-300 mb-2">Featured woman collections that give you another vibe.</p>
                      <Link href="/collections/womens" className="text-white underline hover:no-underline">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <div className="bg-black h-[200px] text-white rounded-lg p-8 relative overflow-hidden">
                    <Image
                      src="/images/speaker3.png"
                      alt="Speakers"
                      layout="fill"
                      objectFit="cover"
                      className="z-0"
                      priority
                    />
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-lg font-bold mb-2">Speakers</h3>
                      <p className="text-gray-300 mb-2">Amazon wireless speakers</p>
                      <Link href="/products/speakers" className="text-white underline hover:no-underline">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-lg p-8 relative overflow-hidden">
                    <Image
                      src="/images/gucci.png"
                      alt="Perfume"
                      layout="fill"
                      objectFit="cover"
                      className="z-0"
                      priority
                    />
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-lg font-bold mb-2">Perfume</h3>
                      <p className="text-gray-300 mb-2">GUCCI INTENSE OUD EDP</p>
                      <Link href="/products/perfume" className="text-white underline hover:no-underline">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">FREE AND FAST DELIVERY</h3>
                    <p className="text-gray-600">Free delivery for all orders over $140</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Headphones className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
                    <p className="text-gray-600">Friendly 24/7 customer support</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">MONEY BACK GUARANTEE</h3>
                    <p className="text-gray-600">We return money within 30 days</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
