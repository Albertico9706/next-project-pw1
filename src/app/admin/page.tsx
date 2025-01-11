import { FormRefProvider } from "@/components/pw1/context/Contexts"
import JobTable from "./adminTables/JobTable"
/* import { SelectColum } from "./adminTables/JobTable" */


//Use the sync of the state betwen server and client with the managment of the routes
export default function Page(){
    return(
    <div className="overflow-auto">
        <FormRefProvider>
        <JobTable/>
        {/* <FilterSelect/> */}
        </FormRefProvider>
        </div>)
}





