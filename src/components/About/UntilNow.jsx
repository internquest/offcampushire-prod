import { MonaMedium, MonaRegular } from "@/utils/fonts";

const UntilNow = () => {
  return (
    <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center gap-y-7 px-4 py-12 sm:py-16 md:px-16 lg:py-24">
      <p
        className={`text-[1.2rem] lg:text-[1.5rem] ${MonaMedium.className} text-left leading-[2.5rem] text-black md:text-center lg:leading-[3rem]`}
      >
        There was no dedicated platform for freshers to apply for exclusive
        off-campus placement drives
      </p>
      <span
        className={`mb-4 bg-text-gradient bg-clip-text text-center text-3xl tracking-tight text-transparent sm:text-4xl md:text-5xl ${MonaMedium.className}`}
      >
        until now...
      </span>
    </div>
  );
};

export default UntilNow;
