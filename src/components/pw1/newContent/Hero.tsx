import Link from "next/link";

export default function Hero(){
    return(
    <div className='text-xl first:text-blue-500 text-center p-8  flex flex-col gap-20' >
        <div className="*:p-4">
        <h1><strong>¡Descubre Oportunidades de Trabajo Remoto y Trabaja desde Cualquier Lugar!</strong></h1>
        <h2 className="max-w-screen-md mx-auto"><em>Conecta con empresas globales, mejora tu calidad de vida y trabaja en proyectos que te apasionan, sin tener que salir de casa.</em></h2>
        </div>
        <Link href="/works" className="btn btn-link btn-lg border-slate-500 border-4 bg-gradient-to-br from-blue-700 via-purple-600 to-purple-900 text-base-300 hover:shadow shadow-accent  hover:bg-purple-600 grow-0 self-center " >Empieza gratis</Link>
    </div>)
}