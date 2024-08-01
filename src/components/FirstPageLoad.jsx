import React, { useEffect, useState } from 'react'
import { animate, delay, easeInOut, motion } from 'framer-motion'
import { MonaBold, MonaMedium } from '@/utils/fonts'
import WordsInview from './WordsInview'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import WordsWoutanim from './WordsWoutanim'
import Link from 'next/link'

const FirstPageLoad = ({ setLoading }) => {
    const [load, setLoad] = useState(0)
    const { width: windowWidth } = useWindowSize()
    useEffect(() => {

        const key = setInterval(() => {

            setLoad(prev => {
                if (prev + 1 === 100) {
                    clearInterval(key)
                    return 100

                }
                return prev + 1
            })
        }, 28);

        return () => clearInterval(key)
    }, [])


    // useEffect(() => {
    //     const key2 = setTimeout(() => {
    //         setLoading(false)
    //     }, 3000);
    // })

    // const text = {
    //     initial: {

    //         y: 0
    //     },
    //     animate: {

    //         y: 10,
    //         transition: {
    //             ease: 'easeInOut',
    //             duration: 1.9
    //         }
    //     },
    // }
    const container = {
        initial: {
            scale: 0.75,
            y: '150%'
        },

        show: {
            scale: 0.75,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
                // staggerChildren: 0.4
            }
        },
        exit: {
            y: 0,
            scale: 1,
            height: '100vh',
            transition: {
                duration: 0.5,
                ease: 'linear'
            }

        }
    }

    const firstSpan = {
        initial: {
            x: '-150%',

        },
        animate: {
            x: 45,


            transition: {
                duration: 2,
                ease: 'easeIn',
                delay: 1
            }
        }

    }
    const secondSpan = {
        initial: {
            x: '150%',


        },
        animate: {
            x: 25,


            transition: {
                duration: 1.6,
                ease: 'easeIn',
                delay: 1
            }
        }
    }


    return (

        <div className='w-screen h-screen flex flex-col justify-center  absolute top-0 z-[2000] overflow-hidden '>
            <motion.span className="fixed  bg-gray-900 left-0 top-0 w-full h-full  pointer-events-none" ></motion.span>

            <motion.div initial='initial' animate='show' exit='exit' variants={container} className=" relative  w-full h-full  " >
                <motion.span onAnimationComplete={() => setLoading(false)} className="top-0 absolute w-full h-full" data-right-side="" initial='initial' animate='animate' variants={firstSpan}><span className="w-full h-full flex rounded lg:rounded-[50px] bg-gray-400 scale-[.8] origin-right"></span>
                </motion.span>
                <motion.span className="top-0 absolute w-full h-full" data-left-side="" initial='initial' animate='animate' variants={secondSpan}><span className="w-full h-full flex bg-gray-300 scale-90 origin-right rounded-[50px] lg:rounded-[50px "></span>
                </motion.span>
                <motion.div className={` w-full h-full  rounded-[25px] bg-[hsla(0,0%,100%)] gap-0 flex flex-col justify-start   border-none  `}>

                    <nav className="sticky top-0 z-[999] rounded-tr-[25px] rounded-tl-[25px] w-full   border border-gray-100 bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter">
                        <div className="relative flex flex-row  rounded-tr-[25px] rounded-tl-[25px] items-center border-b border-gray-100 bg-[hsla(0,0%,100%)] backdrop-blur-[12px]">
                            <div className="bg-white-700 relative z-30 mx-auto flex w-full flex-row items-center justify-between px-6 py-4 backdrop-blur-md xl:max-w-[1170px] xl:bg-transparent xl:px-0 xl:backdrop-filter-none">
                                <div className="flex w-[162px] justify-start ">
                                    <Link href="/" className="z-30 w-28">
                                        <Image
                                            alt="logo"
                                            width="280"
                                            height="60"
                                            className="z-30 h-fit w-full"
                                            style={{ color: "transparent" }}
                                            src="https://www.datocms-assets.com/105223/1701819587-logo.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden flex-row items-center opacity-0 gap-4 leading-none xl:flex">
                                    <Link href="/about">
                                        <div className="group flex items-center gap-1 font-semibold">
                                            <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                                                About us
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/students">
                                        <div className="group flex items-center gap-1 font-semibold">
                                            <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                                                For Students
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/colleges">
                                        <div className="group flex items-center gap-1 font-semibold">
                                            <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                                                College
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/ambassador">
                                        <div className="group flex items-center gap-1 font-semibold">
                                            <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                                                Ambassador
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/membership">
                                        <div className="group flex items-center gap-1 font-semibold">
                                            <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                                                Membership
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="z-30 opacity-0 hidden items-center gap-2 xl:flex">
                                    <button className="focus:shadow-purple group pointer-events-auto relative h-fit w-full rounded-lg transition-all">
                                        <span className="flex flex-row items-center justify-center gap-2 rounded-lg bg-transparent px-4 py-3 text-[14px] font-bold leading-none text-[#020617] transition-all hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:bg-clip-text active:text-blue-400 active:text-transparent active:shadow-md">
                                            Sign in
                                        </span>
                                    </button>
                                    <Link href="/signup">
                                        <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
                                            <span className="from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg">
                                                Get Started
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <motion.div className={`  bg-[hsla(0,0%,100%)] border-none mt-0  border-0 rounded-bl-[25px] rounded-br-[25px]   flex justify-between items-center  bg-cover  bg-no-repeat  w-full h-full relative    flex-col px-3 py-12  md:py-14  lg:py-20   `}>
                        <h1 className={` mx-auto font-medium   text-start lg:text-center  text-[36px] md:text-[50px] 2xl:text-[4.5rem]  px-0  bmt:leading-[1.75] leading-[1.6] tracking-[0.01em] md:tracking-normal w-full  md:max-w-[593px] 2xl:max-w-[950px]        ${MonaMedium.className}`}><WordsWoutanim isclip={true}>The future of off-campus</WordsWoutanim><WordsWoutanim isclip={true}>placement drives is here</WordsWoutanim></h1>


                        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className=" flex mt-auto gap-40 justify-between w-full px-32  items-center" >
                            <div className="flex items-baseline text-3xl md:text-5xl max-w-fit leading-none"><span>Loading:</span></div>
                            <div className={`h1 mb-0 leading-negative mr-8 font-secondary w-[150px] uppercase text-5xl md:text-8xl font-semibold ${MonaBold.className} `}><span data-progress-value="">{load}</span><span>%</span></div>
                        </motion.div>







                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FirstPageLoad