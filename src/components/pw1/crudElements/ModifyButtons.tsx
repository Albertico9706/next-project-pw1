"use client"

import { Dispatch, RefObject, SetStateAction, useContext, useRef, useState } from "react"
import CloseModal from "../CloseModal"
import ButtonUpdate from "./ButtonUpdate"
import ButtonDelete from "@/components/pw1/crudElements/ButtonDelete"

type Confirm={
    action:(id:number)=>Promise<void>,
    button:string
}

export type DispatchConfirm=Dispatch<SetStateAction<Confirm|null>>

export default function ModifyButtons({id}:{id:number}){
        const ref=useRef<HTMLDialogElement>(null)
        const [confirm,setCorfim]=useState<Confirm|null>(null)
        if(confirm)ref.current?.showModal()
    return(<> 
        <ButtonUpdate id={id}/>
        <ButtonDelete  dispatch={setCorfim} />
        <ConfirmModal action={confirm?.action} id={id} refe={ref}/>
    </>)
}


export function ConfirmModal({refe,id,action}:{refe:RefObject<HTMLDialogElement>|null,id:number,action?:Confirm["action"]}){
    const handleClick=()=>{
        if(action)action(id)
    }
    //Informar del estado de la accion con un toast
    //Cambiar el div por un formulario para usar el formState para el estado de el servidor
    
    return(
    <dialog className="modal" role="dialog" ref={refe} id="create">
        <div className="modal-box p-8  dark:bg-slate-700 max-w-fit flex flex-col items-center [&_button]:btn ">
                <CloseModal refe={refe}/>
           <p>Esta seguro que desea realizar esta accion</p>
           <div className="modal-action"><button>No</button><button onClick={handleClick}>Si</button></div>
        </div>
    </dialog>)
}