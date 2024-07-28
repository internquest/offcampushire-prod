'use client'
import FirstPageLoad from "@/components/FirstPageLoad";
import About from "@/components/Landing/About";
import Header from "@/components/Landing/Header";
import MainDesc from "@/components/Landing/MainDesc";
import Marquee from "@/components/Landing/Marquee";
import SmallAbout from "@/components/Landing/SmallAbout";
import Underneath from "@/components/Landing/Underneath";
import { useMotionValueEvent, useScroll, motion, useTransform, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Lenis from 'lenis'
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const marqref = useRef(null)
  const descRef = useRef(null)
  const underref = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])
  console.log(loading);


  return (
    <AnimatePresence>

      {loading ? (
        <motion.div key='loader' className="w-screen h-screen  relative z-[900]">
          <FirstPageLoad setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="bg-white z-[5] relative overflow-hidden rounded-br-[65px] rounded-bl-[65px]">

          <Header loading={loading} />
          {/* <SmallAbout /> */}
          <Marquee marqref={marqref} />
          <MainDesc marqref={marqref} descRef={descRef} />
          <Underneath descRef={descRef} underref={underref} />
          <About />

        </div>
      )}
    </AnimatePresence>
  );
};

export default Home;
