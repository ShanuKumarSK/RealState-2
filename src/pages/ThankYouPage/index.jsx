"use client"; // keep this if using App Router

import { useEffect } from "react";
import { useRouter } from "next/router"; // use "next/navigation" if App Router
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17609883953/your_conversion_label_here",
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000); // 10 seconds auto redirect

    return () => clearTimeout(timer);
  }, [router]);

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 bg-black/50">
      {/* Background Image */}
      <Image
        src="/uploads/Neelkanth2.png" // put your image in public/thankyou-bg.jpg
        alt="Thank you background"
        fill
        priority
        className="object-fit object-center -z-10"
      />

      {/* Overlay Card */}
      <div className="w-full max-w-md p-10 text-center bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
        <span className="text-5xl">🎉</span>
          {/* <FaCheckCircle className="w-20 h-20 text-green-500 animate-bounce" /> */}
          <span className="text-5xl">🎊</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-6">
          Your form has been submitted successfully.
          <br />
          We’ll get in touch with you soon.
        </p>

        {/* Button */}
        <button
          onClick={handleGoHome}
          className="w-full px-6 py-3 font-semibold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

