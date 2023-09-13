export const NewButton = () => {

    const x = 0;

const ejemplo = () =>{
        if (x == 1) {
            return <p>Si..</p>
        }
        else {
            return <p>No..</p>
        }
    }

const addElements = () =>{
    let arry= [];
    for(let i=0;i<=10;i++){
        arry.push(<li key={'hola_'+i}>{i}</li>)
    }
    return arry;
}


    return (
        <div>
            {ejemplo()}
            <p>HOLA DE PREUBA</p>
            <ul>{addElements()}</ul>
        </div>);
}