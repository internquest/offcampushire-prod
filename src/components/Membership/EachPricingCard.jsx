import { GeneralMedium } from "@/utils/fonts"

const EachPricingCard = () => {
    return (
        <div className="flex flex-col lg:flex-row relative w-full  justify-center ">

            <div className="bg-white w-[70%]  h-[250px] lg:w-[300px] xl:h-[256px] xl:w-[352px] relative lg:hidden bottom-[100%] lg:bottom-0 left-[10%] rounded-t-[10px] lg:-mr-[80px] z-10 border border-[#D7D7D7] overflow-hidden">
                <div className="w-full h-[70px] bg-[#ECE9FF] "></div>
                <div></div>
            </div>

            <div className={` mem1card w-full lg:max-w-[450px] xl:max-w-[676px] min-h-[411px] pr-2 -mr-28 text-white   flex justify-center items-center flex-col relative flex-grow rounded-[20px] ${GeneralMedium.className}`}>
                <div className="bg-white w-[70%]  h-[250px] lg:w-[300px] xl:h-[256px] xl:w-[352px]  lg:block hidden absolute bottom-[100%] lg:bottom-0 left-[-40%] rounded-t-[10px] lg:-mr-[80px] z-10 border border-[#D7D7D7] overflow-hidden">
                    <div className="w-full h-[70px] bg-[#ECE9FF] "></div>
                    <div></div>
                </div>
                <p className=" mb-5 max-w-[420px] mx-auto text-[20px] pl-8 leading-[2.5rem]">Explore membership gives you a head start with exclusive access to off-campus placement drives!</p>
                <p className="max-w-[420px] mx-auto text-[20px] pl-8 leading-[2.5rem]">You have the opportunity to apply for 6 placement drives in a year featuring 2.4-4 lpa fresher opportunities for free.</p>
            </div>
        </div>
    )
}

export default EachPricingCard
