"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import SmallPopup from "../components/SmallPopup";
import AnimationPop from "../components/Animation";
import FullPagePopup from "../components/CongratsModal";
import { BarContext } from "../context/AppContext";

const Home = () => {
  const { barStatus } = useContext(BarContext);
  const [showCompactPopup, setShowCompactPopup] = useState(false);
  const [showFullPagePopup, setShowFullPagePopup] = useState(false);
  const [showAnimation, setAnimation] = useState(false);

  useEffect(() => {
    if (barStatus) {
      setShowFullPagePopup(false);
      setAnimation(true);
      const animationTimeout = setTimeout(() => {
        setAnimation(false);
        setShowCompactPopup(true);
      }, 3500);
      return () => clearTimeout(animationTimeout);
    }
  }, [barStatus]);

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {showFullPagePopup && <FullPagePopup />}
          <button
            onClick={() => setShowFullPagePopup(true)}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Full page Celebration
          </button>
          {showCompactPopup && (
            <SmallPopup onClose={() => setShowCompactPopup(false)} />
          )}
        </div>
        {showAnimation && <AnimationPop onClose={() => setAnimation(false)} />}
      </main>
    </div>
  );
};

export default Home;
