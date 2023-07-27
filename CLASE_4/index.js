const prompt =require('prompt-sync')({sigint:true});

const tablaMultp = (valor)=>{
    let i=1;
    while(i<=10){
        console.log(`${valor} X ${i} = ${i*valor}`);
        i++;
    }
}
const tablaSumar =(valor)=>{
    for(let i =1; i<=10;i++){
        console.log(`${i} + ${valor} = ${valor+i}`);
    }
}
const tablaRestar = (x)=>{
    let i = x;
     
    while(i <= (10+x)){
        console.log(`${i} - ${x} = ${i-x}`);
        i++;
    }
}
const tablaDiv = (y) =>{
    for(let i =1; i<=10;i++){
         console.log(`${i*y} / ${y} = ${i}`)
    }
}

let numero = prompt("INGRESE UN VALOR: ");
let operetation = prompt("1-SUMAR 2.-RESTAR 3-MULTIPLICAR 4.-DIVIDIR :");

switch(operetation){
    case "1":
        tablaSumar(parseInt(numero));
    break;
    case "2":
        tablaRestar(parseInt(numero));
    break;
    case "3":
        tablaMultp(numero);
    break;
    case "4":
        tablaDiv(numero);
    break;
    default:
        console.log("NO EXISTE ESA ACCION...") 
    break;
}