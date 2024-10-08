import Image from "next/image";
import ProgressBar from "./ProgressBar.jsx";

const FullPagePopup = () => {
  return (
    <div className="w-full h-screen fixed inset-0 bg-cover bg-center bg-no-repeat bg-[url('../assets/newLevel.png')] flex flex-col items-center z-50 overflow-auto">
      {/* Close Button */}
      <span className="fixed top-3 right-5 border-black rounded-full cursor-pointer">
        close
      </span>

      {/* LEVEL UP Title */}
      <div className="smMobile:mt-[20%] mobile:mt-[30%] tablet:mt-[25%] desktop:mt-[7.5%] lview:mt-[60px]">
        <p className="font-inter font-bold leading-[45px] smMobile:text-[50px] mobile:text-[55px] mobile:leading-[40px] tablet:text-[60px] tablet:leading-[58px] laptop:text-[60px] laptop:mt-[35%] lview:text-[70px] text-left text-yellow-500">
          LEVEL UP
        </p>
      </div>

      {/* Image */}
      <div className="smMobile:mt-[10%] mobile:mt-[15%] tablet:mt-[9%] mt-[3%]">
        <Image src="/101.png" alt="Next.js logo" width={150} height={188} />
      </div>

      {/* Rank */}
      <div className="font-inter font-bold text-black smMobile:mt-[15%] smMobile:text-[25px] mobile:text-[40px] mobile:mt-[20%] tablet:mt-[10%] tablet:text-[50px] desktop:mt-[2.5%] large-desktop:mt-[5%] text-[60px] leading-[51px] mt-[5%] text-left">
        <p>Corporal</p>
      </div>

      {/* Progress Bar */}
      <div>
        <ProgressBar />
      </div>

      {/* Claim NFT Button */}
      <div className="flex justify-center h-[40px] smMobile:mt-[7%] mobile:mt-[5%] tablet:mt-[3%] mt-[1%]">
        <button className="smMobile:w-[135px] smMobile:text-[14px] mobile:w-[150px] tablet:w-[175px] w-[200px] border border-[#35241C] bg-custom-gradient rounded-l">
          Claim NFT Badge
        </button>
      </div>

      {/* Notification Text */}
      <div className="flex flex-col smMobile:mt-[3%] mt-[1.5%]">
        <div className="flex flex-col items-center smMobile:mt-[2.5%] mobile:mt-[3%]">
          <p className="font-inter-400 smMobile:text-[14px] mobile:text-[15px] text-black">
            You’ve leveled up and earned a new badge!
          </p>
          <p className="smMobile:text-[10px] mobile:text-[12px] whitespace-nowrap text-custom-gold">
            Claim your{" "}
            <span className="smMobile:text-[16px] mobile:text-[16px] text-[20px] text-yellow-500">
              NFT badge
            </span>{" "}
            now, or retrieve it later from your Inventory.
          </p>
        </div>

        {/* Additional Instructions */}
        <div className="flex flex-col items-center mobile:p-[2%] mt-[3%]">
          <p className="font-inter smMobile:text-[14px] mobile:text-[14px] tablet:text-[12px] text-custom-gold text-[15px] font-normal leading-[22px] text-center">
            To claim your new badge, you'll need to transfer your previous badge
            from your wallet for it to be burned in exchange for the new one.
          </p>
          <p className="font-inter smMobile:text-[10px] mobile:text-[12px] tablet:text-[12px] text-custom-gold text-[15px] font-normal leading-[22px] text-center">
            If there's insufficient gas in your wallet, the transaction will be
            canceled. You can always visit your Inventory and claim your badge
            at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullPagePopup;
