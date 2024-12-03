import Link from "next/link";

export default function Hero({...props}){
    return(<div {...props}>
        <h1><strong>¡Descubre Oportunidades de Trabajo Remoto y Trabaja desde Cualquier Lugar!</strong></h1>
        <h2>Conecta con empresas globales, mejora tu calidad de vida y trabaja en proyectos que te apasionan, sin tener que salir de casa.</h2>
        <Link href="/works" className="btn-link " >Explora ahora las ofertas de trabajo disponible</Link>
    </div>)
}