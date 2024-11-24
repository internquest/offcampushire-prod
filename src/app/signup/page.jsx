"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useRef } from "react";
import purplearrow from "@/assets/Signup/purplearrow.svg";
import {
  MonaMedium,
  MonaRegular,
  GeneralMedium,
  MonaBold,
} from "@/utils/fonts";

const SignupPage = () => {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }

      if (index === otp.length - 1 && newOtp.every((digit) => digit !== "")) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setError(
            "Oops! The invite code you entered doesn't seem to be correct. Please double-check and try again",
          );
        }, 2000);
      }
    }
  };
  return (
    <div className="relative mx-auto h-full w-full z-[5] bg-white  lg:mb-[470px]">
      <Image
        src={purplearrow}
        alt="photo"
        width={1200}
        height={1000}
        className="mx-auto h-full lg:block hidden w-full object-contain xl:w-[1000px]"
      />
      <div className=" relative lg:absolute inset-0 top-8 mx-auto w-full md:pb-32 rounded-bl-[50px] rounded-br-[50px] lg:rounded-none lg:pb-40 sm:top-24 lg:top-36 bg-white">
        <div className="w-full bg-white">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-y-12 px-4 bg-white">
            <div className="flex w-full flex-col items-start justify-between bg-white gap-6 sm:px-10 lg:flex-row xl:px-20">
              <div className="flex w-full flex-col items-start justify-center gap-y-7 px-4 pt-5 lg:pt-14 sm:px-0 lg:w-1/2">
                <h3
                  style={MonaBold.style}
                  className="text-3xl leading-relaxed tracking-[-0.02em] text-[#292A2A]"
                >
                  Empowering freshers with off-campus placement opportunities
                </h3>
                <span
                  style={GeneralMedium.style}
                  className="text-lg leading-[35px] text-[#1A1A1ABF] sm:leading-[38px] xl:text-[19px]"
                >
                  OffCampusHire is currently in private beta mode, gearing up to
                  revolutionize your off-campus placements experience.{" "}
                </span>
                <p
                  style={GeneralMedium.style}
                  className="text-lg leading-[35px] text-[#1A1A1A]/75 sm:leading-[38px] xl:text-[19px]"
                >
                  To get started on OffCampusHire and unlock access to a world of
                  off-campus job opportunities, you will need an invite code from
                  the Training and Placement Officer (TPO) cell of your college or
                  university
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
                <div
                  className="flex h-64 w-[90%] items-center justify-center rounded-t-[20px] bg-[#9540F2] text-center text-3xl text-white sm:h-56 sm:w-[400px] md:text-4xl"
                  style={MonaMedium.style}
                >
                  offcampushire
                </div>
                <div className="sm:py-6` h-[334px] -translate-y-3 space-y-8 rounded-[20px] border-[5px] border-[#E5E1FC] bg-white px-4 py-5 sm:w-[500px] sm:px-6">
                  <p
                    className="pt-4 text-center text-xl leading-[2.6rem] tracking-tight text-[#292A2A] xl:text-[22px]"
                    style={GeneralMedium.style}
                  >
                    Enter your invite code to get started and unlock a world of
                    off-campus placements{" "}
                  </p>
                  <div className="flex w-full items-center justify-between gap-x-1 whitespace-nowrap">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        name={`otp-${index}`}
                        id={`otp-${index}`}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="h-[40px] w-[40px] border border-gray-300 text-center sm:text-[20px] lg:h-[75px] lg:w-[75px]"
                        maxLength={1}
                        pattern="\d{1}"
                        ref={(el) => (inputRefs.current[index] = el)}
                        required
                      />
                    ))}
                  </div>
                </div>
                {loading && (
                  <p className="max-w-[460px] pt-3 text-[1.125rem] leading-[1.8rem] text-[#4A90E2] lg:pt-6 lg:text-[19px] lg:leading-[2rem]">
                    Verifying...
                  </p>
                )}
                {!loading && error && (
                  <p className="max-w-[460px] pt-3 text-[1.125rem] leading-[1.8rem] text-[#FF5A5FCC] lg:pt-6 lg:text-[19px] lg:leading-[2rem]">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-bl-[50px] rounded-br-[50px] gap-y-8 py-10 bg-white">
          <Marquee
            autoFill
            pauseOnClick
            className="w-full overflow-hidden whitespace-nowrap bg-[#AA66F5] py-5 text-center text-[26px] text-white"
            style={MonaRegular.style}
          >
            Transforming the job search experience for freshers with a focus on
            off-campus opportunities.
          </Marquee>
          <span
            className="mx-auto w-full text-center text-xl leading-9 tracking-[-0.01em] text-[#292A2AE5] sm:w-[600px] sm:text-left"
            style={GeneralMedium.style}
          >
            If you don&apos;t have an invite code yet, don&apos;t worry - you
            can join our waitlist to be among the first to access our exclusive
            platform
          </span>
        </div>
      </div>
    </div>

  );
};

export default SignupPage;
