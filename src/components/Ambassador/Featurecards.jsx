import { MonaSemibold, GeneralMedium } from "@/utils/fonts";
const Featurecards = () => {
  return (
    <div className="mx-auto max-w-[1280px] flex justify-center pb-24">
      <div className="grid grid-cols-1 grid-rows-3 w-full mx-auto auto-rows-auto gap-4 md:px-20 md:pl-28   md:min-h-[800px] md:grid-cols-[365px_275px_372px]">
        <div className="flex flex-col max-w-[365px] justify-between rounded-lg bg-gradient-to-b from-[#9850F2]/80 to-[#DC23EB]/80 p-4 text-white md:[grid-area:1/1/2/2]  md:row-span-2">
          <h1 className={` ${MonaSemibold.className} text-[28px]`}>
            Rewards & Incentives
          </h1>
          <p
            className={`${GeneralMedium.className} mt-2 text-[20px] leading-[2.5rem]`}
          >
            Performance-based cash rewards
          </p>
        </div>
        <div className="rounded-lg max-w-[275px] bg-gradient-to-b from-[#F6F9FE] to-[#CCCCFF] p-4 md:[grid-area:1/2/2/3]  md:row-span-2">
          <h1
            className={` ${MonaSemibold.className} text-[28px] text-[#3B424A]`}
          >
            Certificate of Excellence / Appreciation
          </h1>
        </div>
        <div className="md:[grid-area:1/3/3/4] flex gap-4 flex-col ">
          <div className="flex flex-col max-w-[373px] justify-between rounded-lg bg-gradient-to-b from-[#AE85F7] to-[#2D3195]/80 p-4 text-white pb-14 ">
            <h1 className={` ${MonaSemibold.className} text-[28px]`}>
              Placement Assistance Workshop Pass
            </h1>
          </div>
          <div className="flex flex-col max-w-[372px] gap-12 rounded-lg bg-gradient-to-b from-[#6E67FD] to-[#3DCAFF] p-4 text-white  ">
            <h1 className={` ${MonaSemibold.className} text-[28px]`}>
              1 month spotlight membership
            </h1>
            <p
              className={`${GeneralMedium.className} mt-2 text-[20px] leading-[2.5rem]`}
            >
              To receive priority consideration from startups & ensuring that you
              get shortlisted for at least two off-campus placement drives.
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-[654px justify-between rounded-lg bg-gradient-to-b from-[#14253F] to-[#3461A5]/90 p-4 text-white md:[grid-area:2/1/3/3] md:row-span-2">
          <h1 className={` ${MonaSemibold.className} text-[28px]`}>
            PPI Opportunity
          </h1>
          <p
            className={`${GeneralMedium.className} mt-2 text-[20px] leading-[2.5rem]`}
          >
            Every company is addicted to star performers. We are not an
            exception too. Show your skills and bag an paid internship too
          </p>
        </div>
        <div className="md:col-span-3 flex gap-4">
          <div className="flex flex-col justify-between">
            <div className="rounded-lg w-[427px] bg-[#EDF1FF] p-4 pb-10 md:col-span-2">
              <h1
                className={` ${MonaSemibold.className} bg-gradient-to-r from-[#9850F2] to-[#DC23EB] bg-clip-text text-[28px] text-transparent`}
              >
                Networking Opportunities
              </h1>
            </div>
            <div className="flex flex-col w-[427px] justify-between rounded-lg bg-[#EDF1FF] p-4 md:col-span-2">
              <h1
                className={` ${MonaSemibold.className} bg-gradient-to-r from-[#9850F2] to-[#DC23EB] bg-clip-text text-[28px] text-transparent`}
              >
                LinkedIn Recommendation
              </h1>
              <p
                className={`${GeneralMedium.className} mt-2 bg-gradient-to-r from-[#9850F2] to-[#DC23EB] bg-clip-text text-[20px] leading-[2.5rem] text-transparent`}
              >
                For team leaders & top performers
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[600px justify-between rounded-lg bg-gradient-to-b from-[#FDA57C] to-[#FB85B8] p-4 text-white md:col-span-4 md:row-span-2">
            <h1 className={` ${MonaSemibold.className} text-[28px]`}>
              6 months spotlight & propel memberships for top performers
            </h1>
            <p
              className={`${GeneralMedium.className} mt-2 text-[20px] leading-[2.5rem]`}
            >
              Stand out from the crowd and supercharge your offcampus placement
              journey
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Featurecards;
