"use client";
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from './ProjectCard';
import { ProjectItems } from '@/items/projectItems';

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
    const projectRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (projectRef.current) {
        
        gsap.fromTo(projectRef.current, 
            {y: -50, opacity: 0, duration: 3, ease: "power3.out" }, 
            {y: 0, opacity: 1, duration: 1, 
                scrollTrigger: {
                trigger: projectRef.current,  start: "top 80%", 
                toggleActions: "play none none none", // play only once
                },
            });
        }
    }, []);
    
    return (
        <div ref={projectRef} className="flex flex-col gap-10 mx-auto max-w-4xl lg:w-4xl md:w-2xl w-xs
            border-b border-neutral-500 pb-20">

            <h1 className="font-semibold lg:text-3xl text-2xl border-b border-neutral-500 pb-2 w-fit"> 
                {/*  text-black w-fit bg-green px-2 */}
                {/* underline underline-offset-5 */}
                Projects
            </h1>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center mb-5">
                {ProjectItems.slice(0, 2).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            
            <Link href="/projects"
                className="text-white border border-neutral-700 text-lg flex gap-2 cursor-pointer
                            justify-center items-center transition-all duration-200  rounded-md py-1
                            hover:border-[#FF5F57] hover:bg-stone-800 mx-auto lg:px-20 px-10
                            hover:gap-4 hover:shadow-sm hover:shadow-[#FF5F57]"
                >
                    Show All Projects
                <MoveRight className='size-5'/>
            </Link>
        </div>
    )
}

export default Projects;