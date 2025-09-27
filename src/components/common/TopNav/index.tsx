// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";

// const TopNav = () => {
//   const isMenuOpen = false;
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isHidden, setIsHidden] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 200) {
//         setIsHidden(true);
//       } else {
//         setIsHidden(false);
//       }
//       setIsScrolled(currentScrollY > 50);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const getNavbarClasses = () => {
//     if (isHome && !isScrolled) {
//       return "bg-white/40 text-teal-700 shadow-lg";
//     }
//     return "bg-white text-black shadow-md";
//   };

//   const sections = [
//     { id: "Highlights", label: "Highlights" },
//     { id: "around", label: "Overview" },
//     { id: "more", label: "About" },
//     { id: "floor-plan", label: "Floor Plan" },
//     { id: "tour", label: "Tour" },
//     { id: "amenities", label: "Amenities" },
//     { id: "rating&reviews", label: "Ratings" },
//     { id: "developer", label: "Developer" },
//   ];

//   return (
//     <div
//       ref={navRef}
//       className={`
//         fixed top-0 left-0 w-full z-50
//         transition-all duration-300 ease-in-out
//         px-4 py-3
//         ${getNavbarClasses()}
//         ${isHidden ? "-translate-y-full" : "translate-y-0"}
//       `}
//     >
//       <header className="flex items-center justify-between px-6 md:px-16 py-2">
//         <div
//           onClick={() => router.push("/")}
//           className={` font-bold text-xl flex items-center gap-2 cursor-pointer`}
//         >
//           <Image
//             src={
//               isHome && !isScrolled
//                 ? "/uploads/LogoWhite.png"
//                 : "/uploads/Logo.png"
//             }
//             alt="Advit Reality"
//             width={140}
//             height={60}
//             priority
//           />
//         </div>

//         <nav className="hidden md:flex gap-8 font-semibold">
//           {sections.map((section) => (
//             <a
//               key={section.id}
//               href={`#${section.id}`}
//               className={`relative whitespace-nowrap py-3 text-base transition-colors cursor-pointer text-gray-700 hover:text-black"
//               `}
//             >
//               {section.label}
//             </a>
//           ))}
//         </nav>
//       </header>

//       {isMenuOpen && (
//         <div className="md:hidden py-2 border-t border-gray-200">
//           <div className="px-2 pt-2 space-y-1"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopNav;



"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sections = [
    { id: "Highlights", label: "Highlights" },
    { id: "around", label: "Overview" },
    { id: "more", label: "About" },
    { id: "floor-plan", label: "Floor Plan" },
    { id: "tour", label: "Tour" },
    { id: "amenities", label: "Amenities" },
    // { id: "rating&reviews", label: "Ratings" },
    { id: "developer", label: "Developer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getNavbarClasses = () => {
    if (isHome && !isScrolled) {
      return "bg-white/40 text-teal-700 shadow-lg";
    }
    return "bg-white text-black shadow-md";
  };

  return (
    <div
      ref={navRef}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        px-4 py-3
        ${getNavbarClasses()}
        ${isHidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <header className="flex items-center justify-between px-4 md:px-16 py-2">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="font-bold text-xl flex items-center gap-2 cursor-pointer"
        >
          <Image
            src={
              isHome && !isScrolled
                ? "/uploads/LogoWhite.png"
                : "/uploads/Logo.png"
            }
            alt="Advit Reality"
            width={140}
            height={60}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-semibold">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative whitespace-nowrap py-3 text-base transition-colors cursor-pointer ${!isScrolled ? 'text-white' : 'text-gray-700'}  hover:text-black`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? (
              <HiX className="text-2xl text-black" />
            ) : (
              <HiMenu className="text-2xl text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex flex-col space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMenuOpen(false)} // close menu on click
                className="text-gray-800 hover:text-purple-600 text-base font-medium"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
