import { signinUser } from "@/lib/utils/session_actions"
import SignInButton from "./SignInButton"
type Props={
    register?:boolean
}

export default function FormLogin({register=false}:Props){


    

    const formAction=async (formData:FormData)=>{
        "use server"
        const entries=Object.fromEntries(formData.entries()) 
        const {name, password}=entries
        signinUser({_name:name.toString(),_password:password.toString()})
    }



return(
    <div className="mt-32 flex h-full [&_input]:ps-2 [&_input]:rounded [&_input]:mb-2 [&_input]:w-full [&_input:invalid]:text-red-600 [&_label::after]:[content:'*'] [&_label::after]:text-red-600" >
        <form action={formAction} className="animate-fadeIn bg-white-50 p-8 gap-x-2 gap-y-4 mx-auto max-w-xs min-w-60  shadow-lg bg-blue-100 " >
        <legend className="text-2xl col-span-2 text-center pb-4">{register?"Registro":"Inicio"} de Sesion</legend>
        <label title="Requerido" htmlFor="">Usuario</label> <input  required type="text" name="name" id="name" placeholder="Username" />
        <label title="Requerido"  htmlFor="">Contraseña</label> <input required minLength={8} type="password" name="password" id="password" placeholder="Password" />
        <span className="text-sm">La contraseña de be tener al menos 8 caracteres</span>
        <SignInButton/>
    </form>

    </div>
    )
}



