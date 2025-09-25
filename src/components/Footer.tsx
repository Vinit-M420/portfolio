import { Mail } from 'lucide-react';
import github  from "../assets/github-mark-white.svg";
import xlogo from "../assets/xlogo.svg";

const Footer = () => {

    return (
        <div className='flex flex-col gap-5 my-5'>
            {/* <div className='flex flex-col gap-5 py-5'> */}
                <div className="flex justify-center items-center mx-auto md:gap-10 gap-5">
                    <a href="https://github.com/Vinit-M420"
                        className="w-10 h-10 flex items-center justify-center opacity-70 
                            hover:opacity-100 transition-opacity">
                        <img src={github} alt='Github' 
                            className="lg:size-8 size-7 object-contain" />
                    </a>
                    <a href="https://x.com/vinit_here"
                        className="w-10 h-10 flex items-center justify-center opacity-70 
                        hover:opacity-100 transition-opacity">
                        <img src={xlogo} alt='X' 
                            className="lg:size-6 size-5 object-contain" />
                    </a>
                    
                    <a href="mailto:hey@vinitm.com" 
                        className="flex items-center justify-center opacity-70 
                        hover:opacity-100 transition-opacity">
                        <Mail className='size-8'/>
                        {/* <h2 className='tracking-wide'>hello@vinitm.com</h2> */}
                    </a>                   
                </div>

                {/* <div className='flex flex-col justify-center text-center mx-auto md:w-sm w-xs'>
                    <h2 className='text-gray-100 md:text-lg text-md'>
                        "Think about what's fun... not what's easy." 
                    </h2>
                    <span className='text-gray-300'>-Kōtarō Bokuto</span>
                </div> */}
        </div>
    )
}

export default Footer;