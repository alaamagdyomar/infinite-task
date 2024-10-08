import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { BarContext } from "../context/AppContext";

const ProgressBar = () => {
  const [progress, setProgress] = useState(20);
  const [isClient, setIsClient] = useState(false);
  const { barStatus, updateBar } = useContext(BarContext);

  useEffect(() => {
    setIsClient(true);

    if (progress === 100) {
      updateBar(true);
    }
    console.log("barstatus", barStatus);
  }, [progress, updateBar]);

  const handleProg = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
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
            style={{ width: `${progress}%` }}
          ></div>
        )}
      </div>
      <div className="flex justify-center h-[40px] smMobile:mt-[7%] mobile:mt-[5%] tablet:mt-[3%] mt-[1%]">
        <button
          className="smMobile:w-[135px] smMobile:text-[14px] mobile:w-[150px] tablet:w-[175px] w-[200px] border border-[#35241C] bg-custom-gradient rounded-l"
          onClick={handleProg}
        >
          Claim NFT Badge
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
