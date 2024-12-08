import CreateJob from "@/components/pw1/crudElements/CreateJob"
import ModifyButtons from "@/components/pw1/crudElements/ModifyButtons"
import prisma from "@/lib/prisma"
import { Job } from "@prisma/client"
import Image from "next/image"



export default async function JobTable(){
    const jobs =await prisma.job.findMany()
    return(
    <>
    <table className="max-md:max-w-md table relative  divide-y overflow-auto even:*:bg-blue-100/40 ">
        <tr className="sticky top-12 h-24 bg-blue-50 dark:bg-slate-950 ">
            <th>Id</th><th>Image</th><th>Compañía</th><th>Título</th><th>Nivel</th><th>Localización</th><th>Fecha</th><th></th>
        </tr>
        {jobs.map((job)=>{
            return <JobRow key={job.id} job={job}/>
        })}
    </table>
    <CreateJob/>
    </>
    )
}

export  function JobRow({job}:{job:Job}){
    const{id,pubDate,jobTitle,companyName,companyLogo,jobGeo,jobLevel}=job
    return(
    <tr className="">
        <td>{id}</td>
        <td>{companyLogo&& <Image alt="Logo de la compañía" width={40} height={40} src={companyLogo}/>}</td>
        <td>{companyName}</td>
        <td>{jobTitle}</td>
        <td>{jobLevel}</td>
        <td>{jobGeo}</td>
        <td>{pubDate}</td>
        <td className="flex gap-2 items-center"><ModifyButtons id={id}/></td>
    </tr>)
}

