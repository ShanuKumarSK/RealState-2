"use client";
import React from "react";
interface PropertyHeaderProps {
  title: string;
  developer: string;
  location: string;
  priceRange: string;
  pricePerSqft: string;
  emiText: string;
  lastUpdated: string;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  title,
  developer,
  priceRange,
  pricePerSqft,
  // emiText,
  lastUpdated,
}) => {
  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="px-4 sm:px-4 w-full bg-white py-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 my-1">
            <h1 className="text-2xl font-bold text-gray-800">
              {title}
            </h1>
            <span className="border border-gray-300 text-xs px-2 py-0.5 rounded-md flex items-center gap-1 text-gray-700">
              <span className="text-green-600">✔</span> RERA
            </span>
          </div>
          <p className="text-sm text-teal-600 font-semibold mb-2">
            By {developer}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center sm:flex-col md:items-end gap-2">
          <div>
            <p className="text-xs text-gray-500">Last updated: {lastUpdated}</p>

            <div className="md:text-right text-left">
              <p className="text-lg font-bold text-gray-800">{priceRange}</p>
              <p className="text-xs text-gray-500">{pricePerSqft}</p>
              <p className="text-sm text-gray-800 font-semibold">{"Carpet Area"}</p>

              {/* <p className="text-sm text-purple-700 font-medium">
                EMI starts at {emiText}
              </p> */}
            </div>
          </div>

          <button
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition cursor-pointer"
            onClick={() => handleTabClick("ContactSeller")}
          >
            📞 Contact Developer
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;
