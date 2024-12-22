import React, {useState} from "react";
import {listador, ubicar, generar} from "./matematiqueria";
import Casilla from "./casilla";
import { CasillaProps } from "./tipos";

function Tablero({d=11, inic=0}){
    const [sel, setSel] = useState<null | [number, number]>(null);
    const [posmovs, setPosmovs]=useState(null);
    const dispin=listador(d);
    const [fs, setFs]=useState(generar(d, dispin ));
    const [turno, setTurno]=useState(inic)
    let t:Element[][]=[];
    function turnar(){
        setTurno((turno+1)%2)
        setSel(null)
    }

    function mover( dup1:[number, number], dup2:[number, number]){
        // Hacer una copia de fs para modificarla
        const newFs = [...fs.map(row => [...row])];  // Copia profunda de fs
        newFs[dup2[0]][dup2[1]] = newFs[dup1[0]][dup1[1]];  // Mover el valor
        newFs[dup1[0]][dup1[1]] = null;  // Limpiar la casilla original

        setFs(newFs);  // Actualizar el estado con la nueva versión de fs
        turnar();  // Cambiar el turno
    }

    for (let a=0; a<d; a++){
        let f=[]
        for (let b=0; b<d; b++)
            {   
                f.push(<Casilla key={`${a}-${b}`} x={a} y={b}  val={fs[a][b]} onCLick={Click} /> )}
        t.push(f);
    }
    
    console.log(fs)

    function cprueba(dup:[number, number]){
        alert('Elemento' +dup[0]+ dup[1] )
    }

    function Click(dup:[number, number]){
        if (sel==null && ubicar(fs, dup )==turno ){
            console.log("Holaaaaaaaa", ubicar(fs,dup ) )
            setSel(dup) 

        }
        else {
            mover(sel, dup)
        }
    }

    function vacio(dup){
        return ubicar(fs, dup)==null
    }





    return t;    
    
}

export default Tablero;