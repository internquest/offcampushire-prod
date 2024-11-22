import { MonaMedium, GeneralMedium } from "@/utils/fonts";
import Check from "@/assets/Membership/tick.svg";
import Image from "next/image";

const PlanTable = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
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
        </div>
    );
};

export default PlanTable;
