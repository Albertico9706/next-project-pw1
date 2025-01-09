
import Hero from "@/components/pw1/newContent/Hero"
import SectionsContent from "@/components/pw1/newContent/SectionsContent"
import RadialProgres from "@/components/pw1/RadialProgres"
import { SectionJobs } from "@/components/pw1/SectionCard"
import { Metadata } from "next"
{/* <!-- API JOBICY -->
        <!-- https://jobicy.com/api/v2/remote-jobs?count=20&tag=python --> */}


export default function PageMain(){
    return(
    <main className="dark:text-base-content w-full overflow-hidden bg-gradient-to-br from-black/5 to-transparent" >
        <HeroTitle/>
        <Hero/>
        <SectionJobs/>
        <RadialProgres />
        <SectionsContent/>
    </main>)

    
}
        
function HeroTitle(){
    return(
        <h1 className="p-12 text-center text-5xl font-bold font-sans w-full mt-16  text-blue-400 italic">
            Encuentra tu <em className="grad-primary bg-clip-text text-transparent">trabajo</em> remoto
        </h1>
    )
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