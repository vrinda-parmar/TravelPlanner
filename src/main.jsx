import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create--trip/index.jsx'
import Wheretogo from './where-to-go/index.jsx'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'
import Bookhotels from './Book-hotels/index.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/where-to-go',
    element:<Wheretogo/>
  },
  {
    path:'/Book-hotels',
    element:<Bookhotels/>
  }
  
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Toaster/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
