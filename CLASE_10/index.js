/**ASINCRONIA METODOS
 * callbacks funcion que tiene recive otra funcion como parametro
 * promise se cumple, error, no se cumple
 * async (resuelve) / await (promesa)
 */
let ejemplo = ()=>{
    alert("hola...");
}
//setTimeout(ejemplo,1000);

setTimeout(()=>{
   // alert("hola...");
},2000);

const elements = [1,5,6,8,3,10];
elements.forEach((index,posicion)=>{
    console.log(index);
});

//repetir los Numero aleatorios hasta que de 10, el usuario debe ingresar la cantidad de repeticiones

const aleatorios = (repeticiones, callbacks) =>{
    let numeros = [];
    for(let i=0; i<repeticiones; i++){
        const numAl = Math.floor(Math.random()*repeticiones+1);
        numeros.push(numAl);
        if(numAl === 10){
            callbacks({error:true,message:"Salio 10...", numeros});
            return;
        }
    }
    return callbacks(null,{error:false,message:"exitoso",numeros})

}
//callbacks(error,bien)

aleatorios(10,(error,success)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(success);

})

//promesas 
/**
 * promesa se cumple promesa resuelta  then(resolve)
 * promesa no se cumple promesa rechazada catch(reject)
 * promesa indefinada promesa pendiente
 * finaliza la promesa finally(end)
 * then(resolve,reject)
 */

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
      .finally(()=>{ console.log("finalizada")});
/*
new Promise((resolve,reject)=>{

})*/

const aleatoriosPromise = (repeticiones)=>{
    return new Promise((resolve,reject)=>{
        let numeros = [];
        for(let i=0; i<repeticiones; i++){
            const numAl = Math.floor(Math.random()*repeticiones+1);
            numeros.push(numAl);
            if(numAl === 10){
                reject({error:true,message:"Salio 10...", numeros});
            }
        }
        resolve({error:false,message:"exitoso",numeros});
    })

}

aleatoriosPromise(14)
            .then((data)=>{
                console.log(data);
            }).catch((e)=>{
                console.error(e);
            })

