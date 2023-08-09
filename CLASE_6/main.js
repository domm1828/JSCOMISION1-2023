let dataPersona = [];
let alertError = document.getElementById("alertError")

alertError.classList.add("d-none");

const addDataPersona = (firstName, lastName, birthday, address, status, orientation = true) => {
    let person = {
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

    if (validarDatos(firstName.value, "firstName") && validarDatos(lastName.value, "lastName") &&
        validarDatos(birthday.value, "birthday") && validarDatos(address.value, "address")
        && validarDatos(status.value, "status")) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value);
        firstName.value = "";
        lastName.value = "";
        birthday.value = "";
        address.value = "";
        status.value = "";

    }
    else {
        alertError.innerHTML = "<b>Verifique los datos</b>";
        alertError.classList.remove('d-none');
    }
    console.table(dataPersona);
}

const validarDatos = (validar, id) => {
    let validcion = validar.length > 0 ? true : false;
    if (!validcion) { document.getElementById(id).classList.add("error"); 
                      document.getElementById(id).focus(); }
    else {
        document.getElementById(id).classList.remove("error");
    }
    return validcion;
}

/** 1.- actividad evaluar que el formulario no este vacio, y no permita caracteres 
 * blanco.
 *  2.- Evitar duplicidad de Datos.
 */