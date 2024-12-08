"use client"
import { useContext } from "react"
import {AuthDispatch } from "./context/Contexts"
import { hitRediret } from "@/lib/actions/server_actions"




export default function ButtonLogOut(){
const {setTokenData}=useContext(AuthDispatch)
const handleClick=async()=>{
const data=await fetch("/logout",{method:"Post"})
.then(res=>{
    if(!res.ok) return
    return res.json()
}) 
console.log(data)
if(!(setTokenData&&data))return
setTokenData(undefined)
hitRediret("/")

}

    return(
        <button onClick={handleClick}  className="btn btn-sm" >Logout</button>
    )
}