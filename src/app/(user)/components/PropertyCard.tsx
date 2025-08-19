"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  type: string;
  images: string[];
}

interface Props {
  property: Property;
  isSelected: boolean;
  onClick: () => void;
}

export default function PropertyCard({ property, isSelected, onClick }: Props) {  
  const [current, setCurrent] = useState(0);
  const [images, SetImages] = useState<string[]>(JSON.parse(property.images));

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer transition relative 
      ${isSelected ? "ring-2" : "hover:shadow-md"}`}
    >
      {/* Image Carousel */}
      <div className="relative h-48 w-full group">
        <img
          src={process.env.NEXT_PUBLIC_API_BASE_URL + images[current]}
          alt={property.title}
          className="w-full h-full object-cover transition"
        />

        {/* Carousel Controls (appear on hover) */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Heart / Save Button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
        >
          <Heart size={16} className="text-gray-600" />
        </button>

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-white" : "bg-gray-400/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 space-y-1">
        <h3 className="text-lg font-semibold">{property.price}</h3>
        <p className="text-sm text-gray-600">
          {property.max_bed} bds | {property.max_bath} ba |{" "}
          {property.max_sqft.toLocaleString()} sqft
        </p>
        {/* <p className="text-sm text-gray-800">{property.latitude}</p>
        <p className="text-sm text-gray-800">{property.longitude}</p> */}

        <p className="text-sm text-gray-800">{property.address_1}</p>
        <p className="text-xs text-gray-500">{property.type}</p>
      </div>
    </div>
  );
}
