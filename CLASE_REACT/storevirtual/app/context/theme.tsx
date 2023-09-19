'use client'

import { createContext,useState,useContext } from "react";


const ThemeContext = createContext({});

export const ThemeContextProvider =({children})=>{
    const [color, setColor] = useState('bg-red-700');

    return (
        <ThemeContext.Provider value={{color, setColor}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext)