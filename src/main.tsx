
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from './react-query/queryClient.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={getQueryClient()}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </QueryClientProvider>,
)
