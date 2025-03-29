
import './App.css'
import About from './components/custom/About'
import Footer from './components/custom/Footer'
import Hero from './components/custom/Hero'
import Services from './components/custom/Services'
import { Button } from './components/ui/button'


function App() {
  

  return (
   <div >
   {/*------------------------------------ Hero section----------------------------------------- */}
   <Hero/>
   <About/>
   <Services/>
   <div className="w-full overflow-hidden -mt-1">
   <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
  <defs>
    <linearGradient id="reversedShinyGrayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E5E7EB" /> 
      <stop offset="50%" stop-color="#9CA3AF" /> 
      <stop offset="100%" stop-color="#4B5563" /> 
    </linearGradient>
  </defs>
  <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z" fill="url(#reversedShinyGrayGradient)" />
</svg>


</div>


   <Footer/>
   </div>
  )
}

export default App
