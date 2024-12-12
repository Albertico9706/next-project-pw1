type Props={
    form:"create"|"update"
}

import { useFormState } from "react-dom"
import { actionCreateJob } from "@/lib/actions/server_actions"
import { FullPageForm } from "./FullPageForm"

export default async function Page({params}:{params:Props}){
    const {form}=params
    const create=form==="create"
    const update=form==="update"
    return(
        <FullPageForm/>
    )
}



