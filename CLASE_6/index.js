const prompt =require('prompt-sync')({sigint:true});
let dataPersona = [];


const addDataPersona = (firstName,lastName,birthday,address,status,orientation=true)=>{
    let person ={
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if(orientation){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}


addDataPersona('JUAN','PEREZ',19,'CABA',0,true);
addDataPersona('JOSE','MARTIN',18,'CABA',1,false);
addDataPersona('ANTONIO','RAMON',15,'CABA',0,false);
addDataPersona('MARIAJOSE','LOPEZ',12,'CABA',0,false);
addDataPersona('JOSE Maria','PEREZ',14,'CABA',0,false);
addDataPersona('ANTONIO','PEREZ',14,'CABA',0);
addDataPersona('RAMON','PEREZ',14,'CABA',0);

//MOSTRAR EL PROMEDIO DE LAS EDADES. 

const promedio = () =>{
    let suma = 0;
    dataPersona.forEach( (element)=>{
        suma = suma + element.birthday;
       // suma += element.birthday;
    });
    let promedio = suma / dataPersona.length;
    return promedio;
}

/** METODO DE ARRAY DENOMINADO REDUCE
 * reduce( (variableAcumuladora,dataArray)=>{},valorInicialVariableAcumuladora)
 */

let sumaEdades = dataPersona.reduce( (sumaEdad,person)=>{
    return sumaEdad + person.birthday;
},0);
let promedioReduce = sumaEdades / dataPersona.length;

console.log("*******");
console.log(promedio());
console.log("*******");
console.log(promedioReduce);

/**METODOS DE CADENA */
let palabra ="HOla, HMUNdo, H, k,   ";

//LOGINTUD DE LA CADENA
console.log(palabra.length);

//convertir el string mayúscula, minúscula
console.log(palabra.toUpperCase());//mayúscula
console.log(palabra.toLowerCase()); //minúscula
// trim => limpiar los espacion en blanco al principio y al final
palabra = palabra.trim();
console.log(palabra.trim().length);
//replace(valor a buscar, valor remplazo) => reemplazar
console.log(palabra.replace("H","j"));
//replaceAll(valor a buscar, valor reemplazar)
console.log(palabra.replaceAll("H","j"));
console.log(palabra[1]);
/** split metodo de subcadena, dado un valor devuelve un array  */
console.log(palabra.split(","));
//includes("criterio a buscar") devolver un valor verdadero o falso
console.log(palabra.toLowerCase().includes("holas"));
//startsWith("criterio a buscar")

/** 1.- Filtrado por nombre (coincidencia) (solicitar al usuario el nombre a buscar) */

let words= prompt("INGRESE EL CRITERIO A BUSCAR: ");

let dataFilter = dataPersona.filter((element)=>{
     /* words = words.toLowerCase();
      let nombres = element.firstName.toLowerCase();
      return nombres.includes(words);*/
      return element.firstName.toLowerCase().includes(words.toLowerCase()) ||
      element.lastName.toLowerCase().includes(words.toLowerCase());
})

console.table(dataFilter);

console.log("*********")
 dataFilter = dataPersona.filter((element)=>{
    words = words.toLowerCase();
    let nombres = element.firstName.toLowerCase();
    return nombres.startsWith(words);
})

console.table(dataFilter);

