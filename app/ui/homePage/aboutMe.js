"use client";
import Image from "next/image";
import ProgressBar from "../components/progressBar";

export default function AboutMe({ animationClass, section }) {
 
 
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
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>
          <div className="mt-3">
            <ProgressBar label="UX" value={section ? 80 : 0} />
            <ProgressBar label="Website Design" value={section ? 60 : 0} />
            <ProgressBar label="App Design" value={section ? 70 : 0} />
            <ProgressBar label="Graphic Design" value={section ? 90 : 0} />
          </div>
        </div>
      </div>
    </div>
  );
}
