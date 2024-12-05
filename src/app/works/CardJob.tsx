import Image from "next/image"
import { Job } from "@prisma/client"
import { CalenDate } from "@/components/pw1/icons/hghgh"

type Props={job:Job}

export default function CardJob({job}:Props){

    const excerpt=job.jobExcerpt?.split("&#").at(0)?.concat("...")
    return(
        <div className="p-8 bg-white shadow card dark:bg-slate-900">
            <CardJobTitle job={job}/>
            <div className="card-body">
            <p>{excerpt}</p>
            {job.annualSalaryMin&& <p className="tooltip" data-tip="hello">Salario:<span>{job.annualSalaryMin}</span>-<span>{job.annualSalaryMax}</span></p> }
            {job.salaryCurrency&& <p>{job.salaryCurrency}</p>}
            </div>
            <div className="card-actions flex justify-between items-center"> 
                <p><b>Localización:</b>{job.jobGeo}</p>    
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
                <span className="flex gap-2"><CalenDate/>{job.pubDate}</span>
            </div>
    )
}