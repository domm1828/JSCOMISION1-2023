const functionOne = ()=>{
    setTimeout(()=>{
        console.log("function One")
    },1000);
}
const functionTwo = () =>{
    setTimeout(()=>{
        console.log("function two")
    },0);
    functionOne();
    console.log("Ejeucion");
}

functionTwo();

functionOne();

const list = ["A","B","C",3];
const listAction = (element, index)=>{
    console.log(`${element}  ${index}`)
}
list.forEach(listAction);


list.forEach((element, index)=>{
    console.log(`${element}  ${index}`)
});


//metodo calback para lanzamiento de dados cuantas veces se va a repetir

const dado = (lanzamiento, callback) =>{
    const numeros = [];
    for(let i=0; i < lanzamiento; i++){
        const radomDado =  Math.floor(Math.random()* 6 + 1);
        numeros.push(radomDado);
        if(radomDado === 10){
            callback({error:true,message:"Saco Seis"});
            return;
        }
    }
    callback(null,{error:false,data:numeros});
    return;
}
const ejemplo = (err , result)=>{
    if(err){
        console.error(`${err.message}`)
        return;
    } 
    console.log(`${result.data}`)
}

dado(50,ejemplo)

/** PROMESAS 
 * las promesas se cumple ( promesa resuelta)
 * las promesas no se cumplen ( promesa rechazada)
 * las promesas indefinidas (promesas pendiente)
 * 
 * then() catch() finally()
 */
//fetch 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error=> console.log(error));

//Promise

const dadoPromise =(lanzamiento)=>{
    return new Promise((resolve,reject)=>{
        const numeros = [];
        for(let i=0; i < lanzamiento; i++){
            const radomDado =  Math.floor(Math.random()* 6 + 1);
            numeros.push(radomDado);
            if(radomDado === 2){
                reject({error:true,message:"Saco Seis"}); 
            }
        }
        resolve({error:false,data:numeros}); 
    })
}

dadoPromise(15).then(result=>console.log(`${result.data}`))
               .catch(error=>console.error(`${error.message}`))