import React from 'react'
// import bg from './assets/Mask_group.png'
const Intro = () => {
    return (
        <div className={`w-screen h-[50vh] lg:min-h-[892px] xl:max-h-[1100px]  flex justify-center items-center   introbg bg-no-repeat  lg:bg-[50%_80%] [background-size:100%]  lg:bg-cover`}>
            <div className='  lg:mt-[-2rem]  max-w-[1280px] flex flex-col gap-5 items-center text-center text-[#fff]'>
                <h1 className='w-[570px] h-[58px] font-bold text-[48px] leading-[57.6px]  font-monoSans    text-[#fff]'>Code Camp Confessions</h1>
                <p className='w-[682px] h-[126px] font-medium text-[24px] leading-[2] font-generalSans    '>Have you been let down by a coding bootcamp or placement
                    guarantee program? Turn your experience into opportunity
                    & land interview opportunities!</p>

                <button className='px-4 h-[45px] font-saanstrialBold rounded-xl font-bold tracking-wide leading-7 text-2xl bg-[#f5fafe] mt-4 text'>
                    <div className='bg-clip-text bg-gradient-to-br from-[#0055ff] to-[#21d6ef] text-transparent'>
                        Apply
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Intro 