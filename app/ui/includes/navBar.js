"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "../components/link";

export default function NavBar({link, userdata}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full max-w-full backdrop-blur-md transition-shadow duration-300 z-[1000]">
    <div className={`mx-auto max-w-full px-2 sm:px-6 lg:px-8 ${isScrolled ? 'glass-effect' : ''}`}>
        <div className="relative flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="logo text-white h-100 w-[130px] p-3 md:mx-auto mb-5">
        <Image
          src={userdata.logo}
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
          alt="Temzy Designer"
          className=""
        />
      </div>

            {/* Centered Links for Desktop */}
            <div className="hidden md:flex w-0 flex-1 justify-center space-x-4">
            {link.map((links, index) => (
                <Link ref= {links.path} name={links.text} key={index} />
    
            ))}
            </div>

            {/* Toggle Button for Mobile View */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Notification Button */}
            <div className="absolute inset-y-0 right-0 hidden md:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="" download={userdata.resume} type="button" className="relative rounded-full btn btn-primary">
                    Download CV
                </a>
            </div>
        </div>
    </div>

    {/* Mobile menu links */}
    <div className={`sm:hidden overflow-hidden transition-[max-height] duration-700 ease-in-out ${isOpen ? 'max-h-[500px] glass-effect' : 'max-h-0'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 z-[999] block">
        {link.map((links, index) => (
                <Link ref= {links.path} name={links.text} key={index} />
    
            ))}
        </div>
        <div className=" pb-5 px-2 ">
                <a href="#" download={userdata.resume} type="button" className="relative rounded-full btn btn-primary">
                    Download CV
                </a>
            </div>
    </div>
</nav>

  );
}
