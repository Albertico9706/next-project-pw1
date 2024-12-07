import prisma from "@/lib/prisma"
import { Job } from "@prisma/client"
import xss from "xss"
import { CardJobTitle } from "../CardJob"

export default async function  Page ({params:{id}}:{params:{id:string}}){
    const job=await prisma.job.findFirst({where:{id:Number(id)}})
    return(<>{job&& <SingleJob job={job}/>}</>)
}


function SingleJob({job}:{job:Job}){
    const element=job.jobDescription
    
    return(
        <div className="p-8">
            <CardJobTitle job={job}/>
            <p><b>Excert</b>:{job.jobExcerpt}</p>
            <p><b>Descripcción:</b></p> {element&& <ProvidedHtml content={element}/>}
            {job.annualSalaryMin&& <p className="tooltip" data-tip="hello">Salario:<span>{job.annualSalaryMin}</span>-<span>{job.annualSalaryMax}</span></p> }
             {job.salaryCurrency&& <p>{job.salaryCurrency}</p>}
        </div>
    )
}

/**
 * 
 * @param content Html content of thirds that can contain maliciosus 
 * @returns 
 */

function ProvidedHtml({content}:{content:string}){
    const cleanHtml=xss(content)
    return(
        <div dangerouslySetInnerHTML={{__html:cleanHtml}}
        ></div>
    )
}


 export async function generateStaticParams(){
    const jobs=await prisma.job.findMany()
    return jobs.map((job)=>{
        job.id
    })
} 

/* export async function generateMetada({params:{id}}:{params:{id:string}}){
const job=await prisma.job.findFirst({where:{id:Number(id)}})
    return(
        {
            title:`WorkRem-${job?.jobTitle}`,
            description:``
        }
    )
} */