import { ProjectType } from "@/types/projecttype"
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: ProjectType }) => {
    return (
        <div className="col-span-1 flex flex-col border border-neutral-700 rounded-xl h-full">
            <div className="aspect-video overflow-hidden rounded-t-xl">
                    <Image src={project.bannerImg} alt='tripbucket-banner' width={800}  height={600}
                    className={`w-full h-full object-cover ${project.bannerClass}`} />
            </div>
            
            <div className="flex flex-col flex-grow p-5 gap-1">
                <h1 className='text-white text-lg font-bold leading-relaxed'>
                    {project.title}
                </h1>

                <h2 className='text-white text-sm font-light font-sans flex-grow'>
                    {project.description}
                </h2>

                <div className={`grid grid-cols-${project.linkColSpanEach} gap-2 mt-4`}>
                    { project.projectUrl ?  
                    <a rel="external" target='_blank' href={project.projectUrl}
                        className={`col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                        justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                        hover:border-zinc-600 hover:bg-stone-800`}>
                        <ExternalLink className='size-4'/>
                        <span>View</span>   
                    </a> 
                    : null }

                    { project.projectGithub ?  
                        <a rel="external" target='_blank' href={project.projectGithub} 
                            className={`col-span-1 text-white border border-neutral-700 text-md flex gap-2 
                            justify-center items-center transition-all duration-200 cursor-pointer rounded-md py-1
                            hover:border-zinc-600 hover:bg-stone-800`}>
                            <Image src='/github-mark-white.svg' alt='Github' width={16} height={16}
                                className="w-4 h-4 object-contain" />
                            <span>Github</span>
                        </a>  
                    : null }                                 
                </div>
            </div>
        </div>
    )
}