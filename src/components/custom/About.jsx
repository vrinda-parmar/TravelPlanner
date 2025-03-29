import React from 'react'

const About = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-600 via-gray-400 to-gray-200 text-white p-8 -mb-4 ">
        <div className="flex flex-col lg:flex-row items-center max-w-5xl gap-8">
          {/* Text Section */}
          <div className="flex-1 pr-8">
            <h1 className="text-6xl font-extrabold mb-6 text-gray-800">About Us</h1>
            <p className="text-l leading-relaxed">
              At <span className="text-blue-300">Voyage Vista</span>, your personalized travel companion designed to make trip planning effortless and enjoyable. Our platform uses advanced AI technology to generate tailored itineraries based on your preferences, ensuring every journey is unforgettable. Whether you're drawn to serene mountains, sunny beaches, or bustling cities, Voyage Vista offers curated suggestions and seamless hotel booking options. Save your favorite itineraries, download them as PDFs, and explore with confidence. 
            </p>
          </div>
  
          {/* Image Section with Hover Effect */}
          <div className="flex-1">
            <img
              src="/aboutUs.jpg"
              alt="Travel"
              className="w-full h-auto rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.8)] transform transition-transform duration-500 hover:scale-105 md:max-w-lg sm:max-w-xs"
            />
          </div>
        </div>
      </div>
    );
  }

export default About
