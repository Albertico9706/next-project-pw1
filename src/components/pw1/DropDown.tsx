import React from "react"
export default function DropDown({children,text}:{children:React.ReactNode,text:string}){
    return(<div className=" relative group/dropdown p-1 flex">{text}
        <span className="rotate-90 md:rotate-180 p-1 text-center  transition duration-500  md:group-hover/dropdown:translate-y-0.5 max-md:group-hover/dropdown:translate-x-0.5">^</span>
        <ul className="z-50 hidden border border-gray-300 rounded group-hover/dropdown:block absolute  group-hover/dropdown:opacity-100 max-md:left-full p-2 w-full starting md:top-full *:rounded hover:*:bg-blue-300 *:ps-1">
            {children}
        </ul>
        </div>)
}