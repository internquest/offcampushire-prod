'use client'
import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

import { createSvgIcon } from '@mui/material/utils';




const PlusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 24 24"
        strokeWidth={1.5}
    >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
    </svg>,
    'Plus',
);
const MinusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 24 24"
        strokeWidth={1.5}
    >
        <path d="M19 13H5v-2h14z"></path>
    </svg>,
    'Plus',
);

const Icon = ({ icon }) => {
    return (
        <div class="flex-center justify-center  h-[35px] w-[35px] rounded bg-[#cfd4d0] md:h-[28px] md:w-[28px]">
            {icon}
        </div>
    )
}





const FaqINdividual = ({ question, solution, identity }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Accordion expanded={expanded === identity} onChange={handleChange(identity)} className='mb-5 !rounded-[10px] !border border-[#0e0f0c2e] bg-transparent !shadow-none '>
                <AccordionSummary

                    className={`${expanded === identity && '!bg-[#0f172a] !text-white !rounded-tl-[10px] !rounded-tr-[10px] duration-150 transition-colors'} md:text-[20px] !m-0 gap-5 rounded-t-[10px] !px-5 !pb-[22px] !pt-[22px] text-[16px]/[24px] font-semibold tracking-[-0.5px] text-active md:!pb-[20px] md:!pl-[30px] md:!pr-[28px] md:!pt-[20px] font-SpaceGrotesk  `}
                    expandIcon={expanded === identity ? <Icon icon={<MinusIcon />} /> : <Icon icon={<PlusIcon />} />}
                    aria-controls={`${identity}-content`}
                    id={`${identity}-header`}
                >


                    {question}

                </AccordionSummary>
                <AccordionDetails className={` !px-5 !pb-3 !pt-2 text-sm font-normal text-primary2 md:!pb-[20px] md:!pl-[30px] md:!pr-[28px] md:!pt-5 md:text-base/[21px] ${expanded === identity && '!bg-[#0f172a] !text-[#94a3b8] transition-colors !rounded-bl-[10px] !rounded-br-[10px] duration-150'}`}>

                    {solution}

                </AccordionDetails>
            </Accordion>


        </>
    )
}

export default FaqINdividual
