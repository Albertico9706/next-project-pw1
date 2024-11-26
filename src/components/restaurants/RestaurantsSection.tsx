import { serveRestaurants } from "@/lib/serverActions/serverData"
import MainRestaurantCard from "./MainRestaurantCard"
import RestaurantCard from "./RestaurantCard"

const restaurants=serveRestaurants()


export default async function ResturantsSection(){

const data= await restaurants
    return(
    <section className="grid  gap-4 m-12">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,360px))] justify-center gap-8 " >
        {data?.map((rest)=>{ return <MainRestaurantCard key={rest.id}><RestaurantCard rest={rest} key={rest.id}/></MainRestaurantCard> })}
        </div>
    </section>)
}