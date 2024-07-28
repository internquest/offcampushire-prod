
import React from 'react'


const loading = () => {

    return (




        <div className='w-screen h-screen bg-white flex items-center justify-center relative z-[5]'>
            {/* <div className={` `}>

                <motion.h1 initial='initial' animate='animate' variants={text} className={`  font-semibold  text-start  text-[34px] md:text-[50px] 2xl:text-[4.5rem]  pt-12  px-0  bmt:leading-[1.75] leading-[1.6] tracking-normal w-full  md:max-w-[593px] 2xl:max-w-[950px]        ${MonaMedium.className}`}>The future of off-campusplacement drives is here</motion.h1>
            </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[60px] h-[6opx]' viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#FF156D"></stop><stop offset=".3" stopColor="#FF156D" stopOpacity=".9"></stop><stop offset=".6" stopColor="#FF156D" stopOpacity=".6"></stop><stop offset=".8" stopColor="#FF156D" stopOpacity=".3"></stop><stop offset="1" stopColor="#FF156D" stopOpacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" strokeWidth="18" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#FF156D" strokeWidth="18" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
        </div>
    )
}

export default loading