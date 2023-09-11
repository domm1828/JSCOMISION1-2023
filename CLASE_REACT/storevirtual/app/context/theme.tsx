'use client'

import { createContext,useState,useContext } from "react";


const ThemeContext = createContext({});

export const ThemeContextProvider =({children})=>{
    const [color, setColor] = useState('bg-black');

    return (
        <ThemeContext.Provider value={{color, setColor}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext)