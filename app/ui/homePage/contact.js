"use client"
import HeadingsDiv from "../components/headingDiv"
import { useState } from 'react';

export default function Contact({animationClass,userdata}){
    const [email, setEmail] = useState('');

    const handleContactMe = () => {
        const subject = 'Contact Request';
        const body = `I would like to get in touch. My email is: ${email}`;
        const mailtoLink = `mailto:${userdata.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink; // Open the user's email client
    };

    return (
      <div className="animated-container" id="contact">
        <div className={`${animationClass ? 'slide-in-left' : 'slide-out-left'} mb-20 bg-danger w-full  mt-20`}>
      <HeadingsDiv 
      heading="Lets Design Together"
      content="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="flex  gap-6 justify-center align-center mt-10">
        <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className=" rounded-[5px] bg-slate-200 border-2 border-slate-500 text-black" 
            placeholder="Enter Your Email"
            required
        />
        <button type="button" onClick={handleContactMe} className="btn btn-primary rounded-[14px]">Contact Me</button>

      </div>
        </div>
        </div>
    )
}