let dataPersona = [];
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
                    <td><button onclick="actionDelete(${index})" class="btn btn-dark">Eliminar</button></td>
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

const actionDelete = (position) =>{
    dataPersona.splice(position,1);
    document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
}

/** 1.- REVISAR LA OPCION DE ELIMINAR QUE ELIMINE TANTO CUANDO ESTE FILTRADO DE MANERA CORRECTA.
 *  2.- CREAR LA OPCION DE EDITAR LA DATA
 */