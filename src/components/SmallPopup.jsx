import React, { useState, useEffect } from "react";
import Image from "next/image";
import OverlayImage from "../components/ImageOverlay";
import { getImageSize } from "../utilis/getImageWidth";

const items = [
  { path: "/inner1.png", price: "20 PX" },
  { path: "/inner2.png", price: "250,000,000" },
];

const CenteredPopup = ({ onClose }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initial width set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = getImageSize(windowWidth);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray bg-opacity-50 z-50">
      <div
        className="
          bg-[url('../../Public/Mask.png')] bg-cover bg-center bg-no-repeat
          h-[80%] max-w-[70%] w-full rounded-lg shadow-lg p-8
          smMobile:max-w-[90%] mobile:max-w-[90%] flex flex-col items-center"
      >
        <button
          onClick={() => {
            onClose(false);
          }}
          className="self-end text-white mb-7 rounded-full border border-white smMobile:mb-7"
        >
          X
        </button>

        {/* Congratulations Heading */}
        <p className="text-gold-dark font-bold text-[40px] smMobile:text-[18px] mobile:text-[20px]">
          Congratulations!
        </p>

        <p className="text-gold-dark text-[30px] mb-4 smMobile:text-[14px] mobile:text-[16px]">
          Command completed successfully!
        </p>
        <p
          className="
          text-center text-custom-gold text-[20px] mt-6
          smMobile:text-[16px] mobile:text-[16px]"
        >
          You have successfully completed a command! Here are your well-earned
          rewards. Keep exploring the Command Center for even more exciting
          missions and bigger rewards!
        </p>

        <div className="flex items-center mt-[40px]">
          <Image
            src="/Vectorleft.png"
            alt="vector left"
            width={width}
            height={height}
            className="mr-[10px]"
          />
          <p>Rewards</p>
          <Image
            src="/vectorRight.png"
            alt="vector right"
            width={width}
            height={height}
            className="ml-[10px]"
          />
        </div>
        <div className="flex mt-6">
          {items.map((item, index) => (
            <OverlayImage key={index} items={[item]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenteredPopup;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import OverlayImage from "../components/ImageOverlay";
// import { getImageSize } from "../utilis/getImageWidth"; // Adjust the path if needed

// const items = [
//   { path: "/inner1.png", price: "20 PX" },
//   { path: "/inner2.png", price: "250,000,000" },
// ];

// const CenteredPopup = ({ onClose }) => {
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [showPopupContent, setShowPopupContent] = useState(false); // State to control whether to show popup content or video

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     handleResize(); // Set initial window width on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const { width, height } = getImageSize(windowWidth);

//   // Show popup content after the video ends
//   const handleVideoEnd = () => {
//     setShowPopupContent(true);
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-gray bg-opacity-50 z-50">
//       <div
//         className="
//           h-[80%] max-w-[70%] w-full rounded-lg shadow-lg p-8
//           smMobile:max-w-[90%] mobile:max-w-[90%] flex flex-col items-center bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('../../Public/Mask.png')" }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => {
//             onClose(false);
//           }}
//           className="self-end text-white mb-7 rounded-full border border-white smMobile:mb-7"
//         >
//           X
//         </button>

//         {/* Video or Popup content */}
//         {!showPopupContent ? (
//           <div className="flex justify-center items-center w-full h-full">
//             <video
//               width="100%" // Ensure it takes the full width of the container
//               height="100%" // Ensure it takes the full height of the container
//               controls
//               autoPlay
//               muted
//               className="rounded-lg"
//               onEnded={handleVideoEnd}
//             >
//               <source src="/video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         ) : (
//           <>
//             {/* Congratulations Heading */}
//             <p className="text-gold-dark font-bold text-[40px] smMobile:text-[18px] mobile:text-[20px]">
//               Congratulations!
//             </p>

//             <p className="text-gold-dark text-[30px] mb-4 smMobile:text-[14px] mobile:text-[16px]">
//               Command completed successfully!
//             </p>
//             <p
//               className="
//               text-center text-custom-gold text-[20px] mt-6
//               smMobile:text-[16px] mobile:text-[16px]"
//             >
//               You have successfully completed a command! Here are your
//               well-earned rewards. Keep exploring the Command Center for even
//               more exciting missions and bigger rewards!
//             </p>

//             {/* Vectors and Rewards Text */}
//             <div className="flex items-center mt-[40px]">
//               <Image
//                 src="/Vectorleft.png"
//                 alt="vector left"
//                 width={width}
//                 height={height}
//                 className="mr-[10px]"
//               />
//               <p>Rewards</p>
//               <Image
//                 src="/vectorRight.png"
//                 alt="vector right"
//                 width={width}
//                 height={height}
//                 className="ml-[10px]"
//               />
//             </div>

//             {/* Overlay Images */}
//             <div className="flex mt-6">
//               {items.map((item, index) => (
//                 <OverlayImage key={index} items={[item]} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CenteredPopup;
