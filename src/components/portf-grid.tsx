import Image from "next/image"
import React,{ ReactElement } from "react"
import Link from "next/link"

export default function PortfolioGrid():React.ReactNode{

    return(
        <section className="p-16 bg-blue-300 rounded-md grid grid-cols-2 gap-2">
            <CardProyect href="/portfolio/football" imgsc="/next.svg" alt="setup" 
            text="Football Application con Football Api"/>
            <CardProyect href="/portfolio/restaurancy/?q=" imgsc="/next.svg" alt="setup" 
            text="Restaurancy de Goncy"/>
            <CardProyect href="/portfolio/" imgsc="/next.svg" alt="setup" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquid!"/>
        </section>
    )
}

function CardProyect({imgsc,alt, text,href }:{
    imgsc:string,alt:string, text:string , href:string
}):ReactElement{

    return(
        <Link className="border-gray-700 border-solid border p-8 flex flex-col place-content-center place-items-center gap-6"  href={href}>
            <Image src={imgsc} width={360} height={180} alt={alt}/>
            <p>{text}</p>
            
        </Link>
    )
}