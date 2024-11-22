import Contest from '@/components/codecampconfessions/Contest'
import Detailer from '@/components/codecampconfessions/Detailer'
// import InspirationBoard from '@/components/codecampconfessions/InspirationBoard'
import Intro from '@/components/codecampconfessions/Intro'
import Opportunity from '@/components/codecampconfessions/Opportunity'
import React from 'react'

const page = () => {
    return (
        <>
            <div className=" flex relative z-[5] bg-white flex-col items-center ">
                <Intro />
                <Detailer />
                <Opportunity />
                <Contest />
            </div>
            {/* <div className="min-h-[50vh] w-full"></div> */}

        </>
    )
}

export default page
