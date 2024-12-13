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
/**
 *  Fill the entries in the form when the key match with the name of the entry
 * 
 * @param ref    referencia a un Formulario
 * @param serverData    objeto con los datos a llenar
 */
export function fillFormJob(ref:RefObject<HTMLFormElement>,serverData:Object){
    const form=ref.current
    const inputCollection=ref.current?.getElementsByTagName("input")
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

