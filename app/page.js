"use client"
import { useEffect, useRef, useState } from 'react';
import NavBar from "@/app/ui/includes/navBar";
import HerosSection from "./ui/homePage/hero";
import AboutMe from "./ui/homePage/aboutMe";
import Services from "./ui/homePage/services";
import Projects from "./ui/homePage/project";
import Testimonials from "./ui/homePage/testimonials";
import Contact from "./ui/homePage/contact";
import Footer from "./ui/includes/footer";
 import Userdata from "@/app/lib/userDetails.json"

export default function Home() {
    const [visibleSections, setVisibleSections] = useState({
        hero: false,
        about: false,
        services: false,
        projects: false,
        testimonials: false,
        contact: false,
    });

    const observer = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
                } else {
                    setVisibleSections(prev => ({ ...prev, [entry.target.id]: false }));
                }
            });
        });

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    const links = [
        { text: 'Home', path: '#' },
        { text: 'About Me', path: '#about' },
        { text: 'Services', path: '#services' },
        { text: 'Projects', path: '#projects' },
        { text: 'Testimonials', path: '#testimonials' },
        { text: 'Contact Me', path: '#contact' }
    ];

    return (
        <div>
            <div className="mt-36"></div>
            <NavBar  link = {links} userdata={Userdata}/>
            <div id="hero" className={`section`}>
                <HerosSection animationClass={visibleSections.hero } userdata = {Userdata} />
            </div>
            <div id="about" className={`section`}>
                <AboutMe animationClass={visibleSections.about } section = {visibleSections.about} userdata ={Userdata} />
            </div>
            <div id="services" className={`section`}>
                <Services animationClass={visibleSections.services } userdata = {Userdata}  />
            </div>
            <div id="projects" className={`section`}>
                <Projects animationClass={visibleSections.projects } userdata = {Userdata}/>
            </div>
            <div id="testimonials" className={`section`}>
                <Testimonials animationClass={visibleSections.testimonials} userdata = {Userdata}/>
            </div>
            <div id="contact" className={`section`}>
                <Contact animationClass={visibleSections.contact } userdata = {Userdata} />
            </div>
            <Footer link ={links} userdata={Userdata} />
        </div>
    );
}
