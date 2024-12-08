"use client"
import { formLoginAction } from "@/lib/actions/server_actions"
import { useState } from "react"
import { useFormState } from "react-dom"
import {z} from "zod"

/* import { useActionState } from "react" */
const FormSchema=z.object(
    {
        username:z.string().min(5).max(20),
        password:z.string().min(5)
    }
)



type FormSchemaData=z.infer<typeof FormSchema>
export default async function  FormNotes(){
    const [error,setError]=useState(null)
    
const[state,formAction,isPending]=useFormState(formLoginAction,null)
const isValidData=(formData:FormData)=>{
    const validate=FormSchema.safeParse(formData)
    if(!validate.success){
        console.log(validate.error.flatten().fieldErrors)
        console.log("false")
        return false
    }
    return true
    console.log("true")
}
   
    return(<div className="">
        <form action={formAction}  className=" dark:bg-slate-700 p-8 py-4  max-w-md mx-auto disabled has:invalid:bg-red-500 shadow shadow-neutral-500">
        <legend className="text-3xl py-4"><h1>Iniciar Sesión</h1></legend>
        <div className="flex flex-col">
                <label className="">User:</label> 
                <input required className=" input-secondary peer/user" minLength={3}  name="username" id="username" type="text" />
                <small  className="text-xs peer-invalid:text-red-600 ">Al menos 3 caracteres</small>
                <label className=""  >Password:</label>
                <input  minLength={4} className="input-scondary peer/pass" name="password" id="password" type="password"/>
                <small  className="text-xs peer-invalid:text-red-600 ">Al menos 4 caracteres</small>
                <button data-tooltip={"hello"} className="btn-primary tooltip peer-invalid:btn-disabled peer-invalid:outline peer-invalid:outline-red-500 peer-invalid:btn-error btn p-1.5 mt-8 ">{isPending?"Loading":"Iniciar"}</button>
                <div className="flex flex-col place-items-center p-1  ">
                    <a className="anchor" href="/sign_in">Inicia sesion aqui</a>
                    <a className="anchor" href="/forget_password">Recupera tu contraseña</a>
                </div>
                {state&& <p>{state}</p>}
        </div>
    </form>
    </div>)
}