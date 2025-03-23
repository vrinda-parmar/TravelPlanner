import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bookhotels() {
  const [formData, setFormData] = useState({
    place: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const navigate = useNavigate();
  const goToPlanPage = () => {
    navigate('/create-trip');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { place, checkIn, checkOut, guests } = formData;

    if (!place || !checkIn || !checkOut) {
      alert('Please fill in all fields');
      return;
    }

    const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(place)}&checkin=${checkIn}&checkout=${checkOut}&group_adults=${guests}`;
    window.location.href = bookingUrl;
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-cover bg-center relative " style={{ backgroundImage: "url('/book-hotel.jpg')" }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative text-gray-700 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Experience Luxury Stays</h1>
          <p className="text-lg max-w-xl mb-6">
            Discover world-class hotels and resorts with exceptional amenities. Book now for an unforgettable experience.
          </p>
          <button 
            className="px-6 py-3  bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,165,0,0.8)] transition duration-300"
            onClick={goToPlanPage}
          >
            Plan Your Trip
          </button>
        </header>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]



 opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md text-white  hover:shadow-[0_0_20px_#00FF7F]

 transition duration-300
">
          <h2 className="text-3xl mb-6 font-semibold text-center">Book Your Hotel</h2>

          <label className="block mb-4">
            Place:
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="Enter your destination"
              required
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
            />
          </label>

          <label className="block mb-4">
            Check-in Date:
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
            />
          </label>

          <label className="block mb-4">
            Check-out Date:
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
            />
          </label>

          <label className="block mb-4">
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="10"
              required
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded w-full"
          >
            Search Hotels
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bookhotels;
