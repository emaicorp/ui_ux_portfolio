// portfolio_site/app/ui/components/SomeOtherComponent.js
"use client"
import React from 'react';
import TestimonialCarousel from '@/app/ui/components/carousel';
import HeadingsDiv from '../components/headingDiv';

const Testimonials = ({animationClass}) => {
    const testimonials = [
        {
            image: '/projectImages/project.svg',
            text: 'This is the best service I have ever used!',
            name: 'John Doe',
            position: 'CEO, Company A',
            bg: 'bg-red-100',
        },
        {
            image: '/projectImages/project.svg',
            text: 'Amazing experience, highly recommend!',
            name: 'Jane Smith',
            position: 'CTO, Company B',
            bg: 'bg-mainColor',
        },
        {
            image: '/projectImages/project.svg',
            text: 'A game changer for our business!',
            name: 'Alice Johnson',
            position: 'Marketing Director, Company C',
            bg: 'bg-red-100',
        },
    ];

    return (
        <div className={`${animationClass ? 'slide-in-left' : 'slide-out-left'} bg-danger w-full  mt-20`}>
            <HeadingsDiv 
      heading="Testimonials"
      content="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
            <TestimonialCarousel  className="h-lvh mt-10"/>
        </div>
    );
};

export default Testimonials;