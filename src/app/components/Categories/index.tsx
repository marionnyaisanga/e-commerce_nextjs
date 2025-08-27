import CategoryItem from "@/app/shared-components/CategoryItem";
import { ArrowLeft, ArrowRight, Camera, Computer, Gamepad, Headphones, Smartphone, Watch } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Computers", icon: Computer },
    { name: "SmartWatch", icon: Watch },
    { name: "Camera", icon: Camera },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Browse By Category</h2>
        <div className="flex items-center space-x-2">
          <button className="text-gray-600 cursor-pointer"><ArrowLeft /></button>
          <button className="text-gray-600 cursor-pointer">< ArrowRight /></button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryItem
            key={category.name}
            icon={category.icon}
            label={category.name}
            active={category.name === "Camera"}
          />
        ))}
      </div>
    </div>
  );
}