"use server"

import { RestaurantStore,CommentStore, UserStore } from "@/store/ConcretesStores"
import { Comment } from "../types"
import { UserSchema } from "@/store/lowdb"


export async function serveRestaurants(){
    return (await RestaurantStore.index())
}

export async function serveRestaurantsById(id:string){
    return (await RestaurantStore.findId(id))
}

export async function serveCommentsRestaurantsById(rest_id:string){
   const comments=(await CommentStore.index()).filter((com)=>com.restaurant_id===rest_id)
   const users=await UserStore.index()
   return toPublicComents(comments,users)
}

export async function serveComments(){
    const comments=await CommentStore.index()
    return comments
}

export async function serveCommentsById(id:string){
    const comment=await CommentStore.findId(id)
    return comment
}

async function toPublicComents(comments:Comment[],users:UserSchema[]){
    const comments_public=comments.map((com)=>{
        const user=users.find((user)=>{return user.id===com.user_id})
        if(!user) throw new  Error()   
        com.user_id=user.username
        return com
    })    
   return comments_public
}

export async function serveUsers(){
    return  UserStore.index()
}
export async function serveUsersById(id:string){
    return  UserStore.findId(id)
}

export async function serveToUrl(pathname:string,id:string){
switch (pathname) {
    case "restaurants":return serveRestaurantsById(id)
        
        break;
    case "rest_comments":return serveCommentsById(id)
        break;
    case "users":return serveUsersById(id)
        
        break;
    default:
        break;
}
}