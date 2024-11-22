import { MonaBold, GeneralMedium } from "@/utils/fonts";

const Header = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center amabasherobg bg-no-repeat"

    >
      <div className="relative mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-10 px-4 pt-14 md:pt-24 lg:flex-row lg:gap-8">
        <div className="relative flex w-full max-w-[670px] flex-col gap-6 lg:w-1/2">
          <h1
            className={`${MonaBold.className} text-[36px] md:text-[48px] md:leading-[4rem] lg:text-[55px] lg:leading-[4.5rem]`}
          >
            <span className="text-gray-950">
              <span className="bg-gradient-to-br from-[#FF9C27] to-[#FD48CE] bg-clip-text text-transparent">
                OffcampusHire
              </span>
              <br />
              Placement Ambassador
            </span>
          </h1>
          <p
            className={`text-[20px] leading-[2.4rem] text-[#3F3F42] md:text-[22px] md:leading-[2.8rem] ${GeneralMedium.className}`}
          >
            A #PlacementRep program where you get to empower your peers to
            explore offcampus placement drives, while you develop essential
            skills - leadership, communication, and marketing.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-fit sm:flex-row sm:gap-2">
            <button className="w-full sm:w-fit">
              <div className="focus:shadow-purple group relative h-full w-full rounded-lg transition-all focus:outline-none sm:w-fit">
                <span
                  className={`flex h-full flex-row items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-3 text-white transition-all hover:bg-gray-700 focus:bg-gray-950 active:bg-gray-800 ${GeneralMedium.className}`}
                >
                  Deployment addresses
                </span>
              </div>
            </button>
          </div>
        </div>
        <div
          data-testid="hero-component"
          className="min-h-lg flex h-fit w-full max-w-xl items-center rounded-lg bg-transparent lg:w-1/2"
        >
          <img
            alt="smart contract accounts"
            fetchPriority="high"
            width="1170"
            height="928"
            decoding="async"
            data-nimg="1"
            className="mx-auto h-full w-full max-w-4xl rounded-lg text-transparent"
            src="https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1713934556-smart-contract-accounts-hero.png&w=1200&q=75"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
