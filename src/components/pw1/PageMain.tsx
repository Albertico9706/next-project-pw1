import Lorem from "./Lorem";
import SectionCard from "./SectionCard";

export default function PageMain(){
    return(<main className="p-2  [&_>section>p]:p-4 w-full overflow-hidden " >
        <h1 className="my-32 text-center text-5xl font-bold font-sans w-full  text-blue-400 italic">"Encuentra tu <em className="grad-primary bg-clip-text text-transparent">trabajo</em> remoto"</h1>

        <SectionCard/>
    <section className="">
        <h3 className="text-2xl">Publica tus ofertas de trabajo</h3>

        <p>
            Explicación de como publicar ofertas de trabajo <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo debitis consectetur illum quas nihil id at quasi minus corporis. Veritatis quia voluptatibus illum et reiciendis molestiae consequatur pariatur vitae!
        </p>
    </section>
    <Lorem/>
    </main>)

    
}