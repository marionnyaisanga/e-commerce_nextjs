"use client";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number | string;
  oldPrice?: number | string;
  rating: number;
  reviews?: number;
  discount?: string;
  buttonText?: string;
}

type Product = ProductCardProps
  

export function ProductCard({ image, title, price, oldPrice,rating, reviews, discount, buttonText }: Product) {
  const [liked, setLiked] = useState(false);
  const [viewed, setViewed] = useState(false);

  const renderStars = (rating: number ) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
      {discount && (
        <div className={`absolute top-2 left-2 z-10 ${discount === "Sale" ? "bg-green-500" : "bg-red-500"} text-white text-xs px-2 py-1 rounded`}>
          {discount}
        </div>
      )}
      <div className="p-3">
        <div className="relative">
          
          <div className="absolute top-0 right-2 grid space-x-1">
            <button className=" p-1.5">
              <Heart className={`text-gray-500 ${liked ? " fill-red-500 text-red-500" : "fill-none"} w-4 h-4`} onClick={() => setLiked(!liked)} />
            </button>
            <button className=" p-1.5 ">
              <Eye className={`text-gray-500 ${viewed ? "fill-current" : "fill-none"} w-4 h-4`} onClick={() => setViewed(!viewed)} />
            </button>
          </div>
          <Image src={image} alt={title} className="w-full h-48 object-contain" width={200} height={250} />
        </div>
        <div className="mt-3">
          <h3 className="font-medium text-sm">{title}</h3>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {renderStars(rating)}
            </div>
            <span className="text-gray-500 text-xs">({reviews})</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-bold">${price}</span>
            {oldPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">${oldPrice}</span>
            )}
          </div>
          {buttonText && (
            <button className="w-full bg-black text-white text-xs py-1.5 rounded mt-2 hover:bg-gray-800">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
)}



