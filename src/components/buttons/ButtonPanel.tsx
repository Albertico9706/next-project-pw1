"use client"

import { useState } from 'react'
import { rest_data } from '@/lib/data_restaurants'
/* import { revalidatePath } from 'next/cache' */
import Link from 'next/link'
import testCreate from "@/lib/tests/testers"


export default function ButtonPanel(){
    const [fetched,setFetched]=useState(String)
    

    /* const revalidate_main=()=>{
        revalidatePath("http://localhost:3000")
        console.log("revalidate")
    } */
    
    const handleClick=()=>{
        console.log("update button")
        //No permitir que restaurantes con los mismos datos se agregen a la base de datos
        const urlapibulk="http://localhost:3001/restaurants/bulk/"
        const options_fetch={
            method:"POST",
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:JSON.stringify(rest_data)
             }
        fetch(urlapibulk,options_fetch).then(res=>res.json())
            .then(data=>JSON.stringify(data))
            .then(text=>setFetched(text))
            .catch(error=>{throw new Error (`Response status: ${error.status}`)}) 
    }

    return(<div className='flex flex-col gap-4'>
        {fetched&&  <h1>Base de datos actualizada</h1>}
            <button onClick={handleClick} className=' bg-orange-500 text-white center '>Actualizar la tabla de restaurantes</button>
            <button onClick={testCreate} className=' bg-orange-500 text-white center '>Probar create</button>
            <Link title='Create Form' href="admin/create" >Create Form</Link >
    </div>)
}