import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: "Plan Trips",
      description: "Create personalized itineraries with AI-powered suggestions tailored to your preferences.",
      imgSrc: "/plan.jpg"
    },
    {
      title: "Book Hotels",
      description: "Find and book the best hotels at competitive prices for a comfortable stay.",
      imgSrc: "/hotel.jpg"
    },
    {
      title: "Explore the World",
      description: "Discover exciting destinations and unique experiences around the globe.",
      imgSrc: "/discover.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 relative">
      {/* Section Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-400">Our Services</h1>

      {/* Services Card Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="w-80 p-6 bg-gray-800 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] transform transition-transform duration-500 hover:scale-105">
            {/* Image Section */}
            <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover rounded-xl mb-4" />

            {/* Content Section */}
            <h2 className="text-2xl font-bold text-blue-300 mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
