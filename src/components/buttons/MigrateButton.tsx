"use client"
//import { migrate } from "@/lib/serverActions/migrateActions"
export default function MigrateButton(){
    const handlerClick=()=>{
        //migrate()
        alert("Not implemented migrate")
    }
    return(
    <button onClick={handlerClick} className="p-4 bg-slate-700 text-white" >Migrate Buton</button>
    )
}