'use client';
import { useRouter } from "next/navigation";
import { useThemeContext } from "../context/theme";
// next/navigation 
const dashboardPage = ()=>{
    /** HOOKS useRouter object next/router */
    const router = useRouter();
   /* router.push("/contact");
    router.back();
    router.push({pathname:'/contact/:id',
                query:{id:1}}); // rutas dinamicas
    router.replace("/about");
*/

/** UseContext
 * createContext
 * Consume
 */

const {color,setColor} = useThemeContext();
return(<>
    {color}
    <div className="p-8 w-full h-screen">
        <h1 className="text-4xl py-4">Dashboard Page</h1>     
        <button onClick={()=>{
            router.push('/products')
        }}>Volver</button>  
    </div>
    </>
);
}
export default dashboardPage;