import { GeneralMedium } from "@/utils/fonts"
import EachPricingCard from "./EachPricingCard"
import Secondcard from "./Secondcard"

const Pricing = () => {
    return (
        <div className="px-4 py-8 md:py-16 flex flex-col items-center justify-center">
            <h2 className={`${GeneralMedium.className} text-[22px] leading-[2.4rem] md:text-[26px] md:leading-[2.8rem] max-w-[614px] mx-auto md:text-center bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent`}>
                Take your off-campus placement journey to the
                next level with our exclusive limited memberships!
            </h2>
            <div className="flex flex-col gap-y-8 md:gap-y-16 py-8 md:py-16">
                <EachPricingCard />
                {/* <EachPricingCard /> */}
                <Secondcard />
            </div>

            <span className={`${GeneralMedium.className} bg-[#0F172A] text-[#92A1B6] px-4 py-6 md:px-6 md:py-8 rounded-[10px] text-[20px] md:text-[24px]`}>Just a heads-up : The pricing mentioned above is for our monthly memberships</span>
        </div >
    )
}

export default Pricing
