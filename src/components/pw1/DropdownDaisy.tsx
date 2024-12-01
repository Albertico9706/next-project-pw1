export default function DropdownDaisy(){
    return(<div className="dropdown dropdown-arrow hover:dropdown-open relative content-center">
        <div className="dropdown-title ">Title</div>
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
        <ul className="bg-white-400/60 menu-sm w-auto self-center glass backdrop-blur-md menu ">
            <li><a href="users">Usuarios.</a></li>
            <li><a href="works">Trabajos</a></li>
            <li><a href="">Quas.</a></li>
            <li><a href="">Soluta.</a></li>
            <li><a href="">Obcaecati?</a></li>
            <li><a href="">Problema de la reina.</a></li>
        </ul>
    )
}