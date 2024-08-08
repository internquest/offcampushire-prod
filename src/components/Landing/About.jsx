'use client'
import { MonaMedium, GeneralMedium, GeneralRegular, MonaBold, GeneralSemibold, MonaSemibold, MonaRegular, MonaExtraBold } from "@/utils/fonts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Testimonials from "./Testimonials";
import inform from '@/assets/Landing/Group 43 1.svg'

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const [transfromY, setTransformY] = useState(0)
  const [movementboxvalue, setmovementboxvalue] = useState(0)
  const spanref = useRef([3])
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
  const { scrollYProgress } = useScroll()

  const movement = useTransform(scrollYProgress, [0.3485, 0.88], [-719, -2020])
  useMotionValueEvent(scrollYProgress, 'change', (x) => {
    // setTransformY(movement.get())
    console.log(scrollYProgress.get());
    // console.log(-3.2 * movement.get());
  })
  // if(scrollYProgress>)


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
  return (
    <motion.div data-scroll data-scroll-section className="w-screen mt-8 mb-6 bg-white overflow-hidden  rounded-[50px] ">
      {/* <motion.div className="w-screen mt-16 bg-white overflow-hidden  "> */}








      {/* <div className="mx-auto  bg-cover  bg-top  flex flex-col gap-5 items-center justify-start w-full xl:w-[1280px]  md:h-[572px] mt-14 pt-10 px-3 mb-28 md:mb-96">
        <h2 className={`${GeneralMedium.className} font-medium text-[26px] bmt:min-w-fit md:w-[675px] tracking-normal text-start md:text-center leading-[1.8] `}>We're changing the way students explore the realm of offcampus placement opportunities</h2>
        <p className={`${GeneralMedium.className} font-medium text-[22px] w-full md:w-[625px] tracking-normal  text-start md:text-center leading-[1.8]  text-[#64748B]`}>The traditional off-campus placements ecosystem in India is broken. It's time for a change,and we're leading the charge</p>
        <div className=" mx-auto w-full  md:w-[575px] border-solid border-[5px] mt-28 md:mt-36 border-[#E2E8F0] rounded-[20px]  md:h-[525px] flex justify-center items-center bg-white  pl-5  pt-10 pb-14 bmt:mx-2">
          <h1 className={` mx-5 ${MonaMedium.className} font-medium text-[20px] md:text-[36px] leading-[1.6] tracking-wide w-[440px] text-start pb-8`}>Our goal is to<span className="bg-gradient-to-r from-[#0066FF] to-[#003D99] [-webkit-background-clip:text] bg-clip-text text-transparent px-2">upgrade,<br />reimagine, and revolutionize</span>the off-
            campus placements
            scenario in India</h1>
        </div>
      </div> */}


      <div className="bg-[url('https://ik.imagekit.io/0ytuu3ujr/img-7-2560x1200.webp')] bg-center bg-cover min-h-screen pt-16 text-center flex flex-col px-3 gap-14">
        <div className="flex flex-col items-center gap-7">

          <h1 className={` ${MonaExtraBold.className} font-extrabold leading-[1.3] text-[42px] max-w-[503px]  text-start tracking-[-0.02em] mt-14 text-[#030326CC]/[.8] `}>Freshers and New Grads!</h1>
          <h2 className={`${MonaSemibold.className} font-semibold text-[25px] sm:text-[32px]  tracking-[-0.02em] bmt:self-start  text-[#030326CC]/[.8]`}>It's time to make your mark</h2>
          <p className={`${GeneralMedium.className} font-medium text-xl md:text-[22px] leading-[2] max-w-[698px] text-[#1A1A1AD9]/[.85] text-start md:text-center mt-2`}>We are thrilled to introduce India's first comprehensive platform to
            explore, apply for and attend exclusive off-campus placement drives
            happening nationwide exclusively in collaboration with emerging
            startups & university partners!</p>

          <div className="w-full flex justify-center   ">
            <div className="mx-auto ">

              <motion.button whileHover='hover' initial='initial' animate='animate' variants={buttonVariants} className={`-ml-1 mx-auto  px-2 w-[110px]   ${GeneralMedium.className} rounded-[5px]  text-2xl bg-gradient-to-b from-[#6161A6] to-[#252540] mt-4 text`}>
                <motion.span variants={textVariant} className={`${MonaSemibold.className} w-[88px] mx-auto bg-clip-text h-[36px] [-webkit-background-clip:text] inline-block whitespace-nowrap border-none  tracking-normal leading-7 outline-none bg-gradient-to-br  py-1 from-[#FFFFFF] to-[#F2F4FE] text-[1rem]  font-medium text-transparent`}>
                  Get Started
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="max-w-[1210px] mx-auto   ">
          <Image src='https://ik.imagekit.io/0ytuu3ujr/Group%2077.png' width={1000} height={569} alt="" />
          {/* <div className={` ${GeneralMedium.className} font-medium w-[302px] rounded-tl-3xl h-[677px]  pt-8 bg-gradient-to-b from-[#020617] to-[#0B217D] pl-8 pr-14  text-white text-start flex flex-col gap-7 `}>
            <h1 className={` -ml-3 bg-gradient-to-r from-[#FFFFFF] to-[#EBEBFF] bg-clip-text text-transparent    ${GeneralSemibold.className} font-medium`}>offcampushire</h1>
            <h2>Home</h2>
            <div className="px-3 py-3 -ml-3 bg-white rounded-[5px] ">
              <h2 className="text-black">Drives</h2>
            </div>
            <h2>Applications</h2>
            <h2>Assessments</h2>
            <h2>Messages</h2>
            <h2>Integrations</h2>
            <h2>Memberships</h2>
            <h2>Profile</h2>
            <h2>Settings</h2>
          </div>
          <div className="w-[907px] mb- self-stretch border-solid border-[1px] border-[#D7D7D7] rounded-tr-3xl bg-white overflow-hidden">
            <div className="h-[1px] bg-[#D7D7D7] mt-16"></div>
            <div className="flex flex-col items-center justify-between mb-0">
              <div className="flex flex-col w-[655px] border-solid border-[1px] border-[#D7D7D7] rounded-[10px] gap-9 py-6 px-5 mt-16">
                <h1 className={`${MonaSemibold.className} font-semibold text-start text-2xl ml-1`}>offcampusHire Drive 09</h1>
                <p className={`w-[487px] ${GeneralMedium.className} text-xl font-medium text-start leading-[1.7] text-[#4D4D4DCC]/[.8] `}>Vasireddy Venkatadri Institute of Technology,Guntur 7th Oct, 24 | 03 openings</p>
                <div className={`flex justify-between mt-4 ${GeneralMedium.className} font-medium mb-3`}>
                  <p>14 days left to apply...</p>
                  <button className="px-3 py-2 bg-gradient-to-br from-[#1095F7] to-[#36BEFF] rounded-[10px]">
                    <p className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-clip-text text-transparent">
                      View Details
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-[655px] border-solid border-[1px] border-[#D7D7D7] rounded-[10px] gap-9 py-6 px-5 mt-16 border-b-0">
                <h1 className={`${MonaSemibold.className} font-semibold text-start text-2xl ml-1`}>offcampusHire Drive 10</h1>
                <p className={`w-[487px] ${GeneralMedium.className} text-xl font-medium text-start leading-[1.7] text-[#4D4D4DCC]/[.8] `}>RVR and JC college of Engineering,Guntur 9th Oct, 24 | 05 openings</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>



      <p className={`flex justify-center ${MonaMedium.className} mx-auto bg-gradient-to-r from-[#374151] to-[#6161A6] bg-clip-text text-transparent [-webkit-background-clip:text] px-4 mt-20 mb-12  font-medium w-full md:w-[481px] text-[20px] md:text-[28px] text-center  leading-[2] tracking-normal `}>Decode your off-campus placement journey with OffCampusHire</p>


      <div className="max-w-[900px] h-[705px] text-[1rem] md:text-[18px] overflow-auto  scrollbar-thin  mx-2 flex lg:mx-auto bmt:rounded-3xl rounded-[30px] bg-[#282C34] px-9 py-16">
        <pre>
          <code className="">
            <span className=" inline-block mb-1">
              <span className="text-fnName">class</span> <span className="text-[#4DC49D]">OffCampusPlacementPlatform:</span>
            </span>
            <br />
            {'  '}<span className="text-fnName">def</span> <span className="text-fnVar">__init__</span><span className="text-white">(</span><span className="text-fnpara">self</span><span className="text-white">):</span>
            <br />
            {''} <span className=" inline-block mt-1">
              {''}   <span className="text-fnName">self</span><span className="text-propname">.name = </span><span className="text-propvalue">"India's First Off-Campus Placement Platform"</span>
              {''} </span>
            <br />
            {''} <span className=" inline-block mt-1">
              {''}   <span className="text-fnName">self</span><span className="text-propname">.coverage = </span><span className="text-propvalue">"Nationwide"</span>
              {''} </span>
            <br />
            {''} <span className=" inline-block mt-1">
              {''}   <span className="text-fnName">self</span><span className="text-propname">.partners = </span><span className="text-propvalue">["Various Colleges", "Startups"]</span>
              {''} </span>
            <br />
            {''} <span className=" inline-block mt-1">
              {''}   <span className="text-fnName">self</span><span className="text-propname">.application_process = </span><span className="text-propvalue">"Single Click"</span>
              {''} </span>
            <br />
            {''} <span className=" inline-block mt-1">
              {''}   <span className="text-fnName">self</span><span className="text-propname">.hiring_rounds = </span><span className="text-propvalue">["Assignment Based", "Project Based"]
              </span>
            </span>
            <br />
            {''} <span className=" inline-block mt-1">
              {''}   <span className="text-fnName">self</span><span className="text-propname">.cgpa_requirement = </span><span className="text-fnName">None</span>

              {''} </span>
            <br />
            <br />
            {' '} <span className="text-fnName">def</span> <span className="text-fnVar">explore_drives</span><span className="text-white">(</span><span className="text-fnpara">self</span><span className="text-white">):</span>
            <br />
            {'     '}<span className=" inline-block mt-1"><span className="text-return">return</span> <span className="text-propvalue">"Access to off-campus placement drives across India"</span></span>
            <br />
            <br />
            {' '} <span className="text-fnName">def</span> <span className="text-fnVar">apply</span><span className="text-white">(</span><span className="text-fnpara">self,</span><span className="text-fnpara"> student</span><span className="text-white">):</span>
            <br />
            {'    '} <span className=" inline-block mt-1"><span className="text-return">if</span> <span className="text-propname">student.is_interested</span><span className="text-white">():</span></span>
            <br />
            {'     '} <span className=" inline-block mt-1">
              <span className="text-propname">student.submit_application</span><span className="text-white">()</span>
            </span>
            <br />
            {'      '} <span className=" inline-block mt-1"><span className="text-return">return</span><span className="text-propvalue"> "Application submitted with a single click"</span></span>
            <br />
            <br />
            {' '} <span className="text-fnName">def</span> <span className="text-fnVar">attend_interview</span><span className="text-white">(</span><span className="text-fnpara">self,</span><span className="text-fnpara"> student</span><span className="text-white">):</span>
            <br />
            {'    '} <span className=" inline-block mt-1"><span className="text-return">if</span> <span className="text-propname">student.is_shortlisted:</span><span className="text-white">()</span>
            </span>
            <br />
            {'      '}  <span className=" inline-block mt-1">
              <span className="text-return">return</span><span className="text-propvalue">"Attend Interview"</span>
            </span>
            <br />
            {'    '} <span className=" inline-block mt-1">
              <span className="text-return">else</span> <span className="text-white">:</span>
            </span>
            <br />
            {'      '}  <span className=" inline-block mt-1">
              <span className="text-return">return</span><span className="text-propvalue">"Wait for next opportunity"</span>
            </span>
            <br />
            <br />
            {' '} <span className="text-fnName">def</span> <span className="text-fnVar">hiring_process</span><span className="text-white">(</span><span className="text-fnpara">self</span><span className="text-white">):</span>
            <br />
            {' '} <span className=" inline-block mt-1">
              <span className="text-return">return </span><span className="text-white">[</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "resume_submission"</span><span className="text-white">:</span> <span className="text-fnName">False</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue">'multiple_forms</span><span className="text-white">:</span> <span className="text-fnName">False</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "cgpa_filter"</span><span className="text-white">:</span> <span className="text-fnName">False</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "assessment_types"</span><span className="text-white">:</span> <span className="text-fnName">self</span><span className="text-white">.</span><span className="text-propname">hiring_rounds</span>
            </span>
            <br />

            {' '} <span className=" inline-block mt-1">
              <span className="text-white">]</span>
            </span>
            <br />
            <br />
            {' '} <span className="text-fnName">def</span> <span className="text-fnVar">benefits</span><span className="text-white">(</span><span className="text-fnpara">self</span><span className="text-white">):</span>
            <br />
            {' '} <span className=" inline-block mt-1">
              <span className="text-return">return </span><span className="text-white">[</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "No need to fill multiple application forms"</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "No resume submission required"</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "Apply with a single click"</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "Attend only if shortlisted"</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "No CGPA requirements"</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-propvalue"> "Assignment/Project based hiring"</span><span className="text-white">,</span>
            </span>
            <br />
            {'  '} <span className=" inline-block mt-1">
              <span className="text-white">]</span>
            </span>
            <br />
            <br />
            <span className='text-propname'>platform</span><span className="text-white"> = </span><span className="text-propname">offcampusPlacementPlatfrom</span><span className="text-white">()</span>
            <br />
            <span className=" inline-block mt-1">
              <span className="text-fnpara">print</span><span className="text-white">(</span><span className="text-fnName">f</span><span className="text-propname">'Welcome to</span><span className="text-fnpara">&#123;</span><span className="text-propname">platfrom.name</span><span className="text-fnpara">&#125;</span><span className="text-propname">"</span><span className="text-white">)</span>
            </span>
            <br />
            <span className=" inline-block mt-1">
              <span className="text-fnpara">print</span><span className="text-white">(</span><span className="text-fnName">f</span><span className="text-propname">'Explore drives</span><span className="text-fnpara">&#123;</span><span className="text-propname">platfrom.explore_drives</span><span className="text-white">()</span><span className="text-fnpara">&#125;</span><span className="text-propname">"</span><span className="text-white">)</span>
            </span>
            <br />
            <span className=" inline-block mt-1">
              <span className="text-fnpara">print</span><span className="text-white">(</span><span className="text-propname">"Benefits:"</span><span className="text-white">)</span>
            </span>
            <br />
            <span className=" inline-block mt-1">
              <span className="text-return">for </span><span className="text-propname">benefit </span><span className="text-return">in </span><span></span><span className="text-propname">platform.benefits</span><span className="text-white">():</span>
            </span>
            <br />
            <span className=" inline-block mt-1">
              {'  '} <span className="text-fnpara">print</span><span className="text-white">(</span><span className="text-propname">"- </span><span className="text-fnpara">&#123;</span><span className="text-propname">benefit</span><span className="text-white">&#125;</span><span className="text-propname">"</span><span className="text-white">)</span>
            </span>

          </code>
        </pre>
      </div>

      <div className=" flex relative flex-col items-center h-[450px] md:h-[656px] bg-cover bg-center rounded-[40px] overflow-hidden mt-20">
        <Image src='https://ik.imagekit.io/0ytuu3ujr/Rectangle%2040138.png' alt="" fill={true} priority={true} className="absolute top-0 bottom-0 left-0 right-0" />
        <div className={`max-w-[1280px] relative z-[1] flex flex-col items-center gap-16 rounded-[20px] px-4 flex-shrink-5 py-16 md:py-32 mx-auto`}>
          <p className={`max-w-[646px] ${GeneralMedium.className} font-medium mb-4 text-start md:text-center text-[18px] md:text-[22px] leading-[2] tracking-[-.01em] flex  text-white flex-shrink`}>Our commitment to transforming the off-campus placement ecosystem is
            reflected in our impressive statistics and strong network of collaborations
            and partnerships. Here’s a glimpse of the impact we’ve made so far</p>



        </div>
      </div>


      <div className="flex md:flex-row flex-col items-start gap-6 lg:gap-6 justify-center md:gap-3 px-3 mt-6 pt-6  overflow-hidden ">
        <div className="flex flex-col flex-shrink-[5] gap-6 bmt:self-stretch">
          <div className="flex flex-col items-start gap-5  px-3 lg:px-6 py-6  max-w-[350px] h-[192px] rounded-[20px] bg-gradient-to-b from-[#F6F9FE] to-[#CCCCFF]  ">
            <h1 className={`${MonaBold.className} font-black text-[28px] md:text-[32px] lg:text-[48px] leading-[1.4] text-[#3B424A] tracking-normal  mt-2 `}>150+</h1>
            <p className={`${GeneralMedium.className} font-medium  text-[18px] lg:text-xl leading-[1.5] tracking-normal text-[#3B424A]`}>startup partners</p>
          </div>
          <div className="flex flex-col items-start gap-5  px-3 lg:px-6 py-6  max-w-[350px] h-[236px] rounded-[20px] text-white bg-gradient-to-b from-[#14253F] to-[#3461A5E5] ">
            <h1 className={`${MonaBold.className} font-black text-[28px] md:text-[32px] lg:text-[48px] leading-[1.4] tracking-normal  mt-2 `}>30+</h1>
            <p className={`${GeneralMedium.className} font-medium  text-[18px] lg:text-xl leading-[1.5] tracking-normal `}>ongoing university partnership
              talks</p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-[5] gap-6 bmt:self-stretch">
          <div className="flex flex-col items-start gap-5  px-3 lg:px-6 py-6  max-w-[350px] h-[192px] rounded-[20px] text-white bg-gradient-to-b from-[#AE85F7] to-[#2D3195CC] ">
            <h1 className={`${MonaBold.className} font-black text-[28px] md:text-[32px] lg:text-[48px] leading-[1.4] tracking-normal  mt-2 `}>10+</h1>
            <p className={`${GeneralMedium.className} font-medium  text-[18px] lg:text-xl leading-[1.5] tracking-normal `}>college partners</p>
          </div>
          <div className="flex flex-col items-start gap-5  px-3 lg:px-6 py-6  max-w-[350px] h-[236px] rounded-[20px] text-white bg-gradient-to-b from-[#FDA57C] to-[#FB85B8] ">
            <h1 className={`${MonaBold.className} font-black text-[28px] md:text-[32px] lg:text-[48px] leading-[1.4] tracking-normal  mt-2 `}>50+</h1>
            <p className={`${GeneralMedium.className} font-medium  text-[18px] lg:text-xl leading-[1.5] tracking-normal `}>ongoing startup partnership
              talks</p>
          </div>
        </div>

        <div className="flex flex-col items-start flex-shrink-[5] gap-5   px-3 lg:px-6 py-6   max-w-[360px] h-[276px] text-white rounded-[20px] bg-gradient-to-b from-[#6E67FD] to-[#3DCAFF] ">
          <h1 className={`${MonaBold.className} font-black text-[28px] md:text-[32px] lg:text-[48px] leading-[1.4] tracking-normal  mt-2 `}>30</h1>
          <p className={`${GeneralMedium.className} font-medium  text-[18px] lg:text-xl leading-[1.5] mr-6 tracking-normal `}>upcoming placement drives
            finalized to be organized in
            2024</p>
        </div>
      </div>



      <div className={`max-w-[880px] ${GeneralMedium.className} font-medium mx-auto  mt-14  text-[12px] w-full md:max-w-[880px] min-h-[220px] md:min-h-[324px] md:text-[1.3rem] !leading-[2] tracking-wide px-3 md:px-20  flex items-center justify-center  text-white rounded-[250px] bg-[#F4F4FE]  text-start md:text-center  `}>
        <p className="bg-gradient-to-r from-[#7F73FF] to-[#42B1FF] max-w-[643px]  bg-clip-text text-transparent mx-8 " >Our network continues to grow as we forge new partnerships
          and expand our reach. By collaborating with more colleges and
          companies, we aim to provide even greater opportunities for
          freshers and enhance their career prospects
        </p>
      </div>


      <Testimonials />

      <div className="bg-gradient-to-b from-[#0066FF] to-[#605995] mx-auto max-w-[996px] min-h-[220px] px-1 mb-6 md:min-h-[381px] rounded-[20px] flex items-center flex-col mt-16 justify-center">
        <div className="w-full md:max-w-[525px]">

          <p className={` text-[1.5rem] md:text-[2.2rem] text-center font-medium leading-[2] tracking-normal text-white ${GeneralMedium.className}`} >Are you ready to start your
            <br />
            off-campus placement journey?</p>
          <div className="w-full flex justify-center   ">
            <div className="mx-auto ">

              <motion.button whileHover='hover' initial='initial' animate='animate' variants={buttonVariants} className={` mx-auto  px-2   ${GeneralMedium.className} rounded-[5px] width-[110px]   bg-[#EFF4F9] mt-4 text`}>
                <motion.span variants={textVariant} className={`${MonaSemibold.className}  bg-clip-text h-[36px] w-[88px]  inline-block whitespace-nowrap border-none  tracking-normal leading-7 outline-none  text-[#24201F]  py-1  text-[1rem]  font-medium `}>
                  Get Started
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>

      </div>
      {/* <h1
        className={`mx-auto max-w-[707px] text-left text-[1.7rem] leading-[3rem] tracking-[-0.015em] lg:text-center lg:text-[2.25rem] ${MonaMedium.className} text-[#020617]`}
      >
        Reimagining{" "}
        <span className="bg-text-gradient bg-clip-text text-transparent">
          off-campus placement drives{" "}
        </span>
        ecosystem of India
      </h1>
      <p
        className={`mx-auto max-w-[730px] text-left text-[18.5px] leading-[2.4rem] tracking-[0.01em] text-[#544D49] md:text-center lg:text-[20px] lg:leading-[2.75rem] ${GeneralMedium.className}`}
      >
        Welcome to OffcampusHire, where we are dedicated to empowering freshers
        to kickstart their careers through exclusive off-campus placement
        drives. Our platform serves as a catalyst for bridging the gap between
        freshers and exclusive off-campus placement drives beyond on-campus
        placements.
      </p> */}
    </motion.div>
  );
};

export default About;
