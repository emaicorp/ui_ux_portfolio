import { useState } from "react";
import Image from "next/image";

const TestimonialCarousel = ({ userData }) => {
  const testimonials = userData.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const transformValue = (activeIndex) => {
    if (activeIndex === 0) {
      return `translateX(30%)`;
    }
    return `translateX(calc(30% - ${activeIndex * 20}%))`;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="flex items-center justify-center overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: transformValue(activeIndex),
          }}
        >
          {Object.entries(testimonials)
            .filter(([key]) => key !== "text")
            .map(([key, testimonial], index) => (
              <div
                key={key}
                className={`w-[468px] p-6 rounded-lg shadow-lg mx-4 flex bg-white transform ${
                  index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-60"
                } transition duration-300 ease-in-out`}
              >
                {testimonial.image_url && (
                  <Image
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                )}
                <div>
                  <p className="italic text-center text-gray-600 mt-4">"{testimonial.text}"</p>
                  <h3 className="mt-4 text-center font-semibold">{testimonial.name}</h3>
                  <p className="text-center text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {Object.entries(testimonials)
          .filter(([key]) => key !== "text")
          .map((_, index) => (
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
