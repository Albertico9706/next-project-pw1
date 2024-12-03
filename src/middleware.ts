import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export default function middleware(req:NextRequest){
    console.log("middleware")
const url=req.nextUrl.clone()

if(url.pathname.startsWith('/modify')){
    url.pathname='/login'
    return NextResponse.redirect(url)
}


return NextResponse.next()
}


export const config={
    matcher:['/modify/:path*']
}