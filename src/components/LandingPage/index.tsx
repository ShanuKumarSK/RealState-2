import React, { useEffect, useState } from "react";
import PropertyHeader from "../PropertyHeader";
import ImageGallery from "../ImageGallery";
import ProjectInfoSection from "../ProjectInfoSection";
import HighlightSection from "../HighlightSection";
import ProjectOverviewCard from "../ProjectOverviewCard";
import MoreAboutProject from "../MoreAboutProject";
import FloorPlanSection from "../FloorPlanSection";
import ProjectGallerySection from "../ProjectGallerySection";
import ProjectAmenities from "../ProjectAmenities";
import AboutDeveloper from "../AboutDeveloper";
import ContactSellerCard from "../ContactSellerCard";
import HighlightProjectSlider from "../HighlightProjectSlider";
import PopUp from "../PopUp";

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

const highlightProjects: HighlightProject[] = [
  {
    key: "1",
    sellingPoint:"Ready to Move",
    title: "Neelkanth Dreamz",
    developer: "Mangalam Builders and Promoters",
    types: "2, 3 BHK Apartments",
    location: "Vrindavan Yojna, Raibareily Road, Lucknow",
    price: "₹ 73.78 L* - ₹ 1.10 Cr*",
    image: "/uploads/Neelkanth2.png",
    link: "/PropertyDetails/1",
    linkTitle: "View Project",
    target: "_self",
  },
  // {
  //   key: "2",
  //   title: "CasaGrand Vivanta",
  //   developer: "CasaGrand",
  //   types: "2, 3 BHK Apartments",
  //   location: "Thalambur, Chennai",
  //   price: "₹47 L - ₹76 L",
  //   image: "/uploads/House2.jpg",
  //   link: "/PropertyDetails/2",
  //   linkTitle: "View Project",
  //   target: "_self",
  // },
  // {
  //   key: "3",
  //   title: "Radiance The Pride",
  //   developer: "Radiance Realty",
  //   types: "2, 3 BHK Apartments",
  //   location: "Pallavaram, Chennai",
  //   price: "₹54.9 L - ₹94 L",
  //   image: "/uploads/House3.jpg",
  //   link: "/PropertyDetails/3",
  //   linkTitle: "View Project",
  //   target: "_self",
  // },
]

const LandingPage: React.FC = () => {
  const images = [
    "/uploads/Neelkanth3.png",
    "/uploads/Neelkanth2.png",
    "/uploads/Neelkanth1.png",
    "/uploads/Neelkanth4.png",
    "/uploads/Neelkanth5.png",
    "/uploads/Neelkanth6.png",
    "/uploads/Neelkanth7.png",
    "/uploads/Neelkanth8.png",
    "/uploads/Neelkanth9.png",
    "/uploads/Neelkanth10.png",
    "/uploads/Neelkanth11.png",
    "/uploads/Neelkanth12.png",
    "/uploads/Neelkanth13.png",
  ];

  const highlights = [
    "Gated Community With Secure App-based Access Control",
    "Dedicated Parking (1 Per Unit)",
    "100% Power Backup For Uninterrupted Comfort",
    "Apartments With North, East, And West Facings",
    "Premium Italian Tile Flooring",
    "A+ Grade Construction Quality",
    "Earthquake-Resistant Structure",
    "Spacious Balconies with every unit",
    "Ultra-Luxury Fixtures & Fittings",
    "Vastu-Compliant Layouts",
    "Multi-Purpose Club House",
    "Fully Equipped Gym",
  ];

    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // Small delay for better UX

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section>
        {/* <div className="relative w-full h-[26vh] md:h-[80vh] text-white overflow-hidden">
          <div style={{ position: "relative" }}>
            <video
              src="/uploads/BannerVideo.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ position: "relative", zIndex: 1 }}
            ></video>
          </div>
        </div> */}

        <HighlightProjectSlider items={highlightProjects} />
      </section>
      <section className="">
        <div className="lg:px-36 pt-0 xl:px-40 bg-slate-100">
          <PropertyHeader
            title="Neelkanth Dreamz"
            developer="Mangalam Builders and Promoters"
            location="Hireballa Road, Jangamkote Hobli, Sidhlaghatta Taluk, Bangalore"
            priceRange="₹73.78 L* - ₹1.10 Cr*"
            pricePerSqft="1190-1780 sq.ft"
            emiText="₹9.53 K"
            lastUpdated={new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
          <ImageGallery
            images={images}
            title="Neelkanth dreamz"
            price="₹73.78 L* - ₹1.10 Cr*"
            // tabs={["Main Image", "Amenities", "Layout Plan", "Location Plan", "Plot", "Contact"]}
          />
          <ProjectInfoSection />

          {/* Content + Sticky Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-4">
            {/* Left Sections */}
            <div className="lg:col-span-2 space-y-8">
              <div id="Highlights" className="rounded-lg bg-white">
                <HighlightSection highlights={highlights} />
              </div>
              <div id="around" className="rounded-lg bg-white">
                <ProjectOverviewCard
                  sizes="1190 - 1780 sq.ft"
                  projectSize="Single Tower - 185 units"
                  launchDate="Mar, 2025"
                  basePrice="₹ 6200/sq.ft"
                  possession="Dec, 2024"
                  configurations="2, 3 BHK Apartments"
                  reraId="UPRERAPRJ6035"
                />
              </div>
              <div id="more" className="rounded-lg bg-white">
                <MoreAboutProject />
              </div>
              <div id="floor-plan">
                <FloorPlanSection />
              </div>
              <div id="tour">
                <ProjectGallerySection />
              </div>
              <div id="amenities">
                <ProjectAmenities />
              </div>
{/*               <div id="rating&reviews">
                <ResidentReviews />
              </div> */}
              {/* <div id="brochure">
                <BrochureSection />
              </div> */}
              <div id="developer">
                <AboutDeveloper />
              </div>
            </div>
            {/* <div>
          <PropertyLayoutViewer />
        </div> */}
            {/* Right Sticky Card */}
            <div id="ContactSeller" className="lg:col-span-1">
              <div className="sticky top-24 bg-white p-4 rounded-lg shadow-lg">
                <ContactSellerCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="bg-[#0B1D39] text-white pt-16 pb-6 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/uploads/LogoWhite.png"
                alt="Advit Reality"
                width={140}
                height={50}
                priority
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Non bibendum sit non
              congue pharetra pulvinar leo. Sed ut amet ipsum.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick link</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sell
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Rent
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <p className="text-sm text-gray-300 mb-2">hello@wealthome.com</p>
            <p className="text-sm text-gray-300 mb-4">
              4140 Parker Rd. Allentown, New <br /> Mexico 31134
            </p>
            <div className="flex items-center gap-4 text-white text-lg">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
          Copyright 2025 Advit
        </div>
      </footer> */}


      <PopUp 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        autoCloseDelay={10000}
      />
    </div>
  );
};

export default LandingPage;
