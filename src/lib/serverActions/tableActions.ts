"use server"
import { RestaurantStore } from "@/store/ConcretesStores"
export async function updateInstance(){}

export async function deleteRestaurant(id:string){

const recycle=await(RestaurantStore.recycleInstance(id))
console.log(recycle)
return recycle
}