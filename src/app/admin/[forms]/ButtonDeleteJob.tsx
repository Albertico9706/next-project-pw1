"use client"

import { deleteJob } from "@/lib/actions/table_actions"
import { useFormState } from "react-dom"
import toast from "react-hot-toast"

export default function ButtonDeleteJob({id}:{id:number}){
    const [state,action]=useFormState(deleteJob,null)
    const handleClick=async ()=>{
        action(id)
        if(state){
            state.success?toast(`${state.title} eliminado con exito`):toast(state?.message||"Error al eliminar")
        }
    }
    
    return(
        <button onClick={handleClick} className="btn btn-square btn-xs bg-red-600 font-bold dark:text-white">X</button>
    )
}