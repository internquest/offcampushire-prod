import Image from 'next/image'
import React from 'react'
import bg from '@/assets/ambasador/ambaspatternbg.png'
import homebg from '@/assets/ambasador/homeMaskgroup.png'

const Homebg = () => {
    return (
        <div className='relative max-w-[1280px] h-[860px]'>
            <Image src={bg} fill className='absolute z-[-2] inset-0' />
            <Image src={homebg} height={449} width={485} className='absolute hidden md:block z-[-1] top-[20%] ' />
            <Image src={homebg} height={220} width={240} className='absolute  md:hidden z-[-1] top-[20%] ' />

        </div>
    )
}

export default Homebg
