import React, { useState } from "react";
import vikingonegro from './assets/vikingonegro.png';
import vikingoblanco from './assets/vikingoblanco.png';
import reg from './assets/reg.png';


function Casilla({ onCLick, x = 0, y = 0, val=null  }      )  {
const imgs:string[]=[vikingonegro, vikingoblanco, reg] //para evitar tener que importarlas debes ponerlas en public


  return (
    <div
      id="cas"
      onClick={() => onCLick([x, y])}
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "black",
        position: "absolute",
        left: `${x * 25}px`,
        top: `${y * 25}px`,
      }}
    >
      

      <img src={imgs[val]} alt="" style={{width:'23px'}} />
    </div>
  );
}

export default Casilla;
