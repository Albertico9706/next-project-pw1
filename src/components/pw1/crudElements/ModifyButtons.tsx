import ButtonUpdate from "./ButtonUpdate"
import ButtonDelete from "@/app/admin/ButtonDelete"

export default function ModifyButtons({id}:{id:number}){
    return(<> 
        <ButtonUpdate id={id}/>
        <ButtonDelete id={id}/>
    </>)
}