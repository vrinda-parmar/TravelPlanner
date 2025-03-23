import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Header from './Header'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-center' style={{ backgroundImage: "url('/home (2).jpg')" }}>
      <Header />
      <div className='flex flex-col items-center w-full h-[90vh] gap-9 p-3 shadow-sm justify-center'>
        <h1 className='font-extrabold text-[40px] text-center mt-16'>
          <span className='text-[#083e22]'> LET'S TAKE YOU TO YOUR </span><br />
          <span>DREAM DESTINATIONS</span>
        </h1>
        <p className='text-l text-white text-center'>Your personal trip planner, creating custom itineraries tailored to your interest and budget.</p>
        
        <Link to={'./create-trip'}>
          <Button className='bg-green-950 hover:bg-green-600'>Get Started, It's Free</Button>
        </Link>
      </div>
      <div className="-mt-2 -mb-4">
    <svg viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg"  >
      {/* Changed to bg-gray-900 */}
      <path d="M0,100 C300,200 900,0 1200,100 L1200,250 L0,250 Z" fill="#111827" />
    </svg>
  </div>
    </div>
  )
}

export default Hero;
