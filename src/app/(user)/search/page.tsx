"use client";
import axios from "axios";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PropertyCard from "../components/PropertyCard";
import FiltersBar from "../components/FiltersBar";
// import {properties} from '../../../data/properties.ts'

// Define Property type or import it from your types file
interface Property {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  address_1: string;
  type: string;
  latitude:string;
  longitude:string;
}

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function SearchPage() {
  const [properties, setProperties] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {        
        const res = await fetch(`/api/properties?q=76227&type=Community`, {
          cache: "no-store", // prevents Next.js from caching
        });
        const data = await res.json();
        data.success && setProperties(data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  console.log("razz", properties);
  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* <FiltersBar onChange={applyFilters} /> */}
      {/* Left Map */}
      <div className="w-1/2 h-full">
        {/* <MapView properties={properties} setSelected={setSelected} /> */}
        <MapView
          properties={properties}
          setSelected={setSelected}
          onBoundsChange={(bounds) => console.log("Map moved", bounds)}
          onAreaDrawn={(coords) => {
            console.log("User drew area:", coords);
            // ✅ send coords to API to fetch only properties inside polygon
          }}
        />
      </div>

      {/* Right Property List */}
      <div className="w-1/2 h-full overflow-y-scroll p-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4">
          Homes for Sale in Dallas, TX
        </h2>
        <div className="grid gap-4 grid-cols-2">
          {properties.map((p) => (
            <PropertyCard
              key={p.id}
              property={p}
              isSelected={selected?.id === p.id}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
