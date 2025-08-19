export interface PropertyImage {
  id: string;
  url: string;
}

export type PropertyType = "HOUSE" | "APARTMENT" | "CONDO" | "TOWNHOUSE";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
  lat: number;
  lng: number;
  beds: number;
  baths: number;
  sqft?: number;
  propertyType: PropertyType;
  images: PropertyImage[];
  createdAt: string; // ISO string
}
