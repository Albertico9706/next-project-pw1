import FormAuthBase from "./FormAuthBase";
import { formLoginAction } from "@/lib/actions/server_actions";
export default function FormLogin(){
    return(<FormAuthBase formActionParameter={formLoginAction}/>)
}