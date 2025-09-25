import { useEffect, useRef, useState } from "react";
import bokuto from "../assets/bokuto.jpg";
import me from "../assets/meactually.png"
import github  from "../assets/github-mark-white.svg";
import xlogo from "../assets/xlogo.svg";
import { RefreshCw } from 'lucide-react';
// import gsap from "gsap";


const Hero = () => {
    const [mypic, setMyPic] = useState(false);
    const imageRef = useRef(null);
    const heroRef = useRef<HTMLDivElement | null>(null);
    const [isTransformed, setIsTransformed] = useState(false);

    useEffect(() => {
        // Load GSAP from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = () => {
          console.log('GSAP loaded successfully');
          // Trigger animation automatically when GSAP loads
          animateTransform();
        };
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);
    
      const animateTransform = () => {
        if (!window.gsap || !heroRef.current) return;
    
        const element = heroRef.current;
        
        // Set initial state
        window.gsap.set(element, {
          height: 0,
          overflow: 'hidden'
        });
    
        // Create timeline for smooth transformation
        const tl = window.gsap.timeline({
          onComplete: () => {
            setIsTransformed(true);
          }
        });
    
        // Animate height from 0 to 84px
        tl.to(element, {
          height: 84,
          duration: 1,
          ease: "power2.out"
        })
        // Add padding animation slightly after height starts
        .to(element, {
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
          duration: 0.8,
          ease: "power2.out"
        }, 0.2);
      };

    


    return (
        <div  className="flex flex-col gap-5 my-10">

        {/* <span ref={heroRef} className="flex justify-center lg:w-4xl md:w-2xl w-xs border-[0.5px] border-neutral-700 mx-auto" /> */}

         <div
          ref={heroRef}
          className="relative flex md:flex-row justify-center items-center flex-col lg:gap-20 gap-10 
          max-w-4xl mx-auto my-10 border border-neutral-700 lg:w-4xl md:w-2xl w-xs"
        >
          {isTransformed && ( 
            <div>
            <div className="relative lg:w-64 md:w-52 w-48 h-auto rounded overflow-hidden">
                <img
                    ref={imageRef}
                    src={mypic ? me : bokuto}
                    alt='me'
                    className="lg:w-64 md:w-52 h-auto rounded block"
                />
                <div className="absolute bottom-2 left-2" >
                    <RefreshCw className={`cursor-pointer text-black opacity-40`} />
                </div>
            </div>

            <div className="flex flex-col md:items-start items-center gap-5">
                <h1 className="font-bold lg:text-5xl text-4xl">
                    <span id="hey" className="inline-block">Hey</span>{" "}
                    <span id="im" className="inline-block">I'm</span>{" "} 
                    <span className="text-black bg-orange rounded-xl px-2" id='intro'>Vinit.</span>              
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl text-black bg-green px-2 py-1 w-fit" 
                    id='SDE'>
                    Software Engineer
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl">
                    <span id='basedin'>Based in</span>{" "}
                    <span className="text-black px-2 bg-blue" id='mumbai'>Mumbai</span></h1>
                <div className="flex gap-4 items-center">
                    <h1 className="font-bold lg:text-3xl md:text-2xl text-xl bg-purple text-black w-fit px-2" 
                        id='findme'>
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
          )}
        </div>

        

        </div>
    )
}

export default Hero