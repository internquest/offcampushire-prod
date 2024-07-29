'use client'
import FirstPageLoad from "@/components/FirstPageLoad";
import About from "@/components/Landing/About";
import Header from "@/components/Landing/Header";
import MainDesc from "@/components/Landing/MainDesc";
import Marquee from "@/components/Landing/Marquee";
import SmallAbout from "@/components/Landing/SmallAbout";
import Underneath from "@/components/Landing/Underneath";
import { useMotionValueEvent, useScroll, motion, useTransform, AnimateSharedLayout, AnimatePresence, LayoutGroup } from "framer-motion";
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
    <>

      {loading ? (
        <motion.div key='loader' className="w-screen h-screen  relative ">
          <FirstPageLoad setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="bg-white z-[5] w-screen absolute overflow-hidden top-0 rounded-br-[65px] rounded-bl-[65px]">

          <Header loading={loading} />
          {/* <SmallAbout /> */}
          <Marquee marqref={marqref} />
          <MainDesc marqref={marqref} descRef={descRef} />
          <Underneath descRef={descRef} underref={underref} />
          <About />

        </div>
      )}
      {!loading && (
        <motion.span layoutId="bg" class={`${!loading && ' delay-[1s] opacity-0 transition-opacity  duration-[0.5s] ease-[cubic-bezier(.3,.86,.36,.95)]'} fixed bg-gray-900 left-0 top-0 w-full h-full z-[4] pointer-events-none  `} ></motion.span>)}
    </>
  );
};

export default Home;
