import React, { useState, useEffect } from "react";
import { getImageSize } from "../utilis/getImageWidth"; // Adjust the path if needed

const AnimationPop = ({ onClose }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showPopupContent, setShowPopupContent] = useState(false); // State to control whether to show popup content or video

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial window width on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = getImageSize(windowWidth);

  // Show popup content after the video ends
  const handleVideoEnd = () => {
    setShowPopupContent(true);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray bg-opacity-50 z-50">
      <div
        className="
        relative bg-[url('../../Public/Mask.png')] bg-cover bg-center bg-no-repeat
        h-[80%] max-w-[70%] laptop:w-[100%] desktop:w-[100%] lview:w-[100%] w-full rounded-lg shadow-lg
        smMobile:max-w-[90%] mobile:max-w-[90%]"
      >
        <div className="flex h-full w-full">
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            muted
            onEnded={handleVideoEnd}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AnimationPop;
