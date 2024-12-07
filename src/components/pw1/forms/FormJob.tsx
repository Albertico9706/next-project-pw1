import prisma from "@/lib/prisma"
import { Job } from "@prisma/client"

const formAction=async (formData:FormData)=>{
    "use server"
const entries=Object.fromEntries(formData.entries())
const {jobTitle,jobGeo,jobLevel,companyName,companyLogo,salaryCurrency,jobDescription}=entries
const values= {jobTitle,jobGeo,jobLevel,companyName,companyLogo,salaryCurrency,jobDescription} as Job
const validates=validateEntries(values) as Job
const JobStore=prisma.job
const newJob=await JobStore.create({data:validates})
console.log(newJob)

}
export type JobFormData={
 
} 

export default function FormJob(){
    return(
        <form action={formAction} className="*:w-full max-w-fit  flex flex-col items-start [&_input]:ps-2 [&_*:has(+required)]:text-red-700  [&_label]:label
        md:grid md:grid-cols-2">
            <label  htmlFor="">Titulo</label><input  required name="jobTitle" id="jobTitle" type="text" />
            <label htmlFor="">Localizacion</label><input  required name="jobGeo" id="jobGeo" type="text" />
            <label htmlFor="">Experiencia</label><input  required name="jobLevel" id="jobLevel" type="text" />
            <label htmlFor="">Nombre de la Compañia</label><input  required name="companyName" id="companyName" type="text" />
            <label htmlFor="">Logo de la Compañia</label><input  className="input-primary"  name="companyLogo" id="companyLogo" type="url" />
            <label htmlFor="">Moneda de Pago</label>
            <select name="salaryCurrency" required id="salaryCurrency">
                <option value="">Moneda de pago</option>
                <option value="">USD</option><option value="">MLC</option><option value="">GBP</option><option value="">CAD</option>
            </select>
            <label htmlFor="">Descripción</label><textarea  name="jobDescription" id="jobDescription"></textarea>
            <input type="submit" className="btn btn-accent mt-8 col-span-2" value="HGHGH" />
        </form>
    )
}

const validateEntries=(entries:Job)=>{
const {jobTitle,jobLevel,companyLogo,companyName,jobDescription,jobGeo}=entries

return{jobTitle,jobLevel,companyLogo,companyName,jobDescription,jobGeo}

}