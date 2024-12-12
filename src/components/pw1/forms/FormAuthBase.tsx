"use client"

import { FormAuthAction } from "@/lib/actions/server_actions"
import { useFormState } from "react-dom"
import toast from "react-hot-toast"

export default async function  FormAuthBase({formActionParameter,sign=false}:{formActionParameter:FormAuthAction,sign?:boolean}){
    
    const[state,formAction,isPending]=useFormState(formActionParameter ,{success:false})
    const {error,success,data}=state
    const btnMessage=sign? "Registrar":"Iniciar"   
    success&& toast(`Exito al ${btnMessage.toLowerCase()} sesión`,{id:"success"})
        return(<div className="mt-20">
            <form action={formAction}  className=" dark:bg-slate-700 p-8 py-4  max-w-md mx-auto disabled has:invalid:bg-red-500 shadow shadow-neutral-500">
            <legend className="text-3xl py-4 text-center"><h1>{btnMessage} Sesión</h1></legend>
            <div className="flex flex-col">
                    <label className="">User:</label> 
                    <input required className=" input-secondary peer" minLength={3}  name="name" id="name" type="text" />
                    <small  className="text-xs peer-invalid:text-red-600 ">Al menos 3 caracteres</small>
                    {error&&<p>{error.name}</p>}
                    <label className=""  >Password:</label>
                    <input  minLength={4} className="input-scondary peer" name="password" id="password" type="password"/>
                    <small  className="text-xs peer-invalid:text-red-600 ">Al menos 4 caracteres</small>
                    {error&&<p>{error.password}</p>}
                    <button className="btn-primary peer-invalid:btn-disabled  peer-invalid:btn-error btn p-1.5 mt-8 ">{isPending?"Loading":btnMessage}</button>
                    <div className="flex flex-col place-items-center p-1  ">
                        <a className="anchor" href="/sign_in">Inicia sesion aqui</a>
                        <a className="anchor" href="/forget_password">Recupera tu contraseña</a>
                    </div>
                    {data&& data.name}
            </div>
        </form>
        </div>)
    }