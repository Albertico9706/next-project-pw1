"use client"
import { deleteJob } from "@/lib/actions/table_actions"

export default function ButtonDelete({id}:{id:number}){
    const handleClick=()=>{
        deleteJob(id)
    }
    return(<button className="btn btn-square btn-xs bg-red-600 font-bold dark:text-white" onClick={handleClick}>X</button>)
}