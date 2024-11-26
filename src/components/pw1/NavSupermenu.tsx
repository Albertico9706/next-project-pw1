import DropDown from "./DropDown";

export default function NavSupermenu (){
    return(<nav className="supermenu group [&_li]:p-1 ">
        <span className="block md:hidden  ">Supermenu</span>
        <div className="hidden md:flex relative max-md:group-hover:flex-col group-hover:flex group-hover:absolute  ">
        <DropDown/>
        <DropDown/>
        </div>
         
    </nav>)
}