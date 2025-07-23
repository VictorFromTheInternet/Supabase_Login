import { useState } from 'react'
import './App.css'
import {Link, useNavigate} from 'react-router-dom'

function App() {
  

  return (
    <>      
      {/* nav section */}
      <img src="logo.svg" alt="logo" title="logo" className="fixed top-0 left-0 m-4 cursor-pointer" />
      <Link to="/signin">
        <button 
          className="fixed top-0 right-0 m-4 text-blue-500 border-1 border-blue-500 bg-transparent py-2 px-6 rounded-4xl cursor-pointer">
            Sign in
        </button>
      </Link>      
 

      {/* main container */}
      <div className="main-container  h-screen  flex flex-col items-center justify-center ">
        <img src="header_img.png" alt="Cool Guy" 
          title="Tobi the robot"
          aria-label="Tobi the robot" 
          height="200" width="200"/>
        <h3 className="text-2xl">👋 Hello World!</h3>
        <h1 className="text-3xl">Welcome to my app! </h1>
        {/* <h1 className="text-center pt-4 text-3xl">Supabase th & Context Demo</h1>             */}
        <p class="text-center pt-2 max-w-sm">Built with React & Tailwind for the UI and using Supabase for the authentication. </p>      

        <Link to="/signup" className="pt-6">
          <button 
            className="py-2 px-6 rounded-4xl border-1 border-blue-500 text-blue-500 cursor-pointer mt-2"
          >Get Started</button>            
        </Link>
          
      </div>      
    </>
  )
}

export default App
