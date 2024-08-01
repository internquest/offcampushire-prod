import React, { useEffect, useMemo, useState } from 'react'
// import rectangleBox from '@/assets/About/Rectangle 40148.png'
// import Image from 'next/image'
import { GeneralMedium, MonaMedium } from '@/utils/fonts'
import { useInView, motion, useTransform, useScroll, useMotionValueEvent, useSpring } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'

const Underneath = ({ descRef, underref }) => {
    const [transfromY, setTransformY] = useState(0)
    const [movementboxvalue, setmovementboxvalue] = useState(0)
    // const { width: windowWidth } = useWindowSize()
    // console.log(windowWidth);

    // useEffect(() => {
    //     console.log(descRef.current.style);
    // }, [])

    // const underref = useInView(underref)

    const { scrollYProgress } = useScroll()

    const movement = useTransform(scrollYProgress, [0.13, 2.5], [-1290, 4620])

    const movementbox = useTransform(scrollYProgress, [0.10, 2.5], [-205, 1250])


    useMotionValueEvent(scrollYProgress, 'change', (x) => {


        // console.log(scrollYProgress.get());
        setTransformY(movement.get())

        setmovementboxvalue(movementbox.get())


        // console.log(movement.get());
        // console.log(parseFloat(movement.get().toFixed(3)));
    })
    // console.log(movementbox.get());
    // const springinner = useSpring(movementbox, { stiffness: 30000, damping: 20000 })
    // console.log(useSpring(movementbox, { stiffness: 200, damping: 20 }));
    return (
        <motion.section ref={underref} style={{ y: (scrollYProgress.get().toFixed(2) >= 0.13 ? movement : 0), transitionTimingFunction: 'linear', }} className={` z-[-1] relative duration-0`}>
            {/* <div className=' '>
                <Image src={rectangleBox} alt='' className='object-cover mx-auto' />
            </div> */}


            <motion.div style={{ y: movementbox, transitionTimingFunction: 'linear' }} className="mx-auto duration-0  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96">
                <h2 className={`${GeneralMedium.className} font-medium text-[26px] bmt:min-w-fit md:w-[675px] tracking-normal text-start md:text-center leading-[1.8] `}>We're changing the way students explore the realm of offcampus placement opportunities</h2>
                <p className={`${GeneralMedium.className} font-medium text-[22px] w-full md:w-[625px] tracking-normal  text-start md:text-center leading-[1.8]  text-[#64748B]`}>The traditional off-campus placements ecosystem in India is broken. It's time for a change,and we're leading the charge</p>
                <div className="  w-full  md:w-[575px] border-solid border-[5px] mt-14 md:mt-16 border-[#E2E8F0] rounded-[20px]  md:h-[525px] px-6 bg-white   pt-14 pb-14 ">
                    <h1 className={` mx-5 ${MonaMedium.className} font-medium text-[20px] md:text-[36px] leading-[2] tracking-wide w-[440px] text-start pb-8`}>Our goal is to<span className="bg-gradient-to-r from-[#0066FF] to-[#003D99] [-webkit-background-clip:text] bg-clip-text text-transparent px-2">upgrade,<br />reimagine, and revolutionize</span>the off-
                        campus placements
                        scenario in India</h1>
                </div>
            </motion.div>
        </motion.section >
    )
}

export default Underneath