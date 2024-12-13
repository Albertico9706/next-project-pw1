import { FormRefProvider } from "@/components/pw1/context/Contexts"
import JobTable from "./adminTables/JobTable"

export const columns=["Id","Image","Compañía","Titulo","Nivel","Localización","Fecha"]
//See the nextjs documentation for improve the sync of the state betwen server and client with the managment of the routes
export default function Page(){
    return(
    <div className="container overflow-auto">
        <FormRefProvider>
        <JobTable/>
        <FilterSelect/>
        </FormRefProvider>
        </div>)
}

function FilterSelect(){
    return(
        <div className="join fixed top-16 z-20 right-1/2  group">
    <div className="  peer">Filter by</div>
    <SelectColum/>
</div>
    )
}


export function SelectColum(){

    return(
        <select defaultValue={1} name="" id="">
            <option value={1}>Filter</option>
        {columns.map((col,i)=>{
                return <option key={i}>{col}</option>
            })}
        </select>
    )
}
