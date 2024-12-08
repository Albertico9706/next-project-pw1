"use server"

import { redirect } from "next/navigation"
import prisma from "../prisma"
import { createToken } from "../utils/session_actions"
import bcrypt from "bcrypt" 
import {z} from "zod"

const FormSchema=z.object(
    {
        username:z.string().min(5).max(20),
        password:z.string().min(5)
    }
)
type FormEntries=z.infer<typeof FormSchema>

export const hitRediret=(url:string)=>{
    redirect(url)
}

export const formLoginAction=async(state:null|string,form:FormData)=>{
    const entries=Object.fromEntries(form.entries()) as FormEntries
    const {username,password}=FormSchema.parse(entries)
    const user=await prisma.user.findFirst({where:{name:username}})
    if(!user) return "El usuario o la contraseña son incorrectos"
    console.log(entries) 
    const isPassword=bcrypt.compareSync(password,user?.password)
    if(!isPassword) return "El usuario o la contraseña son incorrectos"
    const {id,role,name}=user
    const tokenData={id:id.toString(),role,name}
    createToken(tokenData)
    console.log("login",tokenData)
    await step()
    redirect("/")
    return(null)
    
}

const step=async()=>{
    const start=new Date().getTime()
    setTimeout(()=>{
        const delay=new Date().getTime()
        console.log(delay-start)
        
    
     },3000)
}