// // components/CarouselSection.tsx
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useId } from "react";

// import "swiper/css";
// import "swiper/css/navigation";

// type CarouselSectionProps<T> = {
//   title?: string;
//   subtitle?: string;
//   items: T[];
//   renderItem: (item: T, index: number) => React.ReactNode;
//   slidesPerView?: number; // default for smallest screens
//   breakpoints?: Record<number, { slidesPerView: number }>;
// };

// function CarouselSectionInner<T>({
//   title,
//   subtitle,
//   items,
//   renderItem,
//   slidesPerView = 1.2, // fallback for smallest screen
//   breakpoints = {
//     640: { slidesPerView },
//     768: { slidesPerView },
//     1024: { slidesPerView },
//     1280: { slidesPerView },
//   },
// }: CarouselSectionProps<T>) {
//   const uid = React.useMemo(
//     () => Math.random().toString(36).substring(2, 9),
//     []
//   );
//   const prevClass = `swiper-button-prev-${uid}`;
//   const nextClass = `swiper-button-next-${uid}`;

//   return (
//     <section className="w-full">
//       {(title || subtitle) && (
//         <div className="mb-4">
//           {title && (
//             <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
//           )}
//           {subtitle && <p className="text-gray-500">{subtitle}</p>}
//         </div>
//       )}

//       <div className="relative">
//         <div className="absolute z-10 top-1/2 -left-6 -translate-y-1/2 ${prevClass} bg-white rounded-full shadow-xl p-4 cursor-pointer">
//           <ChevronLeft className="w-6 h-6" />
//         </div>
//         <div className="absolute z-10 top-1/2 -right-6 -translate-y-1/2 ${nextClass} bg-white rounded-full shadow-xl p-4 cursor-pointer">
//           <ChevronRight className="w-6 h-6" />
//         </div>

//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             nextEl: `.${nextClass}`,
//             prevEl: `.${prevClass}`,
//           }}
//           spaceBetween={16}
//           slidesPerView={slidesPerView}
//           breakpoints={breakpoints}
//         >
//           {items.map((item, i) => (
//             <SwiperSlide key={i}>{renderItem(item, i)}</SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// // ✅ Generic-friendly default export
// const CarouselSection = <T,>(props: CarouselSectionProps<T>) => (
//   <CarouselSectionInner {...props} />
// );

// export default CarouselSection;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

type CarouselSectionProps<T> = {
  title?: string;
  subtitle?: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  breakpoints?: Record<number, { slidesPerView: number }>;
};

function CarouselSectionInner<T>({
  title,
  subtitle,
  items,
  renderItem,
  slidesPerView = 1.2,
  breakpoints,
}: CarouselSectionProps<T>) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const autoBreakpoints: Record<number, { slidesPerView: number }> = {
    320: { slidesPerView: 1.2 },
    640: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView },
    1280: { slidesPerView },
  };

  return (
    <section className="w-full">
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-base md:text-2xl font-semibold text-stone-800">{title}</h3>
          )}
          {subtitle && <p className="text-sm md:text-base text-gray-500">{subtitle}</p>}
        </div>
      )}

      <div className="relative">
        {/* Navigation Buttons */}
        {/* Left Arrow */}
        <div
          ref={prevRef}
          className={`hidden md:block absolute z-10 top-1/2 -left-6 -translate-y-1/2 bg-white rounded-full shadow-xl p-4 text-black transition-opacity duration-200 ${activeIndex === 0 ? "opacity-0 pointer-events-none cursor-default" : "cursor-pointer"
            }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </div>

        {/* Right Arrow */}
        <div
          ref={nextRef}
          className={`hidden md:block absolute z-10 top-1/2 -right-6 -translate-y-1/2 bg-white rounded-full shadow-xl p-4 text-black transition-opacity duration-200 ${isEnd ? "opacity-0 pointer-events-none cursor-default" : "cursor-pointer"
            }`}
        >
          <ChevronRight className="w-6 h-6" />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={16}
          slidesPerView={slidesPerView}
          breakpoints={breakpoints || autoBreakpoints}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>{renderItem(item, i)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const CarouselSection = <T,>(props: CarouselSectionProps<T>) => (
  <CarouselSectionInner {...props} />
);

export default CarouselSection;
