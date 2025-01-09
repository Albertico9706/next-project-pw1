"use client"
import { formLoginAction } from "@/lib/actions/server_actions";
import { FormAuthAction } from "@/lib/actions/server_actions";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { formSignAction } from "@/lib/actions/server_actions";

export  function FormLogin(){
    return(<FormAuthBase formActionIn={formLoginAction}/>)
}
export function FormSign(){
    return(<FormAuthBase formActionIn={formSignAction} sign/>)
}

type Props={formActionIn:FormAuthAction,sign?:boolean}

export async function  FormAuthBase({formActionIn,sign=false}:Props){
    
    const[state,formAction,isPending]=useFormState(formActionIn ,{success:false})
    const {error,success,data}=state
    const btnMessage=sign? "Registrar":"Iniciar"   
    success&& toast(`Exito al ${btnMessage.toLowerCase()} sesión`,{id:"success"})
        return(<div className="mt-20">
            <form action={formAction}  className=" dark:bg-slate-700 p-8 py-4  max-w-sm mx-auto disabled has:invalid:bg-red-500 shadow shadow-neutral-500">
            <legend className="text-3xl py-4 text-center"><h1>{btnMessage} Sesión</h1></legend>
            <div className="flex flex-col">
                    <label className="">User:</label> 
                    <input required className=" input-secondary peer-name]:" minLength={3}  name="name" id="name" type="text" />
                   {/*  <small  className="text-xs peer-[name]:invalid:text-red-600 ">Al menos 3 caracteres</small> */}
                    {error&&<p>{error.name}</p>}
                    <label className=""  >Password:</label>
                    <input  minLength={4} className="input-scondary peer-[pass]" name="password" id="password" type="password"/>
                   {/*  <small  className="text-xs peer/pass-invalid:text-red-600 ">Al menos 4 caracteres</small> */}
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