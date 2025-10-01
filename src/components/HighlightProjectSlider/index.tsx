"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type HighlightProject = {
  key: string;
  sellingPoint?: string;
  developer: string;
  types: string;
  location: string;
  price: string;
  image: string;
  title: string;
  link: string;
  linkTitle: string;
  target?: string;
};

type HighlightProjectSliderProps = {
  items: HighlightProject[];
};

export default function HighlightProjectSlider({
  items,
}: HighlightProjectSliderProps) {
  const visible = true;

  if (!visible || !items || items.length === 0) return null;

  return (
    // <div className="absolute right-4 md:right-8 md:top-3/5 top-1/3 z-20 w-60 md:w-100 bg-black bg-opacity-60 rounded-xl shadow-lg text-white">
    <div className="relative w-full h-[30vh] md:h-[80vh] text-white overflow-hidden">
      {/* Close Button */}
      {/* <button
        onClick={() => setVisible(false)}
        className="absolute top-3 right-3 text-white hover:text-red-400 z-30 cursor-pointer"
      >
        <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
      </button> */}

      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
      > */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {/* <div className="relative w-60 sm:w-100 h-35 sm:h-60 rounded-xl overflow-hidden shadow-md"> */}
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-fill"
                priority
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent px-4 md:pb-8 flex flex-col justify-end pb-2">
                <div className="mb-1">
                  <h3 className="text-white text-sm sm:text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm truncate">
                    by {item.developer}
                  </p>
                </div>
                <div className="md:flex justify-between items-center text-sm text-white">
                  <div className="leading-tight">
                    <p className="text-xs sm:text-sm line-clamp-1">{item.types}</p>
                    <p className="text-xs sm:text-sm text-gray-300 truncate">{item.location}</p>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between ">
                    <div className="mt-0">
                      <p className="font-semibold text-xs sm:text-lg md:text-right mt-1 md:mt-0">{item.price}</p>
                    </div>
                    <div className="mt-0">
                      <a
                        href={item.link}
                        target={item.target || "_blank"}
                        className="text-xs sm:text-sm text-blue-400 hover:underline"
                      >
                        {item.linkTitle}
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute inset-0 flex items-center justify-center md:justify-end px-20">
                <div className="max-w-xl text-center px-6 bg-black/40 text-orange-400">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {item.sellingPoint}
                  </h2>
                  <h2 className="text-xl sm:text-3xl font-bold">
                    {item.title}
                  </h2>
                  <div className="mt-3">
                    <p className="text-xs sm:text-base">{item.types}</p>
                    <p className="text-sm sm:text-lg font-semibold">
                      {item.location}
                    </p>
                    <p className="text-sm sm:text-lg mt-2">
                      By{" "}
                      <span className="text-xl sm:text-xl font-bold">
                        {item.developer}
                      </span>
                    </p>
                    <p className="text-lg sm:text-2xl font-semibold mt-2">
                      {item.price}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target={item.target || "_blank"}
                    className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-4 py-2 rounded-md transition"
                  >
                    {item.linkTitle}
                  </a>

                  <a
                    href={item.link}
                    target={item.target || "_blank"}
                    className="mt-4 inline-block px-6 py-2 text-white text-sm sm:text-base font-semibold rounded-full
             bg-gradient-to-r from-sky-600 to-teal-600
             hover:from-blue-600 hover:to-purple-600 transition duration-300"
                  >
                    {item.linkTitle || "Click me!"}
                  </a>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
