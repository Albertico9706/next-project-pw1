"use client"
import { showModal } from "@/lib/utils/client"
import { ReactNode } from "react"

type Props={
    children:ReactNode,
    className:string}

export default function ShowModalD({children,className}:Props){
    return(<button className={className} onClick={showModal}>{children}</button>)
}