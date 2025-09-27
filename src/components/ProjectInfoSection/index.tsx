"use client";
import React from "react";

type InfoItem = {
  title: string;
  subtitle: string;
  extra?: React.ReactNode;
};

const infoData: InfoItem[] = [
  {
    title: "2, 3 BHK Apartments",
    subtitle: "Configurations",
  },
  {
    title: "Nov, 2029",
    subtitle: "Possession Starts",
  },
  {
    title: "₹ 6200/sq.ft",
    subtitle: "Base Price",
  },
  {
    title: "1190 - 1780 sq.ft",
    subtitle: "Carpet Area",
  },
];

const ProjectInfoSection: React.FC = () => {
  return (
<div className="w-full bg-white rounded-md p-2 sm:p-4">
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 sm:divide-x sm:divide-gray-300 items-stretch">
    {infoData.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-center shadow-lg bg-cyan-50 p-4 min-h-[100px]"
      >
        <p className="text-sm sm:text-sm md:text-base font-semibold text-slate-800">
          {item.title}
        </p>
        {/* {item.extra && <div className="mt-1">{item.extra}</div>} */}
        <p className="text-sm sm:text-sm text-gray-600">{item.subtitle}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default ProjectInfoSection;
