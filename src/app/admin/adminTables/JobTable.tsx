
import ModifyButtons from "@/components/pw1/crudElements/ModifyButtons"
import prisma from "@/lib/prisma"
import { Job } from "@prisma/client"
import Image from "next/image"
import { columns } from "../page"
import { SelectColum } from "../page"
import Link from "next/link"
import ButtonDeleteJob from "../[forms]/ButtonDeleteJob"
//Filtrado por cada campo y ordenar segun el campo tambien

const baseUrl="/admin"

export default async function JobTable(){
    const jobs =await prisma.job.findMany()
    const cant=jobs.length
    jobs.sort((a,b)=>{
        return a.id - b.id
    })

    return(
    <>
    {/* Solo para ver el cantidad de elementos en la tabla */}
    <div className="btn fixed left-4 bottom-4 opacity-60 hover:opacity-100 z-10">{cant} Elementos en la tabla</div>
    <table className="max-md:max-w-md table relative table-pin-rows  divide-y overflow-auto even:*:*:bg-blue-100/40 ">
        <HeadJobTable columns={columns}/>
        <tbody>
            {jobs.map((job)=>{
                return <JobRow key={job.id} job={job}/>
            })}
        </tbody>
    </table>
    <Link className="btn btn-success btn-square tooltip  fixed bottom-8 right-8 text-3xl text-white" data-tip="Añadir trabajo" href={"/admin/create"}>+</Link>
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
        <td className="flex gap-2 items-center"><CrudElements id={id}/></td>
    </tr>)
}

function CrudElements({id}:{id:number}){
    return(
        <div className="flex">
            <Link href={`/admin/update/?id=${id}`} className="btn btn-xs btn-square">U</Link>
            <ButtonDeleteJob id={id}/>
        </div>
    )
}

function HeadJobTable({columns}:{columns:string[]}){
    return(
        <thead className="mt-40">
        <tr className=" bg-blue-50 dark:bg-slate-950 [th]:resize [th]:resize-x resize ">
            {columns.map((col,i)=>{
                return <th key={i}>{col}</th>
            })}
        <th className="join" ><SelectColum/></th>
        </tr>
         </thead>
    )
}




function SearchFloating(){
    return(
        <div className="join fixed top-32 right-8  group">
        <div className="  peer">Firter by</div>
        <input type="search" placeholder="Search..." className=" group-focus:w-32 duration-1000 w-24 join-item input input-xs input-bordered" /> 
    </div>
    )
}


