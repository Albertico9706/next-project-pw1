"use client"

import { Comment } from "@/lib/types"
import { useState } from "react"
import SingleComent from "../comments/SingleComent"


type Props={
    rest_reviews:Comment[]
}
export default function ButtonToggleSee ({rest_reviews}:Props){
    const [see,setSee]=useState(false)
    const handleClick=()=>{
        setSee(!see)}

        const styles=see? 'opacity-100 transition: -translate-y-2':'transition: translate-y-2'
    return(
    <>
        <button onClick={handleClick} className="self-end  rounded-md w bg-orange-500  p-2 ">Show coments </button>
                <div  id="reviews"
                    hidden={see}
                    className={` flex flex-col gap-4 transition-all duration-500 ease-in-out ${styles} `}>
                    {rest_reviews&& rest_reviews.map((review)=><SingleComent key={review.id} com={review} />)}
                </div>    
    </>)
}