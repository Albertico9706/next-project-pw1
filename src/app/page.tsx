import PageMain from "@/components/pw1/PageMain"
import { Metadata } from "next"
{/* <!-- API JOBICY -->
        <!-- https://jobicy.com/api/v2/remote-jobs?count=20&tag=python --> */}

export default async  function Restaurancy(){
    
    return ( <PageMain/>)
}

export const metadata:Metadata={
    title:"WokRem",
    description:"El lugar para encontrar el trabajo de tus sueños",
    keywords:["remote work","work","remote","jobs"]
}

export const page_routes={
    admin:"admin",
    login:"login",
    logout:"logout",
    users:"users",
    seedDb:"prisma_push",
    jobs:"works",
} as const