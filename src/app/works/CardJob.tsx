import Image from "next/image"
import { Job } from "@prisma/client"
import { CalenDate } from "@/components/pw1/icons/AllSvg"
import { Location } from "@/components/pw1/icons/AllSvg"

type Props={job:Job}

export default function CardJob({job}:Props){
    const date=job.pubDate? new Date(job.pubDate):job.pubDate
    
    return(
        <div className="p-8 bg-white shadow card dark:bg-slate-900">
            <CardJobTitle job={job}/>
            <div className="card-body">
            {job.jobExcerpt&&<p>{excerptFormat(job.jobExcerpt)}</p>}
            {/* {job.annualSalaryMin&& <p className="tooltip" data-tip="hello">Salario:<span>{job.annualSalaryMin}</span>-<span>{job.annualSalaryMax}</span></p> }
            {job.salaryCurrency&& <p>{job.salaryCurrency}</p>} */}
            </div>
            <div className="card-actions flex justify-between items-center"> 
            <p className="flex"><Location/>{job.jobGeo}</p>    
                <a href={`/works/${job.id.toString()}`} className="btn btn-secondary ">Ver Detalles <span className="rotate-90">^</span> </a>
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