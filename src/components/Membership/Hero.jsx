import Image from "next/image";
import {
    MonaRegular,
    GeneralMedium,
    MonaBold,
    MonaSemibold,
} from "@/utils/fonts";

const Hero = () => {
    return (
        <div className="relative mx-auto h-full w-full">
            <Image
                src={'https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705704158-orange-arrow-bg.png&w=3840&q=75'}
                alt="photo"
                width={1500}
                height={1500}
                className=" max-w-[1000px] absolute top-0 right-11 z-[-1]"
            />
            <div className=" mx-auto w-full pt-8 md:pt-16 lg:pt-24 xl:pt-36">
                <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-y-12 px-4">
                    <div className="flex w-full flex-col items-start justify-between gap-6 sm:px-10 lg:flex-row xl:px-20">
                        <div className="flex w-full flex-col items-start justify-center gap-y-7 px-4 pt-14 sm:px-0 lg:w-1/2">
                            <h3
                                style={MonaBold.style}
                                className="text-[36px] leading-[3.5rem] tracking-[-0.02em] text-[#020617] max-w-[515px]"
                            >
                                Your golden ticket to exclusive
                                offcampus placement drives
                            </h3>
                            <span
                                style={GeneralMedium.style}
                                className="text-lg leading-[35px] text-[#868686]/70 sm:leading-[38px] xl:text-[24px] max-w-[453px]"
                            >
                                Step into a world of exclusive offcampus
                                drives reserved just for members
                            </span>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center lg:w-[40%] bg-gradient-to-b from-[#FF933C] to-[#FFFFFF] rounded-[30px] pb-[90px] mt-10 lg:mt-0">
                            <div
                                className="flex flex-col justify-center text-[20px] text-white px-5 py-8 md:px-8 md:pr-12 leading-[2.3rem]"
                                style={MonaRegular.style}
                            >
                                <p>“For students like me who are from
                                    tier-2 or tier-3 colleges, offcampushire
                                    is a lifesaver when it comes to applying
                                    for offcampus drives”
                                </p>
                                <div className={`pt-4 text-lg ${MonaSemibold.className} flex items-end justify-end`}>
                                    Prithvi, JNTU
                                </div>
                            </div>
                            <p
                                className="mt-8 text-center text-[20px] md:text-[24px] leading-[2.6rem] tracking-tight text-[#727176] xl:text-[30px] bg-white px-4 py-3 md:py-5 w-[105%] md:w-[120%] rounded-[10px] border-[3px] border-[#D7D7D7]"
                                style={GeneralMedium.style}
                            >
                                What students have to say
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
