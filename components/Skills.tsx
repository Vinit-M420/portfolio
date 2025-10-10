"use client";
import { useEffect, useRef } from 'react';
import gsap from "gsap";


const Skills = () => {
    const skillsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (skillsRef.current) {
        
        gsap.fromTo(skillsRef.current, 
            {y: -50, opacity: 0, duration: 3, ease: "power3.out" }, 
            {y: 0, opacity: 1, duration: 1, 
                scrollTrigger: {
                trigger: skillsRef.current,  start: "top 80%", 
                toggleActions: "play none none none", // play only once
                },
            });
        }
    }, []);

    return (
        <div ref={skillsRef} className="flex flex-col mx-auto max-w-4xl lg:w-4xl md:w-2xl w-xs md:my-15 my-20">
            
            <h1 className="font-semibold lg:text-3xl text-2xl border-b border-neutral-500 pb-2 w-fit"> 
                Skills
            </h1>

            <section className='grid md:grid-cols-4 grid-cols-1 gap-5 justify-center items-stretch my-10
                    leading-relaxed tracking-normal font-sans'>
                
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-md text-white '>
                            TypeScript • Python • SQL • Python
                    </h1>
                </div>
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-white text-md '>
                            Node.js • Express.js  • RESTful API
                    </h1>
                </div>
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-white text-md '>
                            React • Next.js • Tailwind • Zustand 
                    </h1>
                </div>
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-white text-md  '>
                            GSAP • Figma
                    </h1>
                </div>
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-white text-md '>
                            MongoDB • PostgreSQL • Prisma • Oracle    
                    </h1>
                </div>
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-white text-md '>
                            GCP • Snowflake • Airflow    
                    </h1>
                </div>
                <div className='col-span-1 flex flex-col border-b border-neutral-500 h-full p-2
                hover:-translate-y-1 transition-all duration-400'>
                    <h1 className='text-white text-md '>
                            Git • Jira     
                    </h1>
                </div>
            </section>

       
        </div>
    )
}

export default Skills;