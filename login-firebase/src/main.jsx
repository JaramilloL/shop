import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { Auth } from './context/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth>
    <RouterProvider router={routes}/>
  </Auth>
    

    
  </React.StrictMode>,
)
