import Image from "next/image"
import { Job } from "@prisma/client"
import { CalenDate } from "@/components/pw1/icons/AllSvg"
import { Location } from "@/components/pw1/icons/AllSvg"
import Link from "next/link"
type Props={job:Job}

export default function CardJob({job}:Props){  
    return(
        <div className="p-8 bg-white shadow card dark:bg-slate-900">
            <CardJobTitle job={job}/>
            <div className="card-body">{job.jobExcerpt&&<p>{excerptFormat(job.jobExcerpt)}</p>}</div>
            <div className="card-actions flex justify-between items-center"> 
                <p className="flex"><Location/>{job.jobGeo}</p>    
                <Link href={`/works/${job.id.toString()}`} className="btn btn-secondary ">Ver Detalles <span className="rotate-90">^</span> </Link>
            </div>
        </div>
    )
}


export function CardJobTitle({job}:Props){
    
    return(
        <div className="card-title  flex justify-between">
                <div className="flex gap-4 items-center">
                    <picture>
                    {job.companyLogo&&<Image width="40" height={40} alt="Logo de la compañía" title="Logo de la compañía" src={job.companyLogo} />}
                    </picture>
                    <div><h6>{job.companyName}</h6>
                    <h6 ><b>{job.jobTitle}</b></h6></div>
                </div>
                {job.pubDate&&<span className="flex gap-2"><CalenDate/>{TenDate(job.pubDate)}</span>}
        </div>
    )
}

export function TenDate(date:string){
 const ten=new Date(date)
 return(ten.toLocaleString().split(",").at(0))
}

export function excerptFormat(excerpt:string){
    const base=excerpt?.split("&#").join()
    return base?.slice(0,-5).concat("...")
}