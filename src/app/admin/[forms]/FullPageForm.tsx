"use client"

import { actionCreateJob } from "@/lib/actions/server_actions"
import { getJob } from "@/lib/actions/table_actions"
import { fillForm, fillFormJob } from "@/lib/utils/fill_form"
import { Job } from "@prisma/client"
import { useRouter } from "next/navigation"
import { RefObject, useEffect, useRef, useState } from "react"
import { useFormState } from "react-dom"
import toast from "react-hot-toast"


//Implementar la funcion del update de los trabajos 
//Retirarle el id a los toast para revisar el render de los componentes(En el update)
export function FullPageForm({id}:{id:number|null}){
    const[state,formAction,isPending]=useFormState(actionCreateJob ,{success:false})
    const router=useRouter()
    const [job,setJob]=useState<Job|null>(null)
    const ref=useRef<HTMLFormElement|null>(null)
    const {error,success}=state
    useEffect(()=>{
        const reciveJob=async()=>{
            if(!id)return
            const data=await getJob(id)
            setJob(data)
        }
        reciveJob()
    },[])
    if(id)toast("Update")
    if(job){
        fillFormJob(ref,job)
    }
    if(success){
        toast("Nueva oferta añadida",{id:"success"})
        ref.current?.reset()
        router.replace("/admin")
    }
return(
<form action={formAction} ref={ref} className="*:w-full h-full flex flex-col items-start [&_input]:ps-2 [&_*:has(+required)]:text-red-700  [&_label]:label
        md:grid md:grid-cols-2">
            <label  htmlFor="">Titulo</label><input required name="jobTitle" id="jobTitle" type="text" />
            <label htmlFor="">Localizacion</label><input  required name="jobGeo" id="jobGeo" type="text" />
            <label htmlFor="">Experiencia</label><input  required name="jobLevel" id="jobLevel" type="text" />
            <label htmlFor="">Nombre de la Compañia</label><input  required name="companyName" id="companyName" type="text" />
            <label htmlFor="">Logo de la Compañia</label><input  className="input-primary"  name="companyLogo" id="companyLogo" type="url" />
            <label htmlFor="">Moneda de Pago</label>
            <select name="salaryCurrency" id="salaryCurrency">
                <option disabled value="">Moneda de pago</option>
                <option value="">USD</option><option value="">MLC</option><option value="">GBP</option><option value="">CAD</option>
            </select>
            <label htmlFor="">Descripción</label><textarea  name="jobDescription" id="jobDescription"></textarea>
            <button type="submit"className="btn btn-accent mt-8 col-span-2">{isPending?<label >Crear</label> :<label><span className="loading loading-spinner"></span>Creando</label>   }  </button>
        </form>

)

}