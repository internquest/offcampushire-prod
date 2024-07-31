'use client'
import FirstPageLoad from "@/components/FirstPageLoad";
import About from "@/components/Landing/About";
import Header from "@/components/Landing/Header";
import MainDesc from "@/components/Landing/MainDesc";
import Marquee from "@/components/Landing/Marquee";
import SmallAbout from "@/components/Landing/SmallAbout";
import Underneath from "@/components/Landing/Underneath";
import { useMotionValueEvent, useScroll, motion, useTransform, AnimateSharedLayout, AnimatePresence, LayoutGroup, delay } from "framer-motion";
import Lenis from 'lenis'
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const marqref = useRef(null)
  const descRef = useRef(null)
  const underref = useRef(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const lenis = new Lenis()
    // console.log(lenis);
    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])
  // console.log(loading);

  const bg2variants = {
    initial: {
      opacity: 1,

    },
    animate: {
      opacity: 0,
    }
  }

  useEffect(() => {
    const html = document.getElementById('html')
    const nav = document.getElementById('nav')
    // console.log(nav);
    html.style.height = '100%'
    html.style.width = '100%',
      html.style.overflow = 'hidden',
      html.style.position = 'fixed',
      nav.style.opacity = 0

  }, [])


  return (
    <AnimatePresence onExitComplete={() => {
      const html = document.getElementById('html')
      const nav = document.getElementById('nav')
      // console.log(nav);
      html.style.height = ''
      html.style.width = '',
        html.style.overflow = '',
        html.style.position = '',
        nav.style.opacity = 1
      nav.style.transitionDuration = '1.9s'
      // nav.style.transitionDelay = '1s'
    }}  >


      {loading ? (
        <motion.div key='loader' className="w-screen h-screen   ">
          <FirstPageLoad setLoading={setLoading} />
        </motion.div>
      ) : (
        <div key='notloader' className="bg-white relative z-[5] overflow-hidden w-screen  flex flex-col rounded-br-[65px] rounded-bl-[65px]">

          <Header loading={loading} />
          {/* <SmallAbout /> */}
          <Marquee marqref={marqref} />
          <MainDesc marqref={marqref} descRef={descRef} />
          <Underneath descRef={descRef} underref={underref} />
          <About />
        </div>
      )}
      <span className={`${!loading ? 'opacity-0' : 'opacity-100'} fixed z-[1000] transition-opacity duration-[2.4s]  overflow-hidden ease-in  bg-gray-900 left-0 top-0 w-screen h-screen  pointer-events-none `} ></span>


    </AnimatePresence>

  );
};

export default Home;
