"use client"
import { MouseEvent } from "react"
import toast from "react-hot-toast"

type Props={
    register?:boolean
}

export default function FormLogin({register=false}:Props){


    const handleClick=((e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        toast("ClickButton",{id:"clickLogin"})
    })

return(
    <div className="mt-32 flex h-full [&_input]:ps-2 [&_input]:rounded [&_input]:mb-2 [&_input]:w-full [&_input:invalid]:outline-red-600 [&_label::after]:[content:'*'] [&_label::after]:text-red-600" >
        <form className="animate-fadeIn bg-white-50 p-8 gap-x-2 gap-y-4 mx-auto max-w-xs min-w-60  shadow-lg bg-blue-100 " >
        <legend className="text-2xl col-span-2 text-center pb-4">{register?"Registro":"Inicio"} de Sesion</legend>
        <label title="Requerido" htmlFor="">Usuario</label> <input  required type="text" name="username" id="username" placeholder="Username" />
        <label title="Requerido"  htmlFor="">Contraseña</label> <input required minLength={8} type="password" name="password" id="password" placeholder="Password" />
        <span className="text-sm">La contraseña de be tener al menos 8 caracteres</span>
        <button className="w-full mt-5 col-span-2 font-bold hover:text-white hover:bg-green-500 p-2 border-4 border-green-500 rounded-lg box-border transition" onClick={handleClick}>Enviar</button>
    </form>

    </div>
    )
}