import React from 'react'

const Detailer = () => {
    return (
        <div className='w-screen   max-w-[1280px] flex md:pt-[3rem] md:px-[3rem] md:pb-[2rem] lg:pt-[6rem] lg:pb-[4rem] lg:px-[6rem]  flex-col gap-[2rem] justify-center items-center'>
            <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
                <div className=' md:w-2/3 lg:w-[650px] flex-shrink -ml-2  pl-[2.5rem] py-[4rem] pr-[3.5rem] rounded-[10px] bg-gradient-to-b to-[#F6F9FE] from-[#CCCCFF]'>
                    <p className='font-medium font-generalSans text-[24px] leading-[3rem]  text-[#3b424a]/[.8]'>
                        Have you ever joined a bootcamp or a placement
                        guarantee certification program, only to find out
                        that the support and promises were not as
                        advertised?
                    </p>
                </div>
                <div className='flex md:w-1/3 pl-3 md:pl-0 flex-shrink text-[48px] items-center font-monaSansBold    lg:w-[256px]  mt-[-1rem] text-transparent bg-gradient-to-b from-[#9B50F2]/[.5] to-[#DC23EB]/[.5] bg-clip-text  '>
                    We want to hear your story!
                </div>
            </div>

            <div className='flex flex-shrink flex-col lg:flex-row gap-7 items-center justify-center'>
                <div className='md:w-[432px] self-stretch  rounded-[10px] border-[1px] ml-[10px] mr-[10px] border-[#D7D7D7] text-[#ffffff] py-[2rem] lg:pl-[1rem] lg:pr-[2rem]'>
                    <p className='font-medium text-[20px] leading-[2.6rem] font-generalSans tracking-[0em] ml-4   text-[#4D4D4D]/[.8]  '>

                        OffcampusHire is excited to
                        announce a contest where
                        students can share their
                        experiences with bootcamps and
                        placement guarantee programs
                        that didn't deliver on their promises
                    </p>
                </div>
                <div className='md:w-[492px] ml-3 mr-3 md:ml-0 self-stretch flex-shrink  rounded-[10px] bg-gradient-to-b from-[#6E67FD] to-[#3DCAFF]  py-[1rem] md:pl-[1.5rem] pr-[2rem]'>
                    <p className='font-medium text-[22px] mb-[5rem] pl-6 font-generalSans leading-[2] ml-[-10px] mt-4 text-[#ffffff]' >
                        By sharing your story, you can win a
                        Spotlight Membership, giving you a
                        chance to get shortlisted for an
                        exclusive off-campus placement drive.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detailer