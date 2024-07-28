import { MonaMedium } from "@/utils/fonts";
import Image from "next/image";
import hero from "@/assets/About/hero.svg";

const AboutHeader = () => {
  return (
    <header className={"pt-16 text-left md:text-center"}>
      <h1
        className={` ${MonaMedium.className} mx-auto max-w-[900px] px-4 text-[2.25rem] tracking-[-0.015em] sm:text-[3rem] lg:text-[4rem] lg:leading-[5.5rem]`}
      >
        Empowering freshers with{" "}
        <span className="bg-text-gradient bg-clip-text text-transparent">
          off-campus placement drives
        </span>
      </h1>
      <div className="w-full pt-12 lg:pt-0">
        <Image src={hero} alt="hero-bg" className="h-full w-full" />
      </div>
    </header>
  );
};

export default AboutHeader;
