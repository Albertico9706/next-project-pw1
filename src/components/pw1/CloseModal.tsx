"use client"

import { RefObject } from "react";

export default function CloseModal({refe}:{refe:RefObject<HTMLDialogElement>|null}){
    return(< button onClick={(e)=>{refe?.current?.close();e.preventDefault()}} className="absolute btn top-2 right-2 btn-ghost btn-circle btn-sm">X</button>)
}