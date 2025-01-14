"use client"

import CardJob from "@/app/works/CardJob";
import { createClient } from "@/lib/supabase/supa_client";
import { Database, Tables} from "@/lib/supabase/supabase.types";
import { useEffect, useState } from "react";

export  function  SectionJobs(){
	const supabase=createClient<Database>()
    /* const jobs =await prisma.job.findMany() */
    const [response,setResponse]=useState<Tables<"Job">[]|null>(null)
    useEffect(()=>{
        async function getJobs(){
            const {data} =await supabase.from("Job").select()
            if(data) setResponse(data)
        }
    getJobs()
    })
    
    console.log(response)
    return (
        <section className="*:w-240 *:h-auto flex gap-4 overflow-auto snap-x snap-start p-8">
            {response&& response.map((job)=>{
                return <CardJob key={job.id} job={job}/>

            })}
        </section>
    )


}