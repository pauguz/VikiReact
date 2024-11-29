import React, {useState} from "react";

function Casilla({x=0, y=0}){
    return <div id='cas' style={{borderWidth:'2px', borderStyle:'solid', borderColor:'black', position:'absolute', left: `${x*25}px`, top: `${y*25}px`}}> </div>;
}

export default Casilla;