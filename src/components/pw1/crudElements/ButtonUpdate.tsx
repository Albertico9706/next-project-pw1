"use client"

import { getJob } from "@/lib/actions/table_actions"
import { fillForm } from "@/lib/utils/fill_form"
import { useContext } from "react"
import { FormRefContext } from "../context/Contexts"

export default function ButtonUpdate({id}:{id:number}){
    const ref=useContext(FormRefContext)

    const handleClick=async()=>{
        const job=await getJob(id)
        if(!(ref && job))return
        fillForm(ref,job)
        ref.current?.showModal()
    }
    return(<button onClick={handleClick} className="btn btn-xs btn-square">U</button>)
}