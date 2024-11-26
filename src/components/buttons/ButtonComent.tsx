"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

interface Props{
    rest_id:string
}


export default function ButtonComent({rest_id}:Props){
const [active,setActive]=useState(false)
const router= useRouter()
const handleClick=()=>{
    router.push(`/${rest_id}`)
    setActive(!active)
    
}
const text=active? "Hide":"Show"  
    return <button className="rounded bg-orange-500 p-1" onClick={handleClick}> {text}</button>
}