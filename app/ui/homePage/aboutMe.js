"use client";
import Image from "next/image";
import ProgressBar from "../components/progressBar";

export default function AboutMe() {
  return (
    <div className="container px-20 mt-5">
      <div className="grid grid-cols-2 ">
        <div className="relative h-[476px]">
          <Image
            src="/userImages/hero_image2.svg"
            layout="fill"
            alt="about Me Image"
            className="relative"
          />
        </div>
        <div className="mt-4">
          <h1 className="head-text">About Me</h1>
          <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>
          <div className="mt-3">
            <ProgressBar label="UX" value={80} />
            <ProgressBar label="Website Design" value={60} />
            <ProgressBar label="App Design" value={70} />
            <ProgressBar label="Graphic Design" value={90} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
