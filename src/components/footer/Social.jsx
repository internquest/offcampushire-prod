'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import Image from 'next/image';
const Social = ({ app }) => {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const [isHovering, setIsHovering] = useState(false);


    const handleMouseMove = (event) => {
        if (isHovering) {

            const element = event.currentTarget;

            const rect = element.getBoundingClientRect();



            const relativeX = (event.clientX - rect.left - rect.width / 2) / 3;

            setOffsetX(relativeX);


            const relativeY = (event.clientY - rect.top - rect.width / 2) / 3;

            setOffsetY(relativeY);
        }
    };

    const handleMouseEnter = (e) => {

        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setOffsetX(0); // Reset offset on mouse leave
        setOffsetY(0);
    };


    const mousehover = {
        hover: {
            height: '100%'
        }
    }
    return (
        <motion.a style={{ x: offsetX, y: offsetY, willChange: isHovering ? 'transform' : '' }} whileHover='hover' onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} href="" className=' bg-[#080e03] rounded-[100%] flex justify-center items-center tablet:w-[50px] tablet:h-[50px] w-[64px] h-[64px] relative overflow-hidden [transform-style:preserve-3d]'>
            <motion.div style={{ x: offsetX, y: offsetY, willChange: isHovering ? 'transform' : '' }} className='z-[5]'>
                <Image src={app} alt="" className=' [transform-style:preserve-3d] bmt:max-w-[32px] tablet:max-w-[39%] max-w-[32px] relative inline-block align-middle border-0' />
            </motion.div>
            {/* <motion.img  /> */}
            <motion.div variants={mousehover} className='w-[64px] z-[1] bg-[#ff9243] rounded-[100%] bottom-0 left-0 right-0 top-auto absolute'></motion.div>
        </motion.a>
    )
}

export default Social