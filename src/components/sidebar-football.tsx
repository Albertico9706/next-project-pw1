/* import {  NavLink } from "./nav-links"
import NavLinks from "./nav-links" */
import Link from "next/link"


export default function SideBar(){
    return(
        <nav className="h-screen bg-blue-700 [display:grid] w-40 p-4 " >
            <div>
            <h2 className="mb-6 text-green-600 font-extrabold text-3xl">Football Api Proyect</h2>
            <ul className="flex flex-col gap-2 ">
                <Link className="block rounded p-2 bg-blue-950" href="/portfolio/football/">Home</Link>
                <Link className="block rounded p-2 bg-blue-950" href="/portfolio/football/ligas">Ligas</Link>
                <Link className="block rounded p-2 bg-blue-950" href="/portfolio/football/paises">Paises</Link>
            </ul>
            </div>
            <Link className=" max-h-7 " href="/"><img className="w-24 h-6"  src="/vercel.svg" alt="Logo de Vercel" /></Link>
        </nav>

    )
}



