import Lorem from "./Lorem";
import SectionsContent from "./newContent/SectionsContent";
import RadialProgres from "./RadialProgres";
import SectionCard from "./SectionCard";

export default function PageMain(){
    return(<main className="[&_>section>p]:p-4 w-full overflow-hidden [h2,h3]:p-4 " >
        <h1 className="my-32 text-center text-5xl font-bold font-sans w-full  text-blue-400 italic">Encuentra tu <em className="grad-primary bg-clip-text text-transparent">trabajo</em> remoto</h1>

        <SectionCard/>
    <section >
        <h3 className="text-2xl">Publica tus ofertas de trabajo</h3>

        <p>
            Explicación de como publicar ofertas de trabajo <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo debitis consectetur illum quas nihil id at quasi minus corporis. Veritatis quia voluptatibus illum et reiciendis molestiae consequatur pariatur vitae!
        </p>
    </section>
    <Lorem/>
    <RadialProgres />
    <SectionsContent/>
    </main>)

    
}