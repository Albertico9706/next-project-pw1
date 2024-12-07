"use client"
import jwt,{JwtPayload} from "jsonwebtoken"
import { getDataToken, TokenDataType } from "@/lib/utils/session_actions"
import { cookies } from "next/headers"
import Link from "next/link"
import { SALT_ROUNDS } from "@/lib/config"
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
    {tokenData.name}
    <ButtonLogOut/>
    
    </div>
    )
    
}