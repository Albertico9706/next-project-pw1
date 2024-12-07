"use server"
import { revalidatePath } from "next/cache"
import prisma from "../prisma"
export async function deleteJob(id:number){
    try{
        await prisma.job.delete({where:{id:Number(id)}})
        revalidatePath("/admin")

    }catch(error){
        if (error instanceof Error)console.log(error.message)
        
    }
}

export async function getJob(id:number){
    const job=await prisma.job.findFirst({where:{id:id}})
    return job
}