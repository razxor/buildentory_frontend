"use client";

import { useState } from "react";

interface Filters {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  type?: string;
}

interface Props {
  onChange: (filters: Filters) => void;
}

export default function FiltersBar({ onChange }: Props) {
  const [filters, setFilters] = useState<Filters>({});

  const updateFilter = (field: keyof Filters, value: any) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    onChange(updated);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 border-b bg-white sticky top-0 z-50">
      <input
        type="number"
        placeholder="Min Price"
        className="border p-2 rounded"
        onChange={(e) => updateFilter("minPrice", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border p-2 rounded"
        onChange={(e) => updateFilter("maxPrice", Number(e.target.value))}
      />
      <select
        className="border p-2 rounded"
        onChange={(e) => updateFilter("beds", Number(e.target.value))}
      >
        <option value="">Beds</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>
      <select
        className="border p-2 rounded"
        onChange={(e) => updateFilter("baths", Number(e.target.value))}
      >
        <option value="">Baths</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>
      <select
        className="border p-2 rounded"
        onChange={(e) => updateFilter("type", e.target.value)}
      >
        <option value="">Home Type</option>
        <option value="house">House</option>
        <option value="townhouse">Townhouse</option>
        <option value="condo">Condo</option>
      </select>
    </div>
  );
}
