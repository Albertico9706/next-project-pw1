import { Metadata } from "next"
import Hero from "@/components/Hero"
import ResturantsSection from "@/components/restaurants/RestaurantsSection"
{/* <!-- API JOBICY -->
        <!-- https://jobicy.com/api/v2/remote-jobs?count=20&tag=python --> */}

export default async  function Restaurancy(){
    
    return (<div className="duration-1000 grid grid-cols-[minmax(40px,1fr)_8fr] md:grid-cols-[120px_1fr]  h-full" >
            <nav className="shadow-lg [&_li]:p-1 [&_li:hover]:bg-blue-200/20 [&_li:hover]:transition-colors p-2 group relative "  >Icon
                <ul className="starting hidden  md:block group-hover:block max-md:absolute max-md:left-[100%] duration-1000 p-2 opacity-0
                  max-md:top-0 max-md:group-hover:opacity-100 custom-transition max-md:rounded-lg ">
                <li>lorem</li>        
                <li>lorem</li>        
                <li>lorem</li>        
                <li>lorem</li>
                <li>List of options to perform with the notes or the possibles views and filters</li> 
                </ul>       
            </nav>
                <main className="p-2" >
                    <h2 className="text-center text-3xl font-bold font-sans  p-4 text-blue-400 italic">"Encuentra tu <em className="grad-primary bg-clip-text text-transparent">trabajo</em> remoto"</h2>
            
                <section className=" flex text-white p-4 gap-4 flex-col md:flex-row [&_>div]:animate-fadeIn [&_div]:mx-auto *:h-full [&_div]:grad-primary transition-all [&_>div]:relative  [&_>div:hover]:scale-105  [&_>div]:rounded-md [&_>div]:border-2 [&_>div]:border-black/20 [&_>div]:transition-transform [&_>div]:w-60 [&_>div_::after]:blur-xs ">
                    <div>
                        <div className=" after-blow rounded-[inherit]"><h3 className="p-4">Varias regiones incluyendo Europa , Estados Unidos y Latam entre otras</h3></div>
                    </div>
            
                    <div>
                        <div className=" after-blow  rounded-[inherit]"><h3 className="p-4">Filtra tu búsqueda por con los más de diez categorías disponibles</h3></div>
                        
                    </div>
                </section>
            
                <section className=" p-4">
                    <h3 className="text-2xl text-primary  ">Publica tus ofertas de trabajo</h3>
            
                    <p>
                        Explicación de como publicar ofertas de trabajo <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo debitis consectetur illum quas nihil id at quasi minus corporis. Veritatis quia voluptatibus illum et reiciendis molestiae consequatur pariatur vitae!
                    </p>
                </section>
                </main>
        </div>)
}

export const metadata:Metadata={
    title:"Restaurancy -Nextjs",
    description:"Curso de sobre ls fundamentos de Nextjs de Gonzalo Pozo",
    keywords:["restaurant","food","goncy","nextjs"]
}