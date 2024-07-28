import Image from "next/image";
import { GeneralMedium, MonaMedium } from "@/utils/fonts";

const EachProcedureCard = ({ heading, description, image }) => {
  return (
    <div className="flex flex-col bg-white py-6 lg:flex-row lg:py-12">
      <div className="flex w-full flex-col items-center justify-center px-4 lg:w-[70%] lg:pl-24">
        <h2
          className={`max-w-[590px] text-[21px] leading-[2.3rem] text-[#4D4D4DE5] md:text-[24px] md:leading-[2.8rem] ${MonaMedium.className}`}
        >
          {heading}
        </h2>
        <p
          className={`mt-6 max-w-[590px] text-[17px] leading-[2rem] text-[#4D4D4DCC] md:text-[20px] md:leading-[2.2rem] ${GeneralMedium.className}`}
        >
          {description}
        </p>
      </div>
      <div className="mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-[30%]">
        <Image src={image} width={559} height={632} alt="" />
      </div>
    </div>
  );
};

export default EachProcedureCard;
