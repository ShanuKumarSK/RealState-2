"use client";

import { useState } from "react";
import Image from "next/image";
// import ThreeDLayoutViewer from "../ThreeDLayoutViewer";

// import dynamic from "next/dynamic";

// const ThreeDLayoutViewer = dynamic<{ file: string }>(
//   () => import("@/components/ThreeDLayoutViewer").then((mod) => mod.default),
//   {
//     ssr: false, // CRITICAL: prevents running on server
//   }
// );


const configurations = [
  {
    type: "2 BHK Apartment",
    priceRange: "73.78 L* - ₹79.98 L*",
    area: "1190-1290 Sq.ft",
    price: "73.78 L*",
    img2D: "/uploads/Neelkanth9.png",
    img3D: "/uploads/Neelkanth10.png", // or placeholder
  },
  {
    type: "3 BHK Apartment",
    priceRange: "98.58 L* - 1.10 Cr*",
    area: "1590-1780 Sq.ft",
    price: "98.58 L*",
    img2D: "/uploads/Neelkanth11.png",
    img3D: "/uploads/Neelkanth13.png",
  },
];

export default function FloorPlanSection() {
  const [selectedConfig, setSelectedConfig] = useState(1);
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");
  const config = configurations[selectedConfig];

  return (
    <section className="w-full px-4 md:px-10 py-8 bg-white shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Price & Floor Plan</h2>

      {/* BHK Tabs */}
      <div className="flex flex-wrap gap-4 mb-4">
        {configurations.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md shadow-sm text-sm w-44 text-left cursor-pointer ${selectedConfig === index
                ? "border-slate-500 text-teal-600 font-semibold bg-white shadow"
                : "border-gray-300 text-gray-600 bg-gray-50"
              }`}
            onClick={() => setSelectedConfig(index)}
          >
            <div className="truncate">{item.type}</div>
            <div className="text-xs">{item.priceRange}</div>
          </button>
        ))}
      </div>

      {/* Area Tabs */}
      <div className="text-sm text-primary font-semibold border-b border-primary mb-4 inline-block text-gray-800">
        {config.area}
      </div>

      {/* Price */}
      <p className="text-lg font-bold mb-4 text-gray-800">₹ {config.price}</p>

      {/* Toggle for 2D / 3D */}
      <div className="relative">
        <div className="absolute right-0 top-0 flex flex-col items-center rounded-full overflow-hidden bg-white border shadow z-10">
          <button
            className={`px-3 py-1 text-xs font-semibold cursor-pointer ${viewMode === "3D" ? "text-white bg-cyan-700" : "text-cyan-800"}`}
            onClick={() => setViewMode("3D")}
          >
            3D
          </button>
          <button
            className={`px-3 py-1 text-xs font-semibold cursor-pointer ${viewMode === "2D"
                ? "bg-cyan-700 text-white rounded-b-full"
                : "bg-white text-cyan-800"
              }`}
            onClick={() => setViewMode("2D")}
          >
            2D
          </button>
        </div>

        <div className="w-full flex justify-center">
          {viewMode === "2D" ? (
            <Image
              src={config.img2D}
              alt={config.type}
              width={500}
              height={300}
              className="rounded-lg border shadow"
            />
          ) : (
            // <div className="w-[90vw] max-w-lg aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
            //   <p className="text-sm text-gray-500">3D View Placeholder</p>
            // </div>
            <Image
              src={config.img3D}
              alt={config.type}
              width={500}
              height={300}
              className="rounded-lg border shadow"
            />

            // <div className="bg-white rounded-xl shadow-md w-full max-w-2xl">
            //   <ThreeDLayoutViewer file="/models/Avocado2.glb" />
            // </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <div>
            <p className="font-semibold">Super Builtup Area</p>
            <p>{config.area}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>🆔</span>
          <div>
            <p className="font-semibold">Rera ID</p>
            <p>UPRERAPRJ6035</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>📅</span>
          <div>
            <p className="font-semibold">Possession Status</p>
            <p>Nov, 2029</p>
          </div>
        </div>
      </div>
    </section>
  );
}
