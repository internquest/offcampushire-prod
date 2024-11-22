import { MonaSemibold } from "@/utils/fonts";

const SayGoodbye = () => {
  return (
    <div className="flex items-center justify-center bg-[#151D46] px-4 py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[800px]">
        <h1
          className={`pb-8 text-center text-[1.75rem] text-white sm:text-[2rem] lg:text-[2.5rem] ${MonaSemibold.className}`}
        >
          Say goodbye to CGPA requirements
        </h1>

        <div className="flex items-center justify-center rounded-[10px] border border-[#FFFFFF]/10 bg-gradient-to-b from-[#2C2950] via-[#827FA6]/35 to-[#827FA6]/0 p-6 text-center text-[1.125rem] leading-[2rem] text-white/80 sm:p-8 sm:text-[1.25rem] lg:p-12">
          <div className="space-y-8">
            <p className="text-start md:text-center">
              When it comes to placement drives, many companies have
              traditionally required students to meet certain CGPA requirements
              in order to be eligible to apply.
            </p>
            <p className="text-start md:text-center">
              We recognize that your true potential goes beyond a GPA and so
              we&apos;re breaking down barriers of CGPA requirements, redefining
              the eligibility criteria for freshers to participate in off-campus
              drives based on skills, passion, and commitment, irrespective of
              academic grades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayGoodbye;
