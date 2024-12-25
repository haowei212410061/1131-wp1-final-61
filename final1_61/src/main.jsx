import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App_61 from './App_61.jsx'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App_61 />
  </StrictMode>
)
