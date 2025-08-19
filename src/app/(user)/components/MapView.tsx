"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-draw"; // ✅ import draw plugin
import { useEffect, useState } from "react";

interface Property {
  id: number;
  title: string;
  price: string;
  latitude: string;
  longitude: string;
}

interface Props {
  properties: Property[];
  setSelected: (p: Property) => void;
  onBoundsChange: (bounds: any) => void;
  onAreaDrawn?: (coords: [number, number][]) => void; // ✅ callback when polygon drawn
}

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function DrawControl({ onAreaDrawn }: { onAreaDrawn?: (coords: [number, number][]) => void }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // FeatureGroup stores drawn shapes
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Add draw controls
    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        rectangle: true,
        circle: false,
        polyline: false,
        marker: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawnItems,
      },
    });
    map.addControl(drawControl);

    // Event when shape is created
    map.on(L.Draw.Event.CREATED, (event: any) => {
      const layer = event.layer;
      drawnItems.addLayer(layer);

      if (event.layerType === "polygon" || event.layerType === "rectangle") {
        const latlngs = (layer as any).getLatLngs()[0].map((ll: any) => [
          ll.lat,
          ll.lng,
        ]);
        if (onAreaDrawn) onAreaDrawn(latlngs);
      }
    });
  }, [map, onAreaDrawn]);

  return null;
}

export default function MapView({
  properties,
  setSelected,
  onBoundsChange,
  onAreaDrawn,
}: Props) {
  const [center, setCenter] = useState<[number, number]>([32.7767, -96.797]); // default Dallas

  useEffect(() => {
    if (properties.length > 0) {
      const latitudes = properties.map((p) => parseFloat(p.latitude));
      const longitudes = properties.map((p) => parseFloat(p.longitude));

      const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
      const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;

      setCenter([avgLat, avgLng]);
    }
  }, [properties]);

  return (
    <MapContainer key={center.toString()} center={center} zoom={11} className="h-full w-full">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* ✅ Draw control */}
      <DrawControl onAreaDrawn={onAreaDrawn} />

      {properties.map((p) => (
        <Marker
          key={p.id}
          position={[parseFloat(p.latitude), parseFloat(p.longitude)]}
          icon={icon}
          eventHandlers={{ click: () => setSelected(p) }}
        >
          <Popup>
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <p>{p.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
