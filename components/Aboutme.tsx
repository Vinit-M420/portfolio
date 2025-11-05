"use client";
import { useEffect, useRef } from "react";
import { heroAniCompleteStore } from "../app/store";
import gsap from "gsap";

const Aboutme = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const { heroComplete, hasAnimationRun } = heroAniCompleteStore();

    useEffect(() => {
        if (hasAnimationRun){
            gsap.to(aboutRef.current, {y:0, opacity: 100}); 
            return
        }

        if (heroComplete && aboutRef.current) {
            gsap.fromTo(aboutRef.current, 
                {y: -50, opacity: 0}, 
                {y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.25});              
        }
        
        
    }, [heroComplete, hasAnimationRun]);

    return (
        <div ref={aboutRef} style={{ opacity: 0 }}
            className="flex flex-col gap-5 mx-auto max-w-4xl lg:w-4xl md:w-2xl w-xs justify-center md:my-15 my-20">
            <div className="relative">
                <h1 className="font-semibold lg:text-3xl text-2xl border-b border-neutral-500 pb-2 w-fit"> 
                    About me
                </h1>

            </div>
            <div className="text-md flex flex-col gap-5 leading-relaxed tracking-normal font-sans">
                <p>
                    {`I am a dedicated Full Stack Engineer with a passion for creating clean, minimal digital brands that contributes to sustainable, long-term success. I specialize in Next.js and React, utilizing TypeScript to develop visually appealing frontends and robust, secure backends.`}
                </p>
                
                <p>
                    {`In my free time, I enjoy meeting new people, lifting weights, watching movies & anime, and trying out new food.`}                
                </p>
                
                <p>
                {`If you've got an idea or want to collaborate on an exciting project, feel free to drop me a DM.`}
                </p>
            </div>
        </div>
    )
}

export default Aboutme;