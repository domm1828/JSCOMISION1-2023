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

const addFormPersona = () =>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let birthday = document.getElementById("birthday")
    let address = document.getElementById("address")
    let status = document.getElementById("status")
    addDataPersona(firstName.value,lastName.value,birthday.value,address.value,status.value);
   firstName.value="";
   lastName.value="";
   birthday.value="";
   address.value="";
   status.value="";
    console.table(dataPersona);
}

/** 1.- actividad evaluar que el formulario no este vacio, y no permita caracteres 
 * blanco.
 *  2.- Evitar duplicidad de Datos.
 */