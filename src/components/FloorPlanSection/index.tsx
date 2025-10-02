// "use client";

// import { useState } from "react";
// import Image from "next/image";
// // import ThreeDLayoutViewer from "../ThreeDLayoutViewer";

// // import dynamic from "next/dynamic";

// // const ThreeDLayoutViewer = dynamic<{ file: string }>(
// //   () => import("@/components/ThreeDLayoutViewer").then((mod) => mod.default),
// //   {
// //     ssr: false, // CRITICAL: prevents running on server
// //   }
// // );

// const configurations = [
//   {
//     type: "2 BHK Apartment",
//     priceRange: "73.78 L* - ₹79.98 L*",
//     area: "1190-1290 Sq.ft",
//     price: "73.78 L*",
//     img1: "/uploads/Neelkanth2BHKFloorPlan-1190.png",
//     img2: "/uploads/Neelkanth2BHKFloorPlan-1290.png", // or placeholder
//   },
//   {
//     type: "3 BHK Apartment",
//     priceRange: "98.58 L* - 1.10 Cr*",
//     area: "1590-1780 Sq.ft",
//     price: "98.58 L*",
//     img1: "/uploads/Neelkanth3BHKFloorPlan-1590.png",
//     img2: "/uploads/Neelkanth3BHKFloorPlan-1630.png",
//     img3: "/uploads/Neelkanth3BHKFloorPlan-1640.png",
//     img4: "/uploads/Neelkanth3BHKFloorPlan-1780.png",
//   },
// ];

// export default function FloorPlanSection() {
//   const [selectedConfig, setSelectedConfig] = useState(1);
//   const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");
//   const config = configurations[selectedConfig];

//   return (
//     <section className="w-full px-4 md:px-10 py-8 bg-white shadow-lg">
//       <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Price & Floor Plan</h2>

//       {/* BHK Tabs */}
//       <div className="flex flex-wrap gap-4 mb-4">
//         {configurations.map((item, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 border rounded-md shadow-sm text-sm w-44 text-left cursor-pointer ${selectedConfig === index
//                 ? "border-slate-500 text-teal-600 font-semibold bg-white shadow"
//                 : "border-gray-300 text-gray-600 bg-gray-50"
//               }`}
//             onClick={() => setSelectedConfig(index)}
//           >
//             <div className="truncate">{item.type}</div>
//             <div className="text-xs">{item.priceRange}</div>
//           </button>
//         ))}
//       </div>

//       {/* Area Tabs */}
//       <div className="text-sm text-primary font-semibold border-b border-primary mb-4 inline-block text-gray-800">
//         {config.area}
//       </div>

//       {/* Price */}
//       <p className="text-lg font-bold mb-4 text-gray-800">₹ {config.price}</p>

//       {/* Toggle for 2D / 3D */}
//       <div className="relative">
//         {/* <div className="absolute right-0 top-0 flex flex-col items-center rounded-full overflow-hidden bg-white border shadow z-10">
//           <button
//             className={`px-3 py-1 text-xs font-semibold cursor-pointer ${viewMode === "3D" ? "text-white bg-cyan-700" : "text-cyan-800"}`}
//             onClick={() => setViewMode("3D")}
//           >
//             3D
//           </button>
//           <button
//             className={`px-3 py-1 text-xs font-semibold cursor-pointer ${viewMode === "2D"
//                 ? "bg-cyan-700 text-white rounded-b-full"
//                 : "bg-white text-cyan-800"
//               }`}
//             onClick={() => setViewMode("2D")}
//           >
//             2D
//           </button>
//         </div> */}

//         <div className="w-full flex justify-center">
//           {viewMode === "2D" ? (
//             <Image
//               src={config.img2D}
//               alt={config.type}
//               width={500}
//               height={300}
//               className="rounded-lg border shadow"
//             />
//           ) : (
//             // <div className="w-[90vw] max-w-lg aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
//             //   <p className="text-sm text-gray-500">3D View Placeholder</p>
//             // </div>
//             <Image
//               src={config.img3D}
//               alt={config.type}
//               width={500}
//               height={300}
//               className="rounded-lg border shadow"
//             />

//             // <div className="bg-white rounded-xl shadow-md w-full max-w-2xl">
//             //   <ThreeDLayoutViewer file="/models/Avocado2.glb" />
//             // </div>
//           )}
//         </div>
//       </div>

//       {/* Footer Info */}
//       <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
//         <div className="flex items-center gap-2">
//           <span>🏢</span>
//           <div>
//             <p className="font-semibold">Super Builtup Area</p>
//             <p>{config.area}</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <span>🆔</span>
//           <div>
//             <p className="font-semibold">Rera ID</p>
//             <p>UPRERAPRJ6035</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <span>📅</span>
//           <div>
//             <p className="font-semibold">Possession Status</p>
//             <p>Nov, 2029</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const configurations = [
  {
    type: "2 BHK Apartment",
    priceRange: "73.78 L* - ₹79.98 L*",
    basePrice: "73.78 L*",
    floorPlans: [
      {
        img: "/uploads/Neelkanth2BHKFloorPlan-1190.png",
        superBuiltupArea: "1190 Sq.ft",
        carpetArea: "728 Sq.ft",
        builtupArea: "867 Sq.ft",
        price: "73.78 L*",
      },
      {
        img: "/uploads/Neelkanth2BHKFloorPlan-1290.png",
        superBuiltupArea: "1290 Sq.ft",
        carpetArea: "834 Sq.ft",
        builtupArea: "1023 Sq.ft",
        price: "79.98 L*",
      },
    ],
  },
  {
    type: "3 BHK Apartment",
    priceRange: "98.58 L* - 1.10 Cr*",
    basePrice: "98.58 L*",
    floorPlans: [
      {
        img: "/uploads/Neelkanth3BHKFloorPlan-1590.png",
        superBuiltupArea: "1590 Sq.ft",
        carpetArea: "1018 Sq.ft",
        builtupArea: "1224 Sq.ft",
        price: "98.58 L*",
      },
      {
        img: "/uploads/Neelkanth3BHKFloorPlan-1630.png",
        superBuiltupArea: "1630 Sq.ft",
        carpetArea: "1049 Sq.ft",
        builtupArea: "1239 Sq.ft",
        price: "1.01 Cr*",
      },
      {
        img: "/uploads/Neelkanth3BHKFloorPlan-1640.png",
        superBuiltupArea: "1640 Sq.ft",
        carpetArea: "1035 Sq.ft",
        builtupArea: "1251 Sq.ft",
        price: "1.02 Cr*",
      },
      {
        img: "/uploads/Neelkanth3BHKFloorPlan-1780.png",
        superBuiltupArea: "1780 Sq.ft",
        carpetArea: "1094 Sq.ft",
        builtupArea: "1291 Sq.ft",
        price: "1.10 Cr*",
      },
    ],
  },
];

export default function FloorPlanSection() {
  const [selectedConfig, setSelectedConfig] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  // Handle mousemove and mouseup globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startDrag.x,
          y: e.clientY - startDrag.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startDrag]);

  const config = configurations[selectedConfig];
  const currentImage = config.floorPlans[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === config.floorPlans.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? config.floorPlans.length - 1 : prev - 1
    );
  };

  // When tab changes, reset image slider to first image
  const handleConfigChange = (index: number) => {
    setSelectedConfig(index);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentImageIndex, selectedConfig]);

  return (
    <section className="w-full px-4 md:px-10 py-8 bg-white shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
        Price & Floor Plan
      </h2>

      {/* BHK Tabs */}
      <div className="flex flex-wrap gap-4 mb-4">
        {configurations.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md shadow-sm text-sm w-44 text-left cursor-pointer ${
              selectedConfig === index
                ? "border-slate-500 text-teal-600 font-semibold bg-white shadow"
                : "border-gray-300 text-gray-600 bg-gray-50"
            }`}
            onClick={() => handleConfigChange(index)}
          >
            <div className="truncate">{item.type}</div>
            <div className="text-xs">{item.priceRange}</div>
          </button>
        ))}
      </div>

      {/* Area */}
      <div className="text-sm text-primary font-semibold border-b border-primary mb-4 inline-block text-gray-800">
        {currentImage.superBuiltupArea}
      </div>

      {/* Price */}
      <p className="text-lg font-bold mb-4 text-gray-800">
        ₹ {currentImage.price}
      </p>

      {/* Image Slider with fixed height */}
      <div className="flex items-center justify-center w-full max-w-lg mx-auto gap-2">
        {/* Left Button */}
        <div className="h-full flex items-center">
          <button
            onClick={handlePrev}
            className="px-3 py-2 bg-white border rounded-md shadow text-gray-600 hover:text-gray-900 z-10 cursor-pointer"
          >
            ‹
          </button>
        </div>

        {/* Image with fixed aspect ratio and fit */}
        {/* <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border shadow">
          <Image
            src={currentImage.img}
            alt={`${config.type} - ${currentImage.area}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div> */}

        <div
          className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border shadow cursor-grab active:cursor-grabbing"
          onWheel={(e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            setScale((prev) => Math.min(Math.max(prev + delta, 1), 3));
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
            setStartDrag({
              x: e.clientX - position.x,
              y: e.clientY - position.y,
            });
          }}
        >
          <div
            style={{
              transform: `scale(${scale}) translate(${position.x / scale}px, ${
                position.y / scale
              }px)`,
              transformOrigin: "center",
              transition: isDragging ? "none" : "transform 0.2s ease-out",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={currentImage.img}
              alt={`${config.type} - ${currentImage.superBuiltupArea}`}
              fill
              className="object-contain pointer-events-none"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Right Button */}
        <div className="h-full flex items-center">
          <button
            onClick={handleNext}
            className="px-3 py-2 bg-white border rounded-md shadow text-gray-600 hover:text-gray-900 z-10 cursor-pointer"
          >
            ›
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <div>
            <p className="font-semibold">Builtup Area</p>
            <p>{currentImage.builtupArea}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <div>
            <p className="font-semibold">Carpet Area</p>
            <p>{currentImage.carpetArea}</p>
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
