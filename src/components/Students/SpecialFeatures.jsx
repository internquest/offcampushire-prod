import { MonaSemibold, GeneralMedium, MonaMedium } from "@/utils/fonts";
import Image from "next/image";
import apply from "@/assets/ForStudents/apply.svg";
import shortlisted from "@/assets/ForStudents/shortlisted.svg";
import progress from "@/assets/ForStudents/progress.svg";

const SpecialFeatures = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705611704-blur.webp&w=3840&q=75')",
      }}
    >
      <div className="mx-auto max-w-[1200px] bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-7 md:py-20 lg:px-4 lg:py-28">
        <div className="mb-12 max-w-[450px] text-start">
          <h5
            className={`${MonaSemibold.className} text-[20px] lg:text-[28px]`}
          >
            Resumes are a thing of the past
          </h5>
          <p
            className={`${GeneralMedium.className} pt-4 text-[1.125rem] leading-[2.11rem] text-[#2C2C2C]/75 lg:text-[1.3rem]`}
          >
            You can forget about the hassle of creating, uploading, and sending
            resumes – with us, it&apos;s all about highlighting your skills,
            passion, and unique qualities in a simple and intuitive way.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
          <div className="flex w-full lg:w-1/3">
            <div className="flex h-[450px] flex-col items-center rounded-[20px] border border-[#D7D7D7] bg-white px-5 py-4">
              <div className="w-full">
                <Image
                  src={apply}
                  alt="Single click apply"
                  className="h-40 w-full rounded-[0.35rem] object-contain"
                />
              </div>
              <p className={`pb-6 pt-6 text-[1.50rem] ${MonaMedium.className}`}>
                Single click apply
              </p>
              <p
                className={`${GeneralMedium.className} text-left text-[1.025rem] leading-[2rem] text-[#7B899C]`}
              >
                With just one click, you can apply for off-campus drives. No
                more filling out lengthy application forms or attaching resumes.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/3">
            <div className="flex h-[450px] flex-col items-center rounded-[20px] border border-[#D7D7D7] bg-white px-5 py-4">
              <div className="w-full">
                <Image
                  src={shortlisted}
                  alt="Real-Time Updates"
                  className="h-40 w-full rounded-[0.35rem] object-contain"
                />
              </div>
              <p className={`pb-6 pt-6 text-[1.50rem] ${MonaMedium.className}`}>
                Real-Time Updates
              </p>
              <p
                className={`${GeneralMedium.className} text-left text-[1.025rem] leading-[2rem] text-[#7B899C]`}
              >
                Stay informed about the status of your applications with
                real-time updates. Receive notifications about interview
                invitations, application reviews, and more – all in one place.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/3">
            <div className="flex h-[450px] flex-col items-center rounded-[20px] border border-[#D7D7D7] bg-white px-5 py-4">
              <div className="w-full">
                <Image
                  src={progress}
                  alt="Track Your Progress"
                  className="h-40 w-full rounded-[0.35rem] object-contain"
                />
              </div>
              <p className={`pb-6 pt-6 text-[1.50rem] ${MonaMedium.className}`}>
                Track Your Progress
              </p>
              <p
                className={`${GeneralMedium.className} text-left text-[1.025rem] leading-[2rem] text-[#7B899C]`}
              >
                Stay organized with a personalized dashboard that allows you to
                manage your applications and keep track of your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
