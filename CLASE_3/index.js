/**FUNCIONES CREACION
 * FUNCIONES DECLARATIVAS
 */
function hola(){
 //console.log("hola.....!")
 suma(8,7,5,2);
}
function suma(x,y,z,op){
    let resultado;
    if(op==1){
        resultado = x+y+z;
    }
    if(op==2){
        resultado = x-y-z;
    }
      
    //console.log(suma);
    return resultado;
}
//llamado a la ejecucion de la funcion
hola();
let xy = suma(8,9,5,2);
console.log(xy * 100);

/**FUNCIONES POR EXPRESION 
 * MAYORMENTE SE INICIALIZA UNA VARIABLE DE TIPO FUNCTION
*/

const prueba = function ejemplo(){

};
prueba();
/**FUNCIONES ANONIMAS */
const anonimas = function (){

};
/** funciones autoejecutables */
(
    function(){
        console.log("ejemplos");
    }
)();
(
    function(x,y){
        for(let i=x;i<=y;i++){
            console.log("ejemplos "+x);
        }
    }
)(1,10);

/**ARROW functions
 * const prueba = function ejemplo(){
 *  };
 */

const arrowFunc = () =>{

}
arrowFunc();

const sumaArrow = (x,y,z) =>{
    if(x>z){
        return 9;
    }
    return x+y+z;
}

sumaArrow(3,5,4);

if(a > b){
    sumaArrow(3,4,5);
}
else{
    arrowFunc();  
}

/**REALIZAR UNA FUNCION QUE PERMITA SEGUN LA ACCIONES DADA 
 * POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR, SUMAR, RESTAR, DIVIDIR,
 * DADO EL VALOR INGRESADO POR EL USUARIO
 */