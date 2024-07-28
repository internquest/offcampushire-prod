import Empower from "@/components/Students/Empower";
import Reimagining from "@/components/Students/Reimagining";
import SayGoodbye from "@/components/Students/SayGoodbye";
import SpecialFeatures from "@/components/Students/SpecialFeatures";
import Steps from "@/components/Students/Steps";
import StudentsHeader from "@/components/Students/StudentsHeader";

const StudentsPage = () => {
  return (
    <div className="relative z-[5] bg-white">
      <StudentsHeader />
      <Steps />
      <SayGoodbye />
      <SpecialFeatures />
      <Reimagining />
      <Empower />
    </div>
  );
};

export default StudentsPage;
