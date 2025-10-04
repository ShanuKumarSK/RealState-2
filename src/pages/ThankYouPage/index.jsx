// import { FaCheckCircle } from "react-icons/fa";
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// // You might need to install heroicons if you haven't already:
// // npm install @heroicons/react

// export default function ThankYouPage({ onClose }) {
//   const router = useRouter();

//   // Automatically redirect to home after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//       router.push("/");
//     }, 10000); // 5000 milliseconds = 5 seconds

//     // Cleanup function to clear the timer if the component unmounts
//     // or if the user navigates away manually.
//     return () => clearTimeout(timer);
//   }, [router, onClose]);

//   const handleGoHome = () => {
//     onClose();
//     router.push("/");
//   };

//   return (
//     <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 bg-opacity-60">
//       <div className="w-full max-w-sm p-8 m-4 space-y-6 text-center bg-white rounded-2xl shadow-xl">
//         <div className="flex justify-center">
//           <span className="text-5xl">🎉🎊</span>
//           {/* <FaCheckCircle className="w-20 h-20 text-green-500" />
//           <span className="text-5xl">🎉</span> */}
//         </div>
//         <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
//         <p className="text-lg text-gray-600">
//           Your form has been submitted.
//           <br />
//           We will contact you soon.
//         </p>
//         <div className="pt-2">
//           <button
//             onClick={handleGoHome}
//             className="w-full px-6 py-3 font-semibold text-white transition-transform duration-300 ease-in-out bg-blue-600 rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Go to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// pages/thank-you.tsx  (Next.js Pages Router)
// OR app/thank-you/page.tsx (Next.js App Router)

// pages/thank-you.tsx (Next.js Pages Router)
// OR app/thank-you/page.tsx (App Router)

"use client"; // keep this if using App Router

import { useEffect } from "react";
import { useRouter } from "next/router"; // use "next/navigation" if App Router
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYouPage() {
  const router = useRouter();

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

