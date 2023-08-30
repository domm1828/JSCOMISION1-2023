const leerJson = async () =>{
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        data.products.forEach(element => {
            document.getElementById("list").innerHTML +=`<p>${element.title}<img src='${element.thumbnail}'></p>`; 
        });

        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
leerJson();