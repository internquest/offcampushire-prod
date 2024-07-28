import { GeneralMedium, MonaMedium } from "@/utils/fonts";

const Steps = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-7 md:py-20 lg:px-4 lg:py-28">
      <div className="flex w-full flex-col items-center gap-x-12 lg:flex-row lg:items-start lg:gap-x-24">
        <div className="lg:w-[35%]">
          <p
            className={`text-[1.5rem] leading-[2.5rem] text-[#0F0D0D]/80 lg:text-[1.75rem] lg:leading-[3rem] ${MonaMedium.className}`}
          >
            A platform where graduate ambitions meet exclusive off-campus
            opportunities
          </p>
        </div>
        <div className="lg:w-2/3">
          <p
            className={`${GeneralMedium.className} gap-x-4 pt-6 text-[1.125rem] leading-[1.9rem] text-[#0F0D0D]/80 lg:pr-4 lg:pt-0 lg:text-[20px] lg:leading-[2.3rem]`}
          >
            Welcome to OffcampusHire, where we are dedicated to empowering
            freshers to kickstart their careers through off-campus placement
            drives. Our platform serves as a catalyst for bridging the gap
            between freshers & exciting career opportunities beyond on-campus
            placements.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-2 pt-12 lg:flex-row lg:pt-28">
        {["01", "02", "03"].map((step, index) => (
          <div
            key={index}
            className="mx-0 mb-8 flex h-[300px] w-full flex-col items-center justify-center rounded-[20px] border border-[#D7D7D7] text-center lg:mx-4 lg:mb-0 lg:w-1/3"
          >
            <h2 className={`pt-5 text-[2.6rem] ${MonaMedium.className}`}>
              {step}
            </h2>
            <p
              className={`${GeneralMedium.className} px-6 pt-3 text-[1.125rem] leading-[2.25rem] text-[#141417]/75 lg:px-11`}
            >
              {index === 0 &&
                "Sign up & complete your profile to unlock access and get started with OffcampusHire"}
              {index === 1 &&
                "Browse and apply for exclusive off-campus opportunities tailored for freshers"}
              {index === 2 &&
                "Attend interviews and secure your dream job with top companies"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
