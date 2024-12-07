import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { TokenDataType } from "./lib/utils/session_actions";

export default function middleware(req:NextRequest){
    const url=req.nextUrl.clone()
    const dataToken=cookies().get("access_token")?.value
    if(!dataToken){
        url.pathname="/login"
        return NextResponse.redirect(url)}
    const isValidToken=jwt.decode(dataToken) as TokenDataType
    const {role}=isValidToken
    if(!isValidToken)return NextResponse.next()


if(url.pathname.startsWith('/modify')){
    url.pathname='/login'
    return NextResponse.redirect(url)
}

if(url.pathname.startsWith('/admin') && role!== "admin"){
    url.pathname='/login'
    return NextResponse.redirect(url)
}

return NextResponse.next()
}


export const config={
    matcher:['/modify/:path*','/admin/:path*']
}