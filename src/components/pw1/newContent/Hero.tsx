import Link from "next/link";

export default function Hero(){
    return(
    <div className='text-xl first:text-blue-500 text-center p-8 ' >
        <h1><strong>¡Descubre Oportunidades de Trabajo Remoto y Trabaja desde Cualquier Lugar!</strong></h1>
        <h2>Conecta con empresas globales, mejora tu calidad de vida y trabaja en proyectos que te apasionan, sin tener que salir de casa.</h2>
        <Link href="/works" className="btn-link " >Explora ahora las ofertas de trabajo disponible</Link>
    </div>)
}