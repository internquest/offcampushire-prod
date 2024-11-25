'use client'
import React, { useRef, useState } from 'react'

const Footeranim = () => {
    const [svghover, setsvghover] = useState(false)
    const svgRef = useRef(null);
    const gradientRef = useRef(null);
    const handlehover = (hover) => {
        setsvghover(hover)
    }

    const handleMouseMove = (event) => {
        // Get the bounding box of the SVG
        const rect = svgRef.current.getBoundingClientRect();

        // Calculate mouse position relative to the SVG
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Calculate the percentage position of the mouse
        const cx = (mouseX / rect.width) * 100;
        const cy = (mouseY / rect.height) * 100;

        // Update the gradient's cx and cy
        gradientRef.current.setAttribute("cx", `${cx}%`);
        gradientRef.current.setAttribute("cy", `${cy}%`);
    };
    return (
        <svg ref={svgRef} onMouseEnter={() => handlehover(true)} onMouseLeave={() => handlehover(false)} onMouseMove={handleMouseMove} width="100%" height="100%" viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg" class="select-none  h-[10rem] md:h-[20rem]">
            <defs>
                <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
                    {
                        svghover &&
                        <>
                            <stop offset="25%" stop-color="#ef4444"></stop>
                            <stop offset="0%" stop-color="#eab308"></stop>
                            <stop offset="50%" stop-color="#3b82f6"></stop>
                            <stop offset="75%" stop-color="#06b6d4"></stop>
                            <stop offset="100%" stop-color="#8b5cf6"></stop>
                        </>
                    }

                </linearGradient>
                <radialGradient ref={gradientRef} id="revealMask" gradientUnits="userSpaceOnUse" r="20%" ><stop offset="0%" stop-color="white"></stop><stop offset="100%" stop-color="black"></stop></radialGradient>
                <mask id="textMask"><rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)"></rect></mask>
            </defs>
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0.5" class="font-bold stroke-neutral-800 fill-transparent  text-[50px] md:text-[100px] z-[50] xl:text-[100px]" style={{ opacity: svghover ? .7 : 0 }}>offcampushire.</text>
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0.5" class="font-bold fill-transparent  stroke-neutral-800 text-[50px] md:text-[100px] z-[50] xl:text-[100px]" stroke-dashoffset="0" stroke-dasharray="1000">offcampushire.</text>
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke="url(#textGradient)" stroke-width="0.5" mask="url(#textMask)" class="font-bold fill-transparent  text-[50px] md:text-[100px] z-[50] xl:text-[100px]">offcampushire.</text></svg>
    )
}

export default Footeranim
