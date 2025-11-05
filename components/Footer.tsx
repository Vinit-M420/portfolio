"use client";
import { Mail } from 'lucide-react';
import Image from 'next/image';


const Footer = () => {

    return (
        <footer className='flex flex-col gap-5 my-5'>
            <div className="flex justify-center items-center mx-auto md:gap-10 gap-5">
                <a href="https://github.com/Vinit-M420"
                    className="w-10 h-10 flex items-center justify-center opacity-70 
                        hover:opacity-100 transition-opacity">
                    <Image src='/github-mark-white.svg' alt='Github' width={32} height={32}
                        aria-label='Github' aria-hidden='false'  
                        className="lg:size-8 size-7 object-contain" />
                </a>
                <a href="https://x.com/vinit_here" 
                    className="w-10 h-10 flex items-center justify-center opacity-70 
                    hover:opacity-100 transition-opacity">
                    <Image src="/xlogo.svg" alt='X formerly Twitter' width={32} height={32}
                        aria-label='X formerly Twitter'  aria-hidden='false'
                        className="lg:size-6 size-5 object-contain" />
                </a>
                <a href="mailto:hey@vinitm.com" 
                    className="flex items-center justify-center opacity-70 
                    hover:opacity-100 transition-opacity">
                    <Mail className='size-8' aria-label='Mail' aria-hidden='false'  />
                </a>                          
            </div>
        </footer>
    )
}

export default Footer;