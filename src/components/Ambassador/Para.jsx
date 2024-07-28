import { MonaMedium, GeneralMedium } from "@/utils/fonts";

const Para = () => {
  return (
    <div className="space-y-2 px-4 py-12 text-left md:space-y-6 md:text-center lg:py-28">
      <h1
        className={`mx-auto max-w-[590px] text-left text-[1.7rem] leading-[3rem] tracking-[-0.015em] lg:text-center lg:text-[2rem] lg:leading-[3.3rem] ${MonaMedium.className} text-[#020617]`}
      >
        Tired of your friends complaining about off-campus placements? Be their
        hero!
      </h1>
      <p
        className={`mx-auto max-w-[600px] text-left text-[18.5px] leading-[2.4rem] tracking-[0.01em] text-[#6D7C92] md:text-center lg:text-[20px] lg:leading-[2.75rem] ${GeneralMedium.className}`}
      >
        By becoming a Placement Ambassador, you're not just taking on a role –
        you're joining a movement to transform the landscape of off-campus
        placement drives in India
      </p>
    </div>
  );
};

export default Para;
