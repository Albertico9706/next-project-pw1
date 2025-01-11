"use client"


import { FullPageForm } from "./FullPageForm"
import { useSearchParams } from "next/navigation"

export default  function Page(){
    const search=useSearchParams()
    const id=search.get("id")
    return(
        <div className="min-w-100vh" >
            <FullPageForm id={Number(id)}/>

        </div>
    )
}



