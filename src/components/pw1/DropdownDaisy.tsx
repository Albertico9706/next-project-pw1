import Link from "next/link"

export default function DropdownDaisy(){
    return(<div className=" dropdown dropdown-arrow hover:dropdown-open relative content-center group border-b-2 border-transparent hover:border-blue-600 ">
        <div className="dropdown-title label label-text dark:text-white relative text-base-300 ">Menú <span className="pe-1 transition rotate-180 group-hover:translate-y-1  group-hover:border-blue-600">^</span></div>
        <div className="dropdown-content ">
        <Menu/>
        </div>
    </div>
    )
}

/* function Collapse(){
    return(<div className="collapse collapse-arrow hover:collapse-open relative">
        <div className="collapse-title w-full">Title</div>
        <div className="collapse-content w-full">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque pariatur ea at vitae consequatur excepturi maxime molestiae! Modi sed dolorem, quam qui cumque blanditiis fuga cum laborum quos voluptatem incidunt?</h2>

        </div>
    </div>)
} */

function Menu(){
    return(
        <ul className="bg-white-400/60 menu-sm w-auto self-center glass backdrop-blur-md menu mt-4 rounded ">
            {MENUS_LINKS.map(([path,title],i)=>{
                return <li key={i}><Link href={path}>{title}</Link></li>
            })}
        </ul>
    )
}

const MENUS_LINKS=[
["/works","Trabajos"],
["/admin","Administrador"]
]