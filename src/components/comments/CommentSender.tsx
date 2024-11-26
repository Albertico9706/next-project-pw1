"use client"

import {serverComentAction} from "@/lib/serverActions/serverComentAction"
import toast from "react-hot-toast"

import { useEffect, useState } from "react"
import React from "react"

type Props={
    rest_id:string
}

export default function CommentSender({rest_id}:Props){

    const [comment,setComment]=useState("")
    const SENDER_STATE={
        IDLE:"idle",
        USER:"user",
        NO_USER:"no_user"
    } as const
    type StateTypes=typeof SENDER_STATE[keyof typeof SENDER_STATE]

    const [state,setState]=useState<StateTypes>(SENDER_STATE.IDLE)

    const comentAction=async(event :React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
          event.preventDefault()
          const isUser=await serverComentAction({comment,rest_id})
         console.log(isUser)
         if(!isUser){
             toast("Please log in for comment ",{id:"nouser"})
             setState(SENDER_STATE.NO_USER)
             return}
        toast("Comment posted with exit")
        setState(SENDER_STATE.USER)         
             
     }
 
 const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
     setComment(event.target.value)
 }

useEffect(()=>{
    
},[state])

    return(
        
        <form method="POST" className="flex gap-4  ">
            <input  type="text" onChange={handleChange} className="pl-8 rounded-3xl ring-red-600"  name="your_comment" value={comment}
                id="your_comment" placeholder="NEW COMMENT ">
            </input>
            <button  onClick={comentAction} className="background: bg-slate-300 aspect-video h-8 "    
            name="send_comment_button">Send</button>
            
        </form>
    )

    
}
//estilos para usar el boton dentro de los comentarios
//"background: bg-red-700 rounded-full -translate-x-10 w-8 h-8 translate-y-1" 

