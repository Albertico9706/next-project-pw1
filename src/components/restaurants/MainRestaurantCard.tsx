import React from "react"

export default function MainRestaurantCard({children}:{children:React.ReactNode}){
    return(
    <div  className=" border border-gray-800 dark:border-gray-200 border-solid p-10 relative group hover:-translate-y-3 transition-all overflow-hidden">
        {children}
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/60 dark:bg-green-800/60 backdrop-blur-2xl -z-10"></div>
        <div className="absolute top-0 -left-14 w-80 h-80 -z-20 bg-green-600 rounded-full "></div>
    </div>)
}