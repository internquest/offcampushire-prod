import Hero from "@/components/Membership/Hero";
import PlanTable from "@/components/Membership/PlanTable";
import Pricing from "@/components/Membership/Pricing";
import TitleMarquee from "@/components/Membership/TitleMarquee";


const MembershipPage = () => {

    return (
        <div className="relative z-[5] bg-white rounded-bl-[50px] rounded-br-[50px]">
            <Hero />
            <TitleMarquee />
            <Pricing />
            <PlanTable />
        </div>
    );
};

export default MembershipPage;
