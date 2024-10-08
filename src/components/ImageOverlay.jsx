import Image from "next/image";

const OverlayImage = ({ items }) => {
  return (
    <div className="relative flex flex-col items-center">
      {items.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center mt-6 ">
          <div className="relative w-[157px] h-[146px]">
            <Image
              src="/outer.png"
              alt="Outer Image"
              layout="fill"
              objectFit="contain"
            />
            {/* Raised Inner Image by 5px using transform */}
            <div className="absolute inset-0 flex items-center justify-center transform -translate-y-[7px]">
              <Image
                src={item.path}
                alt="Inner Image"
                width={90}
                height={100}
              />
            </div>
          </div>
          <div className="absolute mt-[122px]">
            <Image
              src="/vector.png"
              alt="Vector Image"
              width={143}
              height={25}
            />
          </div>

          {/* Price Text */}
          <p className="absolute text-black mt-[122px] mr-[22px] font-bold text-[18px]">
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OverlayImage;
