import Hero from "@/components/Membership/Hero";
import PlanTable from "@/components/Membership/PlanTable";
import Pricing from "@/components/Membership/Pricing";
import TitleMarquee from "@/components/Membership/TitleMarquee";


const MembershipPage = () => {

    return (
        <div className="relative z-[5] bg-white">
            <Hero />
            <TitleMarquee />
            <Pricing />
            <PlanTable />
        </div>
    );
};

export default MembershipPage;
