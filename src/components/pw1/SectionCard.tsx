
/* import prisma from "@/lib/prisma"; */
import { ReactNode } from "react";

export default function SectionCard() {
    return (<section className=" p-4  snap-proximity grid grid-cols-[repeat(3,1fr)] gap-4 ">
    <BlowCard>
        <h3 >Varias regiones incluyendo Europa , Estados Unidos y Latam entre otras</h3>
    </BlowCard>
    <BlowCard>
        <h3>Quisquam doloribus quaerat maxime porro obcaecati ipsa esse officiis neque.</h3>
    </BlowCard>
    <BlowCard>
        <h3>Accusantium sed quo, cupiditate qui dolor nesciunt beatae fugit enim.</h3>
    </BlowCard>
    <BlowCard>
        <h3>Doloribus hic corrupti quis explicabo numquam, odio eligendi eum delectus?</h3>
    </BlowCard>
    <BlowCard>
        <h3>Repudiandae, in id. Perspiciatis reiciendis corrupti numquam quibusdam mollitia nisi.</h3>
    </BlowCard>
    <BlowCard>
        <h3>Perferendis laboriosam natus, culpa voluptatum inventore beatae fugit perspiciatis in.</h3>
    </BlowCard>
    </section>);
}
function BlowCard({children}:{children:ReactNode}) {
    return <div className=" mx-auto rounded-md  z-10  transition-transform w-60 animate-fadeIn  p-5 ">
        <div className=" relative after:-z-10 grad-primary p-8 transition-transform   blow-animation rounded-[inherit] bg-black/5 
        after:absolute after:hover:-inset-0.5 after:[animation-play-state:paused] after:hover:[animation-play-state:running] after:[content:''] after:rounded-[inherit] after:blur-xs  ">
            {children}
        </div> 
        </div>;
}




