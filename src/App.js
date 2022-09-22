import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer /*title={"Sitio web creado por Sergio"} */ />
    </div>
  );
}

export default App;
