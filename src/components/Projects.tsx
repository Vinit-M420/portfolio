import tripBucket from '../assets/tripbucket.png'
import { ExternalLink } from 'lucide-react';
import github  from "../assets/github-mark-white.svg";
// import bookmark from "../assets/bookmark.png";

const Projects = () => {
    return (
        <div className="flex flex-col gap-5 mx-auto max-w-4xl mt-20">
            <h1 className="font-bold text-4xl text-black w-fit bg-green px-2"> 
                Projects
            </h1>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center
                            my-10">
                <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl gap-3 ">
                    
                    <img src={tripBucket} 
                    className="w-full h-[70%] min-h-60 rounded-t-lg leading-tight" />
                    
                    <h1 className='text-white text-lg font-bold mx-5 leading-relaxed'>
                        TripBucket
                    </h1>

                    <h2 className='text-white text-sm mx-5 font-light font-sans'>
                        Build your travel bucket list along with its itinerary. Proud of your itinerary, you can share it.
                    </h2>

                    <div className='grid grid-cols-2 gap-2 mx-5 mb-3'>
                        <a href="https://tripbucket.vercel.app/" 
                            className="col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                            justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                            hover:border-zinc-600 hover:bg-stone-800">
                            <ExternalLink className='size-4'/>
                            <span>View</span>   
                        </a>
                        <a href="https://github.com/Vinit-M420/TripBucket" 
                            className="col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                            justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                            hover:border-zinc-600 hover:bg-stone-800">
                            <img src={github} alt='Github' className="w-4 h-4 object-contain" />
                            <span>Github</span>
                        </a>   
                    </div>
                </div>
                <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl gap-3 ">
                    
                    <img src={"null"} 
                    className="w-full h-[70%] min-h-60 rounded-t-lg leading-tight" />
                    
                    <h1 className='text-white text-lg font-bold mx-5 leading-relaxed'>
                        Reddit Data Pipeline
                    </h1>

                    <h2 className='text-white text-sm mx-5 font-light font-sans'>
                    A complete Data pipeline of Reddit using PRAW, Airflow and GCP                    
                    </h2>

                    <div className='grid grid-cols-1 gap-2 mx-5 mb-3'>
                        <a href="https://github.com/Vinit-M420/reddit-data-pipeline-gcp" 
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
    )
}

export default Projects;