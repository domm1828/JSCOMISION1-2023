/*let h1Dom = document.querySelector("h1");
console.log(h1Dom.innerHTML)
h1Dom.innerHTML ="<span>hola</span> <div>ejemplo</div>HOLA";
h1Dom.setAttribute("id","ejemplo");

let h1DomAll = document.querySelectorAll("h1");
console.log(h1DomAll);
h1DomAll[2].classList.add('green');

h1DomAll.forEach((elemnt,index)=>{
    if(index ==2){
        elemnt.classList.add('green')
    }
    console.log(elemnt);
});

let listElement = document.querySelector(".list");
let inputList = document.getElementById("textItem");
let btnAdd2 = document.querySelector("#agregar");
*/

agregarElement = () =>{
   /* let list =`<li>${inputList.value}</li>`;
    listElement.innerHTML = listElement.innerHTML + list;*/
    let list = document.createElement('li');
        list.textContent = inputList.value;
    listElement.appendChild(list);
    inputList.value='';
}

//btnAdd2.addEventListener("click",agregarElement);

/** AQUI, AGREGAR LISTA DE ELEMENTO EN UN ARRAY */

let listElementsArray = [];
let listadoElementos = document.querySelector("#listadoElementos");
let addElemts = document.getElementById("addElemts");
let updateElemts= document.getElementById("updateElemts");
let positionElement = 0;

let addElementsArray = (elements) =>{
    listElementsArray.push(elements);
}

let mostarElementos = ()=>{
    let textElemt ='';
    listElementsArray.forEach((element,position)=>{
        textElemt += `<tr><td>#${position} => ${element}</td><td>
        <button type="button" onclick="deleteButton('${element}')">Eliminar</button>
        <button type="button" onclick="editarButton('${element}')">Editar</button>
        </td></tr>`;
    });
    listadoElementos.innerHTML = textElemt;
}

let filterElement = (elementBuscar) =>{
    return listElementsArray.findIndex((element)=>{
        return element == elementBuscar;
    })
}

let addButtonList = () =>{
    let listInput = document.getElementById('listInput');
    let textInput = listInput.value;
    textInput = textInput.trim();
   // if(textInput.length > 0 && !listElementsArray.includes(textInput)){
    if(textInput.length > 0 && filterElement(textInput) == -1){
        addElementsArray(textInput);
        listInput.value='';
        listInput.focus();
        mostarElementos();
        console.table(listElementsArray)
    }
    else{
        alert("ERROR INGRESE TEXTO..")
    }
    
}

let deleteButton = (element) =>{
    let position = filterElement(element);
    listElementsArray.splice(position,1);
    mostarElementos();
}

let editarButton = (element) =>{
    let listInput = document.getElementById('listInput');
    listInput.value = element;
    positionElement =  filterElement(element);
    showHiddenButton(2);
}

let showHiddenButton = (mostar)=>{
    if(mostar ==1){
        addElemts.classList.remove('oculto');
        updateElemts.classList.add('oculto');
    }
    else{
        addElemts.classList.add('oculto');
        updateElemts.classList.remove('oculto');
    }
}
let modificarButton = () =>{

    let listInput = document.getElementById('listInput');
    let textInput = listInput.value;
    textInput = textInput.trim();
    console.log(filterElement(textInput))
    console.log(positionElement)
   // if(textInput.length > 0 && !listElementsArray.includes(textInput)){
    if(textInput.length > 0 && (filterElement(textInput) == -1 || filterElement(textInput) == positionElement) ){
        listElementsArray[positionElement] = textInput;
        listInput.value='';
        listInput.focus();
        mostarElementos();
        showHiddenButton(1);
    }
    else{
        alert("ERROR INGRESE TEXTO..")
    }

}