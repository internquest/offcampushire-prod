import { GeneralMedium } from "@/utils/fonts"

const EachPricingCard = () => {
    return (
        <div className="flex flex-col lg:flex-row relative  lg:items-end">
            <div className="bg-white h-[256px] max-w-[352px] rounded-t-[10px] lg:-mr-[80px] z-10 border border-[#D7D7D7] overflow-hidden">
                <div className="w-full h-[70px] bg-[#ECE9FF] "></div>
                <div></div>
            </div>
            <div className={` mem1card max-w-[676px] min-h-[411px] pr-2 text-white   flex justify-center items-center flex-col flex-grow rounded-[20px] ${GeneralMedium.className}`}>
                <p className=" mb-5 max-w-[420px] mx-auto text-[20px] pl-8 leading-[2.5rem]">Explore membership gives you a head start with exclusive access to off-campus placement drives!</p>
                <p className="max-w-[420px] mx-auto text-[20px] pl-8 leading-[2.5rem]">You have the opportunity to apply for 6 placement drives in a year featuring 2.4-4 lpa fresher opportunities for free.</p>
            </div>
        </div>
    )
}

export default EachPricingCard
