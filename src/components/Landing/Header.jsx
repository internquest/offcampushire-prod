'use client'
import Image from "next/image";
import HeroCard from "@/assets/Landing/herocard.svg";
import Link from "next/link";
import { GeneralMedium, MonaMedium, MonaRegular, MonaSemibold } from "@/utils/fonts";
import { delay, motion } from 'framer-motion'
import WordsInview from "../WordsInview";
import WordsWoutanim from "../WordsWoutanim";
import { useWindowSize } from "@uidotdev/usehooks";


export default function Header({ loading, movement }) {

  const { width: windowWidth } = useWindowSize()
  // console.log(windowWidth);

  const bgVariants = {
    initial: {
      opacity: 0,

    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1

      }
    }
  }

  const buttonVariants = {
    hover: {
      background: 'linear-gradient(to bottom right,#0055ff,#21d6ef)'
    },
    initial: {
      opacity: 0,

    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.9,
        delay: 1

      }
    }
  }
  const textVariant = {
    hover: {
      color: '#f5fafe'
    }
  }

  const imagvariants = {
    initial: {
      opacity: 0,

    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 1

      }
    }
  }

  return (
    <>
      {
        !loading && (
          <motion.div className=" h-[626px] w-full   lg:min-h-[813px] lg:h-[1300px]   bg-center bg-no-repeat bg-cover  bmt:h-screen    flex-col relative " >
            <motion.div className="w-full h-full absolute  z-[-2] " initial='initial' animate='animate' variants={bgVariants}>
              {
                windowWidth < 768 && <Image src='https://ik.imagekit.io/0ytuu3ujr/mob%20home-min.jpg' alt="" priority={true} fill={true} className="object-cover z-[-1]" />
              }
              {
                windowWidth >= 768 && windowWidth < 1280 && <Image src='https://ik.imagekit.io/0ytuu3ujr/tab%20home-min.jpg' alt="" priority={true} fill={true} className="object-cover z-[-1]" />
              }
              {

                windowWidth >= 1280 && <Image src='https://ik.imagekit.io/0ytuu3ujr/2d-graphic-colorful-wallpaper-with-grainy-gradients-min.jpg' alt="" priority={true} fill={true} className="object-cover z-[-1]" />
              }
            </motion.div>

            <h1 className={` mx-4 mt-24 md:mx-auto font-medium  text-start   lg:text-center  text-[36px] pr-4 sm:hidden md:text-[48px]   px-0  bmt:leading-[1.75] leading-[1.6] tracking-tight md:tracking-normal w-full  md:max-w-[593px] 2xl:max-w-[950px]        ${MonaMedium.className}`}><WordsWoutanim isclip={true}>The future of off- campus</WordsWoutanim><WordsWoutanim isclip={true}>placement drives is here</WordsWoutanim></h1>
            <h1 className={` mx-auto mt-48 font-medium  text-start lg:text-center hidden sm:block  text-[36px] md:text-[48px]   px-0  bmt:leading-[1.75] leading-[1.6] tracking-tight md:tracking-normal w-full  md:max-w-[593px] 2xl:max-w-[950px]        ${MonaMedium.className}`}><WordsWoutanim isclip={true}>The future of off-campus</WordsWoutanim><WordsWoutanim isclip={true}>placement drives is here</WordsWoutanim></h1>


            <div className="w-full flex justify-center   ">
              <div className="mx-auto ">

                <motion.button whileHover='hover' initial='initial' animate='animate' variants={buttonVariants} className={`-ml-14 mx-auto  px-2   ${GeneralMedium.className} rounded-[5px]  text-2xl bg-gradient-to-r from-[#6161A6] to-[#252540] mt-4 text`}>
                  <motion.span variants={textVariant} className={`${MonaSemibold.className} mx-auto bg-clip-text h-[36px] w-[110px] [-webkit-background-clip:text] inline-block whitespace-nowrap border-none  tracking-wide leading-7 outline-none bg-gradient-to-br px-2 py-1 from-[#FFFFFF] to-[#F2F4FE] text-[1rem]  font-medium text-transparent`}>
                    Get Started
                  </motion.span>
                </motion.button>
              </div>
            </div>

            <motion.div initial='initial' animate='animate' variants={imagvariants} className="ml-4 md:mx-4" >
              {
                windowWidth < 768 && <Image src='https://ik.imagekit.io/0ytuu3ujr/Group%2063.svg' alt="" width={425} height={798} priority={true} className="mx-auto   mt-16" />
              }
              {
                windowWidth >= 768 && windowWidth < 1280 && <Image src='https://ik.imagekit.io/0ytuu3ujr/Group%2064.svg' alt="" width={1000} priority={true} height={798} className="mx-auto   mt-16" />
              }
              {

                windowWidth >= 1280 && <Image src='https://ik.imagekit.io/0ytuu3ujr/Group%2062.svg' alt="" width={1000} height={798} priority={true} className="mx-auto   mt-16" />
              }

              {/* <Image src='https://ik.imagekit.io/0ytuu3ujr/Group%2062.svg' alt="" width={1000} height={798} className="mx-auto   mt-16" /> */}
            </motion.div>

          </motion.div>
        )
      }
    </>


    // <section className="bg-mobile flex w-full items-center justify-center bg-cover bg-center pt-11 md:pt-20 lg:pt-36">
    //   <div className="flex w-full flex-col items-center justify-center gap-10 px-4 text-center lg:flex-row lg:gap-0 lg:px-16 lg:text-left">
    //     <div className="flex max-w-[500px] flex-col items-start justify-center space-y-3 pt-11 lg:max-w-[600px] xl:max-w-[720px]">
    //       <h1
    //         className={`${MonaBold.className} text-left text-[40px] leading-[3.7rem] tracking-tight text-[#020617] lg:text-[48px]`}
    //       >
    //         The future of{" "}
    //         <span className="bg-text-gradient bg-clip-text text-transparent">
    //           offcampus
    //         </span>{" "}
    //         placement drives is here
    //       </h1>
    //       <p
    //         className={`${GeneralMedium.className} text-left text-[1.3rem] leading-[2.5rem] text-[#3f3f42]/90 md:text-[1.5rem] md:leading-[2.75rem]`}
    //       >
    //         OffcampusHire is the ultimate destination for freshers to explore,
    //         apply & attend off-campus placement drives
    //       </p>
    //       <div className="pt-[4px]">
    //         <Link href="/get-started">
    //           <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
    //             <span
    //               className={`from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg ${MonaRegular.className} tracking-[0.015em]`}
    //             >
    //               Get Started
    //             </span>
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="flex w-full items-center justify-center pt-10 lg:w-auto lg:pl-16 lg:pt-0">
    //       <Image
    //         src={HeroCard}
    //         alt="Hero Card"
    //         className="w-full max-w-[500px]"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
