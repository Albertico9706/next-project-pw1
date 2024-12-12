import { actionCreateJob } from "@/lib/actions/server_actions"
import { useFormState } from "react-dom"
import toast from "react-hot-toast"

export function FullPageForm(){
    const[state,formAction,isPending]=useFormState(actionCreateJob ,{success:false})
    const {error,success}=state
    if(success){
        toast("Nueva oferta añadida",{id:"success"})
    }
return(
<form action={formAction} className="*:w-full max-w-fit  flex flex-col items-start [&_input]:ps-2 [&_*:has(+required)]:text-red-700  [&_label]:label
        md:grid md:grid-cols-2">
            <label  htmlFor="">Titulo</label><input  required name="jobTitle" id="jobTitle" type="text" />
            <label htmlFor="">Localizacion</label><input  required name="jobGeo" id="jobGeo" type="text" />
            <label htmlFor="">Experiencia</label><input  required name="jobLevel" id="jobLevel" type="text" />
            <label htmlFor="">Nombre de la Compañia</label><input  required name="companyName" id="companyName" type="text" />
            <label htmlFor="">Logo de la Compañia</label><input  className="input-primary"  name="companyLogo" id="companyLogo" type="url" />
            <label htmlFor="">Moneda de Pago</label>
            <select name="salaryCurrency" required id="salaryCurrency">
                <option value="">Moneda de pago</option>
                <option value="">USD</option><option value="">MLC</option><option value="">GBP</option><option value="">CAD</option>
            </select>
            <label htmlFor="">Descripción</label><textarea  name="jobDescription" id="jobDescription"></textarea>
            <button type="submit"className="btn btn-accent mt-8 col-span-2">{isPending?<label >Crear</label> :<label><span className="loading loading-spinner"></span>Creando</label>   }  </button>
        </form>

)

}