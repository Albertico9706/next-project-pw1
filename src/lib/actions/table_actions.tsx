"use server"
import { revalidatePath } from "next/cache"
import prisma from "../prisma"
import { redirect } from "next/navigation"
type DeleteState={
    success:true,
    title:string
}|{
    success:false,
    message:string
}
export async function deleteJob(state:DeleteState|null,id:number):Promise<DeleteState|null>{
    try{
        const query=await prisma.job.delete({where:{id:Number(id)}})
        revalidatePath("/admin")
        redirect("/admin")
        return {success:true,title:query.jobTitle}
    }catch(error){
        if (error instanceof Error)console.log(error.message)
        return null
    }

}

export async function getJob(id:number){
    const job=await prisma.job.findFirst({where:{id:id}})
    return job
}