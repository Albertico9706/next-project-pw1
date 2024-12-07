"use client"

import { getJob } from "@/lib/actions/table_actions"
import { fillForm } from "@/lib/utils/fill_form"

export default function ButtonUpdate({id}:{id:number}){

    const handleClick=()=>{
        const job=getJob(id)
        /* job&& fillForm(ref,) */
    }
    return(<button className="btn btn-xs btn-square">U</button>)
}