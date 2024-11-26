
import { InputsProps } from "@/lib/props";


type Props={
    inputs_props:InputsProps[]
    action?:string
}

export default function FormGenInputs({inputs_props,action="http://localhost:3001/test"}:Props){
    return(
        <form className=" col-start-2 row-start-2 place-self-start flex flex-col gap-8 p-8 border-2 mx-auto mt-4 border-orange-400 rounded-lg max-w-screen-sm min-h-80 box"  method="POST" action={action} /* action={actionForm} */>
        <legend className="text-xl font-semibold">Nuevo Restaurant</legend>
        <div className="grid gap-4 grid-cols-[1fr_3fr]">
            <>
                {inputs_props.map((i)=> {return(<div key={i.name}> <label key={i.name} htmlFor={i.name}>{i.title}</label><input key={i.name} name={i.name} id={i.name} type={i.type||"text"} /></div>)} ) }
            </>
            <button /* onClick={(event)=>{event.preventDefault()}} */ className="rounded bg-green-600 col-span-2 px-4 py-1 mt-2">Crear</button>
        </div>
    </form>
    )
}