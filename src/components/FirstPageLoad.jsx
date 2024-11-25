import React, { useEffect, useState } from 'react'
import { animate, delay, easeInOut, motion } from 'framer-motion'
import { MonaBold, MonaMedium } from '@/utils/fonts'


import Image from 'next/image'
import WordsWoutanim from './WordsWoutanim'
import Link from 'next/link'
import logo from '@/assets/Group 85.svg'

const FirstPageLoad = ({ setLoading }) => {
    const [load, setLoad] = useState(0)

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
                duration: 0.3,
                ease: 'linear'
            }

        }
    }

    const firstSpan = {
        initial: {
            x: '-150%',

        },
        animate: {
            x: 55,


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
            x: 35,


            transition: {
                duration: 1.6,
                ease: 'easeIn',
                delay: 1
            }
        }
    }


    return (

        <div className='fixed top-0 left-0 w-full h-full flex flex-col justify-center z-[2000] overflow-hidden '>
            <motion.span className="fixed  bg-gray-900 left-0 top-0 w-full h-full  pointer-events-none" ></motion.span>

            <motion.div initial='initial' animate='show' exit='exit' variants={container} className="   w-full h-full  " >
                <motion.span onAnimationComplete={() => setLoading(false)} className="top-0 absolute w-full h-full" data-right-side="" initial='initial' animate='animate' variants={firstSpan}><span className="w-full h-full flex rounded-[50px] lg:rounded-[50px] bg-gray-400 scale-[.8] origin-right"></span>
                </motion.span>
                <motion.span className="top-0 absolute w-full h-full" data-left-side="" initial='initial' animate='animate' variants={secondSpan}><span className="w-full h-full flex bg-gray-300 scale-90 origin-right rounded-[50px] lg:rounded-[50px] "></span>
                </motion.span>
                <motion.div className={`  h-full  rounded-[25px]  gap-0 flex flex-col justify-start     `}>
                    <span className="bg-[hsla(0,0%,100%)]  rounded-[25px] lg:rounded-[25px] -right-5 -left-5 -top-5 -bottom-5 absolute -z-1"></span>
                    <nav className="fixed top-0  z-[999] rounded-tr-[25px] rounded-tl-[25px] w-full   ">
                        <div className="relative flex flex-row  rounded-tr-[25px] rounded-tl-[25px] items-center pt-[1px]   backdrop-blur-[12px]">
                            <div className="bg-white-700 relative z-30 mx-auto flex w-full flex-row items-center justify-between pl-1 px-6 py-4 backdrop-blur-md xl:max-w-[1170px] xl:bg-transparent xl:px-0 xl:backdrop-filter-none">
                                <div className="flex w-[162px] justify-start ">
                                    <Link href="/" className="z-30 w-28">
                                        <Image
                                            alt="logo"
                                            width="112"
                                            height="24"
                                            className="z-30 aspect-[14/3]  w-full"
                                            style={{ color: "transparent" }}
                                            src={logo}
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

                    <motion.div className={`   border-none mt-0  border-0 rounded-bl-[25px] rounded-br-[25px]   flex justify-between items-center  bg-cover  bg-no-repeat  w-full h-full relative    flex-col px-4    `}>
                        <h1 className={` mt-24  md:mx-auto font-medium  text-start   lg:text-center  text-[36px] pr-4 sm:hidden md:text-[48px]   px-0  bmt:leading-[1.75] leading-[1.6] tracking-tight  w-full  md:max-w-[550px]         ${MonaMedium.className}`}><WordsWoutanim isclip={true}>The future of off- campus</WordsWoutanim><WordsWoutanim isclip={true}>placement drives is here</WordsWoutanim></h1>
                        <h1 className={`mx-4 mt-32 md:mx-auto font-medium  text-start lg:text-center hidden sm:block  text-[36px] md:text-[48px]   px-0  bmt:leading-[1.75] leading-[1.6] tracking-tight  w-full  md:max-w-[550px]         ${MonaMedium.className}`}><WordsWoutanim isclip={true}>The future of off-campus</WordsWoutanim><WordsWoutanim isclip={true}>placement drives is here</WordsWoutanim></h1>


                        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }} className=" flex mt-auto gap-6 md:gap-40 mb-7 justify-between w-full md:px-32  items-center" >
                            <div className="flex items-baseline text-xl lg:text-3xl max-w-fit leading-none"><span>Loading:</span></div>
                            <div className={`h1 mb-0 leading-negative md:mr-8 font-secondary w-[150px] uppercase text-5xl lg:text-8xl font-semibold ${MonaBold.className} `}><span className='w-[100px]' data-progress-value="">{load}</span><span className='text-7xl lg:text-9xl'>%</span></div>
                        </motion.div>


                        {/* 
<div class="fixed left-0 top-0 w-full h-vh-static bg-gray-900 z-500" data-component="preloader" data-scroll-section="">
	<div class="w-full h-full scale-75 opacity-0" data-content="" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale(0.9602, 0.9602);">
		<span class="top-0 absolute w-full h-full" data-right-side="" style="opacity: 1; transform: translate(45px, 0px);"><span class="w-full h-full flex rounded lg:rounded-lg bg-gray-400 scale-80 origin-right"></span></span><span class="top-0 absolute w-full h-full" data-left-side="" style="opacity: 1; transform: translate(25px, 0px);"><span class="w-full h-full flex bg-gray-300 scale-90 origin-right rounded lg:rounded-lg"></span></span>
		<div class="pt-100 pb-30 lg:pt-140 lg:pb-45 px-20 laptop:px-50 h-full flex flex-col relative z-2">
			<span class="bg-gray-100 rounded lg:rounded-lg -right-5 -left-5 -top-5 -bottom-5 absolute -z-1"></span>
			<div class="absolute left-0 top-0 w-full px-20 laptop:px-50 py-15">
				<svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
					<path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
					<path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
					<path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
					<path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
				</svg>
			</div>
							<h1 class="uppercase mb-0 leading-negative">
					We create<br>
eye-opening<br>
presentations<br>
				</h1>
						<div class="mt-auto flex justify-between items-end" data-preloader-text="" style="opacity: 0.0001; visibility: inherit;">
				<div class="flex items-baseline leading-none"><span>Loading:</span></div>
				<div class="h1 mb-0 leading-negative font-secondary uppercase font-semibold"><span data-progress-value="">100</span><span>%</span></div>
			</div>
		</div>
	</div>
</div>
 */}


                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FirstPageLoad