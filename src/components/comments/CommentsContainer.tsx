import ButtonToggleSee from "../buttons/ButtonToggleSee";
import CommentSender from "./CommentSender";
import { serveCommentsRestaurantsById } from "@/lib/serverActions/serverData";
//DID
//- Arreglar el manejo de estados para la muestra de comentarios // ----------------------
//- Arregla la animacion para que no de saltos entre la muestra o no de los comentarios// -------------------
//TODO
//-I implementar el storage de los comentarios online con outterance en el marketplace de github +++++++++++++++++
//-G Hacer las cajas de los comentarios del mismo tamaño
//-B Guardar toda la informacion de los comentarios en backend
//-S Buscar informacion sobre flex

export default async function CommentsContainer({rest_id}:{rest_id:string}){
    
    const rest_reviews=await serveCommentsRestaurantsById(rest_id)
    //En el diseño de la entrada de los comentarios juntar la entrada y el boton para en entra los comentario del boton de comentarios    
    //usar los tamaños por 
    return (
            <section  className={`flex flex-col  container gap-8`}>
                <div className="flex place-self-center gap-8  justify-items-start">
                    <CommentSender rest_id={rest_id}/>
                </div>
                <ButtonToggleSee rest_reviews={rest_reviews} /> 
            </section>
    )
}