import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>      
      {/* nav section */}
      <img src="logo.svg" alt="logo" title="logo" className="fixed top-0 left-0" />
      <button 
        className="fixed top-0 right-0 text-blue-500 border-1 border-blue-500 bg-transparent py-2 px-6 rounded-4xl cursor-pointer">
          Login
      </button>
 

      {/* main container */}
      <div className="mx-auto h-full max-w-sm flex flex-col items-center justify-center">
        <img src="header_img.png" alt="Cool Guy" 
          title="Image of a cool guy" 
          height="200" width="200"/>
        <h3 className="text-2xl">👋 Hello World!</h3>
        <h1 className="text-3xl">Welcome to my app! </h1>
        {/* <h1 className="text-center pt-4 text-3xl">Supabase th & Context Demo</h1>             */}
        <p class="text-center">Using with React & Tailwind for the UI and Supabase for the serverside and authentication. </p>      

        <button 
          className="py-2 px-6 rounded-4xl border-1 border-blue-500 text-blue-500 cursor-pointer"
        >Get Started</button>      
      </div>      
    </>
  )
}

export default App
