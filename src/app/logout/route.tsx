import { cookies } from "next/headers"
import { NextRequest } from "next/server"
export const dynamic="force-dynamic"


export  function POST(req:NextRequest){
    const host=req.nextUrl.host
    console.log(host)
    cookies().delete("access_token")
    return Response.json({message:"logout"})
    
}