import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react'

//import reactLogo from './assets/react.svg'
//import './App.css'
import Interfaz from './Interfaz';
import Tablero from './tablero';
import Formulario from './Formulario';
function App() {
  return     <center>
  <h1>Hneffatafl</h1>
  <Router>
    
      <NavLink to="/" style={{margin:"1em"}}>Modificar</NavLink>
      <NavLink to="/segunda-pagina" style={{margin:"1em"}}>Jugar</NavLink>
      <Routes>
        <Route  path="/" element={<Formulario />} />                
        <Route  path="/segunda-pagina" element={<Interfaz d={11} />} />
      </Routes>
    </Router>
</center>
}  

export default App;
