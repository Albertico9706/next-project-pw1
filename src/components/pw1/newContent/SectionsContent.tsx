import Link from "next/link"
import {ReactNode} from "react"


export default function SectionsContent(){
    return(
        <div className="block [&_p]:p-2  [&_h3]:text-4xl [&_h3]:text-primary [&_h3]:p-4 ">
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        </div>
    )
}

function SectionBase({children}:{children:ReactNode}){
    return(
    <div className="p-8 ">
        {children}
    </div>)
}

function CustomCollapse({children}:{children:ReactNode}){
    return(
        <div tabIndex={0} className="p-4 collapse collapse-arrow focus:collapse-open transition-colors hover:bg-slate-600">
            {children}
        </div>
    )
}

function Section1(){
    return(
    <SectionBase>
    <div>
        <h3>¿Por qué Trabajar de Forma Remota?</h3>
        <ul>
            <li><p><strong>Flexibilidad total</strong>: El trabajo remoto te permite gestionar tu tiempo de acuerdo a tus necesidades. </p></li><li><p><strong>Equilibrio entre vida personal y profesional</strong>: Olvídate del estrés de los traslados diarios. Trabaja desde la comodidad de tu hogar o cualquier lugar que elijas.</p></li>
            <li><p><strong>Acceso a oportunidades globales</strong>: Conéctate con empresas de todo el mundo y expande tus horizontes profesionales sin fronteras geográficas.</p></li>
            <li><p><strong>Reducción de gastos</strong>: Ahorra tiempo y dinero que normalmente gastarías en transporte y otras actividades relacionadas con una oficina física.</p></li>
        </ul>
    </div>
    </SectionBase>
    )
}

function Section2(){
    return(

    <SectionBase>
        <h3>Beneficios para Ti</h3>
    <ul>
        <li><p><strong>Autonomía</strong>: Gestiona tu propio horario y establece el ritmo que mejor se adapte a tu vida.</p></li>
        <li><p><strong>Trabajo sin fronteras</strong>: Colabora con equipos internacionales y participa en proyectos globales.</p></li>
        <li><p><strong>Diversidad de opciones</strong>: Desde tecnología hasta marketing, diseño, atención al cliente y más, tenemos oportunidades en diversas áreas.</p></li>
        <li><p><strong>Mejora continua</strong>: Accede a recursos de formación y crecimiento profesional para estar siempre a la vanguardia.</p></li>
    </ul>
        </SectionBase>
)
}

function Section3(){
    return(
        <SectionBase>
            <h3>¿Cómo Funciona?</h3>
        <ol>
            <li><p><strong>Regístrate</strong>: Únete a nuestra plataforma con solo unos pocos pasos. ¡Es fácil y rápido!</p></li>
            <li><p><strong>Explora las ofertas</strong>: Navega por una variedad de trabajos remotos en distintas industrias.</p></li>
            <li><p><strong>Postula</strong>: Encuentra la oportunidad que más te entusiasme y postúlate para trabajos que se adapten a tus habilidades.</p></li>
            <li><p><strong>Conecta con empresas</strong>: Recibe entrevistas y propuestas directas de empresas que buscan tu perfil.</p></li>
        </ol>
        </SectionBase>
    )
}

function Section4(){
    return(
        <SectionBase>
            <h3>Testimonios de Trabajadores Remotos</h3>
            <p><em>*"Trabajar desde casa me ha permitido disfrutar de más tiempo con mi familia y dedicarme a proyectos personales, mientras sigo creciendo profesionalmente."</em>
            <span>Laura, Diseñadora Gráfica Remota</span></p>
            <p><em className="">*"Nunca pensé que podría trabajar para una empresa internacional, pero gracias a esta plataforma, estoy haciendo lo que me apasiona desde cualquier parte del mundo."</em>  
            <span>Carlos, Desarrollador Web</span></p>
        </SectionBase>
    )
}
function Section5(){
    return(
        <SectionBase>
            *Muestra logos de empresas destacadas que ofrecen trabajos remotos a través de tu plataforma, como Google, Microsoft, GitHub, etc.*
        </SectionBase>
    )
}
function Section6(){
    return(
        <SectionBase>
        <div className=" flex flex-col items-center p-4 gap-2">
        <span className="text-secondary text-4xl">Únete Ahora</span>
        <strong>¿Estás listo para dar el siguiente paso en tu carrera?  </strong>
        <p>No esperes más y empieza a trabajar desde cualquier lugar del mundo.</p>  
        <strong>¡Regístrate ahora y accede a las mejores oportunidades remotas!</strong>

        <Link href="signin" className="btn btn-primary mt-4">Registrate Gratis</Link>
        </div>
        </SectionBase>
    )
} 
function Section7(){
    return(
        <SectionBase>
            <h3>Preguntas Frecuentes</h3>
            <CustomCollapse>
            <h4 className="collapse-title">¿Cómo sé si un trabajo remoto es legítimo?  </h4>
            <p className="collapse-content">Nos aseguramos de que todas las ofertas en nuestra plataforma sean verificadas y provengan de empresas de confianza.</p>
            </CustomCollapse>
            <CustomCollapse>
            <h4 className="collapse-title">¿Necesito experiencia previa?  </h4>
            <p className="collapse-content">Hay oportunidades para profesionales con distintos niveles de experiencia, desde principiantes hasta expertos. Encuentra el trabajo que mejor se adapte a ti.</p>
            </CustomCollapse>
            <CustomCollapse>
            <h4 className="collapse-title">¿Qué herramientas necesito para trabajar de forma remota?  </h4>
            <p className="collapse-content">Generalmente, necesitarás una buena conexión a Internet, herramientas de comunicación y plataformas de gestión de proyectos, pero cada oferta puede tener requisitos específicos.</p>
            </CustomCollapse>
        </SectionBase>
    )
}




