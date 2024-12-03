"use server"
import{  User } from "@prisma/client"
import prisma from "@/lib/prisma"
import { JwtPayload } from "jsonwebtoken"
import {SALT_ROUNDS,JWTKEY} from "@/lib/config"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import bcrypt from "bcrypt"
//install server-only para asegurar que solo se use en el servidor

export interface TokenDataType{id: User["id"],role:User["role"] ,name:User['name']}
const UserStore=prisma.user



export interface Credentials{_name:User["name"],_password:User["password"]}

export async function getDataToken(){
    const token=cookies().get("access_token")?.value 
    if(!token)return null
    const data=SessionUtils.decryptToken(token)
    return data
}
/**
 * 
 * Verifica el rol del usuario y lo devuelve
 */
export async function verifyAccesRole(){
    const data=await getDataToken()
    if(!data)return data
    return data.role
}


/**
 * Devuelve el usuario de la bd segun la cookie sino return null}
 * */
export const checkUser=async()=>{
    
     const data=await getDataToken()
     console.log("checkUser")
     if(!data) return null
     const user=await UserStore.findUnique({where:{id:data.id}})
     if(!user) return null
     return user
    }

    export async function signinUser({_name,_password}:Credentials){
        const existUser=await UserStore.findFirst({where:{name:_name}})
        console.log(existUser)
        if(existUser) return null
        const hashPass=bcrypt.hashSync(_password,10)
        console.log(hashPass)
        const {id,role,name}=await UserStore.create({data:{name:_name,password:hashPass}})
        
        const access_token= jwt.sign({id,role,name},JWTKEY)
        cookies().set("access_token",access_token)       
    }

/**
 * 
 * @param username 
 * @param password 
 * @returns true en caso de que tenga exito
 */
export async function loginUser({_name,_password}:Credentials){
    const user=await UserStore.findFirst({where:{name:_name}})
    
    if(!user) {return null}
    const isPassword= await bcrypt.compare(_password,user.password)
    if(!isPassword) return null
    const{id,role}=user
    const token_data={id,role}
    const access_token= jwt.sign(token_data,JWTKEY)
    cookies().set("access_token",access_token)
    return true
}

export async function createToken(data:TokenDataType){
    const access_token= jwt.sign(data,JWTKEY)
    cookies().set("access_token",access_token)
}


class SessionUtils{

    static async  decryptToken(token:string){
    const data=jwt.verify(token,JWTKEY)
    if(typeof data==="string") throw new Error()
    return data as TokenDataType & JwtPayload
    
    }

    static async isValidLogin(){
        
    }
}