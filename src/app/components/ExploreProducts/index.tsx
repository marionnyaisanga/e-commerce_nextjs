import { ProductCard } from "@/app/shared-components/ProductCard";

export default function ExploreProducts() {
  const products= [
    { name: "Breed Dry Dog Food", price: 100, image: "/images/9.png", reviews: 65 },
    { name: "CANNON EOS DSLR Camera", price: 960, image: "/images/10.png", reviews: 65 },
    { name: "ASUS FHD Gaming Laptop", price: 160, image: "/images/11.png", reviews: 65 },
    { name: "Curology Product Set", price: 360, image: "/images/13.png", reviews: 65 },
    { name: "Kids Electric Car", price: 960, image: "/images/13.png", reviews: 65 },
    { name: "Jr. Zoom Cleats", price: 1160, image: "/images/14.png", reviews: 35 },
    { name: "GP11 Shooter USB Gamepad", price: 660, image: "/images/15.png", reviews: 55 },
    { name: "Quilted Satin Jacket", price: 660, image: "/images/16.png", reviews: 55 },
  ];

  return (
    <section className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="relative group">
          <div className="flex gap-4 mb-9">
            <p className="border-red-500 bg-red-500 text-red-500 w-3.5 h-9 rounded-sm">.</p>
            <p className="text-red-500 text-[16px] mt-1.5">Our Products</p>
          </div>
          <h2 className="text-2xl font-semibold"> Explore Our Products</h2>
        </div>
        <button className="border px-6 py-2.5 bg-red-500 rounded-sm text-white text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      {/* <div className="flex justify-between items-center mb-6">
        <div className="relative group">
          <div className="flex gap-4.5 mb-9">
            <p className="border-red-500 bg-red-500 text-red-500 w-3.5 h-9 rounded-sm">.</p>
            <p className="text-red-500 text-[16px] mt-1.5">This Month</p>
          </div>
          <h2 className="text-2xl font-semibold">Best Selling Products</h2>
        </div>
        <button className="border px-7.5 py-2.5 bg-red-500 rounded-sm text-white text-sm font-medium hover:underline">
          View All
        </button>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-12">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            title={product.name}
            price={product.price.toFixed(2)}
            oldPrice={product.price > 100 ? (product.price * 1.2).toFixed(2) : ""}
            rating={4}
            reviews={product.reviews}
            discount={product.price > 100 ? "Sale" : ""}
            buttonText={product.price > 100 ? "Buy Now" : "Add to Cart"}
          />
        ))}
      </div>
    </section>
  );
}