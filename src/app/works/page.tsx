import prisma from "@/lib/prisma"
import CardJob from "./CardJob"
import { Metadata } from "next"


export default async function Page(){
    return(
    <div className="">
        <JobsList/>
    </div>)
}


async function JobsList(){
    const jobs=await prisma.job.findMany()
    return(
        <section className="p-16 *:my-8">
            {jobs.map((job)=>{
                return <CardJob key={job.id} job={job}/>
            })}
        </section>
    )
}









export const metadata:Metadata={
    title:"WorkRem",
    description:""
}







