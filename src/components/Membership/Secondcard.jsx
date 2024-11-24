import React from 'react'
import { GeneralMedium } from "@/utils/fonts"

const Secondcard = () => {
    return (
        <div className="flex flex-col lg:flex-row relative w-full  justify-center ">

            <div className="bg-white w-[70%] h-[340px] lg:w-[300px] xl:h-[397px] xl:w-[352px] rounded-t-[10px] relative lg:hidden  bottom-0 left-[10%] z-10 border border-[#D7D7D7] overflow-hidden">
                <div className="w-full h-[70px] bg-[#ECE9FF] "></div>
                <div></div>
            </div>

            <div className={` mem2card w-full lg:max-w-[450px] xl:max-w-[676px] min-h-[506px] py-3 lg:-mr-28 pr-2 text-white relative  flex justify-center items-center flex-col flex-grow rounded-[20px] ${GeneralMedium.className}`}>
                <div className="bg-white w-[70%] h-[340px] lg:w-[300px] xl:h-[397px] xl:w-[352px] rounded-t-[10px] lg:block hidden absolute bottom-0 left-[-40%] z-10 border border-[#D7D7D7] overflow-hidden">
                    <div className="w-full h-[70px] bg-[#ECE9FF] "></div>
                    <div></div>
                </div>
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
