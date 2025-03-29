import React, { useState } from 'react';
import { Button } from '../ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-10'> 
      <img src="newlogo.png" alt="Logo" className="h-25 w-25 rounded-full" />


      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden block text-white text-3xl'>
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-20 right-5 bg-white shadow-md rounded-lg flex flex-col p-4 space-y-4 lg:hidden'>
          <a href='/' className='hover:text-green-500 text-green-800 text-xl font-bold'>Home</a>
          <a href='/create-trip' className='hover:text-green-500 text-green-800 font-bold text-xl'>Plan Trip</a>
          <a href='/Book-hotels' className='hover:text-green-500 text-green-800 font-bold text-xl'>Book Hotels</a>
          <a href='/where-to-go' className='hover:text-green-500 text-green-800 font-bold text-xl'>Where to Go</a>
        </div>
      )}

      <nav className='hidden lg:flex space-x-6'>
        <a href='/' className='text-white hover:text-yellow-500 drop-shadow-[0_0_20px_#00eaff] text-xl font-bold hover:rounded-lg px-4 py-2 transition duration-300'>Home</a>
        <a href='/create-trip' className='text-white hover:text-yellow-500 drop-shadow-[0_0_20px_#00eaff]  font-bold text-xl hover:rounded-lg px-4 py-2 transition'>Plan Trip</a>
        <a href='/Book-hotels' className='text-white hover:text-yellow-500 drop-shadow-[0_0_20px_#00eaff] font-bold text-xl hover:rounded-lg px-4 py-2 transition'>Book Hotels</a>
        <a href='/where-to-go' className='text-white hover:text-yellow-500 drop-shadow-[0_0_20px_#00eaff] font-bold text-xl hover:rounded-lg px-4 py-2 transition'>Where to Go</a>
      </nav>
    </div>
  );
};

export default Header;
