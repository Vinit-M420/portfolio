import bokuto from "../assets/bokuto.jpg";
import github  from "../assets/github-mark-white.svg";
import xlogo from "../assets/xlogo.svg";
// import { Mail } from 'lucide-react';

const Hero = () => {
    return (
    
        <div className="relative flex justify-center items-center mt-10 p-6 gap-20 max-w-4xl mx-auto mb-10
        border border-neutral-700 ">
            <span className="absolute top-0 left-0 w-6 h-6 border-t-1 border-l-1 border-neutral-500"></span>
            <span className="absolute top-0 right-0 w-6 h-6 border-t-1 border-r-1 border-neutral-500"></span>
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-1 border-l-1 border-neutral-500"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-1 border-r-1 border-neutral-500"></span>
            
            <div>
            <img src={bokuto} alt='me' 
                className="w-64 h-auto rounded" />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-5xl">Hey I'm <span 
                    className="text-black bg-orange rounded-3xl px-2">Vinit.</span>
                </h1>
                <h1 className="font-bold text-4xl bg-green text-black px-2 py-1 w-fit">Software Engineer</h1>
                <h1 className="font-bold text-4xl">Based in <span 
                    className="bg-blue text-black px-2">Mumbai</span></h1>
                <div className="flex gap-5">
                    <h1 className="font-bold text-4xl text-black bg-purple w-fit px-2">Find me at</h1>
                    <div className="flex gap-4 items-center">
                        <a href="https://github.com/Vinit-M420"
                        className="w-10 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            <img src={github} alt='Github' className="w-8 h-8 object-contain" />
                        </a>
                        <a href="https://x.com/vinit_here"
                            className="w-10 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
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