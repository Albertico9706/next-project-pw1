import prisma from "@/lib/prisma"
import { createToken } from "@/lib/utils/session_actions"
import bcrypt from "bcrypt" 
import { redirect } from "next/navigation"

export default async function  FormNotes(){
    
    type FormEntries={
        username:string,
        password:string
    }
    
    const formAction=async(form:FormData)=>{
        "use server"
        const entries=Object.fromEntries(form.entries()) as FormEntries
        const {username,password}=entries
        const user=await prisma.user.findFirst({where:{name:username}})
        if(!user) return 
        console.log(entries) 
        const isPassword=bcrypt.compareSync(password,user?.password)
        if(!isPassword) return
        const {id,role,name}=user
        const tokenData={id:id.toString(),role,name}
        createToken(tokenData)
        console.log("login",tokenData)
        redirect("/")
        
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
                <button data-tooltip={"hello"} className="btn-primary tooltip peer-invalid:btn-disabled peer-invalid:outline peer-invalid:outline-red-500 peer-invalid:btn-error btn p-1.5 mt-8 ">Iniciar</button>
                <div className="flex flex-col place-items-center p-1  ">
                    <a className="anchor" href="/sign_in">Inicia sesion aqui</a>
                    <a className="anchor" href="/forget_password">Recupera tu contraseña</a>
                </div>
        </div>
    </form>
    </div>)
}