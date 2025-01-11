"use client"

import { actionCreateJob, actionUpdateJob } from "@/lib/actions/server_actions"
import { getJob } from "@/lib/actions/table_actions"
import { fillFormJob } from "@/lib/utils/fill_form"
import { Job } from "@prisma/client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useFormState } from "react-dom"
import toast from "react-hot-toast"

export function FullPageForm({id}:{id:number|null}){
    const update=usePathname().endsWith("update")
    const action=update?actionUpdateJob:actionCreateJob
    const[state,formAction,isPending]=useFormState(action ,null)
    const router=useRouter()
    const [job,setJob]=useState<Job|null>(null)
    const ref=useRef<HTMLFormElement|null>(null)
    useEffect(()=>{
        const reciveJob=async()=>{
            if(!id)return
            const data=await getJob(id)
            setJob(data)
        }
        if(id)toast("Update")
        reciveJob()
    },[])
    if(job){fillFormJob(ref,job)}
    if(state && state.success){
        const message=update?"Entrada actualizada":"Añadido con éxito"
        toast(message,{id:"success"})
        ref.current?.reset()
        router.replace("/admin")
    }
    const error=state && state.success===false? state.error:null;
    
return(
<form action={formAction} ref={ref} className="aspect-video mx-auto *:w-full h-full flex flex-col items-start  [&_input]:ps-2  [&_label]:label
        md:grid md:grid-cols-2 md:gap-8 p-8">
            {(update&&id)&& <input type="hidden" name="id" value={id}/>}
            <label htmlFor="">Titulo</label><input placeholder="Titulos}" required name="jobTitle" id="jobTitle" type="text" />
            {error && error.jobTitle}
            <label htmlFor="">Localizacion</label><input  required name="jobGeo" id="jobGeo" type="text" />
            {error && error.jobGeo}
            <label htmlFor="">Experiencia</label><input  required name="jobLevel" id="jobLevel" type="text" />
            {error && error.jobLevel}
            <label htmlFor="">Nombre de la Compañia</label><input  required name="companyName" id="companyName" type="text" />
            {error && error.companyName}
            <label htmlFor="">Logo de la Compañia</label><input  name="companyLogo" id="companyLogo" type="url" />
            {error && error.companyLogo}
            <label htmlFor="">Moneda de Pago</label>
            <select name="salaryCurrency" id="salaryCurrency">
                <option disabled value="">Moneda de pago</option>
                <option value="">USD</option><option value="">MLC</option><option value="">GBP</option><option value="">CAD</option>
            </select>
            <label htmlFor="">Descripción</label><textarea  name="jobDescription" id="jobDescription"></textarea>
            {error&& error.jobDescription}
            <button type="submit"className="btn btn-accent mt-8 col-span-2">{!isPending?<label >Crear</label> :<span className="loading loading-spinner"></span>   }  </button>
        </form>

)

}