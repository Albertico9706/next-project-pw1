"use server"
import { Comment } from "@/lib/types"
import { cookies } from "next/headers"
import { checkUser } from "./sessionActions"
import { CommentStore } from "@/store/ConcretesStores"
import { randomUUID } from "crypto"
import { revalidatePath } from "next/cache"
type Props={
    comment:string, rest_id:string
}
export async function serverComentAction({comment,rest_id}:Props){
   
    const access_token=cookies().get("access_token")
    if (typeof access_token==="undefined")  return null
    const user=await checkUser()
    if (!user){ return null}
    const id=randomUUID()
    const obj:Comment={id,content:comment,restaurant_id:rest_id,user_id:user.id}
    console.log(comment)
    await CommentStore.insert(obj)
    revalidatePath(`/${id}`)
    return true        
}