"use client"
import { MouseEvent } from "react";

import { RefObject } from "react";

export default function CloseModal({refe}:{refe:RefObject<HTMLDialogElement>|null}){
    const handleClick=(e:MouseEvent)=>{
        dialog?.close();
        dialog?.querySelector("form")?.reset()
        e.preventDefault()
    }
    const dialog=refe?.current
    return(<button onClick={handleClick} className="absolute btn top-2 right-2 btn-ghost btn-circle btn-sm">X</button>)
}