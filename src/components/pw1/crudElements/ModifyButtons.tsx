import ButtonUpdate from "./ButtonUpdate"
import ButtonDelete from "@/components/pw1/crudElements/ButtonDelete"

export default function ModifyButtons({id}:{id:number}){
    return(<> 
        <ButtonUpdate id={id}/>
        <ButtonDelete id={id}/>
    </>)
}