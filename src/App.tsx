import React from 'react';
import './App.css';
import "normalize.css"
import Cardapio from './pages/Cardapio';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Cardapio}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
