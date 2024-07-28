'use client'
import { GeneralMedium } from '@/utils/fonts'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const SmallAbout = () => {
    const divref = useRef(null)
    const [trnafromX, setTransfromX] = useState(0)
    const { scrollYProgress } = useScroll({
        target: divref,
        offset: ['start end', 'end start']
    })
    const transformXvalue = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -8])
    const opacityValue = useTransform(scrollYProgress, [0, 0.15], [0, 1])

    useMotionValueEvent(transformXvalue, "change", (latest) => {
        // console.log("x changed to", latest)
        setTransfromX(latest)
    })



    const divVariantws = {
        moving1: {
            x: `${trnafromX}vw`,

        },
        moving2: {
            x: `${-trnafromX}vw`
        }
    }
    return (
        <div className='w-screen ' >

            <motion.div ref={divref} className="flex flex-col   gap-1  items-center mt-14  lg:max-w-[1280px]  mx-auto ">
                <motion.h1 style={{ opacity: opacityValue }} transition={{ duration: 0 }} animate='moving1' variants={divVariantws} className={`text-[35px] md:text-[90px] lg:text-[120px] font-semibold leading-[1.4] tracking-wide ${GeneralMedium.className} bg-gradient-to-r from-[#6161A6] to-[#CCCCFF] [-webkit-background-clip:text] bg-clip-text text-transparent whitespace-nowrap`}>exclusive off-campus</motion.h1>
                < motion.h1 transition={{ duration: 0 }
                } animate='moving2' variants={divVariantws} className={` text-[35px] md:text-[90px] lg:text-[120px] font-semibold leading-[1.4] tracking-wide ${GeneralMedium.className} bg-gradient-to-r from-[#6161A6] to-[#252540] [-webkit-background-clip:text] bg-clip-text text-transparent `}> placement drive</motion.h1 >
            </motion.div >
        </div >
    )
}

export default SmallAbout