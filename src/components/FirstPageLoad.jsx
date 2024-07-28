import React, { useEffect, useState } from 'react'
import { delay, easeInOut, motion } from 'framer-motion'
import { MonaBold, MonaMedium } from '@/utils/fonts'
import WordsInview from './WordsInview'

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
        }, 15);

        return () => clearInterval(key)
    }, [])


    useEffect(() => {
        const key2 = setTimeout(() => {
            setLoading(false)
        }, 3000);
    })

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

    const parent = {
        initial: {
            y: '50%',
            scale: '0.75'
        },
        animate: {
            y: 0,
            scale: '.75',
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
                duration: .4
            }
        },
        exit: {
            scale: '1',
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
                duration: .2,
                // delay: 1
            }
        }
    }
    return (
        <motion.div className='relative w-screen   flex justify-center z-[700]  '>
            <span className='bg-gray-800 fixed top-0 left-0  w-screen h-screen  '></span>
            <motion.div layoutId='hero' initial='initial' animate='animate' exit='exit' variants={parent} className={` bg-[url('https://ik.imagekit.io/0ytuu3ujr/2d-graphic-colorful-wallpaper-with-grainy-gradients-min.jpg')]  bg-cover   flex justify-center items-center  top-0 w-screen h-screen relative z-[1] `}>
                <div className={`flex  flex-col gap-9 `}>

                    <h1 layoutId='text' className={` bg-gradient-to-br from-[#6161A6] to-[#252540] bg-clip-text text-transparent [-webkit-background-clip:text]  font-semibold  text-start  text-[34px] md:text-[50px] 2xl:text-[4.5rem]  pt-12  px-0  bmt:leading-[1.75] leading-[1.6] tracking-normal w-full  md:max-w-[593px] 2xl:max-w-[950px]        ${MonaMedium.className}`}>The future of off-campus placement drives is here</h1>


                    <div className='flex justify-between gap-32'>
                        <p className='text-[30px] font-semibold'>Loading...</p>
                        <h1 className={`text-[60px] font-bold ${MonaBold.className}`}>{load}%</h1>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default FirstPageLoad