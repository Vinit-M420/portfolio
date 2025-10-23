"use client";
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ProjectCard } from './ProjectCard';
import { ProjectItems } from '@/items/projectItems';


export default function AllProjects(){
    const allPRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (allPRef.current) {
        gsap.fromTo(
            allPRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        );
        }
    }, []);

    return (
        <div ref={allPRef} className="flex flex-col gap-5 mx-auto max-w-4xl lg:w-4xl md:w-2xl w-xs mt-20">
            <h1 className="font-bold lg:text-4xl text-2xl pb-2 w-fit"> 
                {/*  text-black w-fit bg-green px-2  */}
                All Projects
            </h1>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center items-stretch my-10">
                {ProjectItems.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}