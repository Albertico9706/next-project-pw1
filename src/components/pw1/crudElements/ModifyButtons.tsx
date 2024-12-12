"use client"

import { Dispatch, RefObject, SetStateAction, useContext, useRef, useState } from "react"
import ButtonUpdate from "./ButtonUpdate"
import ButtonDelete from "@/components/pw1/crudElements/ButtonDelete"

type Confirm={
    action:(id:number)=>Promise<void>,
    button:string
}

export type DispatchConfirm=Dispatch<SetStateAction<Confirm|null>>

export default function ModifyButtons({id}:{id:number}){
        
        const [confirm,setCorfim]=useState<Confirm|null>(null)
        
    return(<> 
        <ButtonUpdate id={id}/>
        <ButtonDelete  dispatch={setCorfim} />
        <ConfirmModal confirm={confirm} id={id} setter={setCorfim}/>
    </>)
}

type ConfirModalType={id:number,setter:DispatchConfirm,confirm:Confirm|null}
export function ConfirmModal({setter,id,confirm}:ConfirModalType){
    const ref=useRef<HTMLDialogElement>(null)
    confirm?ref.current?.showModal():ref.current?.close()
    const handleClick=()=>{
        if(confirm){
            confirm.action(id)
            setter(null)
         }
           
    }
    //Informar del estado de la accion con un toast
    //Cambiar el div por un formulario para usar el formState para el estado de el servidor
    
    return(
    <dialog className="modal" role="dialog" ref={ref} id="create">
        <div className="modal-box p-8  dark:bg-slate-700 max-w-fit flex flex-col items-center [&_button]:btn ">
        <button onClick={(e)=>{ setter(null)}} className="absolute btn top-2 right-2 btn-ghost btn-circle btn-xs">X</button>
           <p>Esta seguro que desea realizar esta accion</p>
           <div className="modal-action"><button onClick={()=>{ setter(null)}}>No</button><button onClick={handleClick}>Si</button></div>
        </div>
    </dialog>)
}