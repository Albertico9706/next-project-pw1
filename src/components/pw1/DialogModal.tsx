"use client"
import { FormRefContext } from "./context/Contexts"
import { ReactElement, useContext } from "react"
import CloseModal from "./CloseModal"
type Prop={children:ReactElement}
/**
 * Usar en conjunto con el ButtonShowModal
* @param param0 El formulario a mostrar en la modal
*/


export default function DialogModal({children}:Prop){
    const ref=useContext(FormRefContext)
    return(
    <dialog className="modal" role="dialog" ref={ref} id="create">
        <div className="modal-box p-8  dark:bg-slate-700 max-w-fit flex flex-col items-center ">
                <CloseModal refe={ref}/>
            {children}
        </div>
    </dialog>)
}

