interface Property {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  address: string;
  type: string;
  lat:number;
  lng:number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Family Home",
    price: "$695,000",
    beds: 4,
    baths: 3,
    sqft: 3102,
    images: ["https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg", "https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg"],
    address: "123 Main St, Dallas, TX",
    type: "House for Sale",
    lat: 32.7767,
    lng: -96.7970,
  },
  {
    id: 2,
    title: "Cozy Townhouse",
    price: "$420,000",
    beds: 3,
    baths: 2,
    sqft: 1800,
    images: ["https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg"],
    address: "456 Oak St, Dallas, TX",
    type: "Townhouse",
    lat: 32.78,
    lng: -96.8,
  },
  {
    id: 3,
    title: "Modern Family Home",
    price: "$695,000",
    beds: 4,
    baths: 3,
    sqft: 3102,
    images: ["https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"],
    address: "123 Main St, Dallas, TX",
    type: "House for Sale",
    lat: 32.7767,
    lng: -96.7970,
  },
  {
    id: 4,
    title: "Cozy Townhouse",
    price: "$420,000",
    beds: 3,
    baths: 2,
    sqft: 1800,
    images: ["https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg"],
    address: "456 Oak St, Dallas, TX",
    type: "Townhouse",
    lat: 32.78,
    lng: -96.8,
  },
  {
    id: 5,
    title: "Modern Family Home",
    price: "$695,000",
    beds: 4,
    baths: 3,
    sqft: 3102,
    images: ["https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"],
    address: "123 Main St, Dallas, TX",
    type: "House for Sale",
    lat: 32.7767,
    lng: -96.7970,
  },
  {
    id: 6,
    title: "Cozy Townhouse",
    price: "$420,000",
    beds: 3,
    baths: 2,
    sqft: 1800,
    images: ["https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg"],
    address: "456 Oak St, Dallas, TX",
    type: "Townhouse",
    lat: 32.78,
    lng: -96.8,
  },
];