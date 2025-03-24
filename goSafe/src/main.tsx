import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Community } from './Community.tsx';
import { Maps } from './Maps.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
