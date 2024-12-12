"use client"
import { ReactNode } from "react"
import { FormRefContext } from "./context/Contexts"
import { useContext } from "react"

type Props={
    children:ReactNode,
    className:string}

export default function ButtonShowModal({children,className}:Props){
    const ref=useContext(FormRefContext)
    return(<button className={className} onClick={()=>{ref?.current?.showModal()}}>{children}</button>)
}