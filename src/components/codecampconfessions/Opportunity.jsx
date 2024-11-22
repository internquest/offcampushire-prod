import React from 'react'

const Opportunity = () => {
    return (
        <div className={`w-screen    flex  flex-col gap-[2rem] justify-center pt-[10rem] pb-[8rem] mt-[2rem] items-center  opportunitybg  bg-cover bg-no-repeat  bg-bottom font-generalSans `}>
            <div className='md:max-w-[655px] px-3  font-medium text-[23px] mb-[1rem] leading-[3rem] text-[#ffffff] '> We're calling all students who've faced broken promises,
                lack of support, or misleading claims from bootcamps &
                certification programs. It's time to speak up and potentially
                get shortlisted for an offcampus placement drive!</div>
            <div className='bg-[#ffffff]  md:max-w-[684px] rounded-[10px]  p-[1rem] px-[2rem] pb-[1.5rem]'>
                <div className='text-[20px] font-medium leading-[2.5rem] text-[#141417]/[.8]'>
                    Help other students make informed decisions by sharing your
                    honest experiences. Your story can shine a light on the realities of
                    bootcamps and placement guarantee programs.
                </div>
            </div>

            <div className='bg-[#ffffff] md:max-w-[684px]  rounded-[10px]  p-[1rem] px-[2rem]  pb-[1.5rem]'>
                <div className='text-[20px] font-medium leading-[2.5rem] text-[#141417]/[.8]'>
                    As a thank you for sharing your story, you will be rewarded with a
                    Spotlight Membership. This membership ensures your profile
                    gets noticed by recruiters & guarantees you’ll be shortlisted for
                    atleast one placement drive.
                </div>
            </div>

            <div className='bg-[#ffffff] md:max-w-[684px]  rounded-[10px]  p-[1rem] px-[2rem]  pb-[1.5rem]'>
                <div className='text-[20px] font-medium leading-[2.5rem] text-[#141417]/[.8]'>
                    Your feedback can drive change and encourage better practices in
                    the education and training industry
                </div>
            </div>
        </div>
    )
}

export default Opportunity