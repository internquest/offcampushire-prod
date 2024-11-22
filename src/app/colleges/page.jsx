import Collaborations from "@/components/Colleges/Collaborations";
import Header from "@/components/Colleges/Header";
import HowItWorks from "@/components/Colleges/HowItWorks";
import Procedure from "@/components/Colleges/Procedure";

const CollegesPage = () => {
  return (
    <div className="overflow-hidden relative z-[5] bg-white rounded-bl-[50px] rounded-br-[50px]">
      <Header />
      <Collaborations />
      <HowItWorks />
      <Procedure />
    </div>
  );
};

export default CollegesPage;
