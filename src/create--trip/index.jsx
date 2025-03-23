import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import AskBot from '../components/AskBot';
import { useNavigate } from 'react-router-dom';
import Header from '../components/custom/Header';

function CreateTrip() {
  const [place, setPlace] = useState();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen p-10  flex flex-col items-center justify-center background-image bg-cover bg-center relative' style={{ backgroundImage: "url('/thailand.jpg')" }}>

  
      <div className='w-full max-w-4xl bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF]
 shadow-2xl rounded-3xl p-10 border border-gray-200 '>
        <h2 className='font-bold text-3xl text-gray-700'>Hello, This is <span className='text-purple-500'>Voyage Vista</span> : Your Personal AI Travel Agent</h2>
        <p className='text-gray-600 mt-4 text-lg'>Talk to me about your travel ideas. I will learn your needs & plan the perfect trip for you.</p>
        
        <div className='mt-10'>
          
          <div className='relative'>
            <AskBot className='w-full p-4 bg-white rounded-2xl border-2 border-transparent focus-within:border-purple-400 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] transform transition-transform duration-500 hover:scale-105'/>
            <div className='absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 focus-within:opacity-100 blur-xl transition-all duration-300'></div>
          </div>
        </div>
        <Button onClick={goToHomePage} className='mt-6 gray-900 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300'>Go Back to Home Page</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
