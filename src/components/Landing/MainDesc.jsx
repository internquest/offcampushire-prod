'use client'
import { GeneralMedium, GeneralRegular, MonaMedium } from '@/utils/fonts'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import WordsInview from '../WordsInview'

const MainDesc = ({ marqref, descRef }) => {
  const spanref = useRef([3])

  const [transfromY, setTransformY] = useState(0)
  const marqrefinview = useInView(marqref)
  let index = 0
  let interval = 1000

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  // const animate = star => {

  //   if (star) {

  //     star.style.setProperty('--star-left', `${rand(-5, 100)}%`)
  //     star.style.setProperty('--star-top', `${rand(-20, 80)}%`)

  //     star.style.animation = 'none'
  //     star.offsetHeight
  //     star.style.animation = ''
  //   }
  // }
  // useEffect(() => {
  //   const cleanupFunctions = []
  //   for (const star of spanref.current) {

  //     const key = setTimeout(() => {
  //       animate(star)
  //       const intervalId = setInterval(() => animate(star), 1000)
  //       cleanupFunctions.push(() => clearInterval(intervalId))
  //     }, index++ * (interval / 3));
  //     cleanupFunctions.push(() => clearTimeout(key))
  //   }

  //   return () => cleanupFunctions.forEach(x => x())
  // }, [])

  // console.log(marqrefinview);



  const { scrollYProgress } = useScroll()
  const movement = useTransform(scrollYProgress, [0, 0.3], [0, 600])
  useMotionValueEvent(scrollYProgress, 'change', (x) => {
    setTransformY(movement.get())
    console.log(scrollYProgress.get());
    console.log(-3.2 * movement.get());
  })

  return (
    <motion.section ref={descRef} style={{ y: marqrefinview && -3.2 * transfromY }} className='relative bg-white '>
      <span className='h-[0.9rem] w-full absolute left-0 mb-[-1px] bottom-full bg-inherit  rounded-tr-full rounded-tl-full '></span>
      {/* <span className='h-[0.9rem] w-full absolute left-0 top-full mt-[1px] bg-inherit  rounded-br-full rounded-bl-full '></span> */}
      <div className='w-full h-full  pt-[2.5rem] md:pt-[4.7rem]  '>
        <div className='   mx-auto max-w-[1280px] '>

          <h2 className={`bmt:min-w-fit sm:w-[652px] md:mx-auto text-[20px]  md:text-[30px] font-medium leading-[1.8] mx-2  text-center tracking-normal  ${GeneralMedium.className} `}><WordsInview>OffcampusHire is the ultimate destination for
            freshers to&nbsp;</WordsInview>
            <span className=" inline-block  whitespace-nowrap relative">
              <span ref={x => spanref.current.push(x)} className="block h-[var(--size)] w-[var(--size)] absolute left-[var(--star-left)] top-[var(--star-top)] animate-scale">
                <svg className="block opacity-70 fill-violet  animate-rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              </span>
              <span ref={x => spanref.current.push(x)} className="block h-[var(--size)] w-[var(--size)] absolute left-[var(--star-left)] top-[var(--star-top)] animate-scale">
                <svg className="block opacity-70 fill-violet  animate-rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              </span>
              <span ref={x => spanref.current.push(x)} className="block h-[var(--size)] w-[var(--size)] absolute left-[var(--star-left)] top-[var(--star-top)] animate-scale">
                <svg className="block opacity-70 fill-violet  animate-rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              </span>

              <span className="bg-gradient-to-r from-[#DB91CBE5]/[.9] to-[#673FD7E5]/[.9] [-webkit-background-clip:text] bg-clip-text text-transparent [background-size:200%] animate-backgroundPan"> explore, apply & attend</span>
            </span>
            <br />
            <WordsInview>off-campus placement drives</WordsInview></h2>

          <Image src='https://ik.imagekit.io/0ytuu3ujr/Group%2023-min.svg' alt="" width={610} height={659} className="md:mx-auto  mt-[50px] md:mt-16 mx-2 bmt:w-[95%] " />

          <div className={`bg-[url('https://ik.imagekit.io/0ytuu3ujr/reimagining%20(1).webp')] bg-cover bg-center  py-[40px]     md:py-6 md:px-6   lg:px-3 lg:py-3 md:h-[400px] lg:h-[550px] flex flex-col md:flex-row justify-center md:items-center  gap-5 md:gap-12 lg:gap-12 tracking-tight`}>
            <h2 className={` ${MonaMedium.className} text-[30px] md:text-[24px]  max-w-[338px] lg:text-4xl font-semibold md:leading-[1.5] mx-3 btl:min-w-[220px] lg:min-w-[300px] lg:leading-[1.7] text-white tracking-normal text-start  `}>Reimagining off-campus placement drives ecosystem of India</h2>
            <p className={`${GeneralRegular.className} bmt:min-w-fit  md:max-w-[699px] text-[1.1rem] lg:text-2xl  leading-[1.85]   md:leading-[1.7] lg:leading-[2] tracking-normal font-normal  text-start mx-3  md:pl-8 text-white`}>Welcome to OffcampusHire, where we are dedicated to
              empowering freshers to kickstart their careers through
              exclusive off-campus placement drives. Our platform
              serves as a catalyst for bridging the gap between freshers
              and exclusive off-campus placement drives beyond
              on-campus placements .</p>
          </div>

        </div>
      </div>

    </motion.section>
  )
}

export default MainDesc