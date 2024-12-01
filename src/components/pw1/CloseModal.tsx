"use client"

export default function CloseModal(){
    return(< button onClick={(e)=>{document.querySelector("dialog")?.close();e.preventDefault()}} className="absolute btn top-2 right-2 btn-ghost btn-circle btn-sm">X</button>)
}