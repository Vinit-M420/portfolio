import tripBucket from '../assets/tripbucket.png'
import { ExternalLink, MoveRight  } from 'lucide-react';
import github  from "../assets/github-mark-white.svg";
import reddit from "../assets/redditarch.png";
import { useNavbarStore } from '../store';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const {  setNavbarState } = useNavbarStore();
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

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center  mb-5">
                {/* Card 1 - TripBucket */}
                <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl h-full">
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                        <img src={tripBucket} 
                            className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex flex-col flex-grow p-5 gap-3">
                        <h1 className='text-white text-lg font-bold leading-relaxed'>
                            TripBucket
                        </h1>

                        <h2 className='text-white text-sm font-light font-sans flex-grow'>
                            Build your travel bucket list along with its itinerary. Proud of your itinerary, you can share it.
                        </h2>

                        <div className='grid grid-cols-2 gap-2'>
                            <a rel="external" target='_blank' href="https://tripbucket.vercel.app/" 
                                className="col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                                justify-center items-center transition-all duration-200 cursor-pointer rounded-md 
                                py-1 hover:border-zinc-600 hover:bg-stone-800">
                                <ExternalLink className='size-4'/>
                                <span>View</span>   
                            </a>
                            <a rel="external" target='_blank' href="https://github.com/Vinit-M420/TripBucket" 
                                className="col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                                justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                                hover:border-zinc-600 hover:bg-stone-800">
                                <img src={github} alt='Github' className="w-4 h-4 object-contain" />
                                <span>Github</span>
                            </a>   
                        </div>
                    </div>
                </div>

                {/* Card 2 - Reddit Data Pipeline */}
                <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl h-full">
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                        <img src={reddit} 
                            className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex flex-col flex-grow p-5 gap-3">
                        <h1 className='text-white text-lg font-bold leading-relaxed'>
                            Reddit Data Pipeline
                        </h1>

                        <h2 className='text-white text-sm font-light font-sans flex-grow'>
                            A complete Data pipeline of Reddit using PRAW, Airflow and GCP                    
                        </h2>

                        <div className='grid grid-cols-1 gap-2'>
                            <a rel="external" target='_blank' href="https://github.com/Vinit-M420/reddit-data-pipeline-gcp" 
                                className="col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                                justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                                hover:border-zinc-600 hover:bg-stone-800">
                                <img src={github} alt='Github' className="w-4 h-4 object-contain" />
                                <span>Github</span>
                            </a>   
                        </div>
                    </div>
                </div>

            </div>
            
            <a  className="text-white border border-neutral-700 text-lg flex gap-2 cursor-pointer
                            justify-center items-center transition-all duration-200  rounded-md py-1
                            hover:border-[#FF5F57] hover:bg-stone-800 mx-auto lg:px-20 px-10
                            hover:gap-4 hover:shadow-sm hover:shadow-[#FF5F57]"
                onClick={() => {
                    setNavbarState("projects");
                    window.scrollTo(0, 0);
                    }}>
                    Show All Projects
                <MoveRight className='size-5'/>
            </a>
        </div>
    )
}

export default Projects;