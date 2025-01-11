"use server"
import { User } from "@prisma/client"
import { redirect } from "next/navigation"
import prisma from "../prisma"
import { createToken, signinUser } from "../utils/session_actions"
import bcrypt from "bcrypt" 
import { z , ZodTypeAny} from "zod"
import { revalidatePath } from "next/cache"
import { FlattenOptional ,ValidatingAction} from "../types"
import { Errors } from "../types"

export const hitRediret=(url:string)=>{
    redirect(url)
}
const CreateUserSchema=z.object({
    name:z.string().max(20),
    password:z.string().min(4)
})

const CreateJobSchema=z.object({jobTitle:z.string(),
    jobLevel:z.string(),
    companyLogo:z.string(),
    companyName:z.string(),
    jobDescription:z.string(),
    jobGeo:z.string()
})

const UpdateUserSchema=z.object({jobTitle:z.string().optional(),
    id:z.coerce.number(),
    jobLevel:z.string(),
    companyLogo:z.string(),
    companyName:z.string(),
    jobDescription:z.string(),
    jobGeo:z.string()
}).partial()

const schemas={
    user:CreateUserSchema,
    job:CreateJobSchema
} as const

export type ValidatedState<T>={
    success:false,
    error:FlattenOptional<T>,
    message?:string
}|{
    success:true,
    data?:Partial<T>
}


type ZodCustomSchema<T>=T extends ZodTypeAny? T:never
/* eslint-disable no-unused-vars */
export async function formControllerAction<T>(state: ValidatedState<z.infer<ZodCustomSchema<T>>>,formData:FormData):Promise<ValidatedState<T>>{
/* eslint-enble no-unused-vars */
throw new Error("Este metodo no esta implementado todavía")
}


export const formLoginAction:ValidatingAction<User>=async (state,formData)=>{
    state&& console.log()
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
    state&& console.log()
    const entries=Object.fromEntries(formData.entries())
    const isValid=CreateUserSchema.safeParse(entries) 
    if(!isValid.success)return {success:false ,error:isValid.error.flatten().fieldErrors }
    const {name, password}=entries
    await signinUser({_name:name.toString(),_password:password.toString()})
    return {success:true}
}

export const actionCreateJob:ValidatingAction<z.infer<typeof UpdateUserSchema>>=async(state,formData)=>{
    "use server"
    state&& console.log()
const entries=Object.fromEntries(formData.entries())
const job=schemas.job.safeParse(entries)
if(!job.success) return {success:false ,error:job.error.flatten().fieldErrors }
revalidatePath("/admin")
const JobStore=prisma.job
const newJob=await JobStore.create({data:job.data})
console.log(newJob)
return {success:true,data:job.data}

}

export const actionUpdateJob:ValidatingAction<z.infer<typeof UpdateUserSchema>>=async(state,formData)=>{
    "use server"
    state&& console.log()
const entries=Object.fromEntries(formData.entries())
console.log(entries)
const job=UpdateUserSchema.safeParse(entries)

if(!job.success) return {success:false ,error:job.error.flatten().fieldErrors }
revalidatePath("/admin")
const JobStore=prisma.job
const data=job.data
const update= await JobStore.update(
    {where:{id:data.id}
    ,data:{...data}})
update&&console.log()
return {success:true,data:job.data}

}


const validData=(formData:FormData,schema:ReturnType<typeof z.object>)=>{
    return schema.safeParse(formData)
    
}
