import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vel purus placerat volutpat.",
    name: "John Doe",
    position: "CEO",
    image: "/projectImages/project.svg",
  },
  {
    text: "Aenean scelerisque neque a ipsum hendrerit, ut posuere eros vehicula.",
    name: "Jane Smith",
    position: "Marketing Head",
    image: "/projectImages/project.svg",
  },
  {
    text: "Curabitur imperdiet felis at est posuere malesuada.",
    name: "Tom Brown",
    position: "CTO",
    image: "/projectImages/project.svg",
  },
  {
    text: "Curabitur imperdiet felis at est posuere malesuada.",
    name: "Tom Brown",
    position: "CTO",
    image: "/projectImages/project.svg",
  },
  
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideWidth = 468; // Width of each slide in pixels
  const totalSlides = testimonials.length; // Total number of slides

  const handleNext = () => {
    if (activeIndex < totalSlides - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Calculate the transform value to center the active slide
  const transformValue = (activeIndex) => {
    const centerOffset = (window.innerWidth - slideWidth) / 2; 
    if(activeIndex == 0){
      return `translateX(30%)`
    }
    return `translateX(calc(30% - ${activeIndex * 20}%)`; // Center the active slide based on index
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="flex items-center justify-center overflow-hidden relative">
        {/* Testimonial Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: transformValue(activeIndex), // Use the transform function
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-[468px] p-6 rounded-lg shadow-lg mx-4 flex bg-white transform ${
                index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-60"
              } transition duration-300 ease-in-out`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <div>
                <p className="italic text-center text-gray-600 mt-4">"{testimonial.text}"</p>
                <h3 className="mt-4 text-center font-semibold">{testimonial.name}</h3>
                <p className="text-center text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Indicator Buttons */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-700 ${
              index === activeIndex ? "bg-orange-500 w-9" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
