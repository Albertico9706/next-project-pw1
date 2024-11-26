interface Props{
    name?:string, 
    id?:string ,
    type?:string,
    placeholder?:string
    required?:boolean
    className?:string
}

export default function Input({name,id,type,placeholder,required=false,className}:Props){
    return(<input required={required} className= {`${className} ps-2 bg-slate-100 border-[0.1px] rounded border-slate-300`} name={name} id={id} type={type} placeholder={placeholder}  />)
}