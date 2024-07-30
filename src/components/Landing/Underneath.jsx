import React, { useEffect, useState } from 'react'
// import rectangleBox from '@/assets/About/Rectangle 40148.png'
// import Image from 'next/image'
import { GeneralMedium, MonaMedium } from '@/utils/fonts'
import { useInView, motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'

const Underneath = ({ descRef, underref }) => {
    const [transfromY, setTransformY] = useState(0)
    const [movementboxvalue, setmovementboxvalue] = useState(0)
    const { width: windowWidth } = useWindowSize()
    // console.log(windowWidth);
    let movementbox
    useEffect(() => {
        l
    }, [])

    // const underref = useInView(underref)

    const { scrollYProgress } = useScroll()

    const movement = useTransform(scrollYProgress, [0.16, 0.55], [-1220, 4140])

    // movementbox = useTransform(scrollYProgress, [0.16, 0.55], [-1025, -500])


    useMotionValueEvent(scrollYProgress, 'change', (x) => {
        // console.log(scrollYProgress.get().toFixed(2));
        setTransformY(movement.get())

        setmovementboxvalue(movementbox)


        // console.log(movement.get());
    })
    return (
        <motion.section ref={underref} style={{ y: (scrollYProgress.get().toFixed(2) > 0.16 ? transfromY : 0) }} className={` z-[-1] relative`}>
            {/* <div className=' '>
                <Image src={rectangleBox} alt='' className='object-cover mx-auto' />
            </div> */}


            <motion.div style={{ y: transfromY }} className="mx-auto  bg-cover  bg-top  flex flex-col gap-3 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96">
                <h2 className={`${GeneralMedium.className} font-medium text-[26px] bmt:min-w-fit md:w-[675px] tracking-normal text-start md:text-center leading-[1.8] `}>We're changing the way students explore the realm of offcampus placement opportunities</h2>
                <p className={`${GeneralMedium.className} font-medium text-[22px] w-full md:w-[625px] tracking-normal  text-start md:text-center leading-[1.8]  text-[#64748B]`}>The traditional off-campus placements ecosystem in India is broken. It's time for a change,and we're leading the charge</p>
                <div className="  w-full  md:w-[575px] border-solid border-[5px] mt-22 md:mt-20 border-[#E2E8F0] rounded-[20px]  md:h-[525px] px-6 bg-white   pt-14 pb-14 ">
                    <h1 className={` mx-5 ${MonaMedium.className} font-medium text-[20px] md:text-[36px] leading-[2] tracking-wide w-[440px] text-start pb-8`}>Our goal is to<span className="bg-gradient-to-r from-[#0066FF] to-[#003D99] [-webkit-background-clip:text] bg-clip-text text-transparent px-2">upgrade,<br />reimagine, and revolutionize</span>the off-
                        campus placements
                        scenario in India</h1>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Underneath