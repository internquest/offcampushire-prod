import EachProcedureCard from "./EachProcedureCard";
import firstCard from "@/assets/College/firstprocedurecard.svg";
import secondCard from "@/assets/College/secondprocedurecard.svg";
import thirdCard from "@/assets/College/thirdprocedurecard.svg";

const procedures = [
  {
    heading:
      "Colleges are cordially invited to indicate their willingness to host an off- campus placement drive at their esteemed campus by specifying suitable dates",
    description:
      "Colleges have the opportunity to express their interest by providing us with the preferred dates that are suitable for hosting the placement drive.It is essential for colleges to provide these dates within the given timeframe to ensure proper planning and scheduling of the drives.",
    image: firstCard,
  },
  {
    heading:
      "Once we receive your submission, our team will review the provided dates and assess the feasibility of hosting the off- campus placement drive at your college.",
    description:
      "Once the college has submitted their interest, the organizing committee will review the application and assess the feasibility of accommodating the college's preferred dates. We will consider factors such as the availability of startups, availability of facilities, college's proximity to potential employers etc",
    image: secondCard,
  },
  {
    heading:
      "Once we receive your submission, our team will review the provided dates and assess the feasibility of hosting the off- campus placement drive at your college.",
    description:
      "Once the college has submitted their interest, the organizing committee will review the application and assess the feasibility of accommodating the college's preferred dates. We will consider factors such as the availability of startups, availability of facilities, college's proximity to potential employers etc",
    image: thirdCard,
  },
];

const Procedure = () => {
  return (
    <>
      {procedures.map((procedure, index) => (
        <EachProcedureCard key={index} {...procedure} />
      ))}
    </>
  );
};

export default Procedure;
