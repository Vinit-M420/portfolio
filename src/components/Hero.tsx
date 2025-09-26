import { useEffect, useRef, useState } from "react";
import bokuto from "../assets/bokuto.jpg";
import me from "../assets/meactually.png"
import github  from "../assets/github-mark-white.svg";
import xlogo from "../assets/xlogo.svg";
import { RefreshCw } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroAniCompleteStore } from "../store";

// interface HeroProps {
//   setHeroComplete: (value: boolean) => void;
// }

const Hero = () => {
    const { setHeroComplete, hasAnimationRun, setHasAnimationRun } = heroAniCompleteStore();
    const [mypic, setMyPic] = useState(false);
    const [hidePicBtn, setHidePicBtn] = useState<boolean>(true);
    const imageRef = useRef(null);  
    const heroRef = useRef<HTMLDivElement | null>(null);
    

    useEffect(() => {
        const img = new Image();
        img.src = me;
    }, []);

    useGSAP(() => {
        if (hasAnimationRun) {
            // Set immediate state without animation
            if (heroRef.current) {
                gsap.set(heroRef.current, { y: 0, opacity: 1 });
                gsap.set("#mypic", { opacity: 1, filter: "blur(0px)" });
                gsap.set("#intro", { y: 0, opacity: 1 });
                gsap.set("#desc", { opacity: 1, x: 0, filter: "blur(0px)" });
            }
            setHeroComplete(true);
            setHidePicBtn(false);
            return;
        }

        let tl = gsap.timeline(); 
        tl.fromTo(heroRef.current, 
            {y: -50, opacity: 0}, 
            {y: 0, opacity: 1, duration: 0.8, ease: "power2.out"});

        tl.from("#mypic", { opacity: 0, filter: "blur(10px)", duration: 0.4,
                            ease: "power2.out" }, "-=0.1"); // Start 0.3s before heroRef ends

        tl.from("#intro", { duration: 0.8, y: 50, opacity: 0, 
                            stagger: 0.05, ease: "back.out(1.7)" }, "-=0.1")
            .call(() => setHeroComplete(true));

        tl.from("#desc", { opacity: 0, x: -5, filter: "blur(10px)", duration: 0.6,
                        stagger: 0.1, ease: "power2.out" }, "-=0.3")
            .call(() => {
                setHidePicBtn(false);
                setHasAnimationRun(true);
                // Fade in the button
                gsap.fromTo("#picBtn", 
                    { opacity: 0 }, 
                    { opacity: 1, duration: 0.5, ease: "power2.out" });
            });
            
    }, [hasAnimationRun]);
    
    const handleImageSwap = () => {
        if (!imageRef.current) return;

        gsap.to(imageRef.current, {
            x: '100%',          
            duration: 0.25,
            ease: 'power1.in',
            onComplete: () => {
                setMyPic(prev => !prev);
                // Animate new image in (from left)
                gsap.fromTo(imageRef.current,
                    { x: '-100%' }, 
                    { x: '0%', duration: 0.25, ease: 'power1.out' }
                );
            }
        });
    };


    return (
        <div ref={heroRef} 
        className="relative flex md:flex-row justify-center items-center flex-col p-6 lg:gap-20 gap-10 
        max-w-4xl mx-auto my-10 border border-neutral-700 lg:w-4xl md:w-2xl w-xs">

            <span className="absolute top-0 left-0 w-6 h-6 border-t-1 border-l-1 border-neutral-500"></span>
            <span className="absolute top-0 right-0 w-6 h-6 border-t-1 border-r-1 border-neutral-500"></span>
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-1 border-l-1 border-neutral-500"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-1 border-r-1 border-neutral-500"></span>
            
            <div className="relative lg:w-64 md:w-52 w-48 h-auto rounded overflow-hidden">
                <img id="mypic"
                    ref={imageRef}
                    src={mypic ? me : bokuto}
                    alt='me'
                    className="lg:w-64 md:w-52 h-auto rounded block "
                />
                <div id="picBtn" 
                className={`absolute bottom-2 left-2 ${hidePicBtn ? `opacity-0` : `opacity-100`}`} 
                onClick={handleImageSwap}>
                    <RefreshCw className={`cursor-pointer text-black opacity-40 aria`} />
                </div>
            </div>

            <div className="flex flex-col md:items-start items-center gap-5">
                <h1 className="font-bold lg:text-5xl text-4xl" id="intro">
                    <span id="hey" className="inline-block">Hey</span>{" "}
                    <span id="im" className="inline-block">I'm</span>{" "} 
                    <span className="text-black bg-orange rounded-xl px-2">Vinit.</span>              
                </h1>
                
                <h1 className="font-medium lg:text-3xl text-2xl text-neutral-300" id="desc">
                    {/* text-black bg-green px-2 py-1 w-fit */}
                    Software Engineer
                </h1>
                <h1 className="font-medium lg:text-3xl text-2xl text-neutral-300" id="desc">
                    <span id='basedin'>Based in</span>{" "}
                    <span className="" id='mumbai'>Mumbai</span>
                    </h1>
                <div className="flex gap-4 items-center text-neutral-300" id="desc">
                    <h1 className="font-medium lg:text-3xl md:text-2xl text-xl" id='findme'>
                        {/* bg-purple text-black w-fit px-2 */}
                        Find me at
                    </h1>
                    <div className="flex lg:gap-4 gap-2 items-center">
                        <a href="https://github.com/Vinit-M420"
                        className="w-10 h-10 flex items-center justify-center opacity-70
                                    hover:opacity-100 transition-opacity">
                            <img src={github} alt='Github' 
                                className="lg:size-8 size-7 object-contain" />
                        </a>
                        <a href="https://x.com/vinit_here"
                            className="w-10 h-10 flex items-center justify-center opacity-70 
                                hover:opacity-100 transition-opacity">
                            <img src={xlogo} alt='X' 
                                className="lg:size-6 size-5 object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero