"use client"
import { MouseEvent } from "react"

import toast from "react-hot-toast"
export default function SignInButton(){
    const handleClick=((e:MouseEvent<HTMLButtonElement>)=>{
        toast("ClickButton",{id:"clickLogin"})
        console.log(e)
    })
    return(<button className="w-full mt-5 col-span-2 font-bold hover:text-white hover:bg-green-500 p-2 border-4 border-green-500 rounded-lg box-border transition" onClick={handleClick}>Enviar</button>)
}