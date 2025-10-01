"use client";

import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function MoreAboutProject() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-md p-4 sm:p-6 border border-slate-300 max-w-4xl w-full mx-auto">
      {/* Header */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
        More About Neelkanth Dreamz
      </h2>

      {/* Divider */}
      <hr className="border-gray-200 mb-4" />

      {/* Subheading */}
      <p className="font-semibold text-gray-700 mb-3">
        Successfully completed our project i.e Neelkanth Dreamz
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {`Neelkanth Dreamz is a ready to move residential development project by Mangalam Builders and Promoters located at Sector -14 Vrindavan Yojna Raebareli Road Lucknow. This project is spread across 2 acres of land with 40 % open space and comprises of 2 towers of G+9 and G + 10 floors. There are total 185 units perfectly planned with proper utilization of space. It will have spacious 2 and 3 BHK apartments of super built up area 1190 to 1780 sqft.
The project is constructed with best used of branded construction material & fittings. The project offers minimum waiting period for lifts as two lifts are available on each blocks.
This is a RERA registered project with registration number UPRERAPRJ6035.
Bank loan approved from all leading banks for home loans.  
Neelkanth Dreamz project offers the best amenities to facilitate the need of the residents. Some of the major amenities are- Landscaped Garden, Jogging track, Swimming pool, Community hall, Gym, Parking Area, Children Playing Area, Gated security with CCTV Camera & 24 hour Security, lifts, etc.
This project is ideal for those people who are looking buy home in Lucknow city within a reasonable rate.
`}
      </p>

      {/* Toggle Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-teal-600 font-medium text-sm sm:text-base hover:underline cursor-pointer"
        >
          {expanded ? (
            <>
              Show Less About Project <FaChevronUp className="text-xs" />
            </>
          ) : (
            <>
              Show More About Project <FaChevronDown className="text-xs" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
