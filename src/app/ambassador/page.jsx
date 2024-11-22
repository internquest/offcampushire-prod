import Featurecards from "@/components/Ambassador/Featurecards";
import Header from "@/components/Ambassador/Header";
import Homebg from "@/components/Ambassador/Homebg";
import Para from "@/components/Ambassador/Para";

const AmbassadorPage = () => {
  return (
    <>
      <div className="relative z-[5] bg-white">
        <Header />
        <Para />
        <Featurecards />
        <Homebg />
      </div>
    </>
  );
};

export default AmbassadorPage;
