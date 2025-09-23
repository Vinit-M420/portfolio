import tripBucket from '../assets/tripbucket.png'
import { ExternalLink } from 'lucide-react';
import github  from "../assets/github-mark-white.svg";
import reddit from "../assets/redditarch.png";
import bookmark from "../assets/bookmark.png"

const AllProjects = () => {
    return (
        <div className="flex flex-col gap-5 mx-auto max-w-4xl lg:w-4xl md:w-2xl w-sm mt-20">
            <h1 className="font-bold text-4xl text-black w-fit bg-green px-2"> 
                All Projects
            </h1>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center items-stretch my-10">
                {/* Card 1 - TripBucket */}
                <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl h-full">
                    
                    <img src={tripBucket} 
                        className="w-full h-60 lg:object-cover object-contain rounded-t-lg" />
                    
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
                                justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                                hover:border-zinc-600 hover:bg-stone-800">
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
                    
                    <img src={reddit} 
                        className="w-full h-60 lg:object-fill md:object-contain object-cover rounded-t-lg" />
                    
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

                {/* Card 3 - Mock Bookmark */}
                <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl h-full">
                    
                    <img src={bookmark} 
                        className="w-full h-60 lg:object-cover object-contain rounded-t-lg" />
                    
                    <div className="flex flex-col flex-grow p-5 gap-3">
                        <h1 className='text-white text-lg font-bold leading-relaxed'>
                            Bookmark Manager 
                        </h1>

                        <h2 className='text-white text-sm font-light font-sans flex-grow'>
                            Frontend only website built using Tailwind CSS
                        </h2>

                        <div className='grid grid-cols-1 gap-2'>
                            <a rel="external" target='_blank' href="https://tailwindbookmark-vinit.vercel.app/" 
                                className="col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                                justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                                hover:border-zinc-600 hover:bg-stone-800">
                                <ExternalLink className='size-4'/>
                                <span>View</span>   
                            </a>
            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default AllProjects;