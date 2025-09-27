"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface ScrollableTabsProps {
  sections: Section[];
}

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({ sections }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Scroll to section on tab click
  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveTab(id);
  };

  // ✅ Scroll buttons
  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  // ✅ Scroll spy – Detect which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="sticky top-0 bg-white shadow-md z-100"
      style={{
        top: isHidden ? "0px" : "84px", borderTop: isHidden ? "none" : "1px solid rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="relative flex items-center w-full">
        <button
          onClick={() => handleScroll("left")}
          className="py-3 hidden h-full sm:flex w-[15%] justify-center items-center bg-teal-500 shadow-md cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 " />
        </button>

        {/* Tabs */}
        {/* <div
          ref={scrollRef}
          className="w-full sm:w-[60%] flex overflow-hidden scrollbar-hide space-x-6 scroll-smooth justify-center mx-1"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`relative whitespace-nowrap py-3 text-sm sm:text-base font-medium transition-colors cursor-pointer ${activeTab === section.id
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-black"
                }`}
            >
              {section.label}
              {activeTab === section.id && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div> */}

        <div
          ref={scrollRef}
          className="w-full sm:w-[70%] flex overflow-x-auto scrollbar-hide space-x-6 scroll-smooth px-2 sm:px-4"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`relative whitespace-nowrap py-3 text-base sm:text-base font-medium transition-colors cursor-pointer ${activeTab === section.id
                ? "text-purple-600"
                : "text-gray-700 hover:text-black"
                }`}
            >
              {section.label}
              {activeTab === section.id && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Arrow (hidden on mobile) */}
        <button
          onClick={() => handleScroll("right")}
          className="py-3 hidden sm:flex w-[15%] justify-center items-center h-full bg-teal-500 shadow-md cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ScrollableTabs;
