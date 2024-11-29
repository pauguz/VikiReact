import Casilla from "./casilla";

function Tablero(){
    const d=11;
    var t=[]
    for (let a=0; a<d; a++){
        let f=[]
        for (let b=0; b<d; b++)
            {f.push(<Casilla key={`${a}-${b}`} x={a} y={b} /> )}
        t.push(f);
    }
    return t;    

}

export default Tablero;