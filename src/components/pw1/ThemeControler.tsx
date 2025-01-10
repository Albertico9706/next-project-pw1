"use client"

import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useTheme } from "next-themes";

export default function ThemeControler(){
    
    const {theme,setTheme}=useTheme()
    const dark=theme==="dark"
    const handleClick=()=>{       
        const newTheme= dark?"light":"dark"
        setTheme(newTheme)
    }
    return(<label onClick={handleClick} className="dark:text-white w-8 h-8 btn btn-circle p-1  btn-xs btn-outline">{dark?<Sun/>:<Moon/>}</label>)
} 