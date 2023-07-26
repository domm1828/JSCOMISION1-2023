//ESTRUCTURAS DE CONTROLS DE JS
/**CODICIONALES 
 * if  CODICION SIMPLE si ocurre algo ejecuta lo siguiente
 
if(condicion){ }
if(codicion && codicion || condicion ) {}
*/
/** if / else 
if(condicion){

}
else{

}

(codicion) ? 'aqui' : 'otro';*/

let nota = 10;
var mensaje;
//codicion si la nota es mayor a 10 paso...
if(nota>10){
    mensaje ="Aprobado";
}
else{
    mensaje="Reprobado";
}
console.log("IE-- El usuario esta: ",mensaje);


mensaje = (nota < 10) ? "Reprobado" : "Aprobado";
console.log("T-- El usuario esta: ",mensaje);

if(nota>10){
    console.log("aprobado...")
}
if(nota<=10){
    console.log("reprobado");
}
/**CONDICIONAL MULTIPLE IF - ELSE IF - ELSE 
 * NOTA < 5 INSUFICIENTE, NOTA < 10 SUFICIENTE, NOTA < 15 BIEN, MAYOR  15 EXCELENTE
*/
nota = 3;
if(nota < 5){
    mensaje = "INSUFICIENTE";
}
else if(nota < 10){
    mensaje="SUFICIENTE";
}
else if(nota < 15){
    mensaje="BIEN";
}
else{
    mensaje="EXCELENTE";
}
console.log("Mi nota es: ",mensaje);


if( nota>0 && nota<5){
    console.log("INSUFICIENTE");
}

if(nota > 10){
    console.log("SUFICIENTE");
}
if(nota > 15){
    console.log("BIEN");
}

if(nota > 15){
    console.log("EXCELENTE");
}

/**CONDICIONAL SWITCH CASO DE USO
 * switch(variable){
 * case '': bloque.... break
 * case '': bloque.... break
 * default: bloque... break
 * }
 */
nota =10;

switch(nota){
    case 0: 
    case 1: 
    case 2: 
    case 3: 
    case 4:
        mensaje="INSUFICIENTE";
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        mensaje="SUFICIENTE";
    break;
    case 10:
        mensaje="CASI BIEN";
    break;
    case 11:
    case 12:
    case 13:
    case 14:
        mensaje="BIEN";
    break;
    default: mensaje="Excelente"; break;
}
console.log("***********************");
console.log("Mi nota es: ",mensaje);

let dia="lunes.,,mnii";
switch(dia){
    case 'lunes':
        mensaje="Buen dia Feliz Inicio de Semana";
    break;
    case 'martes':
        mensaje="Hoy es martes, estas comenzando la semana";
    break;
    case 'miercoles':
        mensaje="Estamos a la mitad de la semana";
    break;
    default:
        mensaje="Feliz viernes.....";
    break;
}
console.log(mensaje);

/**OPERADOR TERNARIO ANIDADO CODICIONES MULTIPLES (IF - ELSE IF - ELSE)  ? : */
mensaje = (nota<5) ? "INSUFICIENTE" :  // IF(NOTA<5){} 
          (nota<10) ? "SUFICIENTE"  : 
          (nota<15) ? "BIEN" : "EXCELENTE";


// CALCULAR EL NUMERO MAYOR, Y MENOR DE TRES VARIABLES  IF - ELSE ? : 
// CALCULAR SI UN NUMERO ES PAR O IMPAR
// DADO DOS VARIBALES REALIZAR LAS OPERACIONES BASICAS (+,-,*,/), MEDIANTE CASOS DE USOS 
