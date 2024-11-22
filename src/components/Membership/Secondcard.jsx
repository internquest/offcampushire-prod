import React from 'react'
import { GeneralMedium } from "@/utils/fonts"

const Secondcard = () => {
    return (
        <div className="flex flex-col lg:flex-row relative  lg:items-end">
            <div className="bg-white h-[397px] max-w-[352px] rounded-t-[10px] lg:-mr-[80px] z-10 border border-[#D7D7D7] overflow-hidden">
                <div className="w-full h-[70px] bg-[#ECE9FF] "></div>
                <div></div>
            </div>
            <div className={` mem2card max-w-[676px] min-h-[506px] py-3 pr-2 text-white   flex justify-center items-center flex-col flex-grow rounded-[20px] ${GeneralMedium.className}`}>
                <p className=" mb-5 max-w-[435px] mx-auto text-[20px] pl-8 leading-[2.5rem]"> Spotlight Membership ensures your profile
                    gets noticed by recruiters & guarantees
                    you’ll be shortlisted for at least 1 placement
                    drive</p>
                <p className="max-w-[450px] mx-auto text-[20px] pl-8 leading-[2.5rem]"> Your applications for off-campus placement
                    drives receive priority consideration from
                    recruiters. This means your profile will be at
                    the top of the pile, increasing your chances of
                    landing an interview.</p>
            </div>
        </div>
    )
}

export default Secondcard
