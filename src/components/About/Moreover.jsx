import { MonaMedium, GeneralMedium } from "@/utils/fonts";
import purplebg from '@/assets/About/1721671335-purple-bg.webp'
import Image from "next/image";

const Moreover = () => {
  return (
    <div
      className="flex w-full items-center justify-center relative bg-cover bg-center px-2 py-[120px]"

    >
      <Image src={purplebg} alt='pinkbg' priority sizes='100vw' className='w-full h-full  absolute inset-0 z-[-1]' />
      <div className="max-w-[550px] rounded-2xl border border-[#D7D7D7] bg-white px-6 py-14 text-center sm:px-12">
        <span
          className={`${MonaMedium.className} mb-4 bg-text-gradient bg-clip-text text-5xl tracking-[-0.0054em] text-transparent lg:text-[6rem]`}
        >
          Moreover
        </span>
        <p
          className={`mt-6 text-left text-[1.25rem] leading-[2.5rem] md:text-center   lg:text-[1.5rem] lg:leading-[2.9rem] ${GeneralMedium.className} text-black/80`}
        >
          Every fresher starts searching for jobs on traditional job hunting
          platforms excitedly, only to find that most opportunities ask for
          experience they don&apos;t have yet
        </p>
      </div>
    </div>
  );
};

export default Moreover;
