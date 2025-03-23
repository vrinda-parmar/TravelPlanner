import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Header from './Header'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-center bg-gradient-to-br from-amber-700 via-black to-amber-700'  >
      <Header />
      <div className='flex flex-col items-center w-full h-[90vh] gap-9 p-3 shadow-sm justify-center'>
        <h1 className='font-extrabold text-[40px] text-center mt-16'>
          <span className='text-5xl font-bold text-white drop-shadow-[0_0_20px_#00eaff]'> LET'S TAKE YOU TO YOUR </span><br />
          <span className='text-5xl font-bold text-amber-700  drop-shadow-[0_0_20px_#00eaff]'>DREAM DESTINATIONS</span>
        </h1>
        <p className='text-l text-white text-center drop-shadow-[0_0_20px_#00eaff]'>Your personal trip planner, creating custom itineraries tailored to your interest and budget.</p>
        
        <Link to={'./create-trip'}>
          <Button className='px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,165,0,0.8)] transition duration-300'>Get Started, It's Free</Button>
        </Link>
      </div>
      <div className="-mt-2 -mb-4">
    <svg viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg"  >
      {/* Changed to bg-gray-900 */}
      <path d="M0,100 C300,200 900,0 1200,100 L1200,250 L0,250 Z" fill="#b45309" />
    </svg>
  </div>
    </div>
  )
}

export default Hero;
