import { GeneralMedium } from "@/utils/fonts";

export default function Collaborations() {
  return (
    <div className="purple-bg">
      <div className="flex w-full flex-col items-center space-y-16 pt-8 md:pt-16 lg:px-20 lg:pt-24">
        <div className="z-10 mx-4 max-w-[575px] lg:mx-0">
          <div className="flex items-center justify-center rounded-2xl border-2 bg-white px-8 py-4 lg:py-16 lg:px-10">
            <p
              className={`${GeneralMedium.className} max-w-[446px] px-4 text-start text-[20px]  lg:text-3xl lg:leading-[3.65rem]`}
            >
              Facilitating collaborations <br />
              between universities and <br />
              startups for <span className="text-[#D3B4ED]">
                exclusive
              </span>{" "}
              <br />
              off-campus placement
              drives
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-2 -right-5 top-0 z-0 -mt-8 h-[200px] rotate-2 transform rounded-r-none rounded-t-[25px] bg-white"></div>
        <div className="relative z-10 bg-white px-4 pt-12 lg:mx-auto lg:px-8 lg:pt-16">
          <p
            className={`${GeneralMedium.className} mx-auto max-w-[703px] pb-10 text-start md:text-center text-[19px] leading-relaxed text-[#4D4D4DCC] md:text-[22px] md:leading-loose lg:pb-24`}
          >
            Welcome to OffcampusHire, where we are dedicated to empowering
            freshers to kickstart their careers through exclusive off-campus
            placement drives. Our platform serves as a catalyst for bridging the
            gap between freshers and exclusive off-campus placement drives
            beyond on-campus placements.
          </p>
        </div>
      </div>
    </div>
  );
}
