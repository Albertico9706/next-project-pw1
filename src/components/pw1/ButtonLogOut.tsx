"use client"
import { useContext } from "react"
import {AuthDispatch } from "./context/Contexts"



export default function ButtonLogOut(){
const {setTokenData}=useContext(AuthDispatch)
const handleClick=()=>{
fetch("/logout",{method:"Post"})
.then(res=>{
    if(!res.ok) return
    return res.json()
}).then(data=>{
    console.log(data)
    if(setTokenData){
        setTokenData(undefined)
        location.assign("/")
    }})
}

    return(
        <button onClick={handleClick}  className="btn btn-sm" >Logout</button>
    )
}