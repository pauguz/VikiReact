direccionales=[[(1,0), (-1,0)], [(0,1), (0,-1)]]

function sumaDupla(dup1:[number, number],dup2:[number, number]):[number, number] {
    return [dup1[0]+dup2[0], dup1[1]+dup2[1] ]
}
function multDupla(dup:[number, number], f:number):[number, number] {
    return [dup[0]*f, dup[1]*f ]
}

function coordenar(u:number, n:number):[number, number]{
    return [Math.floor(n/u), n%u]
}  

function coordenarEnlistado(u:number, ...args:number[]){
    var arr=[];
    for (var i=0; i<args.length; i++){
        arr.push(coordenar(u, args[i]));
    }
    return arr
}

export function listador(dim:number){
    var ln: [number, number][]=[], lb: [number, number][]=[];
    var media =Math.floor(dim/2);
    var medium=Math.floor(Math.pow(dim, 2)/2);
    //llenar negras
    for( var i=media-2; i<media+3; i++){
        var t=i*dim
        lb=lb.concat(coordenarEnlistado(dim, i, t, 2*medium-i, 2*medium-t) )
    }

    //llenar blancas
    for( var i=-2; i<3; i++){
        var m=medium+i*dim;
        var n=2-Math.abs(i)
        for(let j=m-n; j<m+n+1; j++){
            ln=ln.concat(coordenarEnlistado(dim, j) )
        }
    } 
    return [lb, ln]
    
}

export function ubicar(lab:any[][], tup:[number, number]){
    return lab[tup[0]][tup[1]]
}

export function generar(dim:number, gen:number[][][]){
    let arr=Array(dim).fill(null).map(() => Array(dim).fill(null))
    for(const a of gen[0]){
        arr[a[0]][a[1]]=0;
    }
    for(const a of gen[1]){
        arr[a[0]][a[1]]=1;
    }
    return arr

}

export function posmovs(dup:[number, number], func:any){
      

}