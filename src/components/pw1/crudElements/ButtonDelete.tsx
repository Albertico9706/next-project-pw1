"use client"
import { deleteJob } from "@/lib/actions/table_actions"
import { DispatchConfirm } from "./ModifyButtons"

export default function ButtonDelete({dispatch}:{dispatch:DispatchConfirm}){
    const handleClick=()=>{
        dispatch({
            action:deleteJob,
            button:"delete"
        })
    }
    return(<button className="btn btn-square btn-xs bg-red-600 font-bold dark:text-white" onClick={handleClick}>X</button>)
}