import prisma from "@/lib/prisma";
import { Job } from "@prisma/client";
import { dataJson } from "@/lib/jobs_data";



export async function GET(request:Request){
    const data=dataJson.jobs.map(({annualSalaryMax,annualSalaryMin,companyLogo,companyName,id,jobDescription,jobExcerpt,jobGeo,jobLevel,jobSlug,jobTitle,pubDate,salaryCurrency,url}:Job)=>{
        const restructuredData={annualSalaryMax,annualSalaryMin,companyLogo,companyName,id,jobDescription,jobExcerpt,jobGeo,jobLevel,jobSlug,jobTitle,pubDate,salaryCurrency,url}
        return restructuredData
    })
    const query=await prisma.job.createMany({data:data})
    console.log("Anñadidos %d elementons a la base de datos",query.count)
    return Response.json(data)
}

/* function destructuringJob(d){

} */
/* jobIndustry
jobType */