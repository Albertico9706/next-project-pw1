import Input from "../ui/Input"
import ExtendedsInputsForRegister from "./ExtendedsInputsForRegister"


/*eslint-disable*/ 
export default function FormLogin({formAction,register=false}:{formAction:(formdata:FormData)=>Promise<void>,register?:boolean}){
/*eslint-enable*/

return(
    <form action={formAction} className="bg-white-50 p-8 gap-x-2 gap-y-4 mx-auto max-w-xs min-w-60 shadow-black sha shadow-lg">
        <legend className="text-2xl col-span-2 text-center pb-4">{register?"Registro":"Inicio"} de Sesion</legend>
        <label htmlFor="">Usuario</label> <Input className="mb-2 w-full bg-slate-200 rounded"   required type="text" name="username" id="username" />
        <label htmlFor="">Contraseña</label> <Input className="mb-2 w-full bg-slate-200 rounded" required type="password" name="password" id="password" />
        {register&& <ExtendedsInputsForRegister/>}
        <button className="w-full mt-5 col-span-2 bg-orange-500 p-2 rounded-lg">Enviar</button>
    </form>
    )
}