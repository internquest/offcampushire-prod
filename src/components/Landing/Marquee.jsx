'use client'
import { GeneralSemibold, MonaBold, MonaCondensedEBold } from '@/utils/fonts'
import { useMotionValueEvent, useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'

const Marquee = ({ marqref }) => {
    const [transfromY, setTransformY] = useState(0)


    const { scrollYProgress } = useScroll(
        {
            target: marqref,
            offset: ['-.5 end', 'end start']
        }
    )
    const movement = useTransform(scrollYProgress, [0, 1], [0, 2000])
    useMotionValueEvent(movement, 'change', (x) => {
        console.log(scrollYProgress.get());

        setTransformY(x)
        // console.log(movement.get());
    })


    return (
        // <motion.section data-scroll data-scroll-speed='1' data-scroll-section data-scroll-offset className={`text-white translate-y-0 pb-6  relative bg-gradient-to-r from-[#6161A6] to-[#252540] rounded-[50px] `}>
        <>
            <motion.section ref={marqref} style={{ y: -transfromY * .5 }} className={`text-white hidden lg:block translate-y-0 pb-6  relative bg-gradient-to-r bm4k:-mt-10 from-[#6161A6] to-[#252540] rounded-tl-[50px] rounded-tr-[50px] `}>
                {/* <span className='h-[0.9rem] w-full absolute left-0 mb-[-1px] bottom-full bg-gradient-to-r from-[#6161A6] to-[#252540]  rounded-tr-full rounded-tl-full '></span> */}
                < div className='w-full h-full pt-[3.13rem] lg:pt-[5.31rem] pb-[4.6rem]   lg:pb-[16rem]   ' >
                    <div className='mx-auto   lg:max-w-[90rem] px-[1.3rem]'>
                        <div className='py-[15px] relative before:content-[""] before:top-0 before:absolute before:left-[-50%] before:right-[-50%] before:h-[1px] before:bg-current before:opacity-30  after:content-[""] after:bottom-0 after:absolute after:left-[-50%] after:right-[-50%] after:h-[1px] after:bg-current after:opacity-30  '>
                            <div className=' text-[280px] lg:text-[350px] uppercase whitespace-nowrap flex tracking-[-.015em] leading-[.73]  '>
                                <div className={`${MonaCondensedEBold.className} font-black tracking-[-3] animate-crawlingLine`}>exclusive off-campus placement drive &nbsp;</div>

                                <div className={`${MonaCondensedEBold.className} font-black tracking-[-3] animate-crawlingLine`}>exclusive off-campus placement drive &nbsp;</div>

                            </div>
                        </div>
                    </div>

                </div >
                {/* <span className='h-[0.9rem] w-full absolute  left-0 mt-[-1px] top-full bg-gradient-to-r from-[#6161A6] to-[#252540]  rounded-br-full rounded-bl-full '></span> */}
            </motion.section >

            <motion.section className={`text-white -mt-20  lg:hidden translate-y-0 pb-6  relative bg-gradient-to-r bm4k:-mt-10 from-[#6161A6] to-[#252540] rounded-tl-[50px] rounded-tr-[50px] `}>
                {/* <span className='h-[0.9rem] w-full absolute left-0 mb-[-1px] bottom-full bg-gradient-to-r from-[#6161A6] to-[#252540]  rounded-tr-full rounded-tl-full '></span> */}
                < div className='w-full h-full pt-[3.13rem] lg:pt-[5.31rem] pb-[4.6rem]   lg:pb-[16rem]   ' >
                    <div className='mx-auto   lg:max-w-[90rem] px-[1.3rem]'>
                        <div className='py-[15px] relative before:content-[""] before:top-0 before:absolute before:left-[-50%] before:right-[-50%] before:h-[1px] before:bg-current before:opacity-30  after:content-[""] after:bottom-0 after:absolute after:left-[-50%] after:right-[-50%] after:h-[1px] after:bg-current after:opacity-30  '>
                            <div className=' text-[280px] lg:text-[350px] uppercase whitespace-nowrap flex tracking-[-.015em] leading-[.73]  '>
                                <div className={`${MonaCondensedEBold.className} font-black tracking-[-3] animate-crawlingLine`}>exclusive off-campus placement drive &nbsp;</div>

                                <div className={`${MonaCondensedEBold.className} font-black tracking-[-3] animate-crawlingLine`}>exclusive off-campus placement drive &nbsp;</div>

                            </div>
                        </div>
                    </div>

                </div >
                {/* <span className='h-[0.9rem] w-full absolute  left-0 mt-[-1px] top-full bg-gradient-to-r from-[#6161A6] to-[#252540]  rounded-br-full rounded-bl-full '></span> */}
            </motion.section >

        </>
    )
}

export default Marquee