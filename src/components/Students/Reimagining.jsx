import { MonaMedium } from "@/utils/fonts";

const Reimagining = () => {
  return (
    <div className="relative w-full min-h-[526px]">
      <div
        className="relative bg-cover bg-center h-full w-full bg-no-repeat bg-[url('../assets/ForStudents/reimaginebg.jpeg')]"

      >
        <div className="relative z-10 mx-auto min-h-[526px] flex flex-col items-center justify-start px-4 py-12 text-white sm:px-7 md:py-20 lg:px-4 lg:py-16">
          <h5
            className={`text-[2.25rem] ${MonaMedium.className} text-pretty lg:text-wrap max-w-[840px] text-left md:text-center`}
          >
            Reimagining your off-campus placement journey
          </h5>
          <div
            className={` space-y-10 pt-12 text-left text-[1.25rem] leading-[2.1rem] text-white/80 md:text-center`}
          >
            <div>

              <p className="text-pretty lg:text-wrap">
                Are you tired of generic, crowded placement drives that offer
                limited opportunities?</p>
              <p>
                Do you dream of landing your dream job at a
                top company, but feel lost in the sea of applicants?
              </p>
            </div>
            <p className="text-pretty lg:text-wrap">
              OffCampusHire is the game-changer in India&apos;s off-campus
              recruitment scene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reimagining;
