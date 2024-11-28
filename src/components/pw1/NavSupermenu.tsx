import DropDown from "./DropDown";

export default function NavSupermenu (){
    return(<nav className="[&_li]:p-1 group/super hover:*:bg-black/5  ">
        <span className="block  md:hidden [&_span]:hover:rotate-90 p-1  ">Supermenu</span>
        <div className="hidden md:flex relative max-md:group-hover/super:flex-col max-md:group-hover/super:flex max-md:group-hover/super:absolute ">
        <DropDown text="Menu1">
		    <li><a href="/queenproblem">Problema de la reina</a></li>
			<li>Quia!</li>
			<li>Maxime!</li>
			<li>Nostrum.</li>
			<li>Vel!</li>
        </DropDown>
            
        <DropDown text="Menu2">
            <li>Lorem.</li>
            <li>Officia!</li>
            <li>Porro.</li>
            <li>Quam?</li>
            <li>Repudiandae.</li>
        </DropDown>
            
        </div>
         
    </nav>)
}