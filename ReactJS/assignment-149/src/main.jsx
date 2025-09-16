import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParentCompnent from './ParentComponent.jsx'
import Welcome from '../../assignment-149/src/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <h1>Hello, welcome React JS assignment 148</h1>
      
                 
  <ParentCompnent firstName= "Virat" lastName= "Kohli" />
  <Welcome />
  </StrictMode>,
)
