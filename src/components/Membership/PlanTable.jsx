'use client'
import { MonaMedium, GeneralMedium } from "@/utils/fonts";
import Check from "@/assets/Membership/tick.svg";
import Image from "next/image";
import { useState } from "react";

const PlanTable = () => {





    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    const handle2Click = () => {
        setOpen2(!open2)
    }
    const handle3Click = () => {
        setOpen3(!open3)
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto md:block hidden">
                <div className="inline-block min-w-full align-middle bg-gradient-to-b rounded-bl-[50px] rounded-br-[50px] from-[#020617] to-[#0B217D]">
                    <div className="overflow-hidden px-4 md:px-16 lg:px-28 py-8 md:py-20 lg:py-24">
                        <table className="min-w-full ">
                            <thead className={`border border-[#856B9C] rounded my-1 ${MonaMedium.className}`}>
                                <tr>
                                    <th scope="col" className="py-3.5 px-4 text-[20px] font-normal text-left text-gray-100">
                                        <div className="flex items-center gap-x-3">
                                            <span className="sr-only text-gray-100">Name</span>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-[16px] md:text-[28px] font-normal text-left text-gray-100">
                                        <span>Explore</span>
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-[16px] md:text-[28px] font-normal text-left text-gray-100">
                                        Spotlight
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-[16px] md:text-[28px] font-normal text-left text-gray-100">
                                        Propel
                                    </th>
                                </tr>
                            </thead>
                            <tbody className={`${GeneralMedium.className}`}>
                                <tr>
                                    <td className="px-4 py-4 md:pt-14 md:pb-7 w-[26%] text-[20px]  font-medium text-gray-100 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <span className="text-[16px] md:text-[20px] leading-[2.4rem]">CTC Range</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px]  text-gray-100 w-[calc((74%/3))] whitespace-nowrap">3-4 LPA</td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] text-gray-100 w-[calc((74%/3))] whitespace-nowrap">3-4 LPA</td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] whitespace-nowrap">
                                        <span className="text-gray-100">{'>3-4 LPA'}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 md:py-7 text-[20px] w-[26%] font-medium  text-gray-100 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="inline-flex items-center gap-x-3">
                                                <span className=" text-[16px] md:text-[20px] leading-[2.4rem]">Guaranteed Shortlist</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-[20px] w-[calc((74%/3))] text-gray-100 whitespace-nowrap"></td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] text-gray-100 whitespace-nowrap">One</td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] whitespace-nowrap">
                                        <span className="text-gray-100">Two</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 md:py-7 text-[20px] w-[26%] font-medium text-gray-100 ">
                                        <div className=" w-full items-center gap-x-3">
                                            <div className=" items-center gap-x-3">
                                                <span className="text-[16px] md:text-[20px] leading-[2.4rem]">No. of drives you can
                                                    apply for</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px]  text-gray-100 w-[calc((74%/3))] whitespace-nowrap">06 in an yr</td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] text-gray-100 w-[calc((74%/3))] whitespace-nowrap">No limit</td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] whitespace-nowrap">
                                        <span className="text-gray-100">No limit</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 md:py-7 text-[20px] w-[26%] font-medium text-gray-100 ">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="inline-flex items-center gap-x-3">
                                                <span className="text-[16px] md:text-[20px] leading-[2.4rem]">Priority Consideration</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] text-gray-100 whitespace-nowrap"></td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] text-gray-100 whitespace-nowrap text-center">
                                        <Image src={Check} alt="check" width={30} height={30} />
                                    </td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] whitespace-nowrap">
                                        <div className="py-4 text-[16px] md:text-[20px] text-gray-100 whitespace-nowrap text-center flex gap-x-2">
                                            <Image src={Check} alt="check" width={30} height={30} />
                                            <Image src={Check} alt="check" width={30} height={30} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 md:pt-7 text-[20px] w-[26%] font-medium text-gray-100 ">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <span className="text-[16px] md:text-[20px] leading-[2.4rem]">Placement Assistance
                                                        Workshop</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] text-gray-100 whitespace-nowrap"></td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] text-gray-100 whitespace-nowrap"></td>
                                    <td className="px-4 py-4 text-[16px] md:text-[20px] w-[calc((74%/3))] whitespace-nowrap">
                                        <Image src={Check} alt="check" width={30} height={30} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="box-border border-[0px] md:hidden px-3 border-[solid] border-[rgb(226,232,240)] flex flex-col gap-y-2.5">
                <div onClick={() => handleClick()} class="box-border  border-[rgb(226,232,240)] rounded-2xl align-middle bg-gradient-to-b  from-[#020617] to-[#0B217D] border border-solid  flex flex-col text-gray-100 border-[rgba(54,_63,_249,_0.21)]">
                    <div>
                        <div tabindex="0" class="box-border  border-[rgb(226,232,240)] flex justify-between border-solid p-4">
                            <span class="box-border  border-[rgb(226,232,240)] font-[var(--font-ppneue),sans-serif] text-[20px] font-bold leading-[1.1] tracking-[0.01em]">Explore</span>
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class={`box-border ${open && 'rotate-90'}  border-[rgb(226,232,240)] block align-middle -rotate-90 [transition-property:transform] ease-in-out duration-150`}>
                                <path d="M8 6L12 10L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="box-border  border-[rgb(226,232,240)]"></path>
                            </svg>
                        </div>
                        <div class={`box-border  border-[rgb(226,232,240)] ${!open && 'hidden'} `}>
                            <div class="box-border text-[16px] border-[rgb(226,232,240)]">
                                <div class={`box-border ${open && 'border-t'}  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b  border-solid pl-4 pr-4 pt-5 pb-5`}>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">CTC Range</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">3-4 LPA</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Guaranteed Shortlist</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0"></p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">No. of drives you can apply for</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">06 in an yr</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Priority Consideration</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0"></p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Placement Assistance Workshop</span>
                                    <span class="box-border  border-[rgb(226,232,240)] font-[var(--font-ppneue),sans-serif] font-bold leading-[1.1] tracking-[0.01em] text-[18px] bg-[linear-gradient(to_top_left,var(--tw-gradient-stops))] bg-clip-text text-transparent">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0"></p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div onClick={() => handle2Click()} class="box-border  border-[rgb(226,232,240)] rounded-2xl align-middle bg-gradient-to-b  from-[#020617] to-[#0B217D] border border-solid  flex flex-col text-gray-100 border-[rgba(54,_63,_249,_0.21)]">
                    <div>
                        <div tabindex="0" class="box-border  border-[rgb(226,232,240)] flex justify-between border-solid p-4">
                            <span class="box-border  border-[rgb(226,232,240)] font-[var(--font-ppneue),sans-serif] text-[20px] font-bold leading-[1.1] tracking-[0.01em]">Spotlight</span>
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class={`box-border ${open2 && 'rotate-90'}  border-[rgb(226,232,240)] block align-middle -rotate-90 [transition-property:transform] ease-in-out duration-150`}>
                                <path d="M8 6L12 10L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="box-border  border-[rgb(226,232,240)]"></path>
                            </svg>
                        </div>
                        <div class={`box-border  border-[rgb(226,232,240)] ${!open2 && 'hidden'} `}>
                            <div class="box-border text-[16px] border-[rgb(226,232,240)]">
                                <div class={`box-border ${open2 && 'border-t'}  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b  border-solid pl-4 pr-4 pt-5 pb-5`}>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">CTC Range</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">3-4 LPA</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Guaranteed Shortlist</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">One</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">No. of drives you can apply for</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">NO limit</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Priority Consideration</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">
                                            <Image src={Check} alt="check" width={30} height={30} />
                                        </p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Placement Assistance Workshop</span>
                                    <span class="box-border  border-[rgb(226,232,240)] font-[var(--font-ppneue),sans-serif] font-bold leading-[1.1] tracking-[0.01em] text-[18px] bg-[linear-gradient(to_top_left,var(--tw-gradient-stops))] bg-clip-text text-transparent">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0"></p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div onClick={() => handle3Click()} class="box-border  border-[rgb(226,232,240)] rounded-2xl align-middle bg-gradient-to-b  from-[#020617] to-[#0B217D] border border-solid  flex flex-col text-gray-100 border-[rgba(54,_63,_249,_0.21)]">
                    <div>
                        <div tabindex="0" class="box-border  border-[rgb(226,232,240)] flex justify-between border-solid p-4">
                            <span class="box-border  border-[rgb(226,232,240)] font-[var(--font-ppneue),sans-serif] text-[20px] font-bold leading-[1.1] tracking-[0.01em]">Propel</span>
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class={`box-border ${open3 && 'rotate-90'}  border-[rgb(226,232,240)] block align-middle -rotate-90 [transition-property:transform] ease-in-out duration-150`}>
                                <path d="M8 6L12 10L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="box-border  border-[rgb(226,232,240)]"></path>
                            </svg>
                        </div>
                        <div class={`box-border  border-[rgb(226,232,240)] ${!open3 && 'hidden'} `}>
                            <div class="box-border text-[16px] border-[rgb(226,232,240)]">
                                <div class={`box-border ${open3 && 'border-t'}  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b  border-solid pl-4 pr-4 pt-5 pb-5`}>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">CTC Range</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">&gt;3-4 LPA</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Guaranteed Shortlist</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">Two</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">No. of drives you can apply for</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">NO limit</p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Priority Consideration</span>
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">
                                        <p class="box-border flex gap-2  border-[rgb(226,232,240)] m-0">
                                            <Image src={Check} alt="check" width={30} height={30} />
                                            <Image src={Check} alt="check" width={30} height={30} />
                                        </p>
                                    </span>
                                </div>
                                <div class="box-border  border-[rgb(226,232,240)] flex justify-between gap-x-2 border-b border-solid pl-4 pr-4 pt-5 pb-5">
                                    <span class="box-border  border-[rgb(226,232,240)] text-[14px] font-[var(--font-public-sans),sans-serif] leading-none">Placement Assistance Workshop</span>
                                    <span class="box-border  border-[rgb(226,232,240)] font-[var(--font-ppneue),sans-serif] font-bold leading-[1.1] tracking-[0.01em] text-[18px] bg-[linear-gradient(to_top_left,var(--tw-gradient-stops))] bg-clip-text text-transparent">
                                        <p class="box-border  border-[rgb(226,232,240)] m-0">
                                            <Image src={Check} alt="check" width={30} height={30} />
                                        </p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PlanTable;
