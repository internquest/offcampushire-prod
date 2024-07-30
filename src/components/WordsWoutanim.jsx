import React from 'react'

const WordsWoutanim = ({ children, isclip }) => {
    const words = children.split(' ')
    // console.log(typeof words);
    return (
        <>
            {
                words.map((word, index) => (
                    <span key={index} className='clipping inline-block bg-inherit '>
                        <span style={{
                        }} className={` ${isclip ? ' bg-gradient-to-br from-[#6161A6] to-[#252540]  [-webkit-background-clip:text] bg-clip-text text-transparent ' : ''}transition-transform inline-block`}>{word}&nbsp;</span>
                    </span>
                ))
            }
        </>
    )
}

export default WordsWoutanim