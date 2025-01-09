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
    <AvatarPerfil name={tokenData.name}/>
    
    )
    
}

function AvatarPerfil({name}:{name:string}){
    return(
        <div className="flex gap-2 items-center ">
                <div className="text-black  dark:text-white/80 btn btn-ghost bg-neutral-500 pointer-events-none placeholder btn-circle btn-sm" >{name.at(0)}</div>
                <p>{name}</p>
            <ButtonLogOut/>
        </div>
    )
}