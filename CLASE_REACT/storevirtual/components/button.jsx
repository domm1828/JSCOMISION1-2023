import { Component } from "react";

/** declaracion de componentes usando React (components)
 * import component react
 * declaracion en forma de class
 * props datos que recibes del componet padre
 * hook => use no funcionan dentro del React.Component
 * state setState
 */
export default class Button extends Component{
    state ={
        nombre:'juan',
        edad:10
    }

    handleChangeEdad =()=>{
        this.setState({
            edad:40
        });
    }
    
    handleChangeName =(e)=>{
        this.setState({
            nombre: e.target.value
        });
    }

    render(){
        return (<>
        {this.props.children}
                <h3>Hola {this.props.name} = {this.props.valor}</h3>
                <h4> El nombre: {this.state.nombre} Edad: {this.state.edad}</h4>
                <input value={this.state.nombre} onChange={this.handleChangeName} />
                <button onClick={this.handleChangeEdad}> Cambiar Datos</button>
                </>
        );
    }
}