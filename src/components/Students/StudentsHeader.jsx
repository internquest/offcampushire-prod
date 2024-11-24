import { MonaMedium, MonaSemibold } from "@/utils/fonts";

const StudentsHeader = () => {
  return (
    <header>
      <div className=" !h-[400px] md:!h-[700px] student-bg flex flex-col items-center justify-center px-2 text-left md:text-center">
        <h1
          className={`${MonaSemibold.className} hero-heading w-full max-w-[850px] text-[1.5rem] md:text-[2rem] font-bold tracking-tight lg:text-[2.5rem] lg:leading-[4rem] lg:tracking-normal`}
        >
          Introducing{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            off-campus
          </span>
          , your ultimate destination for off-campus placement drives
        </h1>
        <p
          className={`text-md para mt-4 w-full px-1 leading-[1.75rem] text-[#3f3f42]/80 sm:w-[40rem] lg:w-[64rem] lg:px-28 lg:text-[22px] lg:leading-[2.8rem] ${MonaMedium.className}`}
        >
          OffCampusHire is a platform aimed at helping freshers start their
          careers by connecting them with exclusive off-campus placement drives
          organized in collaboration with universities and companies
        </p>
      </div>
    </header>
  );
};

export default StudentsHeader;
