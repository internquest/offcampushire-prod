"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { MonaBold } from "@/utils/fonts";
import { useWindowSize } from "@uidotdev/usehooks";

const ConfettiComponent = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const size = useWindowSize();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center pt-12 bg-confetti-gradient px-4">
            {showConfetti && (
                <Confetti
                    width={size.width}
                    height={size.height}
                    numberOfPieces={200}
                />
            )}
            <button
                className={`bg-gradient-to-tr from-[#FFBB00]/10 to-[#fd7702]/10 px-4 py-2 rounded-full uppercase text-[15px] ${MonaBold.className}`}
            >
                <span className="bg-gradient-to-bl from-[#FD7702] to-[#FB0] text-transparent bg-clip-text">Limited Discount</span>
            </button>

            <h2
                className={`${MonaBold.className} py-6 md:py-8 md:text-center text-[40px] leading-[3.7rem] tracking-tight text-[#020617] lg:text-[64px] max-w-[700px] lg:leading-[4rem]`}
            >
                Honest pricing. <br className="hidden sm:block" />
                Grow or money back.
            </h2>

            <p className="max-w-[700px] md:text-center text-[20px] leading-[2.2rem] sm:leading-[2.5rem] sm:text-[22px]">
                No bots. No fake followers. Guaranteed growth or it's free! <br className="hidden sm:block" />
                No credit card required. Try it 100% free. Cancel anytime.
            </p>
        </div>
    );
};

export default ConfettiComponent;
