


import { GeneralMedium, MonaMedium, } from '@/utils/fonts'
import { useMotionValueEvent, useTransform, motion, useScroll } from 'framer-motion'
import { useState } from 'react'
// import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'
// import { useState } from 'react'



const Underneath = () => {

    const [transform, settransform] = useState(0)
    const { scrollYProgress } = useScroll()

    const movement = useTransform(scrollYProgress, [0.31, 0.6], [-1400, -1400])
    useMotionValueEvent(scrollYProgress, 'change', () => {
        settransform(movement.get())
        // console.log(scrollYProgress.get());
        // console.log(movement.get());
    })

    return (
        <>
            <div data-scroll data-scroll-section className={`bg-white rounded-[50px] bL4k:hidden duration-100 -mt-[50%] relative`}>
                {/* <motion.section style={{ y: (scrollYProgress.get().toFixed(2) > 0.31 ? transform : 0) }} className={` z-[-1] relative `}> */}
                {/* <div className=' '>
                <Image src={rectangleBox} alt='' className='object-cover mx-auto' />
            </div> */}


                <div className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96">
                    {/* <motion.div style={{ y: movementbox, transitionTimingFunction: 'linear' }} className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96"> */}
                    <h2 className={`${GeneralMedium.className} font-medium text-[24px] bmt:min-w-fit md:w-[489px] text-[#020617BF]/[.75] tracking-normal text-start md:text-center leading-[1.8] `}>We're changing the way students explore the realm of offcampus placement opportunities</h2>

                    <div className="  w-full  md:w-[575px] border-solid border-[5px] mt-4 md:mt-12 border-[#E2E8F0] rounded-[20px]  md:h-[525px] px-6 bg-white   pt-14 pb-14 ">
                        <h1 className={` mx-5 ${MonaMedium.className} font-medium text-[20px] md:text-[36px] leading-[2] text-[#462B34] tracking-wide lg:w-[440px] text-start pb-8`}>Our goal is to<span className="bg-gradient-to-r from-[#0066FF] to-[#003D99] [-webkit-background-clip:text] bg-clip-text text-transparent px-2">upgrade,<br />reimagine, and revolutionize</span>the off-
                            campus placements
                            scenario in India</h1>
                    </div>

                    <p className={`${GeneralMedium.className} font-medium text-[24px] mt-8 w-full md:w-[685px] tracking-[.01em]  text-start md:text-center leading-[2]  text-[#6161A6]`}>The traditional off-campus placements ecosystem in India is broken. It's time for a change,and we're leading the charge</p>
                </div>
                {/* </motion.section > */}
            </div>
            <div data-scroll data-scroll-section className={`bg-white rounded-[50px] hidden bL4k:block bm4k:hidden duration-100 -mt-[45%] relative`}>
                {/* <motion.section style={{ y: (scrollYProgress.get().toFixed(2) > 0.31 ? transform : 0) }} className={` z-[-1] relative `}> */}
                {/* <div className=' '>
                <Image src={rectangleBox} alt='' className='object-cover mx-auto' />
            </div> */}


                <div className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96">
                    {/* <motion.div style={{ y: movementbox, transitionTimingFunction: 'linear' }} className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96"> */}
                    <h2 className={`${GeneralMedium.className} font-medium text-[24px] bmt:min-w-fit md:w-[489px] text-[#020617BF]/[.75] tracking-normal text-start md:text-center leading-[1.8] `}>We're changing the way students explore the realm of offcampus placement opportunities</h2>

                    <div className="  w-full  md:w-[575px] border-solid border-[5px] mt-4 md:mt-12 border-[#E2E8F0] rounded-[20px]  md:h-[525px] px-6 bg-white   pt-14 pb-14 ">
                        <h1 className={` mx-5 ${MonaMedium.className} font-medium text-[20px] md:text-[36px] leading-[2] text-[#462B34] tracking-wide lg:w-[440px] text-start pb-8`}>Our goal is to<span className="bg-gradient-to-r from-[#0066FF] to-[#003D99] [-webkit-background-clip:text] bg-clip-text text-transparent px-2">upgrade,<br />reimagine, and revolutionize</span>the off-
                            campus placements
                            scenario in India</h1>
                    </div>

                    <p className={`${GeneralMedium.className} font-medium text-[24px] mt-8 w-full md:w-[685px] tracking-[.01em]  text-start md:text-center leading-[2]  text-[#6161A6]`}>The traditional off-campus placements ecosystem in India is broken. It's time for a change,and we're leading the charge</p>
                </div>
                {/* </motion.section > */}
            </div>
            <div data-scroll data-scroll-section className={`bg-white rounded-[50px] hidden bL4k:hidden bm4k:block duration-100 -mt-[30%] relative`}>
                {/* <motion.section style={{ y: (scrollYProgress.get().toFixed(2) > 0.31 ? transform : 0) }} className={` z-[-1] relative `}> */}
                {/* <div className=' '>
                <Image src={rectangleBox} alt='' className='object-cover mx-auto' />
            </div> */}


                <div className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96">
                    {/* <motion.div style={{ y: movementbox, transitionTimingFunction: 'linear' }} className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96"> */}
                    <h2 className={`${GeneralMedium.className} font-medium text-[24px] bmt:min-w-fit md:w-[489px] text-[#020617BF]/[.75] tracking-normal text-start md:text-center leading-[1.8] `}>We're changing the way students explore the realm of offcampus placement opportunities</h2>

                    <div className="  w-full  md:w-[575px] border-solid border-[5px] mt-4 md:mt-12 border-[#E2E8F0] rounded-[20px]  md:h-[525px] px-6 bg-white   pt-14 pb-14 ">
                        <h1 className={` mx-5 ${MonaMedium.className} font-medium text-[20px] md:text-[36px] leading-[2] text-[#462B34] tracking-wide lg:w-[440px] text-start pb-8`}>Our goal is to<span className="bg-gradient-to-r from-[#0066FF] to-[#003D99] [-webkit-background-clip:text] bg-clip-text text-transparent px-2">upgrade,<br />reimagine, and revolutionize</span>the off-
                            campus placements
                            scenario in India</h1>
                    </div>

                    <p className={`${GeneralMedium.className} font-medium text-[24px] mt-8 w-full md:w-[685px] tracking-[.01em]  text-start md:text-center leading-[2]  text-[#6161A6]`}>The traditional off-campus placements ecosystem in India is broken. It's time for a change,and we're leading the charge</p>
                </div>
                {/* </motion.section > */}
            </div>

        </>
    )
}

export default Underneath