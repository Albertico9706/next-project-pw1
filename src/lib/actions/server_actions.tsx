"use server"
import { Job } from "@prisma/client"
import { User } from "@prisma/client"
import { redirect } from "next/navigation"
import prisma from "../prisma"
import { createToken, signinUser } from "../utils/session_actions"
import bcrypt from "bcrypt" 
import {z, ZodAny, ZodObject, ZodTypeAny} from "zod"
import { revalidatePath } from "next/cache"

export const hitRediret=(url:string)=>{
    redirect(url)
}
const CreateUserSchema=z.object({
    name:z.string().min(5).max(20),
    password:z.string().min(5)
})



const CreateJobSchema=z.object({jobTitle:z.string(),
    jobLevel:z.string(),
    companyLogo:z.string(),
    companyName:z.string(),
    jobDescription:z.string(),
    jobGeo:z.string()
})

const schemas={
    user:CreateUserSchema,
    job:CreateJobSchema
} as const

export type ValidatedState<T>={
    success:boolean,
    error?:FlattenOptional<T>
    data?:Partial<T>
}

type FlattenOptional<T>=RecordOptional<T,string[]|undefined>
type RecordOptional<T,P>={[K in keyof T]?:P}
export type ValidatingAction<T>=(state:ValidatedState<T>, formData:FormData)=>Promise<ValidatedState<T>>
export type FormAuthAction=(state:ValidatedState<User>,form:FormData)=>Promise<ValidatedState<User>>
export type CreateJobAction=(state:ValidatedState<Job>,form:FormData)=>Promise<ValidatedState<Job>>

enum Errors{
    auth="El usuario o la contraseña son incorrectos",
}


type ZodCustomSchema<T>=T extends ZodTypeAny? T:never

export async function formControllerAction<T>(state: ValidatedState<z.infer<ZodCustomSchema<T>>>,formData:FormData):Promise<ValidatedState<T>>{

throw new Error("Este metodo no esta implementado todavía")
}


export const formLoginAction:ValidatingAction<User>=async (state,formData)=>{
    validData(formData,CreateJobSchema)
    const output={success:false,error:{name:[Errors.auth],password:[Errors.auth]}}
    const entries=Object.fromEntries(formData.entries())
    const isValid=CreateUserSchema.safeParse(entries)
    if(!isValid.success)return {success:false, error:isValid.error?.flatten().fieldErrors} 
    const {name,password}=isValid.data
    const user=await prisma.user.findFirst({where:{name}})
    if(!user) return output
    console.log(entries) 
    const isPassword=bcrypt.compareSync(password,user?.password)
    if(!isPassword) return output
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
    const isValid=CreateUserSchema.safeParse(entries) 
    if(!isValid.success)return {success:false ,error:isValid.error.flatten().fieldErrors }
    const {name, password}=entries
    await signinUser({_name:name.toString(),_password:password.toString()})
    return {success:true}
}

export const actionCreateJob:ValidatingAction<Job>=async(state,formData)=>{
    "use server"
const entries=Object.fromEntries(formData.entries())
const job=schemas.job.safeParse(entries)
if(!job.success) return {success:false ,error:job.error.flatten().fieldErrors }
revalidatePath("/admin")
const JobStore=prisma.job
const newJob=await JobStore.create({data:job.data})
console.log(newJob)
return {success:true,data:job.data}

}


const validData=(formData:FormData,schema:ReturnType<typeof z.object>)=>{
    return schema.safeParse(formData)
    
}






/* const step=async()=>{
    const start=new Date().getTime()
    setTimeout(()=>{
        const delay=new Date().getTime()
        console.log(delay-start)
        
    
     },3000)
} */