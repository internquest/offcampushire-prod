'use client'
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const WordsInview = ({ children, isclip }) => {
    const wordRef = useRef(null)
    const inview = useInView(wordRef, { once: true })
    // console.log(children);
    const words = children.split(' ')
    // console.log(typeof words);
    return (
        <>
            {
                words.map((word, index) => (
                    <span key={index} className='clipping inline-block bg-inherit '>
                        <motion.span style={{
                            transform: inview ? 'translate3d(0,0,0)' : `translate3d(0,105%,0)`, transitionTimingFunction: inview ? 'cubic-bezier(0.165, 0.84, 0.44, 1)' : 'ease', transitionDuration: inview ? '1s' : '.3s', transitionDelay: inview ? '0s' : '',
                        }} ref={wordRef} className={` ${isclip ? ' bg-gradient-to-br from-[#6161A6] to-[#252540]  [-webkit-background-clip:text] bg-clip-text text-transparent ' : ''}transition-transform inline-block`}>{word}&nbsp;</motion.span>
                    </span>
                ))
            }
        </>
    )
}

export default WordsInview