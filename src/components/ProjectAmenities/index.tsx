"use client";

import { useState } from "react";
import {
  Car,
  Dumbbell,
  Flower,
  GanttChart,
  //   Grill,
  KeyRound,
  Lock,
  LucideIcon,
  ParkingCircle,
  ShieldCheck,
  ShowerHead,
  Sprout,
  Video,
  //   Yoga,
  ArrowDown,
  ArrowUp,
  Building,
  MoveHorizontal,
  Bike,
} from "lucide-react";
// import FadeIn from "../TransitionComponents/FadeIn";

type Amenity = {
  name: string;
  icon: LucideIcon;
};

const amenities: Amenity[] = [
  { name: "Power Backup", icon: ShieldCheck },
  { name: "24X7 Water Supply", icon: ShowerHead },
  { name: "Lift(s)", icon: ArrowUp },
  { name: "24x7 CCTV Surveillance", icon: Video },
  { name: "Children's Play Area", icon: GanttChart },
  { name: "Club Rooftop", icon: Building },
  { name: "Yoga / Meditation", icon: Building },
  { name: "Recreation Facilities", icon: MoveHorizontal },
  { name: "Barbecue Area", icon: Building },
  { name: "Vastu Compliant", icon: Sprout },
  { name: "Visitor Parking", icon: ParkingCircle },
  { name: "Badminton Court", icon: Bike },
  { name: "Flower Garden", icon: Flower },
  { name: "Gymnasium", icon: Dumbbell },
  { name: "Closed Car Parking", icon: Lock },
  { name: "Jogging Track", icon: MoveHorizontal },
  { name: "Gated Community", icon: KeyRound },
 
];

const INITIAL_COUNT = 11;

export default function ProjectAmenities() {
  const [expanded, setExpanded] = useState(false);

  const visibleAmenities = expanded
    ? amenities
    : amenities.slice(0, INITIAL_COUNT);
  const remaining = amenities.length - INITIAL_COUNT;

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
  "text-teal-500"
];

  return (
    <section className="w-full px-4 md:px-10 py-8 bg-white shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Amenities</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {visibleAmenities.map((item, index) => {
          // const direction = directions[index % directions.length];
          const colorClass = iconColors[index % iconColors.length];
          return (
            <div key={index} className="w-full">
              {/* <FadeIn stagger={0.2} direction={direction} duration={0.7}> */}
                <div className="flex gap-2 flex-col items-center shadow-lg py-4 rounded-lg bg-teal-100">
                  <item.icon className={`w-6 h-6 mt-1 ${colorClass}`} />
                  <span className="text-sm text-bold text-gray-700">{item.name}</span>
                </div>
              {/* </FadeIn> */}
            </div>
          );
        })}

        {!expanded && remaining > 0 && (
          <button
            className="flex items-center justify-center w-full h-full rounded-md bg-teal-300 text-sm font-medium text-teal-600 hover:bg-teal-500 transition cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            +{remaining} more <ArrowDown className="ml-1 w-4 h-4" />
          </button>
        )}
      </div>

      {expanded && (
        <div className="mt-4">
          <button
            className="text-sm font-medium text-teal-600 flex items-center cursor-pointer p-2 bg-teal-300 rounded-md hover:bg-teal-500 transition"
            onClick={() => setExpanded(false)}
          >
            Less <ArrowUp className="ml-1 w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}
