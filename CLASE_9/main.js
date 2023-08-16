let dataPersona = [];
let btnAdd = document.getElementById('btnAdd');
var positionPerson =-1;

const addDataPersona = (firstName, lastName, birthday, address, status, dni, orientation = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if (orientation) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }
}

const addFormPersona = () => {

    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let birthday = document.getElementById("birthday")
    let address = document.getElementById("address")
    let status = document.getElementById("status")
    let dni = document.getElementById("dni")

    if (filterDniOne(dni.value, dataPersona) == -1) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        document.getElementById("formPerson").reset();
        document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
        dni.focus();
        storageListPerson();
        messageAlert("DATOS GUARDADOS", "success");
    }
    else {
        messageAlert("ERROR DATOS REPETIDOS", "error")
        dni.focus();
    }
    console.table(dataPersona);
}


const listPersona = (arrayData) => {
    let list = '';
    if (arrayData.length > 0) {
        arrayData.forEach( (person,index) => {
            list += `<tr>
                    <td>${person.dni}</td>
                    <td>${person.firstName} ${person.lastName}</td>
                    <td>${person.birthday}</td>
                    <td>${person.address}</td>
                    <td>${person.status}</td>
                    <td>
                    <button class="btn btn-danger m-1" onclick="actionUpdate(${person.dni})">Editar</button>
                    <button onclick="actionDelete(${person.dni})" class="btn btn-dark m-1">Eliminar</button></td>
                </tr>`;
        });
    }
    else{
        list = `<tr><td colspan="6" class="text-center">NO SE ENCONTRARON REGISTROS</td></tr>`;
    }
    return list;
}

const filterDniOne = (dni, arrayData) => {
    return arrayData.findIndex((person) => {
        return person.dni == parseInt(dni)
    })
}

const messageAlert = (menssage, icon = "success") => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: menssage,
        showConfirmButton: false,
        timer: 900
    })
}

const filterDataPersona = (search) => {
    let filter = dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) ||
            person.lastName.toLowerCase().includes(search);
    });
    return filter;
}

const actionFilterInput = () => {
    let search = document.getElementById("search").value;
    search = search.toLowerCase().trim();

    let dataResult = filterDataPersona(search);
    document.getElementById("listPerson").innerHTML = listPersona(dataResult);
    console.log(search);
}

const actionDelete = (dni) =>{
    let position = filterDniOne(dni,dataPersona);
    dataPersona.splice(position,1);
    document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
    buttonChange();
    storageListPerson();
}

const actionUpdate =(dni) =>{
    let position = filterDniOne(dni,dataPersona);
    console.log(dataPersona[position]);
    positionPerson = position;
    document.getElementById("firstName").value = dataPersona[position].firstName;
    document.getElementById("lastName").value = dataPersona[position].lastName;
    document.getElementById("birthday").value = dataPersona[position].birthday;
    document.getElementById("address").value = dataPersona[position].address;
    document.getElementById("status").value = dataPersona[position].status;
    document.getElementById("dni").value = dataPersona[position].dni

    buttonChange(true);
}

const editFormPerson = () =>{

    let person =  dataPersona[positionPerson];
    let dni = document.getElementById("dni");

    if (filterDniOne(dni.value, dataPersona) == -1 || filterDniOne(dni.value, dataPersona) == positionPerson ) {
        //positionPerson 
        person.dni = document.getElementById("dni").value;
        person.firstName= document.getElementById("firstName").value;
        person.lastName= document.getElementById("lastName").value;
        person.birthday= document.getElementById("birthday").value;
        person.address= document.getElementById("address").value;
        person.status = document.getElementById("status").value;
        buttonChange();
        storageListPerson();
        document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
        dni.focus();
        messageAlert("DATOS GUARDADOS", "success");
    }
    else {
        messageAlert("ERROR DATOS REPETIDOS", "error")
        dni.focus();
    }

}
const buttonChange = (active = false) =>{
    let form =  document.getElementById('formPerson');
    if(active){
        btnAdd.innerHTML ="Editar Datos";
        btnAdd.classList.remove("btn-danger");
        btnAdd.classList.add("btn-success");
        form.removeAttribute('onsubmit');
        form.setAttribute('onsubmit',"event.preventDefault();editFormPerson()");
    }
    else{
        btnAdd.innerHTML ="Agregar";
        btnAdd.classList.add("btn-danger");
        btnAdd.classList.remove("btn-success");
        form.reset();
        form.removeAttribute('onsubmit');
        form.setAttribute('onsubmit',"event.preventDefault();addFormPersona()");
       
    }
    
}


const storageListPerson = () =>{
    let stringObj = JSON.stringify(dataPersona);
    localStorage.setItem("person",stringObj);
}
const listStoraListPerson = () =>{
    let objectString = localStorage.getItem("person");
    console.log(objectString);
    if(objectString != null){
        objectString = JSON.parse(objectString);
        dataPersona = objectString;
        document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
    }
}

listStoraListPerson();

/** WEB STORAGE
 * ALMACENAMIENTO LOCAL - ALMACENAMIENTO EN SESSION
 * LOCALSTORAGE - SESIONSTORAGE
 * setItem('key -  nombre atributo', valor);
 * getItem('key - nombre atributo');
 * removeItem('key - nombre atributo');
 * clear();
 */

//localStorage.setItem('ejemplo',"prueba........");
//sessionStorage.setItem('ejemplo',"prueba.....");

//console.log(localStorage.getItem("ejemplo"));
//localStorage.removeItem("ejemplo");