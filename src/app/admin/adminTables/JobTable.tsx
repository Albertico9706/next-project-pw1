import CreateJob from "@/components/pw1/crudElements/CreateJob"
import ModifyButtons from "@/components/pw1/crudElements/ModifyButtons"
import prisma from "@/lib/prisma"
import { Job } from "@prisma/client"
import Image from "next/image"

//Filtrado por cada campo y ordenar segun el campo tambien

export default async function JobTable(){
    const jobs =await prisma.job.findMany()
    jobs.sort((a,b)=>{
        return a.id - b.id
    })
    const columns=["Id","Image","Compañía","Titulo","Nivel","Localización","Fecha"]
    return(
    <>
    <table className="max-md:max-w-md table relative table-pin-rows  divide-y overflow-auto even:*:*:bg-blue-100/40 ">
        <thead className="mt-40">
            <HeadJobTable columns={columns}/>
        </thead>
        <tbody>
            {jobs.map((job)=>{
                console.log(job.id)
                return <JobRow key={job.id} job={job}/>
            })}
        </tbody>
    </table>
    <CreateJob/>
    <div className="join fixed top-16 z-20 right-1/2  group">
        <div className="  peer">Firter by</div>
        <select name="" id="">
            <option selected value="">Filter</option>
        {columns.map((col,i)=>{
                return <option key={i}>{col}</option>
            })}
        </select>
    </div>
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

function HeadJobTable({columns}:{columns:string[]}){
    return(
        <tr className=" bg-blue-50 dark:bg-slate-950 ">
            {columns.map((col,i)=>{
                return <th key={i}>{col}</th>
            })}
        <th className="join" ></th>
        </tr>
    )
}

const compareId=(a:Job,b:Job)=>{
    return a.id - b.id
}

const compareDate=(a:Job,b:Job)=>{
    if(!(a.pubDate&&b.pubDate))return Infinity
    return (new Date(a.pubDate).getTime()-new Date(b.pubDate).getTime())
}


function SearchFloating(){
    return(
        <div className="join fixed top-32 right-8  group">
        <div className="  peer">Firter by</div>
        <input type="search" placeholder="Search..." className=" group-focus:w-32 transition duration-1000 w-24 join-item input input-xs input-bordered" /> 
    </div>
    )
}

