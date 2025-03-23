import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Wheretogo() {
  const navigate = useNavigate();

  const goToPlanPage = () => {
    navigate('/create-trip');
  };

  const places = [
    { name: 'Dubai', image: '/dubai.jpg', description: 'Experience luxury, modern architecture, and desert safaris. Explore the Burj Khalifa, enjoy desert adventures, and indulge in world-class shopping and dining.' },
    { name: 'Switzerland', image: '/switzer.jpg', description: 'Enjoy breathtaking landscapes and serene lakes. Visit the Swiss Alps, take scenic train rides, and explore charming villages.' },
    { name: 'Thailand', image: '/thailand.jpg', description: 'Explore vibrant culture, tropical beaches, and delicious cuisine. Discover temples, bustling markets, and enjoy water sports.' },
    { name: 'Mumbai', image: '/mumbai.jpg', description: 'Discover the bustling city life and iconic landmarks. Visit the Gateway of India, explore Bollywood, and enjoy street food delicacies.' },
    { name: 'Tamil Nadu', image: '/tamil.jpg', description: 'Experience the rich heritage and stunning temples. Visit ancient temples, enjoy traditional cuisine, and explore the scenic countryside.' },
    { name: 'Jaipur', image: '/jaipur.jpg', description: 'Step into the royal past with magnificent forts and palaces. Explore Amber Fort, City Palace, and shop for traditional handicrafts.' },
    { name: 'Darjeeling', image: '/darjeeling.jpg', description: 'Witness beautiful tea gardens and panoramic views of the Himalayas. Enjoy a toy train ride, visit Tiger Hill, and savor Darjeeling tea.' },
    { name: 'Manali', image: '/manali.jpg', description: 'Enjoy adventure sports and scenic mountain landscapes. Go trekking, skiing, or explore Solang Valley and Rohtang Pass.' },
    { name: 'Rishikesh', image: '/rishikesh (1).jpg', description: 'Experience spiritual retreats and adventure sports. Try river rafting, visit ancient temples, and enjoy the peaceful Ganga Aarti.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hotel.jpg)' }}>
        <div className=" bg-opacity-60 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <p className="text-lg mb-6">Discover new destinations and experience unforgettable adventures.</p>
          <button 
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,165,0,0.8)] transition duration-300"
            onClick={goToPlanPage}
          >
            Plan Your Trip
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="p-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-xl overflow-hidden shadow-2xl h-[420px] border border-blue-500 transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.8)]">
              <img src={place.image} alt={place.name} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-yellow-300">{place.name}</h3>
                <p className="text-gray-300 mb-4">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wheretogo;
