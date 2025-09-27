"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
  price: string;
  //   tabs: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  price,
  //   tabs,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  //   const [activeTab, setActiveTab] = useState(tabs[0]);

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => setActiveIndex((p) => (p + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((p) => (p - 1 + images.length) % images.length);

  const handleTabClick = (id: string) => {
    setIsOpen(false)
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="bg-white px-4">
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-3 gap-2">
          {/* Large Image */}
          <div
            className="col-span-2 relative cursor-pointer"
            onClick={() => openViewer(0)}
          >
            <Image
              src={images[0]}
              alt="Main Image"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[400px]"
            />
            <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">
              Cover Image
            </span>
          </div>

          {/* Small Images */}
          <div className="flex flex-col gap-2">
            {images.slice(1, 3).map((img, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer"
                onClick={() => openViewer(idx + 1)}
              >
                <Image
                  src={img}
                  alt={`Small ${idx}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-[196px]"
                />
                {idx === 1 && images.length > 3 && (
                  <div
                    onClick={() => openViewer(2)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-semibold rounded-lg"
                  >
                    + {images.length - 3} more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll */}
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-64 snap-start cursor-pointer"
              onClick={() => openViewer(idx)}
            >
              <Image
                src={img}
                alt={`Image ${idx}`}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-40"
              />
              {idx === 0 && (
                <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">
                  Cover Image
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 📌 Modal Viewer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-1000">
          {/* 🔹 TOP BAR */}
          <div className="absolute top-0 left-0 w-full bg-black/70 px-6 py-3 flex flex-wrap justify-between items-center">
            {/* Title & Price */}
            <div>
              <h2 className="text-white text-lg font-semibold">{title}</h2>
              <p className="text-gray-300 text-sm">{price}</p>
            </div>

            {/* Right Section */}
            <div className="w-full flex items-center justify-between md:justify-end md:gap-3">
              <div className="flex flex-col items-center">
                <span className="text-white text-xs">
                  {activeIndex + 1}/{images.length}
                </span>
                <div className="w-16 h-1 bg-gray-500 rounded-full overflow-hidden">
                  <div
                    className="h-1 bg-green-500"
                    style={{
                      width: `${((activeIndex + 1) / images.length) * 100}%`,
                    }}
                  />
                  <div className="w-16 absolute flex flex-row justify-between items-center px-2">
                    <button
                      onClick={prevImage}
                      className="text-white text-2xl cursor-pointer"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="text-white text-2xl cursor-pointer"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer text-sm"
                onClick={() => handleTabClick("ContactSeller")}
              >
                Contact Developer
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* 🔹 Image with Navigation */}
          <div className="relative w-full max-w-4xl flex items-center mt-16">
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-3xl cursor-pointer"
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
              className="absolute right-4 text-white text-3xl cursor-pointer"
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
    </>
  );
};

export default ImageGallery;
