export default function SideNav(){
    return(<nav className="shadow-lg [&_li]:p-1 [&_li:hover]:bg-blue-200/20 hover:[&_li]:transition-colors p-2 group relative "  >Icon
        <ul className="starting hidden  md:block group-hover:block group-hover:opacity-100 md:opacity-100 max-md:group-hover:absolute max-md:left-[100%] duration-1000 p-2
          max-md:top-0  max-md:rounded-lg ">
        <li>lorem</li>        
        <li>lorem</li>        
        <li>lorem</li>        
        <li>lorem</li>
        <li>List of options to perform with the notes or the possibles views and filters</li> 
        </ul>       
    </nav>)



}

//fix fist step when hover the group and dont apply the transition