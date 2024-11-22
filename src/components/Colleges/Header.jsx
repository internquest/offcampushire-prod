import { MonaBold, MonaMedium } from "@/utils/fonts";
import herobg from '@/assets/College/collegeherobg.png'
import Image from "next/image";
const Header = () => {
  return (
    <section className="relative flex justify-center">
      <div className="relative z-10 flex flex-col items-center py-16 md:py-24 lg:py-36 xl:max-w-[1170px]">
        <div className="z-50 px-3">
          <h1
            className={`${MonaBold.className} max-w-[800px] text-left text-[2.3rem] leading-[3.5rem] text-[#4D4D4D] md:text-center md:text-[3.1rem] md:leading-[4.75rem]`}
          >
            Host exclusive off-campus placement drives
          </h1>
          <div className="">
            <p
              className={`mx-auto max-w-[800px] py-2 text-left text-[1.3rem] leading-[2.2rem] text-[#4D4D4DCC] md:pl-0 md:text-center md:text-[1.5rem] md:leading-[2.75rem] lg:py-4 ${MonaMedium.className}`}
            >
              OffcampusHire provides universities with the opportunity to host
              exclusive off-campus placement drives in collaboration with
              startups
            </p>
          </div>
        </div>
      </div>
      <Image src={herobg} alt="" fill className="absolute top-0 left-0 z-0   object-cover " />
      {/* <img
        className="absolute bottom-0 right-0 z-0 h-[200px] w-full object-cover md:h-[500px]"
        src={herobg}
      /> */}
    </section>
  );
};

export default Header;
