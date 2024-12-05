"use client"
import toast from "react-hot-toast"
import { showModal } from "@/lib/utils/client"
import { ButtonHTMLAttributes, ReactNode } from "react"

type Props={
    children:ReactNode,
    className:string}

export default function ShowModalD({children,className}:Props){
    return(<button className={className} onClick={showModal}>{children}</button>)
}