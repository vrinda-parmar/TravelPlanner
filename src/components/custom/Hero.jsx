import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Header from './Header'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-center bg-[url("/discover.jpg")]   '  >
      <Header />
      <div className='flex flex-col items-center w-full h-[90vh] gap-9 p-3 shadow-sm justify-center'>
        <h1 className='font-extrabold text-[40px] text-center mt-16'>
          <span className='text-5xl font-bold text-blue-800 drop-shadow-[0_0_20px_#00eaff]'> LET'S TAKE YOU TO YOUR </span><br />
          <span className='text-5xl font-bold text-amber-700  drop-shadow-[0_0_20px_#00eaff]'>DREAM DESTINATIONS</span>
        </h1>
        <p className='text-l text-white text-center drop-shadow-[0_0_20px_#00eaff]'>Your personal trip planner, creating custom itineraries tailored to your interest and budget.</p>
        
        <Link to={'./create-trip'}>
          <Button className='px-10 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,165,0,0.8)] transition duration-300'>Get Started, It's Free</Button>
        </Link>
      </div>
      <div className="-mt-2 -mb-4">
      <svg viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="steelShine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4B5563" /> 
      <stop offset="50%" stop-color="#9CA3AF" /> 
      <stop offset="100%" stop-color="#E5E7EB" /> 
    </linearGradient>
  </defs>
  <path d="M0,100 C300,200 900,0 1200,100 L1200,250 L0,250 Z" fill="url(#steelShine)" />
</svg>



  </div>
    </div>
  )
}

export default Hero;
