import { GeneralMedium } from "@/utils/fonts"

const EachPricingCard = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-end">
            <div className="bg-white h-60 w-72 rounded-t-[10px] lg:-mr-[100px] z-10 border border-[#D7D7D7] overflow-hidden">
                <div className="px-2 py-8 bg-[#ECE9FF] "></div>
                <div></div>
            </div>
            <div className={`bg-gradient-to-r from-blue-400 to-blue-500 text-white  px-4 md:px-16 lg:px-32 lg:py-20 py-4 md:py-8 rounded-[20px] ${GeneralMedium.className}`}>
                <p className=" mb-5 max-w-[389px] mx-auto text-[20px] leading-[2.5rem]">Explore membership gives you a head start with exclusive access to off-campus placement drives!</p>
                <p className="max-w-[389px] mx-auto text-[20px] leading-[2.5rem]">You have the opportunity to apply for 6 placement drives in a year featuring 2.4-4 lpa fresher opportunities for free.</p>
            </div>
        </div>
    )
}

export default EachPricingCard
