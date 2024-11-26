import Link from "next/link"
import { Restaurant } from "@/lib/types"
import FooterCard from "./FooterCard"

export default async function RestaurantCard({rest}:{rest:Restaurant}){
    
    return (
       <article className="grid gap-8 max-h-screen  place-items-center h-full pt-14 dark:text-orange-200" key={rest.id}>
            <Link className="" href={`/${rest.id}`}>
                <h2 className="text-3xl border-b border-b-transparent group-hover:text-blue-700  group-hover:border-b-blue-700 
                dark:group-hover:text-orange-500  dark:group-hover:border-b-orange-500 transition-all">{`${rest.name} ${rest.id}`}</h2>
            </Link>
            <div className="grid min-h-[160px]  h-[30%] bg-violet-800 bg-opacity-5 justify-self-center place-content-center aspect-auto[16/10]" >
                <img className="w-36 h-full transition-all  aspect-auto " src={rest.image} alt="Imagen del Restaurant" />
            </div>
            <p className="opacity-90">{rest.description}</p>
            <FooterCard rest={rest}/> 
            
        </article>)
}

//<Suspense fallback={<div>Skeleton Favorite</div>}><DinamicFavoriteButton rest={rest}/></Suspense>
//<DinamicFavoriteButton rest={rest}/>