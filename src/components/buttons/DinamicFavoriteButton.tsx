"use client"

import { Restaurant } from "@/lib/types"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

 export function FavoriteButton({rest}: {
    rest: Restaurant
 }){
    const [isFavourite, setIsFavourite] = useState(false);


    useEffect(() => {
        if (typeof window!== "undefined") {
            const favorites = window.localStorage.getItem('favorites');
            setIsFavourite(favorites?.includes(rest.id) || false);
        }
    }, [rest.id]);
    {/*if(typeof window !== "undefined"){
        
    }
   const [isFavourite,setIsFavourite] = useState(window?.localStorage.getItem('favorites')?.includes(rest.id)||false) */}
  
   
   const toggleFavorite=()=>{
       const special_id=`*${rest.id}*`
       let lcs=window?.localStorage.getItem('favorites')||""
       if(isFavourite){
           setIsFavourite(false)
           window?.localStorage.setItem('favorites',lcs.replace(special_id,""))
       }else{
           setIsFavourite(true)
           window?.localStorage.setItem('favorites',special_id.concat(lcs))
       }      
   }
   
   return(
       <button type="button" onClick={toggleFavorite} className={`text-red-500 text-xl ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>♥</button>
   )
 }

export const DinamicFavoriteButton = dynamic(async()=> FavoriteButton ,{ssr:false})