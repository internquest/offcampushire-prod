import { MonaBold, MonaMedium } from "@/utils/fonts";
const Header = () => {
  return (
    <section className="relative flex justify-center">
      <div className="relative z-10 flex flex-col items-center py-16 md:py-24 lg:py-36 xl:max-w-[1170px]">
        <div className="z-50">
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
      <img
        className="absolute bottom-0 right-0 z-0 h-[200px] w-full object-cover md:h-[500px]"
        src="https://s3-alpha-sig.figma.com/img/c233/941f/925baccf89fb7a3a2611b4827634a0cc?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMIbqq~xol2f4PSQMz4jpxSujsC-vxMaBEd1sOnKB4pd-hEsWCzEIrnApSnhpY5WJ1ZDQtoHJYlgpv8ZGHIAdtiKauWEey7-Xt6g4MmcLYOIsY~qd4Wl5AYUlbFQSH8sTk27rP9DFb0Ll5R89IKnTNbSzOA79Kbj363fV9m7~y2P5ICQt9KSN04ypfT08DKsjZ68FuTBwDYkQ9je9x~PPKY6Fb23FrZOsCLR7kqepEIg33G4fl3SG9qhymVwuuBePfAGgunsQmsOUcxYLaH2Mi33V5AG2sCRWqBwK5G0peQTZEbUsWwvuh5HQivhx058VCcHTHVA6Ub6Io7HYFAb7Q__"
      />
    </section>
  );
};

export default Header;
