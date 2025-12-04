import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import SearchContextProvider from './context/DataContextProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
