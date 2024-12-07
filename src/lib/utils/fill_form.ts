import { RefObject } from "react"


export function fillForm(ref:RefObject<HTMLDialogElement>,serverData:Object){
    const form=ref.current?.getElementsByTagName("form")[0]
    const inputCollection=form?.getElementsByTagName("input")
    const textarea=form?.querySelector("textarea")
    if(!inputCollection)return
    const entries=Object.entries(serverData)
    entries.map(([key,value])=>{
        const input=inputCollection.namedItem(key)
        if(input){input.value=value
            return
        }
    if(textarea?.name===key)textarea.value=value
        
        
    })

}