"use client";

import { useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  img: string;
  address: string;
  type: string;
}

interface Props {
  properties: Property[];
  loadMore: () => void;
}

export default function PropertyList({ properties, loadMore }: Props) {
  const loadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loadRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );
    observer.observe(loadRef.current);
    return () => observer.disconnect();
  }, [loadRef, loadMore]);

  return (
    <div className="grid gap-4">
      {properties.map((p) => (
        <PropertyCard
          key={p.id}
          images={[p.img]}
          price={p.price}
          beds={p.beds}
          baths={p.baths}
          sqft={p.sqft}
          address={p.address}
        />
      ))}
      <div ref={loadRef} className="py-4 text-center text-gray-500">
        Loading more...
      </div>
    </div>
  );
}
