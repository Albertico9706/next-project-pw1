import { FormRefProvider } from "@/components/pw1/context/Contexts"
import JobTable from "./adminTables/JobTable"

export default function Page(){
    return(<div>
        <FormRefProvider>
        <JobTable/>
        </FormRefProvider>
        
        </div>)
}