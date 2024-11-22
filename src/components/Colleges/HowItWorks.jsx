import bluegradient from "@/assets/College/bluegradient.svg";
import Image from "next/image";
import { MonaMedium } from "@/utils/fonts";

export default function HowItWorks() {
  return (
    <div className="overflow-hidden">
      <div className="h-0">
        <Image src={bluegradient} alt="gradient" className="w-1/2" />
      </div>

      <div className="flex items-center justify-center bg-[#020617] py-12 text-center md:py-20 lg:py-32">
        <div className="">
          <h1
            className={` ${MonaMedium.className} text-start px-3 md:text-center text-[4rem] tracking-tighter text-white sm:text-[40px] sm:tracking-tight`}
          >
            How It Works
          </h1>
          <div className="px-4 text-start lg:px-[12rem]">
            <p className="pt-2 text-start md:text-center text-xl leading-[2.5rem] tracking-[.01em] text-[#A5B1CE] md:w-[750px] lg:text-[22px] lg:leading-[2.75rem]">
              To ensure a seamless off-campus placement drive experience for
              both colleges and companies, we have established a streamlined
              process through which colleges can express their interest in
              hosting such events. By providing us with designated dates,
              colleges can initiate the process of scheduling and organizing
              successful off-campus placement drives at their campuses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
