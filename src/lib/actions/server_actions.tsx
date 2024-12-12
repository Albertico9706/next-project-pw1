"use server"
import { Job } from "@prisma/client"
import { User } from "@prisma/client"
import { redirect } from "next/navigation"
import prisma from "../prisma"
import { createToken, signinUser } from "../utils/session_actions"
import bcrypt from "bcrypt" 
import {z} from "zod"
import { error } from "console"

export const hitRediret=(url:string)=>{
    redirect(url)
}
const FormSchema=z.object({
    name:z.string().min(5).max(20),
    password:z.string().min(5)
})

type ValidatedState<T>={
    success:boolean,
    error?:FlattenOptional<T>
    data?:Partial<T>
}

const CreateJobSchema=z.object({jobTitle:z.string(),
    jobLevel:z.string(),
    companyLogo:z.string(),
    companyName:z.string(),
    jobDescription:z.string(),
    jobGeo:z.string()
})

export type ValidatingAction<T>=(state:ValidatedState<T>, formData:FormData)=>Promise<ValidatedState<T>>
export type AuthEntries=z.output<typeof FormSchema>
export type FormAuthAction=(state:ValidatedState<User>,form:FormData)=>Promise<ValidatedState<User>>
export type CreateJobAction=(state:ValidatedState<Job>,form:FormData)=>Promise<ValidatedState<Job>>

type StateAuthAction=null|string|AuthFlatten
type RecordOptional<T,P>={[K in keyof T]?:P}
type AuthFlatten=FlattenOptional<AuthEntries>
type FlattenOptional<T>=RecordOptional<T,string[]|undefined>
enum Errors{
    auth="El usuario o la contraseña son incorrectos"
}

export const formLoginAction:ValidatingAction<User>=async (state,formData)=>{
    const entries=Object.fromEntries(formData.entries())
    const isValid=FormSchema.safeParse(entries)
    if(!isValid.success)return {success:false, error:isValid.error?.flatten().fieldErrors} 
    const {name,password}=isValid.data
    const user=await prisma.user.findFirst({where:{name}})
    if(!user) return {success:false,error:{name:[Errors.auth],password:[Errors.auth]}}
    console.log(entries) 
    const isPassword=bcrypt.compareSync(password,user?.password)
    if(!isPassword) return {success:false,error:{name:[Errors.auth],password:[Errors.auth]}}
    const {id,role}=user
    const tokenData={id:id.toString(),role,name}
    createToken(tokenData)
    console.log("login",tokenData)
    redirect("/")
    return({success:true,data:isValid.data})
    
}


export const formSignAction:ValidatingAction<User>=async (state,formData)=>{
    "use server"
    const entries=Object.fromEntries(formData.entries())
    const isValid=FormSchema.safeParse(entries) 
    if(!isValid.success)return {success:false ,error:isValid.error.flatten().fieldErrors }
    const {name, password}=entries
    await signinUser({_name:name.toString(),_password:password.toString()})
    return {success:true}
}

export const actionCreateJob:ValidatingAction<Job>=async(state,formData)=>{
    "use server"
const entries=Object.fromEntries(formData.entries())
const job=CreateJobSchema.safeParse(entries)
if(!job.success) return {success:false ,error:job.error.flatten().fieldErrors }
const JobStore=prisma.job
const newJob=await JobStore.create({data:job.data})
console.log(newJob)
return {success:true,data:job.data}

}

const validateJobs=(formData:FormData)=>{
    const entries=Object.fromEntries(formData.entries())
    const job=CreateJobSchema.safeParse(entries)
    if(!job.success) return job.error.flatten().fieldErrors
    return job.data
    }




/* const step=async()=>{
    const start=new Date().getTime()
    setTimeout(()=>{
        const delay=new Date().getTime()
        console.log(delay-start)
        
    
     },3000)
} */