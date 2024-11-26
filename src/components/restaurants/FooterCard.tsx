import { Suspense } from "react"
import { FavoriteButton } from "../buttons/DinamicFavoriteButton"
import { Restaurant } from "@/lib/types"


export default function FooterCard({rest}:{rest:Restaurant}){

    
    return(
            <div className="inline-flex gap-4 place-items-center border-t border-t-black dark:border-t-blue-50 ">
                <small className="opacity-70">{rest.address}</small>
                <div>
                <span>⭐</span>
                <span>{rest.score}</span>
                </div>
                <span>{rest.ratings}</span>
                <Suspense fallback={<div className="w-4 h-4 bg-red-600"></div>}><FavoriteButton rest={rest}/></Suspense>
                {/*<ButtonComent rest_id={rest.id}/> */}
            </div>
    )
}