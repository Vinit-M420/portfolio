import { useRef, useState } from "react";
import bokuto from "../assets/bokuto.jpg";
import me from "../assets/meactually.png"
import github  from "../assets/github-mark-white.svg";
import xlogo from "../assets/xlogo.svg";
import { RefreshCw } from 'lucide-react';
import gsap from "gsap";


const Hero = () => {
    const [mypic, setMyPic] = useState(false);
    const imageRef = useRef(null);
 

    // useEffect(() => {
    //     gsap.timeline()
    //         .fromTo("#hey", 
    //             {scale: 0, opacity: 0, color: "white"}, 
    //             {scale: 1.2, opacity: 1, duration: 0.2, ease: "back.out(1.7)"}
    //         )
    //         .to("#hey", 
    //             {scale: 1, duration: 0.2, ease: "power2.out"}
    //         )
    //         .fromTo("#im", 
    //             {scale: 0, opacity: 0, color: "white"}, 
    //             {scale: 1.1, opacity: 1, duration: 0.2, ease: "back.out(1.7)", delay: 0.1}
    //         )
    //         .to("#im", 
    //             {scale: 1, duration: 0.2, ease: "power2.out"}
    //         )
    //         .from("#intro", 
    //             {scale: 0, opacity: 0, duration: 0.1, ease: "back.out(1.0)", delay: 0.1}
    //         )
    //         .to("#intro", 
    //             {scale: 1, opacity: 1}
    //         )
    // }, []);

    
    const handleImageSwap = () => {
        // Animate current image out (right)
        gsap.to(imageRef.current, {
            x: '100%',          // Move image to the right
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => {
                setMyPic(prev => !prev);
                // Animate new image in (from left)
                gsap.fromTo(imageRef.current,
                    { x: '-100%' }, // Start new image from left
                    { x: '0%', duration: 0.25, ease: 'power2.out' }
                );
            }
        });
    };


    return (
        <div className="relative flex justify-center items-center mt-15 p-6 gap-20 max-w-4xl mx-auto mb-10
            border border-neutral-700 ">
            <span className="absolute top-0 left-0 w-6 h-6 border-t-1 border-l-1 border-neutral-500"></span>
            <span className="absolute top-0 right-0 w-6 h-6 border-t-1 border-r-1 border-neutral-500"></span>
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-1 border-l-1 border-neutral-500"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-1 border-r-1 border-neutral-500"></span>
            
            <div className="relative w-64 h-auto rounded overflow-hidden">
                <img
                    ref={imageRef}
                    src={mypic ? me : bokuto}
                    alt='me'
                    className="w-64 h-auto rounded block"
                />
                <div className="absolute bottom-2 left-2" onClick={handleImageSwap}>
                    <RefreshCw className={`cursor-pointer text-black opacity-40`} />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-5xl">
                    <span id="hey" className="inline-block">Hey</span>{" "}
                    <span id="im" className="inline-block">I'm</span>{" "} 
                    <span className="text-black bg-orange rounded-xl px-2" id='intro'>Vinit.</span>              
                </h1>
                <h1 className="font-bold text-4xl text-black bg-green px-2 py-1 w-fit" id='SDE'>
                    Software Engineer
                </h1>
                <h1 className="font-bold text-4xl">
                    <span id='basedin'>Based in</span>{" "}
                    <span className="text-black px-2 bg-blue" id='mumbai'>Mumbai</span></h1>
                <div className="flex gap-5">
                    <h1 className="font-bold text-3xl bg-purple text-black w-fit px-2" id='findme'>
                        Find me at
                    </h1>
                    <div className="flex gap-4 items-center">
                        <a href="https://github.com/Vinit-M420"
                        className="w-10 h-10 flex items-center justify-center opacity-70 
                                hover:opacity-100 transition-opacity">
                            <img src={github} alt='Github' className="w-8 h-8 object-contain" />
                        </a>
                        <a href="https://x.com/vinit_here"
                            className="w-10 h-10 flex items-center justify-center opacity-70 
                            hover:opacity-100 transition-opacity">
                            <img src={xlogo} alt='X' className="w-6 h-6 object-contain" />
                        </a>
                        {/* <a href="mailto:your-email@example.com"
                            className="w-10 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            <Mail className="w-8 h-8" />
                        </a> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero