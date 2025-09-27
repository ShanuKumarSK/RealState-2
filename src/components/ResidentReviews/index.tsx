"use client";

import {
  ThumbsUp,
  ThumbsDown,
  Star,
  ArrowRight,
  Smile,
  Wrench,
  Train,
  Landmark,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { useState } from "react";

export default function ResidentReviews() {
  const [showAllGoodThings, setShowAllGoodThings] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const goodThings = ["Near ArjanGarh Metro", "Low room rents", "Good parks nearby"];
  const improvementThings = ["More Autos needed", "Address water logging", "Improve roads"];

  const reviews = [
    {
      name: "Kranti Vijay",
      role: "Owner",
      monthsAgo: "12 months ago",
      rating: 4,
      good: `If you are searching for a cheap and best locality near the offices of Gurugram DLF Phase 3 Phase 2...`,
      improvement: `Although this locality is cheap and best and have all the facilities within walking distance but there are a fe...`,
    },
    {
      name: "Hakim",
      role: "Tenant",
      monthsAgo: "1 year ago",
      rating: 3.5,
      good: `The electricity charges here are cheaper than in other localities and there are low power cuts in compariso...`,
      improvement: `Roads get muddy during rains.`,
    },
  ];

  const activeReview = reviews[currentReview];

  return (
    <section className="w-full px-4 md:px-10 py-8 border-t">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">Resident reviews for <span className="font-bold text-gray-800">Aya Nagar</span></h2>
        <div className="flex items-center gap-1 text-purple-600 font-semibold text-sm bg-purple-100 px-2 py-1 rounded-md">
          <Star className="w-4 h-4 fill-purple-600" /> 4.4 / 5
        </div>
      </div>

      {/* Ratings */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-6 text-sm">
        {[
          { label: "Connectivity", value: "4.6/5", icon: Train },
          { label: "Neighbourhood", value: "4.4/5", icon: Landmark },
          { label: "Safety", value: "4.4/5", icon: ShieldCheck },
          { label: "Livability", value: "4.4/5", icon: Building2 },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <item.icon className="w-5 h-5 text-green-600" />
            <div className="text-gray-800 font-semibold">{item.value}</div>
            <div className="text-gray-500 text-xs">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
        <div>
          <h4 className="font-semibold text-pink-600 flex items-center gap-1">
            <Smile className="w-4 h-4" /> Good things here
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {goodThings.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700"
              >
                {tag}
              </span>
            ))}
            {!showAllGoodThings && (
              <button
                onClick={() => setShowAllGoodThings(true)}
                className="text-blue-600 text-xs"
              >
                +1 More
              </button>
            )}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-pink-600 flex items-center gap-1">
            <Wrench className="w-4 h-4" /> Things that need improvement
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {improvementThings.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-50 mt-8 p-4 md:p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">
            All resident reviews (<strong>{reviews.length} reviews</strong>)
          </p>
          <button className="text-purple-600 text-sm font-medium hover:underline">
            View All <ArrowRight className="inline w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Review */}
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-700">{activeReview.name}</h4>
                <p className="text-xs text-gray-400">
                  {activeReview.role} • {activeReview.monthsAgo}
                </p>
              </div>
              <div className="flex items-center gap-1 bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-md">
                {activeReview.rating} <Star className="w-4 h-4 fill-green-600" />
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-medium text-gray-800 mb-1 flex items-center gap-1">
                <Smile className="w-4 h-4 text-pink-500" /> Good things here
              </h5>
              <p className="text-sm text-gray-600 line-clamp-2">
                {activeReview.good} <span className="text-blue-600">read more</span>
              </p>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-medium text-gray-800 mb-1 flex items-center gap-1">
                <Wrench className="w-4 h-4 text-pink-500" /> Things need improvement
              </h5>
              <p className="text-sm text-gray-600 line-clamp-2">
                {activeReview.improvement} <span className="text-blue-600">read more</span>
              </p>
            </div>

            {/* Feedback */}
            <div className="mt-6 flex items-center justify-center gap-4 text-gray-500 text-sm">
              <span>Is this helpful?</span>
              <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-green-500" />
              <ThumbsDown className="w-5 h-5 cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Right Side (Next review preview) */}
          <div className="hidden md:flex flex-col justify-center items-center text-center">
            <p className="text-sm text-gray-400 mb-2">
              {reviews[currentReview + 1]?.name}
            </p>
            <button
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className="w-10 h-10 flex items-center justify-center border rounded-full shadow-sm bg-white hover:bg-gray-100"
            >
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
