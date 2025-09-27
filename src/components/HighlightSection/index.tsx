"use client";
import { useState } from "react";

type HighlightSectionProps = {
  highlights: string[];
};

export default function HighlightSection({ highlights }: HighlightSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleHighlights = showAll ? highlights : highlights.slice(0, 5);

  return (
    <div className="bg-teal-100 p-2 sm:p-4 rounded-lg max-w-4xl w-full mx-auto">
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
          Why Neelkanth Dreamz?
        </h3>

        <ul className="space-y-2 list-disc list-inside text-sm sm:text-base">
          {visibleHighlights.map((item, idx) => (
            <li key={idx} className="text-gray-800 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-3 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-teal-600 text-sm sm:text-base font-medium hover:underline flex items-center justify-center gap-1 mx-auto cursor-pointer"
          >
            {showAll ? "Hide Highlights" : "View More Highlights"}{" "}
            <span>{showAll ? "▲" : "▼"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
