import {
  FaDownload,
  FaRulerCombined,
  FaBuilding,
  FaCalendarAlt,
  FaRupeeSign,
  FaKey,
  FaThLarge,
  FaIdBadge,
} from "react-icons/fa";
import DownloadBrochureModal from "../DownloadBrochureModal";
import { useState } from "react";
// import FadeIn from "../TransitionComponents/FadeIn";

type ProjectOverviewProps = {
  sizes: string;
  projectSize: string;
  launchDate: string;
  basePrice: string;
  possession: string;
  configurations: string;
  reraId: string;
};

export default function ProjectOverviewCard({
  sizes,
  projectSize,
  launchDate,
  basePrice,
  possession,
  configurations,
  reraId,
}: ProjectOverviewProps) {

    const [showModal, setShowModal] = useState(false);


  const overviewItems = [
    { icon: FaRulerCombined, label: "Sizes", value: sizes },
    { icon: FaBuilding, label: "Project Size", value: projectSize },
    { icon: FaCalendarAlt, label: "Launch Date", value: launchDate },
    { icon: FaRupeeSign, label: "Base Price", value: basePrice },
    { icon: FaKey, label: "Possession Starts", value: possession },
    { icon: FaThLarge, label: "Configurations", value: configurations },
    {
      icon: FaIdBadge,
      label: "Rera Id",
      value: reraId,
      isLink: true,
    },
  ];

  // const directions = ["top", "bottom", "left", "right"] as const;
  const iconColors = [
    "text-yellow-500",
    "text-cyan-500",
    "text-fuchsia-500",
    "text-green-500",
    "text-blue-500",
    "text-red-500",
    "text-purple-500",
    "text-pink-500",
    "text-orange-500",
    "text-indigo-500",
    "text-rose-500",
    "text-teal-500",
  ];

  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 sm:p-7 max-w-4xl w-full mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-5 gap-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Neelkanth Dreamz Overview
        </h2>
        {/* <a href="/uploads/NeelkanthDreamz.pdf" download>
          <button className="flex p-2 rounded-md items-center gap-2 text-sm font-medium text-teal-600 hover:text-white hover:bg-teal-600 transition border cursor-pointer">
            <FaDownload /> Download Brochure
          </button>
        </a> */}
        <button
          onClick={() => setShowModal(true)}
          className="flex p-2 rounded-md items-center gap-2 text-sm font-medium text-teal-600 hover:text-white hover:bg-teal-600 transition border cursor-pointer"
        >
          <FaDownload /> Download Brochure
        </button>
        <DownloadBrochureModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm sm:text-base border-t border-slate-400 py-5">
        {overviewItems.map((item, index) => {
          // const direction = directions[index % directions.length];
          const colorClass = iconColors[index % iconColors.length];
          const Icon = item.icon;
          return (
            <div key={index}>
              {/* <FadeIn stagger={0.2} direction={direction} duration={0.7}> */}
              <div className="flex items-center gap-2">
                <div>
                  {/* <Icon className="text-lg sm:text-xl text-gray-700 group-hover:text-purple-700 transition-colors" /> */}
                  <Icon className={`w-7 h-7 ${colorClass}`} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm md:text-base">
                    {item.label}
                  </p>
                  {item.isLink ? (
                    <p className="text-sm md:text-base text-purple-700 hover:underline cursor-pointer">
                      {item.value}
                    </p>
                  ) : (
                    <p className="text-sm md:text-base text-gray-600">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
              {/* </FadeIn> */}
            </div>
          );
        })}
      </div>

      {/* <p className="text-xs text-purple-600 mt-3 cursor-pointer hover:underline">
        Know More
      </p> */}

      {/* Action Buttons */}
      <div className="flex flex-row sm:flex-row gap-3 mt-2">
        {/*         <button className="flex-1 flex items-center justify-center gap-2 border-black rounded-md py-2 text-sm text-black font-medium hover:bg-gray-50 transition cursor-pointer">
          <FaShareAlt /> Share
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 border-black rounded-md py-2 text-sm text-black font-medium bg-purple-200 hover:bg-purple-400 transition cursor-pointer">
          <FaHeart /> Save
        </button> */}
        <button
          className="flex-1 bg-teal-600 text-white py-2 rounded-md text-sm font-medium hover:bg-teal-700 shadow-sm transition cursor-pointer"
          onClick={() => handleTabClick("ContactSeller")}
        >
          Ask For Details
        </button>
      </div>
    </div>
  );
}
