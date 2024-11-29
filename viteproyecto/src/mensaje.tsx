function Mensaje(){
    const i=6;
    var ga='g'
    for (let a=0;a<i;a++){
        ga=ga.concat('a')
    }
    return <h1>Hola Mundo {ga}</h1>;

}

export default Mensaje;