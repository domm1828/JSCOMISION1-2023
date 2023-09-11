'use client'
import { useThemeContext } from "../context/theme";

const contactPage = ()=>{
    const {color,setColor} = useThemeContext();
return(
    <div className={color}>
    <div className="p-8 h-screen">
        <h1 className="text-4xl py-4">Contactos Page</h1>
    <p>Color: {color}</p>
        <button onClick={()=>{
            setColor('bg-red-700')
        }}>Cambiar color</button>
    </div>
    </div>
);
}
export default contactPage;