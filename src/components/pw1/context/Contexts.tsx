"use client"
import { TokenDataType } from "@/lib/utils/session_actions";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ComponentProps, createContext, Dispatch, ReactNode, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
export function ThemeProvider({children,...props}:ComponentProps<typeof NextThemeProvider>){
    return (
        <NextThemeProvider {...props}>{children}</NextThemeProvider>
    )
    
}

export type AuthContextType={
    tokenData?:TokenDataType,
}
export type AuthDispatchType={
    setTokenData?:Dispatch<SetStateAction<TokenDataType|undefined>>
}

export const AuthContext=createContext<AuthContextType>({})
export const AuthDispatch=createContext<AuthDispatchType>({})

export function AuthProvider({children,value}:{children:ReactNode,value:TokenDataType|undefined}){
    const [tokenData,setTokenData]=useState<TokenDataType|undefined>()
    useEffect(()=>{
        setTokenData(value)
    },[value])
    return(
        <AuthContext.Provider value={{tokenData}}>
            <AuthDispatch.Provider value={{setTokenData}}>
            {children}
            </AuthDispatch.Provider>
        </AuthContext.Provider>
    )
}


export const FormRefContext=createContext<RefObject<HTMLDialogElement>|null>(null)
export function FormRefProvider({children}:{children:ReactNode}){
    const ref=useRef<HTMLDialogElement>(null)
    return(
        <FormRefContext.Provider value={ref}>
        {children}
    </FormRefContext.Provider>
    )
    
}
