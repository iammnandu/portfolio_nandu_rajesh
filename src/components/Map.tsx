import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default markers not showing up
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  // Kerala, India coordinates - using Thiruvananthapuram (capital) for better recognition
  const position: [number, number] = [8.5241, 76.9366];

  return (
    <div
      className={`w-full rounded-lg overflow-hidden ${className}`}
      style={{ height: "400px", minHeight: "400px" }}
    >
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          crossOrigin="anonymous"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center p-2">
              <strong className="text-lg">Nandu Rajesh</strong>
              <br />
              <span className="text-gray-600">Kerala, India</span>
              <br />
              <span className="text-sm text-gray-500">AI/ML Engineer</span>
              <br />
              <a
                href="mailto:iamnandurajesh@gmail.com"
                className="text-blue-600 hover:underline text-sm"
              >
                iamnandurajesh@gmail.com
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
