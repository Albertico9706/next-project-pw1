import React, { ReactNode } from "react"
import SubmitButton from "../ui/SubmitButton"


export default function WrapperForm({children}:{children:React.ReactNode}){
    return(
        <form className="dark:bg-slate-700 overflow-hidden flex flex-col gap-8 p-8 border-2 border-orange-500 rounded-lg"  method="POST" action={"http://localhost:3001/test"} /* action={actionForm} */>
        <legend className="text-xl font-semibold text-orange-500">Nuevo Restaurant</legend>
        <div className="grid gap-4 grid-cols-[1fr_3fr] ">
            {children}
            {/* <CreateButton /> */}

        </div>
        <menu className="place-self-end"><SubmitButton/></menu>
    </form>
    )
}

type Props={children:ReactNode ,className?:string}

export  function Label({children,className}:Props){
    return(<label className={`text-orange-500 ${className}`} >{children}</label>)
}