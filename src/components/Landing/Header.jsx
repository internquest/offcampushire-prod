'use client'
import Image from "next/image";
import HeroCard from "@/assets/Landing/herocard.svg";
import Link from "next/link";
import { GeneralMedium, MonaMedium, MonaRegular, MonaSemibold } from "@/utils/fonts";
import { motion } from 'framer-motion'
import WordsInview from "../WordsInview";


export default function Header({ loading }) {

  const buttonVariants = {
    hover: {
      background: 'linear-gradient(to bottom right,#0055ff,#21d6ef)'
    }
  }
  const textVariant = {
    hover: {
      color: '#f5fafe'
    }
  }


  return (


    <div className=" bg-[url('https://ik.imagekit.io/0ytuu3ujr/mob%20home-min.jpg')]  md:bg-[url('https://ik.imagekit.io/0ytuu3ujr/tab%20home-min.jpg')]  lg:bg-[url('https://ik.imagekit.io/0ytuu3ujr/2d-graphic-colorful-wallpaper-with-grainy-gradients-min.jpg')]  h-[626px] w-full md:h-[996px]  lg:min-h-[813px] lg:max-h-[1100px]   bg-center bg-no-repeat bg-cover  bmt:h-screen    flex-col px-2 py-12 md:px-3 md:py-14 lg:px-28 lg:py-32  ">
      {!loading && (
        <motion.h1 layoutId='text' transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }} className={`  font-semibold  text-start  text-[34px] md:text-[50px] 2xl:text-[4.5rem]  pt-12  px-0  bmt:leading-[1.75] leading-[1.6] tracking-normal w-full  md:max-w-[593px] 2xl:max-w-[950px]        ${MonaMedium.className}`}><WordsInview isclip={true}>The future of off-campus</WordsInview><WordsInview isclip={true}>placement drives is here</WordsInview></motion.h1>)}
      <motion.button whileHover='hover' variants={buttonVariants} className={`px-2   min-h-[50px] min-w-[150px]  ${GeneralMedium.className} rounded-[5px] font-bold tracking-wide leading-7 text-2xl bg-gradient-to-r from-[#6161A6] to-[#252540] mt-4 text`}>
        <motion.span variants={textVariant} className={`${MonaSemibold.className} bg-clip-text [-webkit-background-clip:text] inline-block whitespace-nowrap border-none outline-none bg-gradient-to-br px-4 py-3 from-[#FFFFFF] to-[#F2F4FE] text-[1.3rem] leading-[1.1] font-medium text-transparent`}>
          Get Started
        </motion.span>
      </motion.button>

    </div>
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
