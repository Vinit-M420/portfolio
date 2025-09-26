import { useEffect, useRef } from "react";
import gsap from "gsap";

const Aboutme = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
    const aboutRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (shouldAnimate && aboutRef.current) {
            gsap.fromTo(aboutRef.current, 
                {y: -50, opacity: 0}, 
                {y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.25});              
        }
        
    }, [shouldAnimate]);

    return (
        <div ref={aboutRef} style={{ opacity: 0 }}
            className="flex flex-col gap-5 mx-auto max-w-4xl lg:w-4xl md:w-2xl w-xs justify-center md:my-15 my-20">
            <div className="relative">
                <h1 className="font-semibold lg:text-3xl text-2xl border-b border-neutral-500 pb-2 w-fit"> 
                    {/* { text-black w-fit bg-orange px-2 } */}
                    About me
                </h1>

            </div>
            <div className="text-md flex flex-col gap-5 leading-relaxed tracking-normal font-sans">
                <p>
                    I'm a SQL Developer turned Full Stack Engineer with a passion for crafting clean, aesthetic, and memorable digital experiences.
                    I specialize in the React.js, Node.js, and Express.js ecosystem, leveraging TypeScript to build scalable frontends and reliable backends. 
                </p>
                
                <p>
                    Besides work, I enjoy watching movies & anime, meeting new people, lifting weights and trying out new food.                
                </p>
                
                <p>
                    If you've got an idea or want to collaborate on an exciting project, feel free to drop me a DM.
                </p>
            </div>
        </div>
    )
}

export default Aboutme;