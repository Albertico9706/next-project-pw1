"use server"
import { UserStore } from "@/store/ConcretesStores";
import { Restaurant,Comment } from "@/lib/types";



export async function migrate(){
  migrateRestaurants
  migrateComments
}

    async function migrateRestaurants(){
    const db= await UserStore.instanceDB();
    const response=await fetch("http://localhost:3001/restaurants")
    console.log(response)
    const newRestaurants:Restaurant[]=await response.json()
    console.log(newRestaurants)
    db.update(({restaurants})=>{
      newRestaurants.map((rest)=>{
        restaurants.push(rest)
      })
    })} 

    async function migrateComments(){
    const db= await UserStore.instanceDB();
    const response=await fetch("http://localhost:3001/rest_comments")
    const newComments:Comment[]=await response.json()
    db.update(({comments})=>{
      comments=newComments
      console.log(comments)})
}