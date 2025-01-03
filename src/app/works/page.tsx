import FormJob from "@/components/pw1/forms/FormJob"
import DialogModal from "@/components/pw1/DialogModal"
import ShowModalD from "@/components/pw1/ShowModalD"
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






export function CreateJob(){
    return(<div>
        <ShowModalD className="btn btn-success btn-square tooltip  fixed bottom-8 right-8 text-3xl text-white" data-tip="Añadir trabajo">
            +
        </ShowModalD>
        <DialogModal>
        <FormJob/>
        </DialogModal>
    </div>
        
    )
}


export const metadata:Metadata={
    title:"",
    description:""
}







