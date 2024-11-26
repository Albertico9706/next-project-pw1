import { Restaurant } from "@/lib/types"

export default function DataDb({data_json}:{data_json:Restaurant[]}){

    
    return(
    <div className='gap-x-10 flex-1'>
        {data_json.map((r)=>{ return <code  key={r.id}>{JSON.stringify(r)+"\n"}</code>})}
        </div>)
    }