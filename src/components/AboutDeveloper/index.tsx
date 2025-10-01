"use client";

import Image from "next/image";
import { useState } from "react";

const AboutDeveloper = () => {
  const [showMore, setShowMore] = useState(false);

  const description = `"Neelkanth Dreamz, Founded 5 years ago, Mangalam Builders and Promoters has been a leader in the construction industry, known for its dedication to quality and innovation in residential projects."`;

  return (
    <section className="w-full px-4 py-10 md:px-8 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">About Developer</h2>

      <div className="border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start bg-white shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/uploads/NeelkanthLogo.png" // Replace with your actual logo path
            alt="Developer Logo"
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col flex-1">
          <h3 className="text-base md:text-lg font-semibold mb-1 text-gray-800">
            Mangalam Builders and Promoters
          </h3>

          {/* <div className="flex items-center gap-6 text-sm text-gray-600 mb-2">
            <div>
              <div className="font-medium text-black">1</div>
              <div className="text-xs">Project</div>
            </div>
          </div> */}

          {/* Description */}
          <p className="text-sm text-gray-500">
            {showMore ? description : description.slice(0, 160) + "..."}
          </p>

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="text-sm text-teal-600 mt-2 underline hover:text-teal-800 cursor-pointer"
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;
