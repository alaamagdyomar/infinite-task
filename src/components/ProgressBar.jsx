import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(20);
  const [isClient, setIsClient] = useState(false);

  // Ensure that dynamic attributes are only applied on the client side
  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
  }, []);

  const handleProg = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };

  const reset = () => {
    setProgress(0);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mobile:mt-[8px]">
        <span>XP:34,500</span>
        <span>50,000</span>
      </div>
      <div className="smMobile:w-[280px] mobile:w-[320px] mobile:mt-[3px] tablet:w-[500px] w-[653px] h-[20px] mt-[2px] p-[4px] bg-amber-950 rounded-[10px]">
        {isClient && (
          <div
            className="h-full rounded-[10px] transition-all duration-300 ease-out bg-amber-500"
            style={{ width: `${progress}%` }} // Only applied after hydration
          ></div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
