"use client"
import WrapperForm from "./forms/WrapperForm"
import { useRef } from "react"
import CreateRestaurantInputs from "./forms/CreateRestaurantInputs"

export default function ButtonWithDialog(){
    const handleClick=()=>{
        dialogRef.current?.showModal()
    }
    const handleClose=()=>{
        dialogRef.current?.close()
    }
    const dialogRef=useRef<HTMLDialogElement>(null)
    
    
    return(
    <><dialog className="bg-transparent" ref={dialogRef}>
    <button className="absolute top-4 right-4 bg-transparent" onClick={handleClose}>X</button>
    <WrapperForm>
        <CreateRestaurantInputs/>
    </WrapperForm>
 </dialog>
 <button onClick={handleClick} 
 className="flex gap-2 items-center p-4 px-8 bg-orange-600 text-white fixed bottom-10 right-10 rounded font-medium shadow-xl
 dark:text-orange-400 dark:bg-black/90 dark:hover:bg-black">New <p className="font-bold text-xl ">+</p> </button></>
)
}