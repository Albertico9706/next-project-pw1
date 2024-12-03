import prisma from "@/lib/prisma"
import type { Job } from "@prisma/client"
import React from "react"
import xss from "xss"


export default async function Page(){
    return(
    <div className="">
        <JobsList/>
        <button className="btn btn-success btn-square tooltip  fixed bottom-8 right-8 text-3xl text-white" data-tip="Añadir trabajo">+</button>
    </div>)
}


async function JobsList(){
    const jobs=await prisma.job.findMany()
    return(
        <section className="p-16">
            {jobs.map((job)=>{
                return <SingleJob key={job.id} job={job}/>
            })}
        </section>
    )
}

function SingleJob({job}:{job:Job}){
    const element=job.jobDescription
    return(
        <div className="py-6">
            <h6><b>Title</b>: {job.jobTitle}</h6>
            <p><b>Excert</b>:{job.jobExcerpt}</p>
            <p><b>Descripcción:</b></p> <ProvidedHtml content={element}/>
            {job.annualSalaryMin&& <p className="tooltip" data-tip="hello">Salario:<span>{job.annualSalaryMin}</span>-<span>{job.annualSalaryMax}</span></p> }
            {job.salaryCurrency&& <p>{job.salaryCurrency}</p>}
        </div>
    )
}
function strToHtml(unparsed:string){
    const parser=new DOMParser()
    const doc=parser.parseFromString(unparsed,"text/html")
    return doc.body
}



function ProvidedHtml({content}:{content:string}){
    const cleanHtml=xss(content)
    return(
        <div dangerouslySetInnerHTML={{__html:cleanHtml}}
        ></div>
    )
}