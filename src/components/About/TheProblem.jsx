import { GeneralMedium, MonaMedium } from "@/utils/fonts";
const TheProblem = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-4 py-12 text-center sm:py-16 md:px-16 lg:py-24">
      <span
        className={`tracking-wide ${MonaMedium.className} text-base text-[#0066FF]`}
      >
        THE PROBLEM
      </span>

      <p
        className={`text-[1.25rem] leading-[2.5rem] tracking-[-1.5%] text-[#24201F]/90 lg:max-w-[710px] lg:text-[1.625rem] lg:leading-[3.51rem] ${GeneralMedium.className} text-left md:text-start`}
      >
        When college students in India don&apos;t get placed during campus
        placements, it can make things tough for them upon graduation. They have
        to figure out how to find a job all on their own, and that can be really
        hard.
      </p>
    </div>
  );
};

export default TheProblem;
