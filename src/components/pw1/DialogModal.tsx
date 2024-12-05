import { ReactElement } from "react"
import CloseModal from "./CloseModal"
type Prop={children:ReactElement}
/**
 * Usar en conjunto con el ShowModalD
* @param param0 El formulario a mostrar en la modal
*/


export default function DialogModal({children}:Prop){
    return(
    <dialog className="modal" role="dialog" id="create">
        <div className="modal-box bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 p-8  dark:bg-slate-700 max-w-fit flex flex-col items-center ">
                <CloseModal/>
            {children}
        </div>
    </dialog>)
}