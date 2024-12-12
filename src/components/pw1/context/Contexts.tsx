"use client"
import { actionCreateJob, ValidatedState, ValidatingAction } from "@/lib/actions/server_actions";
import { TokenDataType } from "@/lib/utils/session_actions";
import { Job } from "@prisma/client";
import { Payload } from "@prisma/client/runtime/library";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ComponentProps, createContext, Dispatch, ReactNode, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
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

/* export type FullFormContextType=[state: ValidatedState<Job>, dispatch:(payload:FormData)=> void, isPending: boolean]|null
export const FullFormContext=createContext<FullFormContextType>(null)
export function FullFormProvider({children}:{children:ReactNode}){
    const value=useFormState(actionCreateJob ,{success:false})
    const[state,formAction,isPending]=value
    if(state.success)toast("Añadido nuevo elemento")

    return(
        <FullFormContext.Provider value={value}>
            {children}
        </FullFormContext.Provider>
    )
} */
