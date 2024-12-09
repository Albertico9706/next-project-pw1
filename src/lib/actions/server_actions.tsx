"use server"

import { redirect } from "next/navigation"
import prisma from "../prisma"
import { createToken, signinUser } from "../utils/session_actions"
import bcrypt from "bcrypt" 
import {z} from "zod"

export const hitRediret=(url:string)=>{
    redirect(url)
}
const FormSchema=z.object({
    name:z.string().min(5).max(20),
    password:z.string().min(5)
}
)
export type AuthEntries=z.infer<typeof FormSchema>
export type FormAuthAction=(state:StateAuthAction,form:FormData)=>Promise<StateAuthAction>
type StateAuthAction=null|string|AuthFlatten
type RecordOptional<T,P>={[K in keyof T]?:P}
type AuthFlatten=RecordOptional<AuthEntries,string[]|undefined>
enum Errors{
    auth="El usuario o la contraseña son incorrectos"
}

export async function  formLoginAction(state:StateAuthAction,form:FormData){
    const entries=Object.fromEntries(form.entries())
    const isValid=FormSchema.safeParse(entries)
    if(!isValid.success)return isValid.error?.flatten().fieldErrors
    const {name,password}=isValid.data
    const user=await prisma.user.findFirst({where:{name}})
    if(!user) return Errors.auth
    console.log(entries) 
    const isPassword=bcrypt.compareSync(password,user?.password)
    if(!isPassword) return Errors.auth
    const {id,role}=user
    const tokenData={id:id.toString(),role,name}
    createToken(tokenData)
    console.log("login",tokenData)
    redirect("/")
    return(null)
    
}


export const formSignAction=async (state:StateAuthAction,formData:FormData)=>{
    "use server"
    const entries=Object.fromEntries(formData.entries())
    const isValid=FormSchema.safeParse(entries) 
    if(!isValid.success)return isValid.error.flatten().fieldErrors
    const {name, password}=entries
    await signinUser({_name:name.toString(),_password:password.toString()})
    return null
}

/* const step=async()=>{
    const start=new Date().getTime()
    setTimeout(()=>{
        const delay=new Date().getTime()
        console.log(delay-start)
        
    
     },3000)
} */