import PageMain from "@/components/pw1/PageMain"
import { Metadata } from "next"
{/* <!-- API JOBICY -->
        <!-- https://jobicy.com/api/v2/remote-jobs?count=20&tag=python --> */}

export default async  function Restaurancy(){
    
    return ( <PageMain/>)
}

export const metadata:Metadata={
    title:"Restaurancy -Nextjs",
    description:"Curso de sobre ls fundamentos de Nextjs de Gonzalo Pozo",
    keywords:["restaurant","food","goncy","nextjs"]
}