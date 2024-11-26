import { RefObject } from "react"


export function fillForm(ref:RefObject<HTMLDialogElement>,serverData:Object){
    const form=ref.current?.getElementsByTagName("form")[0]
    const inputCollection=form?.getElementsByTagName("input")
    if(!inputCollection)return
    const entries=Object.entries(serverData)
    entries.map(([key,value])=>{
        const input=inputCollection.namedItem(key)
        if(!input)return
        input.value=value
    })
}