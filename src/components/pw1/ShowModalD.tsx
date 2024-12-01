"use client"
import toast from "react-hot-toast"

export default function ShowModalD(){
    return(<button className="btn btn-primary" onClick={()=>{
        const dialog=document.querySelector("dialog")
        toast(<div className="text-warning ">Dialog</div>)
        dialog?.showModal()
    }}>Open Modal</button>)
}