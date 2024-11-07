"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Check if scrolled down
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container w-full `}>
            <div className={`navbar flex justify-between ${isScrolled ? 'glass-effect' : ''} items-center px-20 fixed w-full top-0`}>
                <div className="logo text-white h-100 w-[130px]">
                    <Image
                        src="/logo1.svg"
                        height={0}
                        width={0}
                        style={{ width: '100%', height: 'auto' }}
                        alt='Temzy Designer'
                        className=''
                    />
                </div>
                
                <div className="nav-items flex-grow text-center md:block hidden">
                    <ul className="flex justify-center space-x-6">
                        <li className="text-mainColor">Home</li>
                        <li className="text-white">About Me</li>
                        <li className="text-white">Services</li>
                        <li className="text-white">Projects</li>
                        <li className="text-white">Testimonials</li>
                        <li className="text-white">Contact Me</li>
                    </ul>
                </div>
                
                <div className="quick-actions md:block space-x-4 hidden">
                    <button className="bg-mainColor text-white px-2 py-2 rounded">Download CV</button>
                </div>
            </div>
        </div>
    );
}