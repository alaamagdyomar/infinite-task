import Image from "next/image";
import ProgressBar from "./ProgressBar.jsx";

const FullPagePopup = () => {
  return (
    <div className="w-full h-screen fixed inset-0 bg-cover bg-center bg-no-repeat bg-[url('../assets/newLevel.png')] flex flex-col items-center z-50">
      <span className="fixed top-3 right-5 border-black rounded-full">
        close
      </span>
      <div className="mobile:mt-[30%] tablet:mt-[25%] desktop:mt-[10%] large-desktop:mt-[5%]">
        <p className="font-inter text-[40px] mobile:text-[50px] tablet:text-[60px] text-[70px] font-black leading-[45px] mobile:leading-[40px] tablet:leading-[58px] leading-[65px] text-left text-yellow-500">
          LEVEL UP
        </p>
      </div>
      <div className="mobile:mt-[15%] tablet:mt-[9%] mt-[3%]">
        <Image src="/101.png" alt="Next.js logo" width={150} height={188} />
      </div>
      <div className="font-inter text-black mobile:text-[40px] mobile:mt-[20%] tablet:mt-[10%] tablet:text-[50px] text-[60px] font-bold leading-[51px] mt-[5%] text-left">
        <p>Corporal</p>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="flex justify-center h-[40px] mobile:mt-[5%] tablet:mt-[3%] mt-[1%]">
        <button className="mobile:w-[150px] tablet:w-[175px] w-[200px] border border-[#35241C] bg-custom-gradient rounded-l">
          Claim NFT Badge
        </button>
      </div>
      <div className="flex flex-col mt-[1.5%]">
        <div className="flex flex-col">
          <p className="font-inter-400 mobile:text-[15px] mobile:ml-[15%] text-[24px] ml-[23%] text-black">
            You’ve leveled up and earned a new badge!{" "}
          </p>
          <p className="mobile:w-[18px] mobile:text-[12px] mobile:ml-[9%] whitespace-nowrap ml-[23%] text-custom-gold">
            Claim your{" "}
            <span className="mobile:text-[12px] text-[20px] text-yellow-500">
              NFT badge
            </span>{" "}
            now, or retrieve it later from your Inventory.
          </p>
        </div>
        <div className="flex flex-col items-center mobile:p-[2%] mt-[3%]">
          <p className="font-inter mobile:text-[12px] tablet:text-[12px] text-custom-gold text-[15px] font-normal leading-[22px] text-center">
            To claim your new badge, you'll need to transfer your previous badge
            from your wallet for it to be burned in exchange for the new one.
          </p>
          <p className="font-inter mobile:text-[12px] tablet:text-[12px] text-custom-gold text-[15px] font-normal leading-[22px] text-center">
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
