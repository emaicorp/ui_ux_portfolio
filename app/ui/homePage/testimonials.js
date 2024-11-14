// portfolio_site/app/ui/components/SomeOtherComponent.js
"use client"
import React from 'react';
import TestimonialCarousel from '@/app/ui/components/carousel';
import HeadingsDiv from '../components/headingDiv';

const Testimonials = ({animationClass , userdata}) => {
   
const testimonial = userdata.testimonials
    return (
        <div className="animated-container" id='testimonial'>
        <div className={`${animationClass ? 'slide-in-right' : 'slide-out-right'} bg-danger w-full  mt-20`}>
            <HeadingsDiv 
      heading="Testimonials"
      content={testimonial.text}
      />
            <TestimonialCarousel  className="h-lvh mt-10" userData={userdata}/>
        </div>\
        </div>
    );
};

export default Testimonials;