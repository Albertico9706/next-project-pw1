import { ReactNode } from "react";

export default function SectionCard() {
    return (<section className="p-4 overflow-auto snap-proximity grid grid-cols-[repeat(3,1fr)]   text-white gap-4 transition-all ">
    <BlowCard>
        s<h3 >Varias regiones incluyendo Europa , Estados Unidos y Latam entre otras</h3>
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
    return <div className="mx-auto rounded-md  relative  transition-transform w-60 animate-fadeIn border-4 border-black/5  ">
        <div className="grad-primary h-full  blow-animation rounded-[inherit] p-4 -z-10
        after:absolute after:-inset-1 after:hover:[animation-play-state:paused] after:[content:''] after:-z-10 after:blur-xs ">
            {children}
        </div> 
        </div>;
}

