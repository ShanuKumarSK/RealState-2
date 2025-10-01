// import { useEffect, useState } from "react";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface PopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   autoCloseDelay?: number;
// }

// const PopUp = ({ isOpen, onClose, autoCloseDelay = 5000 }: PopupProps) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setIsVisible(true);
//       setIsAnimating(true);
//       const timer = setTimeout(() => {
//         handleClose();
//       }, autoCloseDelay);

//       return () => clearTimeout(timer);
//     }
//   }, [isOpen, autoCloseDelay]);

//   const handleClose = () => {
//     setIsAnimating(false);
//     setTimeout(() => {
//       setIsVisible(false);
//       onClose();
//     }, 300);
//   };

//   const handleBackdropClick = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       handleClose();
//     }
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
//         isAnimating ? "animate-backdrop-in" : "animate-backdrop-out"
//       }`}
//       onClick={handleBackdropClick}
//     >
//       <div
//         className={`relative w-full max-w-lg transform ${
//           isAnimating ? "animate-popup-in" : "animate-popup-out"
//         }`}
//       >
//         <div className="relative bg-popup/90 backdrop-blur-xl border border-popup-border rounded-2xl p-6 shadow-2xl shadow-popup-shadow/20">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handleClose}
//             className="font-bold absolute top-4 right-4 h-8 w-8 border rounded-full hover:bg-popup-border/50 transition-colors cursor-pointer"
//           >
//             <X className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
//           </Button>
//           <div className="pr-8 text-white">
//             <div className="mb-4">
//               <div className="w-12 h-1 bg-gradient-primary rounded-full mb-3" />
//               <h2 className="text-2xl font-bold text-foreground mb-2">
//                 Welcome! 🎉
//               </h2>
//               <p className="text-muted-foreground text-sm">
//                 This popup will automatically close in 5 seconds
//               </p>
//             </div>
//             <div className="space-y-4 ">
//               <div>
//                 <h2 className="text-xl sm:text-2xl font-bold">
//                   {"Ready to Move"}
//                 </h2>
//                 <h2 className="text-xl sm:text-3xl font-bold">{`Neelkanth Dreamz`}</h2>
//                 <div className="mt-3">
//                   <p className="text-xs sm:text-base">{`2, 3 BHK Apartments`}</p>
//                   <p className="text-sm sm:text-lg font-semibold">
//                     {`Vrindavan Yojna, Raibareily Road, Lucknow`}
//                   </p>
//                   <p className="text-sm sm:text-lg mt-2">
//                     By{" "}
//                     <span className="text-xl sm:text-xl font-bold">
//                       {`Mangalam Builders and Promoters`}
//                     </span>
//                   </p>
//                   <p className="text-lg sm:text-2xl font-semibold mt-2">
//                     {`₹ 73.78 L* - ₹ 1.10 Cr*`}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopUp;

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  autoCloseDelay?: number; // in milliseconds
}

const PopUp = ({ isOpen, onClose, autoCloseDelay = 10000 }: PopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState(autoCloseDelay / 1000); // Convert to seconds

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      setCountdown(autoCloseDelay / 1000);

      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isOpen, autoCloseDelay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  const handleTabClick = (id: string) => {
    handleClose();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isAnimating ? "animate-backdrop-in" : "animate-backdrop-out"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-xl transform ${
          isAnimating ? "animate-popup-in" : "animate-popup-out"
        }`}
      >
        <div className="relative bg-popup/50 backdrop-blur-xl border border-popup-border rounded-2xl p-6 shadow-2xl shadow-popup-shadow/20 bg-black">
          <Button
            variant="default"
            onClick={handleClose}
            className="font-bold absolute top-4 right-4 h-8 w-8 border border-white rounded-full hover:bg-popup-border/50 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4 text-white text-muted-foreground hover:text-white transition-colors" />
          </Button>
          <div className="text-white">
            <div className="mb-4">
              <div className="w-12 h-1 bg-gradient-primary rounded-full mb-3" />
              <h2 className="text-2xl font-bold mb-2">Welcome! 🎉</h2>
              <p className="text-muted-foreground text-sm">
                This popup will automatically close in {countdown} second
                {countdown > 1 ? "s" : ""}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  {"Ready to Move"}
                </h2>
                <h2 className="text-xl sm:text-3xl font-bold">{`Neelkanth Dreamz`}</h2>
                <div className="mt-3">
                  <p className="text-xs sm:text-base">{`2, 3 BHK Apartments`}</p>
                  <p className="text-sm sm:text-lg font-semibold">
                    {`Vrindavan Yojna, Raibareily Road, Lucknow`}
                  </p>
                  <p className="text-sm sm:text-lg mt-2">
                    By{" "}
                    <span className="text-xl sm:text-xl font-bold">
                      {`Mangalam Builders and Promoters`}
                    </span>
                  </p>
                  <p className="text-lg sm:text-2xl font-semibold mt-2">
                    {`₹ 73.78 L* - ₹ 1.10 Cr*`}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-6">
              <button
                type="submit"
                className=" bg-emerald-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-600 transition cursor-pointer"
                onClick={() => handleTabClick("ContactSeller")}
              >
                {`Contact Now`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
