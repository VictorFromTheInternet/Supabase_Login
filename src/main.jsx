import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './router.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* navbar here */}
      <AuthContextProvider>
        <RouterProvider router={router} />    
      </AuthContextProvider>      
      <Footer></Footer>
    </>    
  </StrictMode>,
)
