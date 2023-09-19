'use client'
import { useRef, useState } from "react";
import { InputForm } from "./inputForm";
export const Form = () =>{
    const inputRef = useRef(null);
    const ulRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState(false);



    const handleClick= () =>{
        inputRef.current.focus();
        ulRef.current.querySelectorAll("li")[0]
    }
    const handleClickVideo = ()=>{
        const play = !isPlay;
        setIsPlay(play);
        if(play){
            videoRef.current.play(); 
        }
        else{
            videoRef.current.pause();
        }
    }

    const enviar = ()=>{

    }
    return (
        <div className="p-8 ">
            <input ref={inputRef} />
            <button onClick={handleClick}> Accion Ref</button>

            <ul ref={ulRef}>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
            </ul>

            <button onClick={handleClickVideo}>{isPlay ? 'Stop' : 'Play' }</button>
            <video width='200' ref={videoRef}
            onPlay={()=>{setIsPlay(true)}}
            onPause={()=>{setIsPlay(false)}}>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4">
                </source>
            </video>
            {nombre} - {apellido}
            <form onSubmit={enviar}>
                { (error) && (<p>Hay un error</p>)}
                <InputForm etiqueta='Nombres Completos' placeholder='Ingrese el Nombre'
                clase='p-2 m-1' changeData={setNombre} value={nombre} error={setError} />
                <InputForm etiqueta='Apellidos Completos' placeholder='Apellidos el Nombre'
                clase='p-2 m-1' changeData={setApellido} value={apellido} error={setError} />
            </form>

        </div>
    );
}
