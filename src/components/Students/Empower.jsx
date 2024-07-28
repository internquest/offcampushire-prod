import { MonaBold, MonaSemibold, GeneralMedium } from "@/utils/fonts";
const Empower = () => {
  return (
    <section
      className="relative bg-cover bg-center px-6 py-12 text-gray-950 md:py-16 lg:pb-32 lg:pt-16"
      style={{
        backgroundImage:
          "url('https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705621516-blue-arrow.png&w=2048&q=75')",
      }}
    >
      <div className="relative mx-auto flex max-w-[1170px] flex-col gap-10 md:gap-14 lg:flex-row lg:gap-28">
        <div className="z-10 flex h-fit flex-col gap-8 lg:sticky lg:top-40 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <h2
              className={`text-[32px] leading-tight md:text-[38px] lg:text-[48px] ${MonaBold.className}`}
            >
              <span className="">The web3 API plus so much more</span>
            </h2>
            <p className="text-[16px] md:text-[18px]">
              Key features for you to build and scale.
            </p>
          </div>
        </div>
        <ul className="z-20 grid grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 lg:w-1/2 lg:grid-cols-1">
          <div className="hover:shadow-gray-xl relative rounded-2xl p-[1px] transition-all">
            <div className="group relative flex h-full w-full flex-col gap-4 rounded-[15px] bg-white bg-opacity-40 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between"></div>
              <span
                className={`text-[24px] ${MonaSemibold.className} text-gray-950`}
              >
                Exclusive Opportunities
              </span>
              <div className="text-[16px] text-gray-500">
                <p className={`${GeneralMedium.className}`}>
                  We connect you with exclusive off-campus drives organized in
                  collaboration with companies & colleges
                </p>
              </div>
            </div>
          </div>
          <div className="hover:shadow-gray-xl relative rounded-2xl p-[1px] transition-all">
            <div className="group relative flex h-full w-full flex-col gap-4 rounded-[15px] bg-white bg-opacity-40 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between"></div>
              <span
                className={`text-[24px] ${MonaSemibold.className} text-gray-950`}
              >
                Connect with startups
              </span>
              <div className="text-[16px] text-gray-500">
                <p className={`${GeneralMedium.className}`}>
                  Gone are the days of limited options. We bring you emerging
                  startups actively seeking bright, specialized talents
                </p>
              </div>
            </div>
          </div>
          <div className="hover:shadow-gray-xl relative rounded-2xl p-[1px] transition-all">
            <div className="group relative flex h-full w-full flex-col gap-4 rounded-[15px] bg-white bg-opacity-40 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between"></div>
              <span
                className={`text-[24px] ${MonaSemibold.className} text-gray-950`}
              >
                Personalized Experience
              </span>
              <div className="text-[16px] text-gray-500">
                <p className={`${GeneralMedium.className}`}>
                  Our platform fosters direct interaction with HRs and
                  recruiters, allowing you to showcase your unique skills and
                  personality
                </p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Empower;
