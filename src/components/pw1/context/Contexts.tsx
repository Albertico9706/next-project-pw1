"use client"
import { TokenDataType } from "@/lib/utils/session_actions";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { getDataToken } from "@/lib/utils/session_actions";
export function ThemeProvider({children,...props}:React.ComponentProps<typeof NextThemeProvider>){
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
 
