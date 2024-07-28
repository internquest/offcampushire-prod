import { GeneralMedium } from "@/utils/fonts";
const DoublePara = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 bg-[#f9f9fb] px-4 py-[42px] text-left text-[#020617]/60 lg:py-[105px] lg:text-center">
      <p
        className={`${GeneralMedium.className} text-md max-w-[815px] text-[1.125rem] font-normal leading-[2.2rem] lg:text-[1.3rem] lg:leading-[2.75rem]`}
      >
        Being left out of on-campus placements can deal a blow to a
        fresher&apos;s confidence and self-esteem. The journey of job hunting
        can take a toll on a fresher&apos;s confidence and self-belief.
        Rejections become a constant companion, chipping away at their
        resilience
      </p>
      <p
        className={`${GeneralMedium.className} text-md max-w-[815px] text-[1.125rem] font-normal leading-[2.2rem] lg:text-[1.3rem] lg:leading-[2.75rem]`}
      >
        For many freshers, securing a job post-graduation isn&apos;t just about
        fulfilling career aspirations; it&apos;s also about contributing to
        their family&apos;s financial stability. The delay in finding employment
        adds to the burden, increasing financial strain and amplifying the
        pressure to succeed.
      </p>
    </div>
  );
};

export default DoublePara;
