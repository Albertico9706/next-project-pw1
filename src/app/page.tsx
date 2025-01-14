
import Hero from "@/components/pw1/newContent/Hero"
import SectionsContent from "@/components/pw1/newContent/SectionsContent"
import { SectionJobs } from "@/components/pw1/SectionJobs"
import { Metadata } from "next"
{/* <!-- API JOBICY -->
        <!-- https://jobicy.com/api/v2/remote-jobs?count=20&tag=python --> */}

console.log(process.env.NODE_ENV)
export default function PageMain(){
    return(
    <main className="dark:text-base-content w-full overflow-hidden bg-gradient-to-br from-black/5 to-transparent" >

        <HeroTitle/>
        <Hero/>
        <SectionJobs/>
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

