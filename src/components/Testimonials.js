import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Graphic Designer",
      testimonial: "AIconCraft has completely transformed my workflow. The icons are high quality and fit perfectly with my design projects. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Web Developer",
      testimonial: "Creating custom icons has never been easier. AIconCraft's AI-powered generator produces stunning icons that save me so much time. A game changer!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4,
    },
    {
      name: "Samantha Lee",
      role: "Product Manager",
      testimonial: "I love how easy it is to generate icons with AIconCraft. The interface is user-friendly and the results are amazing. It’s a must-have tool for any product manager.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Freelancer",
      testimonial: "AIconCraft offers an incredible variety of icons. It’s my go-to resource for all my client projects. The quality and efficiency are unmatched.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 4,
    },
    {
      name: "Emily Clark",
      role: "UI/UX Designer",
      testimonial: "AIconCraft has streamlined my design process. The AI generates icons that perfectly align with my creative vision. It’s an invaluable tool for any designer.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
    },
    {
      name: "David Smith",
      role: "Entrepreneur",
      testimonial: "The icons from AIconCraft have significantly improved the aesthetics of my website. It’s an excellent tool for anyone looking to enhance their digital presence.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-yellow-400 ${index < rating ? '' : 'opacity-50'}`}
      />
    ));
  };

  return (
    <div className="py-12 bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-medium mb-8">
          What Our Users Say
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
