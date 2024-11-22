import React from 'react'

const InspirationBoard = () => {
    return (
        <div className='mt-20 w-full md:max-w-[1280px] flex !px-2 md:px-4 flex-col gap-5 '>
            <div className='flex w-full lg:flex-row flex-col gap-4 justify-center '>
                <div className='w-full lg:max-w-[707px] flex flex-col gap-4 items-center font-saanstrialMedium bg-[#E6E8FE] px-2 py-3 md:px-4 md:py-6 text-[#2c2c2c]'>
                    <h1 className=' font-black text-[4rem] leading-[4.5rem] tracking-wide font-saanstrialBold  text-[#2c2c2c]/[.6]  '>01</h1>
                    <p className=' font-medium text-[1.25rem] leading-6 tracking-wide   text-[#2c2c2c]/[.9]   '>For students aiming for Fintech companies like</p>
                    <div className='flex gap-5 self-start mt-3 ml-1 md:ml-8 text-[#2C2C2C]/[0.5]  '>
                        <p className='text-[16px] md:text-2xl font-black leading-7 tracking-wide'>PAYTM</p>
                        <p className='text-[16px] md:text-2xl font-black leading-7 tracking-wide'>PHONEPE</p>
                        <p className='text-[16px] md:text-2xl font-black leading-7 tracking-wide'>RAZORPAY</p>
                        <p className='text-[16px] md:text-2xl font-black leading-7 tracking-wide  text-[#2C2C2C]/[0.6] '>CRED</p>
                    </div>
                    <div className='px-4   pt-8 py-10 bg-[#4A5FF7] rounded-[10px] font-medium text-[1.25rem] leading-10 text-white mb-4 tracking-wide'>A web3 and web2 payment gateway offering a diverse range of
                        payment methods catering to all customer preferences & ensuring
                        a seamless payment experience</div>
                </div>
                <div className='lg:max-w-[530px]  flex flex-col items-center justify-between font-saanstrialMedium rounded-[10px] border-[5px] border-[#4A5FF7] px-7 pb-5 opacity-60 self-stretch '>
                    <div>
                        <h1 className=' font-black text-[4rem] leading-[4.5rem] font-saanstrialBold tracking-wide text-[#4A5FF7]/[0.6] text-center   pt-6 '>02</h1>
                        <p className='font-medium text-2xl leading-10 tracking-[0.02rem] mt-2 text-[##544449CC]/[0.8] '>A Walk-2-Earn mobile game to promote
                            physical activity by rewarding players
                            with game tokens for each step they take.</p>
                    </div>
                    <div className='font-saanstrialBold self-end font-bold text-[4rem] leading-10 tracking-wide text-[#5F71F8B2]/[70] mb-2 ' >#rewards</div>
                </div>
            </div>
            <div className='bg-[#3B3B3A] flex flex-col rounded-[10px] '>
                <div className='flex lg:flex-row flex-col gap-4'>
                    <div className='flex flex-col font-saanstrialMedium  text-[#DDFC9D] ml-8 gap-8'>
                        <h1 className=' font-black text-[4rem] leading-[4.5rem] tracking-wide font-saanstrialBold text-[#DDFC9D]/[0.8]    mt-9  '>03</h1>
                        <p className='max-w-[338px] font-medium text-2xl tracking-[0.02em] leading-[2.75rem]'>AI Fake News Detector to test
                            the  credibility of news articles
                            by either uploading text files
                            or article  URLs or even just
                            inputting text.</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='max-w-[794px] mt-8 ml-3 lg:ml-0 px-3  lg:px-7 py-12 mr-3 border-2 border-[#FFFFFF] rounded-[10px] border-opacity-60'>
                            <p className='font-saanstrialMedium  font-medium text-xl leading-[2.25rem] text-[#ffffff] tracking-wide'>
                                Develop an AI model capable of distinguishing between actual and false news
                                articles. To achieve this, you will create a comprehensive dataset consisting of
                                both true and fake news articles. This dataset will serve as the foundation for
                                training, validating, and testing the AI model
                            </p>
                        </div>
                        <p className='font-saanstrialBold self-end ml-3 md:ml-0 text-3xl md:text-5xl leading-[1.2] -mb-3 mr-3 text-[#ffffff]/[0.6] '>Expected Outcomes</p>
                    </div>
                </div>

                <div className=' ml-3 mr-8 lg:ml-6  lg:mr-16 mt-8 flex flex-col md:flex-row lg:pl-7 pl-3 pr-3 lg:pr-7 py-7 gap-5  rounded-[5px] bg-[#FFFFFF]'>
                    <div className='flex flex-col md:max-w-[350px] items-start gap-11 pl-3 pr-8 lg:pl-7 py-8 lg:pr-12 bg-[#ECEDEA] rounded-[10px]'>
                        <p className='font-saanstrialMedium text-2xl font-semibold leading-[1.25] tracking-wide text-[#2C2C2C]'>Comprehensive Dataset</p>
                        <p className='text-[#2C2C2CB2]/[.7] font-saanstrialMedium font-medium  -tracking-wide   text-[16px] lg:text-[22px] leading-[2] '>A well-curated and labeled
                            dataset of actual and false
                            news articles that can be
                            used for training and testing
                            AI models.</p>
                    </div>

                    <div className='flex flex-col md:max-w-[350px] items-start gap-11 pl-3 pr-8 lg:pl-7 py-8 lg:pr-12 bg-[#ECEDEA] rounded-[10px]'>
                        <p className='font-saanstrialMedium text-2xl font-semibold leading-[1.25] tracking-wide text-[#2C2C2C]'>Trained AI Model</p>
                        <p className='text-[#2C2C2CB2]/[.7] font-saanstrialMedium font-medium  -tracking-wide   text-[16px] lg:text-[22px] leading-[2] '>An AI model capable of
                            accurately identifying fake news
                            articles, with performance
                            metrics clearly documented.</p>
                    </div>


                    <div className='flex flex-col  md:max-w-[365px] items-start gap-11 pl-3 pr-8 lg:pl-7 py-8 lg:pr-12 bg-[#ECEDEA] rounded-[10px]'>
                        <p className='font-saanstrialMedium text-2xl font-semibold leading-[1.25] tracking-wide text-[#2C2C2C]'>Insightful Analysis</p>
                        <p className='text-[#2C2C2CB2]/[.7] font-saanstrialMedium font-medium -tracking-wide    text-[16px] lg:text-[22px] leading-[2] '>A detailed analysis of the model's
                            performance, including strengths,
                            weaknesses, and potential areas
                            for improvement.</p>
                    </div>

                </div>

                <div className='font-saanstrialMedium font-medium text-2xl md:text-4xl leading-10 flex self-end  mr-16 mt-4 tracking-wide text-white/[.8]'>#machine-learning</div>
                <div className='font-saanstrialMedium font-medium text-2xl md:text-4xl whitespace-nowrap leading-10 flex self-end  mr-16 mt-8 mb-14 tracking-wide text-white/[.8]'>#artificial-intelligence</div>
            </div>

            <div className='min-h-5 w-full gap-8 mb-8 flex md:flex-row flex-col'>
                <div className='bg-[#8524FF] flex flex-col gap-12 max-w-[720px] px-4 pl-5 rounded-[10px] pt-1'>
                    <h1 className=' font-black text-[3.2rem] leading-[3.5rem] tracking-wide font-saanstrialBold text-[#FCD69C]    mt-9  '>04</h1>
                    <p className='font-saanstrialMedium text-[22px] leading-[1.7] tracking-wide pb-14 text-white font-medium '>Develop an intelligent Discord bot that uses artificial intelligence
                        to detect and prevent spam, fraud, and cyberbullying in real-time.
                        This bot will serve as an automated moderator, enhancing server
                        safety and user experience.</p>
                </div>
                <div className='max-w-[498px] rounded-[10px] flex flex-col p-6 bg-[#FAD49B]'>
                    <div className='bg-white w-[70%] self-end h-9'></div>
                    <div className='bg-white flex w-full h-full'></div>
                </div>

            </div>
        </div>
    )
}

export default InspirationBoard