export default function DropDown(){
    return(<div className="dropdown [&_>span]:hover:translate-y-0.5 relative ">DropdownMenu
        <span className="inline-block  p-1 text-center  transition-all duration-500  rotate-180">^</span>
            <ul className="text-black dropdown-content hidden z-30  ">
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