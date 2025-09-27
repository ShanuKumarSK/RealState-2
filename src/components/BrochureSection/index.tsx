"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft, Download } from "lucide-react";
import Image from "next/image";

const brochureImages = [
  "/uploads/House1.jpg",
  "/uploads/House2.jpg",
  "/uploads/House3.jpg",
  "/uploads/House4.jpg",
];

export default function BrochureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-10 px-4 md:px-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Project Brochure</h2>

      <div className="relative overflow-hidden">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
        >
          {brochureImages.map((src, index) => (
            <div key={index} className="relative min-w-[250px] md:min-w-[300px] lg:min-w-[350px] aspect-[3/4] rounded overflow-hidden shadow border border-gray-200 hover:shadow-md transition-all group">
              <Image
                src={src}
                alt={`Brochure ${index + 1}`}
                width={800}       // ← replace with actual width
                height={600}      // ← replace with actual height
                className="w-full h-full object-cover"
                layout="responsive" // or remove if using fixed width/height
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white font-semibold bg-white text-black px-4 py-2 rounded shadow">View Brochure</span>
              </div>
            </div>
          ))}
        </div>

        {/* Left and right scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hidden md:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hidden md:flex"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Download Brochure button */}
      <div className="mt-6 text-center">
        <a
          href="/brochure/zenith-brochure.pdf"
          download
          className="inline-flex items-center gap-2 text-purple-600 border border-purple-600 px-5 py-2 rounded hover:bg-purple-100 transition"
        >
          <Download size={18} />
          Download Brochure
        </a>
      </div>
    </section>
  );
}
