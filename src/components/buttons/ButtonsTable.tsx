"use client"

import { deleteRestaurant } from "@/lib/serverActions/tableActions"
import { usePathname } from "next/navigation"
import { RefObject, useRef } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { serveToUrl } from "@/lib/serverActions/serverData"
import WrapperForm from "../forms/WrapperForm"
import CreateRestaurantInputs from "../forms/CreateRestaurantInputs"
import { fillForm } from "@/lib/clientFunctions/utils"

export default function ButtonsTable({id}:{id:string}){
    const router=useRouter()
    const pathname=usePathname().split("/")[2]
    const dialogRef=useRef<HTMLDialogElement>(null)
    const formRef=useRef<HTMLDialogElement>(null)

    //SHow a pop up for confirm if the user want to delete the entry
    //call the server action for delete the instance
    //before of delete the data save this in other db local like a recycle
    const handleClickDelete=async()=>{
        console.log(pathname)
        dialogRef.current?.showModal()
    }
    //Show up a form of create a instance but  with the field fwritten with the data of the element
    //Confirm if the user want to apply the changes
    //call the server action for update the data
    //The update then become the action with more danger because this can´t be undo
    const handleClickUpdate=async()=>{
        const serverData=await serveToUrl(pathname,id)
        if(!(formRef.current && serverData))return
        fillForm(formRef,serverData)
        formRef.current.showModal()
        
    }

    const handleDelete=async()=>{
        
        const rest=await deleteRestaurant(id)
    if(!rest)throw new Error("No se pudo eliminar el restaurante")
    toast("Eliminado con exito")
    router.refresh()
    }

    return(<div>
        <button className=" p-2 bg border linear-gradient bg-gradient-to-r from-blue-400 to-slate-400 rounded"
        onClick={handleClickUpdate}>U</button>
        <button className=" p-2 bg border linear-gradient bg-gradient-to-r from-blue-400 to-slate-400 rounded" 
        onClick={handleClickDelete}>D</button>
        <dialog ref={dialogRef}>
            <form className="max-w-xs text-center p-4 flex flex-col gap-16 bg-orange-50" method="dialog">
            <p className="p-4">Are you sure that you want delete this instance</p>
            <menu className=" flex w-full justify-around"><button className="aspect-video p-2 bg-orange-600 rounded" onClick={handleDelete} value="yes">Delete</button><button className="aspect-video p-2 bg-orange-600 rounded" type="reset" value="no">Cancel</button></menu>
            </form>
        </dialog>
        <dialog ref={formRef}>
            <WrapperForm>
                <CreateRestaurantInputs/>
            </WrapperForm>
        </dialog>

        </div>)
}



export function UpdateInstance(){

}