import React, { useLayoutEffect, useState } from 'react'
import Testimony from './Testimony'
import { motion } from 'framer-motion'
import { MonaCondensedEBold } from '@/utils/fonts'

const Testimonials = () => {
    const [buttonLeft, setLeftButton] = useState(false)
    const [buttonRight, setRightButton] = useState(false)
    const [translateBox, setTranslateBox] = useState(0)
    const [count, setCount] = useState(1)

    const data = [{
        testimonyText: 'Absolutely fantastic company to work with, full of positivity, energy, great ideas and above all they have year on year helped grow my online business beyond any levels that any of us could have ever imagined. Loom are like an extended part of the Permagard Team, friends, colleagues and teammates.',
        authorNmae: 'Steve Wookey',
        location: 'permagaurd',
    },
    {
        testimonyText: 'Absolutely fantastic company to work with, full of positivity, energy, great ideas and above all they have year on year helped grow my online business beyond any levels that any of us could have ever imagined. Loom are like an extended part of the Permagard Team, friends, colleagues and teammates.',
        authorNmae: 'shiva Wookey',
        location: 'permagaurd',
    },
    {
        testimonyText: 'Absolutely fantastic company to work with, full of positivity, energy, great ideas and above all they have year on year helped grow my online business beyond any levels that any of us could have ever imagined. Loom are like an extended part of the Permagard Team, friends, colleagues and teammates.',
        authorNmae: 'vikram Wookey',
        location: 'permagaurd',
    },
    {
        testimonyText: 'Absolutely fantastic company to work with, full of positivity, energy, great ideas and above all they have year on year helped grow my online business beyond any levels that any of us could have ever imagined. Loom are like an extended part of the Permagard Team, friends, colleagues and teammates.',
        authorNmae: 'shankar Wookey',
        location: 'permagaurd',
    }



    ]


    const handleRightClick = () => {
        if (count === 4) {
            setCount(1)
            setTranslateBox(0)
        } else {

            setCount(prev => ++prev)
            setTranslateBox(prev => prev - 100)
        }

    }
    const handleLeftClick = () => {
        if (count === 1) {
            setCount(4)
            setTranslateBox(-300)
        } else {

            setCount(prev => --prev)
            setTranslateBox(prev => prev + 100)
        }
    }

    // console.log(count);

    // useLayoutEffect(() => {
    //     const transitionEnd = () => {

    //         setTranslateBox(0)
    //     }
    //     document.addEventListener('transitionend', transitionEnd)
    //     return () => document.removeEventListener('transitionend', transitionEnd)
    // }, [count])

    return (
        <section className=" pt-0 bg-gradient-to-b from-[#020617] to-[#0B217D] mt-14 pb-[120px] rounded-br-[65px] lg:mt-14 lg:pt-14 rounded-bl-[65px]">
            <div className="mb-24 ml-[102px] max-w-[1438px] w-[92%] mx-auto">
                <div className="md:w-[65.6787658876%]  pt-14">
                    <h4 className={` text-[7vw] sm:text-[2.125rem] lg:text-[2.625rem]  bL4k:text-[3rem]  font-bold text-white uppercase leading-[1.2] ${MonaCondensedEBold.className} `}>WHAT students have to say </h4>
                </div>
            </div>
            <div className='max-w-[1438px] w-[92%] ml-[102px] mx-auto'>
                <div className='md:w-[65.6787658876%] relative tablet:pb-[160px] bmMt:pb-[120px]'>
                    <div className='min-h-[396.688px]  md:h-[297.578px] lg:h-[397.578px] overflow-visible relative transition-all duration-[0.25s]'>
                        <motion.div style={{ x: `${translateBox}%` }} className={`w-full h-full !translate-x-0  `}>
                            {data.map((item, index) => <Testimony key={index} indexed={index} count={count} item={item} />)}

                        </motion.div>
                    </div>

                    <div className=' bmt:w-[150px] bmt:h-[90px] tablet:w-[200px] tablet:bottom-0 md:h-[130px] left-[50%] translate-x-[-50%]   md:w-[34.1834874345%] md:left-[118.47873428734%] lg:translate-x-0 lg:top-0 lg:w-[21.0134532632635%]  absolute flex justify-between items-center gap-[10px]'>
                        <button onClick={() => handleLeftClick()} onMouseEnter={() => setLeftButton(true)} onMouseLeave={() => setLeftButton(false)} className={` cursor-pointer bmMt:w-[40px] bmMt:h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center p-0 bg-[#030326] rounded-[1000px] `}>
                            <svg data-name="Layer 2" className={` ${buttonLeft && 'animate-buttonLeft'} w-[16px] h-auto block  z-[1] overflow-visible`} fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><g data-name="Layer 1"><path d="m0,6h16s0-2,0-2H4.47C5.42,2.94,6,1.54,6,0h-2c0,2.21-1.79,4-4,4v2Z" fill="#ffffff" strokeWidth="0"></path><path d="m4,10h2c0-1.31-.41-2.56-1.2-3.6l-1.6,1.2c.52.7.8,1.52.8,2.4Z" fill="#ffffff" strokeWidth="0"></path></g></svg>
                        </button>
                        <button onClick={() => handleRightClick()} onMouseEnter={() => setRightButton(true)} onMouseLeave={() => setRightButton(false)} className='cursor-pointer bmMt:w-[40px] bmMt:h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center p-0 bg-[#030326] rounded-[1000px] '>
                            <svg data-name="Layer 2" className={`${buttonRight && 'animate-buttonRight'} w-[16px] h-auto block  z-[1] overflow-visible`} fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><g data-name="Layer 1"><path d="m16,6H0v-2h11.53c-.95-1.06-1.53-2.46-1.53-4h2c0,2.21,1.79,4,4,4v2Z" fill="#fffff" strokeWidth="0"></path><path d="m12,10h-2c0-1.31.41-2.56,1.2-3.6l1.6,1.2c-.52.7-.8,1.52-.8,2.4Z" fill="#ffffff" strokeWidth="0"></path></g></svg>
                        </button>
                    </div>
                    <div className=' bmt:w-[150px] bmt:h-[90px] tablet:w-[200px] tablet:left-[50%] text-white tablet:bottom-0 tablet:translate-x-[-50%] md:h-[130px] md:w-[34.1834874345%] md:left-[118.47873428734%] lg:top-0  lg:w-[21.0134532632635%]  lg:h-[130px] absolute flex flex-col justify-center pointer-events-none items-center gap-[10px] [counter-reset:num] [&>*]:[counter-increment:num]  [&>*]:before:[content:counter(num)]   [&>*]:before:text-[0.875rem]  [&>*]:before:block '>
                        <button className={` ${count === 3 ? 'w-0 h-0 pointer-events-none absolute opacity-0' : `${count === 2 ? '-order-1' : count === 4 ? "order-1" : count === 1 ? 'animate-bounced before:!text-[2.25rem]' : ''} flex justify-center items-center m-auto pointer-events-auto pointer !text-[0]`} `}>view slide</button>
                        <button className={`${count === 4 ? 'w-0 h-0 pointer-events-none absolute opacity-0' : ` ${count === 1 ? 'order-1' : count === 3 ? '-order-1' : count === 2 ? 'animate-bounced  before:!text-[2.25rem]' : ''} flex justify-center items-center m-auto pointer-events-auto pointer !text-[0] `} `}>view slide</button>
                        <button className={`${count === 1 ? 'w-0 h-0 pointer-events-none absolute opacity-0' : `${count === 2 ? "order-1" : count === 4 ? '-order-1' : count === 3 ? 'animate-bounced  before:!text-[2.25rem]' : ''} flex justify-center items-center m-auto pointer-events-auto pointer  !text-[0]`}`}>view slide</button>
                        <button className={`${count === 2 ? 'w-0 h-0 pointer-events-none absolute opacity-0' : `${count === 1 ? '-order-1' : count === 3 ? 'order-1' : count === 4 ? 'animate-bounced  before:!text-[2.25rem]' : ''} flex justify-center items-center m-auto pointer-events-auto pointer !text-[0]`} `}>view slide</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials