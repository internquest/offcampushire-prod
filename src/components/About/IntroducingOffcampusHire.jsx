import Image from "next/image";
import bluegradient from "@/assets/College/bluegradient.svg";
import { MonaMedium, GeneralMedium } from "@/utils/fonts";

const IntroducingOffcampusHire = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-0">
        <Image src={bluegradient} alt="gradient" className="w-1/2" />
      </div>

      <div className="flex min-h-screen items-center justify-center bg-[#020617] pb-[35px] pt-[45px] text-center lg:pb-[60px] lg:pt-[30px]">
        <div>
          <span
            className={`rounded-full bg-[#ddd6fe] px-6 py-3 text-base font-bold text-[#4c1d95] lg:px-10 lg:text-[1.25rem] ${GeneralMedium.className}`}
          >
            INTRODUCING
          </span>

          <h1
            className={`${MonaMedium.className} pt-12 text-center text-[2.8rem] tracking-tighter text-white sm:text-[3.5rem] lg:text-[6rem]`}
          >
            offcampushire
          </h1>
          <div
            className={`px-4 text-start lg:px-[12rem] ${GeneralMedium.className} `}
          >
            <p className="max-w-[745px] pt-2 text-xl leading-[2.5rem] text-white lg:text-xl lg:leading-[2.75rem]">
              Welcome aboard to OffcampusHire, the radical platform committed to
              fueling the career move of freshers with exclusive off-campus
              placement drives!
            </p>
            <p className="max-w-[745px] pt-8 text-xl leading-[2.5rem] text-white lg:text-xl lg:leading-[2.75rem]">
              With our innovative approach to career empowerment, we aim to
              level the playing field for freshers and provide them with the
              opportunities they need to thrive. By bridging the gap between
              freshers and off-campus placement drives, we empower the next
              generation of talent to reach their full potential and achieve
              their dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducingOffcampusHire;
