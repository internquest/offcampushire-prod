import { GeneralMedium, GeneralRegular } from '@/utils/fonts'
import React from 'react'

const Testimony = ({ indexed, item, count }) => {
    // console.log(indexed);

    return (
        <div style={{ opacity: indexed + 1 === count ? 1 : 0, pointerEvents: indexed + 1 === count ? '' : 'none', transitionDuration: indexed + 1 === count ? '0.4s' : '' }} className={`translate-x-[${indexed * 100}%] transition-opacity delay-[.15s]  absolute top-0 left-0`}>
            <blockquote style={{ transform: indexed + 1 === count ? '' : `translateY(30px)` }} className='transition-transform delay-[.15s] duration-[.4s] ' >
                <p className={`${GeneralMedium.className} font-medium leading-[2.1] text-[5vw] max-w-[562px] md:text-[1.625rem]   lg:text-[1.5rem]  tracking-normal text-white/[.7]`}>

                    Right platform for right talent and OffCampusHire
                    is fantastic! Its user-friendly interface & exclusive
                    drives make job hunting effortless for freshers.
                    Highly recommend it for every fresher & graduate
                    out there
                </p>
                {/* <footer className='mt-8  bg'>
                    <cite className='text-[1rem] font-normal text-[#032326] tracking-normal leading-[120%]'>
                        <strong className='mb-[10px] block font-medium text-[1.25rem]'>{item.authorNmae}</strong>
                        permagard
                    </cite>
                </footer> */}
            </blockquote>
        </div>
    )
}

export default Testimony