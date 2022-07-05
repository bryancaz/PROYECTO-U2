import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './web';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from './PokemonID';
import Alumno from './180600';
import Rutas from './Rutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Rutas />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/180600" element={<Alumno />} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
