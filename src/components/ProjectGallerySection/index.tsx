"use client";

import { useState } from "react";
import Image from "next/image";

// Sample images
const interiorImages = [
  "/uploads/NeelkanthInterior1.jpeg",
  "/uploads/NeelkanthInterior2.jpeg",
  "/uploads/NeelkanthInterior3.jpeg",
  "/uploads/NeelkanthInterior4.jpeg",
  "/uploads/NeelkanthInterior4.jpeg",
];

const exteriorImages = [
  "/uploads/Neelkanth2.png"
];

export default function ProjectGallerySection() {
  const [activeTab, setActiveTab] = useState<"interior" | "exterior">("interior");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = activeTab === "interior" ? interiorImages : exteriorImages;

  const handleOpen = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full px-4 md:px-10 py-8 bg-white shadow-lg">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
        Photos & Videos: Tour this project virtually
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-4">Project Tour & Photos</p>

      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("interior")}
          className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer ${
            activeTab === "interior"
              ? "bg-teal-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-teal-200"
          }`}
        >
          Interior
        </button>
        <button
          onClick={() => setActiveTab("exterior")}
          className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer ${
            activeTab === "exterior"
              ? "bg-teal-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-teal-500"
          }`}
        >
          Exterior
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => handleOpen(index)}
            className="min-w-[100px] sm:min-w-[120px] h-[100px] sm:h-[120px] rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer"
          >
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[1000]">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full bg-black/70 px-6 py-3 flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-white text-lg font-semibold capitalize">{activeTab} Images</h2>
              <p className="text-gray-300 text-sm">Project Gallery</p>
            </div>

            <div className="w-full flex items-center justify-between md:justify-end md:gap-3 mt-3 md:mt-0">
              <div className="flex flex-col items-center">
                <span className="text-white text-xs">
                  {activeIndex + 1}/{images.length}
                </span>
                <div className="w-16 h-1 bg-gray-500 rounded-full overflow-hidden relative">
                  <div
                    className="h-1 bg-green-500"
                    style={{
                      width: `${((activeIndex + 1) / images.length) * 100}%`,
                    }}
                  />
                  {/* <div className="w-16 absolute flex justify-between items-center px-2 top-0 left-0 h-full">
                    <button onClick={prevImage} className="text-white text-lg">
                      ‹
                    </button>
                    <button onClick={nextImage} className="text-white text-lg">
                      ›
                    </button>
                  </div> */}
                </div>
              </div>

              {/* <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                Contact Developer
              </button> */}

              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Image Viewer */}
          <div className="relative w-full max-w-4xl flex items-center mt-16">
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-3xl"
            >
              ‹
            </button>
            <Image
              src={images[activeIndex]}
              alt="Preview"
              width={1000}
              height={600}
              className="object-contain rounded-lg mx-auto max-h-[80vh] bg-black"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-3xl"
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto max-w-3xl scrollbar-hide">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt="thumb"
                width={100}
                height={80}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded border ${
                  idx === activeIndex ? "border-white" : "border-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
