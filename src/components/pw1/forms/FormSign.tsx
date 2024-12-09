import FormAuthBase from "./FormAuthBase";
import { formSignAction } from "@/lib/actions/server_actions";
export default function FormSign(){
    return(<FormAuthBase formActionParameter={formSignAction} sign/>)
}