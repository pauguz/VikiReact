import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import Tablero from "./tablero";

function Interfaz({d=9}) {
  return <div style={{/*height:'100vm', width:'100vm'*/ display:"flex"}}   >
          
          <span style={{backgroundColor: "white", display:"flex", width:"30%"}}>Hola</span>
          <span style={{position:'relative', display:"flex"}}>
          <Tablero d={d} /> 
          </span>
          </div>
}  

export default Interfaz;