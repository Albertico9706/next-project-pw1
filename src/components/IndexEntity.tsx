type Props={
    api_url:string
}
export default async function IndexEntity({api_url}:Props){

    const index=async():Promise<[]>=>{
        const index_response= await fetch(api_url)
        const index_result= index_response.json()
        return index_result
    }
    const results=await index()
    return(<div className="p-4 col-start-2 row-start-2">
    
            {results.map? results.map((obj,index)=>{return <p key={index} className="p-2">{JSON.stringify(obj)}</p>}):<p>Error al recuperar los datos de la api {JSON.stringify(results)}</p>}

        
    </div>)
}