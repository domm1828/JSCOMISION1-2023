const prompt =require('prompt-sync')({sigint:true});
let dataPersona = [];


const addDataPersona = (firstName,lastName,birthday,address,status,orientation)=>{
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
addDataPersona('JOSE','PEREZ',14,'CABA',0,false);



/**agregar 10 objetos personas con diferente datos
 * 1.- Filtrado por nombre (coincidencia) (solicitar al usuario el nombre a buscar)
 * 2.- MOSTRAR EL PROMEDIO DE LAS EDADES. 
 
/*
for(i=1;i<=3;i++){
    let firstName = prompt("INGRESE EL NOMBRE: ");
    let lastName = prompt("INGRESE EL APELLIDO: ");
    let birthday = parseInt(prompt("INGRESE EL EDAD: "));
    let address = prompt("INGRESE EL DIRECCION: ");
    let status = parseInt(prompt("INGRESE EL STATUS: "));
    addDataPersona(firstName,lastName,birthday,address,status,true);
    console.log("**********************************");
}
*/
/**FUNCIONES DE ARRAY DEVUELVE UN NUEVO ARRAY*/

/**FILTER REALIZAMOS FILTRADO 
 * filter();
*/
let dataPersonaFilter = dataPersona.findIndex((persona)=>{
        return (persona.birthday > 15) && (persona.status == 0);
});

/**
 * MAP modificar o transformar el arreglo resultante
 */
let dataPersonaEdad = dataPersona.map((element)=>{
    let dataNewPerson = {
        names:element.firstName+' '+element.lastName,
        edad: "MENOR DE EDAD"
    }
    if(element.birthday < 18){
        dataNewPerson.edad= "MENOR DE EDAD";
    }
    else{
        dataNewPerson.edad= "MAYOR DE EDAD";
    }
    return dataNewPerson;
});

console.table(dataPersonaFilter);
console.log("**********************************");
console.table(dataPersona);
console.log("**********************************");
console.table(dataPersonaEdad);

console.log("**********************************");
let dataPersonaOrderAsc =dataPersona.sort((a,b)=>{return a.firstName - b.firstName});
console.table(dataPersonaOrderAsc);
let dataPersonaOrderDesc = dataPersona.sort((a,b)=>{return b.firstName - a.firstName});
console.table(dataPersonaOrderDesc);

dataPersona.includes("jose"); // true false