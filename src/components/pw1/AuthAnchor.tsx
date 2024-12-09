"use client"
import Link from "next/link"
import { useContext } from "react"
import {AuthContext} from "@/components/pw1/context/Contexts"
import ButtonLogOut from "./ButtonLogOut"

export default  function AuthAnchor(){
    const {tokenData}=useContext(AuthContext)
    console.log("anchor",tokenData)
   
    
    return(
        
    !tokenData?
    <div className="hidden sm:flex gap-4 items-center [&_a]:btn-sm ">
        <Link href="/login" className="btn btn-outline outline-white">Login</Link>
        <Link href="/signin" className="btn btn-primary ">Signin</Link>
    </div>
    :
    <div className="flex gap-2 items-center">
    <div className="avatar placeholder items-center gap-2 p-4" >
        <div className=" btn btn-disabled bg-slate-700 dark:text-white/80  btn-square btn-sm" >{tokenData.name.at(0)}</div>
        <p>{tokenData.name}</p>
    </div>
    <ButtonLogOut/>
    
    </div>
    )
    
}