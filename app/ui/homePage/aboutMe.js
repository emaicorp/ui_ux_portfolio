"use client";
import Image from "next/image";
import ProgressBar from "../components/progressBar";

export default function AboutMe({ animationClass, section, userdata }) {
 const services = userdata.services;

  return (
    <div  className={` container px-20 mt-5`}>
      <div className="grid grid-cols-2">
        <div className={`relative h-[476px] ${animationClass ? 'slide-in-left' : 'slide-out-left'}`}>
          <Image
            src="/userImages/hero_image2.svg"
            fill // Updated layout attribute
            alt="About Me Image"
            className="relative"
          />
        </div>
        <div className={`${animationClass ? 'slide-in-right' : 'slide-out-right'} mt-4`}>
          <h1 className="head-text">About Me</h1>
          <p className="mt-3">
            {userdata.about_me}
          </p>
          <div className="mt-3">
            {Object.entries(services).filter(([key]) => key !== 'text').map(([key, service]) => (
                <ProgressBar 
                    key={key} 
                    label={key.replace('_', ' ')} // Replace underscores with spaces for display
                    value={section ? service.percent : 0} 
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
