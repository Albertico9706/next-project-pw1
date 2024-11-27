import DropDown from "./DropDown";

export default function NavSupermenu (){
    return(<nav className="[&_li]:p-1 group/super ">
        <span className="block  md:hidden [&_span]:hover:rotate-90 bg-black/20 p-1  ">Supermenu</span>
        <div className="bg-blue-500/40 hidden md:flex relative max-md:group-hover/super:flex-col max-md:group-hover/super:flex max-md:group-hover/super:absolute ">
        <DropDown/>
        <DropDown/>
        </div>
         
    </nav>)
}