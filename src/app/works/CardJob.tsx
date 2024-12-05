import Image from "next/image"
import { Job } from "@prisma/client"

type Props={job:Job}

export default function CardJob({job}:Props){
    return(
        <div className="p-8 bg-white shadow card dark:bg-slate-900">
            <CardJobTitle job={job}/>
            
            <div className="card-body">
            <p><b>Excert</b>:{job.jobExcerpt}</p>
            <p><b>Localización:</b>{job.jobGeo}</p>
            {job.annualSalaryMin&& <p className="tooltip" data-tip="hello">Salario:<span>{job.annualSalaryMin}</span>-<span>{job.annualSalaryMax}</span></p> }
            {job.salaryCurrency&& <p>{job.salaryCurrency}</p>}
            </div>
            <div className="card-actions flex justify-end"> <a href={`/works/${job.id.toString()}`} className="btn btn-secondary ">Ver Detalles <span className="rotate-90">^</span> </a></div>
        </div>
    )
}


export function CardJobTitle({job}:Props){
    return(
        <div className="card-title  flex justify-between">
                <div className="flex items-center">
                <picture>
                {job.companyLogo&&<Image width="40" height={40} alt="Logo de la compañía" title="Logo de la compañía" src={job.companyLogo} />}
                
                </picture>
                <div><h6>{job.companyName}</h6>
                    <h6 ><b>{job.jobTitle}</b></h6></div>
                </div>
                
                    <span>{job.pubDate}</span>
            </div>
    )
}