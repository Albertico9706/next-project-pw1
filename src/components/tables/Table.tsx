import { type ReactNode } from "react"
import ButtonsTable from "../buttons/ButtonsTable"

export  function Table({children}:{children:ReactNode}){
    return(
        <table className="" >
            <tbody>
            {children}
            </tbody>
              </table>
    )
}


export  function TableHeader({children}:{children:ReactNode}){
    return(<tr key="restaurants">
        {children}
    </tr>)
}

export  function Row({children,id}:{children:ReactNode,id:string}){
    return(
        <tr key={id} className="text-xs h-20 border border-black rounded place-content-center   overflow-hidden ">
            {children}
            <td><ButtonsTable id={id}/></td>
            </tr>)
}