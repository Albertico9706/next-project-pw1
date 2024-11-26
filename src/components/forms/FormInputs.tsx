import { InputsProps } from "@/lib/props"

type Props={
    inputs_props:InputsProps[]
}

export default function FormInput({inputs_props}:Props){
    return(
    <div>
        {inputs_props.map((i)=><input key={i.name} name={i.name} id={i.name} type={i.type||"text"} >{i.title}</input>)}
    </div>)
}