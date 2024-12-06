import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
export const dinamyc="force-dinamyc"


export  function POST(req:NextRequest){
    const host=req.nextUrl.host
    console.log(host)
    cookies().delete("access_token")
    return Response.json({message:"logout"})
    
}