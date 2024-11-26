"use server"
//install server-only para asegurar que solo se use en el servidor
import { TokenDataType } from "@/store/lowdb"
import { SECRET_JWT_KEY } from "../no.config"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { UserStore } from "@/store/ConcretesStores"
import bcrypt from "bcrypt"
import { SessionUtils } from "../types/SessionUtils"
import { RefObject } from "react"

export async function getDataToken(){
    const token=cookies().get("access_token")?.value 
    if(!token)return null
    const data=SessionUtils.decryptToken(token)
    return data
}

export async function verifyAccesRole(){
    const data=await getDataToken()
    if(!data)return data
    return data.role
}



export const checkUser=async()=>{
    /**
     *devuelve el usuario de la bd segun la cookie sino return null
     */
     const data=await getDataToken()
     console.log("checkUser")
     if(!data) return null
     const user=await UserStore.findId(data.id)
     if(!user) return null
     return user
    }


export async function loginUser(username:string,password:string){
    const users=await UserStore.index()
    const user=users.find((user)=>user.username==username)
    if(!user) {return null}
    const isPassword= await bcrypt.compare(password,user.password)
    if(!isPassword) return null
    const{id,role}=user
    const token_data={id,role}
    const access_token= jwt.sign(token_data,SECRET_JWT_KEY)
    cookies().set("access_token",access_token)
    return true
}

export async function createToken(data:TokenDataType){
    const access_token= jwt.sign(data,SECRET_JWT_KEY)
    cookies().set("access_token",access_token)
}

