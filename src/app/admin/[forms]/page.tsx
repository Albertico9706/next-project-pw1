"use client"

type Props={
    form:"create"|"update"
}

import { useFormState } from "react-dom"
import { actionCreateJob } from "@/lib/actions/server_actions"
import { FullPageForm } from "./FullPageForm"
import { useSearchParams } from "next/navigation"

export default async function Page({params}:{params:Props}){
    const {form}=params
    const create=form==="create"
    const update=form==="update"
    const search=useSearchParams()
    const id=search.get("id")
    return(
        <div className="min-w-100vh" >
            <FullPageForm id={Number(id)}/>

        </div>
    )
}



