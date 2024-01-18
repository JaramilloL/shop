import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes'

const query = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={query}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
    
  </React.StrictMode>,
)
