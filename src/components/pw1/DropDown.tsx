export default function DropDown(){
    return(<div className=" relative group/dropdown p-1 flex [&_li:hover]:bg-blue-600">DropdownMenu
        <span className="rotate-90 md:rotate-180 p-1 text-center  transition-all duration-500  md:group-hover/dropdown:translate-y-0.5 max-md:group-hover/dropdown:translate-x-0.5">^</span>
        <ul className="hidden bg-blue-400/30 border border-gray-300 rounded group-hover/dropdown:block absolute left-full  group-hover/dropdown:opacity-100 max-md:right-full p-2 w-full starting md:top-full">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
        </ul>
        </div>)
}